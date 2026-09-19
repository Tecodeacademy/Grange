import React, { useState } from 'react';
import { Header } from './components/Header';
import { ReferenceSite } from './components/reference-site/ReferenceSite';
import { ProjectModal } from './components/reference-site/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleInquireProject = (title: string) => {
    // Scroll smoothly to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-950">
      {/* Clean, Trustworthy Contractor Header */}
      <Header />

      {/* Main Website Presentation */}
      <main className="flex-1">
        <ReferenceSite
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireAboutProject={handleInquireProject}
      />
    </div>
  );
}
