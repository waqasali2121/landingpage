"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  personalInfo as initialPersonalInfo,
  researchInterests as initialResearchInterests,
  education as initialEducation,
  experience as initialExperience,
  publications as initialPublications,
  skills as initialSkills,
  awards as initialAwards
} from "@/data/portfolioData";

export const THEME_PALETTES: Record<string, { name: string; primary: string; secondary: string; container: string }> = {
  cyberpunk: { name: "Cyberpunk Neon", primary: "#adc6ff", secondary: "#4cd7f6", container: "#4d8eff" },
  emerald: { name: "Emerald Tech", primary: "#34d399", secondary: "#2dd4bf", container: "#059669" },
  indigo: { name: "Royal Indigo", primary: "#a78bfa", secondary: "#f472b6", container: "#8b5cf6" },
  amber: { name: "Sunset Amber", primary: "#fbbf24", secondary: "#fb923c", container: "#f59e0b" },
  slate: { name: "Corporate Slate", primary: "#38bdf8", secondary: "#818cf8", container: "#0ea5e9" },
  crimson: { name: "Crimson Eclipse", primary: "#fb7185", secondary: "#f43f5e", container: "#e11d48" },
  violet: { name: "Neon Violet", primary: "#c084fc", secondary: "#e879f9", container: "#a855f7" },
  cyan: { name: "Quantum Cyan", primary: "#22d3ee", secondary: "#38bdf8", container: "#0891b2" },
  teal: { name: "Ocean Teal", primary: "#2dd4bf", secondary: "#34d399", container: "#0d9488" },
  rose: { name: "Rose Gold", primary: "#fda4af", secondary: "#fbcfe8", container: "#f43f5e" }
};

interface AdminContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (newPassword: string) => void;
  personalInfo: any;
  updatePersonalInfo: (updated: any) => void;
  researchInterests: any[];
  addResearchProject: (project: any) => void;
  updateResearchProject: (index: number, project: any) => void;
  deleteResearchProject: (index: number) => void;
  publications: any[];
  addPublication: (pub: any) => void;
  updatePublication: (index: number, pub: any) => void;
  deletePublication: (index: number) => void;
  experience: any[];
  addExperience: (exp: any) => void;
  updateExperience: (index: number, exp: any) => void;
  deleteExperience: (index: number) => void;
  education: any[];
  skills: any;
  awards: any[];
  currentTheme: string;
  setTheme: (themeKey: string) => void;
  resetToDefaults: () => void;
  exportData: () => void;
  importData: (jsonString: string) => boolean;
}

const AdminContext = createContext<AdminContextType | null>(null);

const STORAGE_KEY = "waqas_portfolio_admin_data_v3";
const AUTH_KEY = "waqas_portfolio_is_auth";
const PASSWORD_KEY = "waqas_portfolio_admin_password";
const THEME_KEY = "waqas_portfolio_theme";

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [researchInterests, setResearchInterests] = useState(initialResearchInterests);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);
  const [publications, setPublications] = useState(initialPublications);
  const [skills, setSkills] = useState(initialSkills);
  const [awards, setAwards] = useState(initialAwards);
  const [currentTheme, setCurrentTheme] = useState("cyberpunk");
  const [loading, setLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const auth = localStorage.getItem(AUTH_KEY) === "true";
      setIsAuthenticated(auth);

      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme && THEME_PALETTES[savedTheme]) {
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
      }

      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
        if (parsed.researchInterests) setResearchInterests(parsed.researchInterests);
        if (parsed.education) setEducation(parsed.education);
        if (parsed.experience) setExperience(parsed.experience);
        if (parsed.publications) setPublications(parsed.publications);
        if (parsed.skills) setSkills(parsed.skills);
        if (parsed.awards) setAwards(parsed.awards);
        if (parsed.currentTheme) {
          setCurrentTheme(parsed.currentTheme);
          applyTheme(parsed.currentTheme);
        }
      }
    } catch (e) {
      console.error("Failed to load admin state from localStorage", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const applyTheme = (themeKey: string) => {
    const palette = THEME_PALETTES[themeKey];
    if (!palette) return;
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--color-primary", palette.primary);
      root.style.setProperty("--color-secondary", palette.secondary);
      root.style.setProperty("--color-primary-container", palette.container);
      root.style.setProperty("--color-primary-glow", `${palette.primary}33`);
    }
  };

  const setTheme = (themeKey: string) => {
    if (THEME_PALETTES[themeKey]) {
      setCurrentTheme(themeKey);
      applyTheme(themeKey);
      localStorage.setItem(THEME_KEY, themeKey);
      saveData({ currentTheme: themeKey });
    }
  };

  // Save changes to localStorage
  const saveData = (newData: any) => {
    try {
      const current = {
        personalInfo,
        researchInterests,
        education,
        experience,
        publications,
        skills,
        awards,
        currentTheme,
        ...newData
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.error("Failed to save data", e);
    }
  };

  const login = (password: string): boolean => {
    const adminPass = localStorage.getItem(PASSWORD_KEY) || "admin123";
    if (password === adminPass) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const changePassword = (newPassword: string) => {
    localStorage.setItem(PASSWORD_KEY, newPassword);
  };

  // --- Update Functions ---
  const updatePersonalInfo = (updated: any) => {
    const next = { ...personalInfo, ...updated };
    setPersonalInfo(next);
    saveData({ personalInfo: next });
  };

  // Research Projects
  const addResearchProject = (project: any) => {
    const next = [project, ...researchInterests];
    setResearchInterests(next);
    saveData({ researchInterests: next });
  };

  const updateResearchProject = (index: number, project: any) => {
    const next = [...researchInterests];
    next[index] = project;
    setResearchInterests(next);
    saveData({ researchInterests: next });
  };

  const deleteResearchProject = (index: number) => {
    const next = researchInterests.filter((_, i) => i !== index);
    setResearchInterests(next);
    saveData({ researchInterests: next });
  };

  // Publications
  const addPublication = (pub: any) => {
    const next = [{ id: Date.now(), ...pub }, ...publications];
    setPublications(next);
    saveData({ publications: next });
  };

  const updatePublication = (index: number, pub: any) => {
    const next = [...publications];
    next[index] = pub;
    setPublications(next);
    saveData({ publications: next });
  };

  const deletePublication = (index: number) => {
    const next = publications.filter((_, i) => i !== index);
    setPublications(next);
    saveData({ publications: next });
  };

  // Experience
  const addExperience = (exp: any) => {
    const next = [{ id: Date.now(), ...exp }, ...experience];
    setExperience(next);
    saveData({ experience: next });
  };

  const updateExperience = (index: number, exp: any) => {
    const next = [...experience];
    next[index] = exp;
    setExperience(next);
    saveData({ experience: next });
  };

  const deleteExperience = (index: number) => {
    const next = experience.filter((_, i) => i !== index);
    setExperience(next);
    saveData({ experience: next });
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setPersonalInfo(initialPersonalInfo);
    setResearchInterests(initialResearchInterests);
    setEducation(initialEducation);
    setExperience(initialExperience);
    setPublications(initialPublications);
    setSkills(initialSkills);
    setAwards(initialAwards);
    setCurrentTheme("cyberpunk");
    applyTheme("cyberpunk");
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(THEME_KEY);
  };

  const exportData = () => {
    const data = {
      personalInfo,
      researchInterests,
      education,
      experience,
      publications,
      skills,
      awards,
      currentTheme
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-backup.json";
    a.click();
  };

  const importData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
      if (parsed.researchInterests) setResearchInterests(parsed.researchInterests);
      if (parsed.education) setEducation(parsed.education);
      if (parsed.experience) setExperience(parsed.experience);
      if (parsed.publications) setPublications(parsed.publications);
      if (parsed.skills) setSkills(parsed.skills);
      if (parsed.awards) setAwards(parsed.awards);
      if (parsed.currentTheme) setTheme(parsed.currentTheme);
      saveData(parsed);
      return true;
    } catch (e) {
      console.error("Invalid JSON", e);
      return false;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        loading,
        login,
        logout,
        changePassword,
        personalInfo,
        updatePersonalInfo,
        researchInterests,
        addResearchProject,
        updateResearchProject,
        deleteResearchProject,
        publications,
        addPublication,
        updatePublication,
        deletePublication,
        experience,
        addExperience,
        updateExperience,
        deleteExperience,
        education,
        skills,
        awards,
        currentTheme,
        setTheme,
        resetToDefaults,
        exportData,
        importData
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
