import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PROFILE_IMAGE = path.join(PUBLIC_DIR, 'profile.png');
const OG_IMAGE = path.join(PUBLIC_DIR, 'og-image.png');
const APPLE_ICON = path.join(PUBLIC_DIR, 'apple-icon.png');
const FAVICON = path.join(PUBLIC_DIR, 'icon.png');

async function generateImages() {
  try {
    if (!fs.existsSync(PROFILE_IMAGE)) {
      console.error('Profile image not found at', PROFILE_IMAGE);
      process.exit(1);
    }

    console.log('Generating OpenGraph thumbnail...');
    
    // Create an OG image (1200x630)
    // We'll create a nice background and overlay the profile picture
    const width = 1200;
    const height = 630;
    
    // Create a dark background with some styling
    const svgBackground = `
      <svg width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="#0a0a0a" />
        <rect width="100%" height="100%" fill="url(#grad)" opacity="0.4" />
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#0a0a0a" stop-opacity="1" />
          </radialGradient>
        </defs>
        
        <text x="600" y="280" font-family="system-ui, sans-serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">Waqas Ali</text>
        <text x="600" y="360" font-family="system-ui, sans-serif" font-size="32" font-weight="normal" fill="#9ca3af" text-anchor="middle">Cybersecurity Researcher &amp; AI Specialist</text>
        
        <!-- Add a circle for the profile picture to sit in -->
        <circle cx="200" cy="315" r="130" fill="#1e1b4b" stroke="#3b82f6" stroke-width="4" opacity="0.5"/>
      </svg>
    `;

    // Resize the profile picture to be round
    const profileBuffer = await sharp(PROFILE_IMAGE)
      .resize(240, 240, { fit: 'cover' })
      .toBuffer();
      
    // Create the final OG image by compositing the background and profile image
    await sharp(Buffer.from(svgBackground))
      .composite([
        { input: profileBuffer, left: 80, top: 195 }
      ])
      .png()
      .toFile(OG_IMAGE);

    console.log(`Created OpenGraph image at ${OG_IMAGE}`);
    
    // Generate favicons as well since they often go together
    await sharp(PROFILE_IMAGE)
      .resize(512, 512, { fit: 'cover' })
      .png()
      .toFile(APPLE_ICON);
    console.log(`Created Apple Icon at ${APPLE_ICON}`);
    
    await sharp(PROFILE_IMAGE)
      .resize(192, 192, { fit: 'cover' })
      .png()
      .toFile(FAVICON);
    console.log(`Created Favicon at ${FAVICON}`);
    
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateImages();
