"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/context/AdminContext";
import Link from "next/link";

export default function AdminDashboard() {
  const {
    isAuthenticated,
    loading,
    logout,
    changePassword,
    personalInfo,
    updatePersonalInfo,
    researchInterests,
    addResearchProject,
    deleteResearchProject,
    publications,
    addPublication,
    deletePublication,
    experience,
    addExperience,
    deleteExperience,
    resetToDefaults,
    exportData
  } = useAdmin();

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [toast, setToast] = useState("");

  // Form states for adding/editing
  const [newProject, setNewProject] = useState({ title: "", description: "", icon: "memory", color: "primary", tags: "", large: false });
  const [newPub, setNewPub] = useState({ title: "", authors: "", venue: "", publisher: "", year: "2025", link: "" });
  const [newExp, setNewExp] = useState({ role: "", company: "", period: "", description: "" });

  // Password change state
  const [passForm, setPassForm] = useState({ current: "", newPass: "", confirm: "" });
  const [passError, setPassError] = useState("");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-primary">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined animate-spin text-3xl">progress_activity</span>
          <span>Loading Admin Panel...</span>
        </div>
      </div>
    );
  }

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // Image Upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo({ profileImage: reader.result as string });
        showToast("Profile image updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-primary text-on-primary px-6 py-3 rounded-lg shadow-xl font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined">check_circle</span>
          {toast}
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-outline-variant/30 bg-surface-low/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span>
            <span className="font-[var(--font-display)] font-bold text-lg">Portfolio Control Center</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 bg-surface-highest hover:bg-surface-container rounded-lg text-xs font-bold text-on-surface flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              View Live Site
            </Link>
            <button
              onClick={() => {
                logout();
                router.push("/admin/login");
              }}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-2">
          {[
            { id: "overview", label: "Dashboard Overview", icon: "dashboard" },
            { id: "profile", label: "Profile & Image Upload", icon: "person" },
            { id: "projects", label: "Research Projects", icon: "folder" },
            { id: "publications", label: "Publications", icon: "menu_book" },
            { id: "experience", label: "Experience & Education", icon: "work" },
            { id: "settings", label: "Backup & Security", icon: "settings" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20 font-bold"
                  : "text-on-surface-variant hover:bg-surface-highest hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-outline-variant/30">
                <h2 className="text-xl font-bold font-[var(--font-display)] mb-2">Welcome back, {personalInfo.name}!</h2>
                <p className="text-on-surface-variant text-sm">
                  Manage your portfolio content, research projects, publications, profile image, and credentials right from this control panel. Changes reflect instantly on your live landing page.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-2xl border border-outline-variant/30">
                  <div className="text-3xl font-bold text-primary mb-1">{researchInterests.length}</div>
                  <div className="text-xs text-on-surface-variant font-medium">Research Projects</div>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-outline-variant/30">
                  <div className="text-3xl font-bold text-secondary mb-1">{publications.length}</div>
                  <div className="text-xs text-on-surface-variant font-medium">Publications</div>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-outline-variant/30">
                  <div className="text-3xl font-bold text-tertiary mb-1">{experience.length}</div>
                  <div className="text-xs text-on-surface-variant font-medium">Experience Entries</div>
                </div>
              </div>
            </div>
          )}

          {/* Profile & Image Upload Tab */}
          {activeTab === "profile" && (
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-6">
              <h2 className="text-xl font-bold font-[var(--font-display)]">Profile Information & Image Upload</h2>

              {/* Profile Picture Upload Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-surface-highest/30 rounded-xl border border-outline-variant/20">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-surface-highest relative border-2 border-primary flex items-center justify-center">
                  {personalInfo.profileImage ? (
                    <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-primary">WA</span>
                  )}
                </div>
                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-sm">Profile Picture</h3>
                  <p className="text-xs text-on-surface-variant">Upload a professional photo (PNG, JPG). It will be saved and displayed instantly across your portfolio.</p>
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg text-xs font-bold cursor-pointer hover:bg-primary-container transition-all">
                    <span className="material-symbols-outlined text-sm">upload</span>
                    Upload New Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Text Info Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Full Name</label>
                  <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => updatePersonalInfo({ name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Professional Title</label>
                  <input
                    type="text"
                    value={personalInfo.title}
                    onChange={(e) => updatePersonalInfo({ title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Subtitle / Headline</label>
                  <input
                    type="text"
                    value={personalInfo.subtitle}
                    onChange={(e) => updatePersonalInfo({ subtitle: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Email</label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Phone</label>
                  <input
                    type="text"
                    value={personalInfo.phone}
                    onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Location</label>
                  <input
                    type="text"
                    value={personalInfo.location}
                    onChange={(e) => updatePersonalInfo({ location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={personalInfo.linkedin}
                    onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Biography</label>
                  <textarea
                    rows={4}
                    value={personalInfo.bio}
                    onChange={(e) => updatePersonalInfo({ bio: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Vision Statement</label>
                  <textarea
                    rows={3}
                    value={personalInfo.vision}
                    onChange={(e) => updatePersonalInfo({ vision: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                </div>
              </div>

              <button
                onClick={() => showToast("Profile changes saved successfully!")}
                className="px-6 py-3 bg-primary text-on-primary rounded-lg text-sm font-bold hover:bg-primary-container transition-all"
              >
                Save Profile Changes
              </button>
            </div>
          )}

          {/* Research Projects Tab */}
          {activeTab === "projects" && (
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-6">
              <h2 className="text-xl font-bold font-[var(--font-display)]">Research Projects & Portfolio Items</h2>

              {/* Add Project Form */}
              <div className="p-6 bg-surface-highest/30 rounded-xl border border-outline-variant/20 space-y-4">
                <h3 className="font-bold text-sm text-primary">Add New Project / Research Interest</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Material Icon (e.g. security, memory, hub)"
                    value={newProject.icon}
                    onChange={(e) => setNewProject({ ...newProject, icon: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Tags (comma separated, e.g. Routing, Optimization)"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <textarea
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                    rows={3}
                  />
                </div>
                <button
                  onClick={() => {
                    if (!newProject.title) return showToast("Title is required");
                    addResearchProject({
                      ...newProject,
                      tags: newProject.tags ? newProject.tags.split(",").map((t: string) => t.trim()) : []
                    });
                    setNewProject({ title: "", description: "", icon: "memory", color: "primary", tags: "", large: false });
                    showToast("Research project added successfully!");
                  }}
                  className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary-container transition-all"
                >
                  Add Project
                </button>
              </div>

              {/* Existing Projects List */}
              <div className="space-y-4">
                <h3 className="font-bold text-sm">Existing Projects ({researchInterests.length})</h3>
                {researchInterests.map((item: any, index: number) => (
                  <div key={index} className="p-4 bg-surface-highest/40 border border-outline-variant/20 rounded-xl flex justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1 line-clamp-1">{item.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        deleteResearchProject(index);
                        showToast("Project deleted.");
                      }}
                      className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === "publications" && (
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-6">
              <h2 className="text-xl font-bold font-[var(--font-display)]">Academic Publications</h2>

              {/* Add Publication Form */}
              <div className="p-6 bg-surface-highest/30 rounded-xl border border-outline-variant/20 space-y-4">
                <h3 className="font-bold text-sm text-primary">Add New Publication</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Paper Title"
                    value={newPub.title}
                    onChange={(e) => setNewPub({ ...newPub, title: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Authors (e.g. Waqas Ali, Ziaul Haq Abbas)"
                    value={newPub.authors}
                    onChange={(e) => setNewPub({ ...newPub, authors: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Year (e.g. 2025)"
                    value={newPub.year}
                    onChange={(e) => setNewPub({ ...newPub, year: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Publisher / Venue (e.g. IEEE FIT · 2019)"
                    value={newPub.publisher}
                    onChange={(e) => setNewPub({ ...newPub, publisher: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Link URL (e.g. https://ieeexplore...)"
                    value={newPub.link}
                    onChange={(e) => setNewPub({ ...newPub, link: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <textarea
                    placeholder="Venue / Conference Details"
                    value={newPub.venue}
                    onChange={(e) => setNewPub({ ...newPub, venue: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                    rows={2}
                  />
                </div>
                <button
                  onClick={() => {
                    if (!newPub.title) return showToast("Title is required");
                    addPublication(newPub);
                    setNewPub({ title: "", authors: "", venue: "", publisher: "", year: "2025", link: "" });
                    showToast("Publication added successfully!");
                  }}
                  className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary-container transition-all"
                >
                  Add Publication
                </button>
              </div>

              {/* Publications List */}
              <div className="space-y-4">
                <h3 className="font-bold text-sm">Existing Publications ({publications.length})</h3>
                {publications.map((pub: any, index: number) => (
                  <div key={index} className="p-4 bg-surface-highest/40 border border-outline-variant/20 rounded-xl flex justify-between items-center gap-4">
                    <div>
                      <span className="text-secondary text-xs font-bold">{pub.publisher}</span>
                      <h4 className="font-bold text-sm mt-0.5">{pub.title}</h4>
                      <p className="text-xs text-on-surface-variant mt-1">{pub.authors}</p>
                    </div>
                    <button
                      onClick={() => {
                        deletePublication(index);
                        showToast("Publication deleted.");
                      }}
                      className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience & Education Tab */}
          {activeTab === "experience" && (
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-6">
              <h2 className="text-xl font-bold font-[var(--font-display)]">Professional Experience</h2>

              {/* Add Experience Form */}
              <div className="p-6 bg-surface-highest/30 rounded-xl border border-outline-variant/20 space-y-4">
                <h3 className="font-bold text-sm text-primary">Add Work Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Role (e.g. Lecturer)"
                    value={newExp.role}
                    onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Company / Institution"
                    value={newExp.company}
                    onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                    className="px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <input
                    type="text"
                    placeholder="Period (e.g. June 2019 – June 2020)"
                    value={newExp.period}
                    onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                  />
                  <textarea
                    placeholder="Description"
                    value={newExp.description}
                    onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                    className="md:col-span-2 px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                    rows={2}
                  />
                </div>
                <button
                  onClick={() => {
                    if (!newExp.role) return showToast("Role is required");
                    addExperience(newExp);
                    setNewExp({ role: "", company: "", period: "", description: "" });
                    showToast("Experience added successfully!");
                  }}
                  className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary-container transition-all"
                >
                  Add Experience
                </button>
              </div>

              {/* Experience List */}
              <div className="space-y-4">
                <h3 className="font-bold text-sm">Existing Experience ({experience.length})</h3>
                {experience.map((exp: any, index: number) => (
                  <div key={index} className="p-4 bg-surface-highest/40 border border-outline-variant/20 rounded-xl flex justify-between items-center gap-4">
                    <div>
                      <span className="text-secondary text-xs font-bold">{exp.period}</span>
                      <h4 className="font-bold text-sm mt-0.5">{exp.role} at {exp.company}</h4>
                      <p className="text-xs text-on-surface-variant mt-1">{exp.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        deleteExperience(index);
                        showToast("Experience deleted.");
                      }}
                      className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings & Backup Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* Change Password */}
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-4">
                <h2 className="text-xl font-bold font-[var(--font-display)]">Change Admin Password</h2>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">New Password</label>
                    <input
                      type="password"
                      value={passForm.newPass}
                      onChange={(e) => setPassForm({ ...passForm, newPass: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      value={passForm.confirm}
                      onChange={(e) => setPassForm({ ...passForm, confirm: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-sm text-on-surface"
                    />
                  </div>
                  {passError && <p className="text-red-400 text-xs">{passError}</p>}
                  <button
                    onClick={() => {
                      if (!passForm.newPass) return setPassError("Password cannot be empty");
                      if (passForm.newPass !== passForm.confirm) return setPassError("Passwords do not match");
                      changePassword(passForm.newPass);
                      setPassError("");
                      setPassForm({ current: "", newPass: "", confirm: "" });
                      showToast("Password updated successfully!");
                    }}
                    className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary-container transition-all"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Data Export / Import / Reset */}
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 space-y-4">
                <h2 className="text-xl font-bold font-[var(--font-display)]">Data Backup & Reset</h2>
                <p className="text-xs text-on-surface-variant">Export your portfolio data as JSON, import a backup, or reset everything to default template data.</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={exportData}
                    className="px-5 py-2.5 bg-surface-highest hover:bg-surface-container border border-outline-variant/30 text-on-surface rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export JSON Backup
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to reset all portfolio data to defaults?")) {
                        resetToDefaults();
                        showToast("Reset to defaults successfully!");
                      }
                    }}
                    className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">restart_alt</span>
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
