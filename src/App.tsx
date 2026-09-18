import React, { useState } from 'react';
import { Header } from './components/Header';
import { ReferenceSite } from './components/reference-site/ReferenceSite';
import { ProjectModal } from './components/reference-site/ProjectModal';
import { PromptModal } from './components/PromptModal';
import { ProjectItem, PromptConfig } from './types';
import { defaultPromptConfig, generateClaudePrompt } from './data/promptData';

export default function App() {
  const [config, setConfig] = useState<PromptConfig>(defaultPromptConfig);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyPrompt = () => {
    const text = generateClaudePrompt(config);
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

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
      <Header
        onOpenPromptModal={() => setIsPromptModalOpen(true)}
        onCopyPrompt={handleCopyPrompt}
        isCopied={isCopied}
      />

      {/* Main Website Presentation */}
      <main className="flex-1">
        <ReferenceSite
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenPromptModal={() => setIsPromptModalOpen(true)}
        />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireAboutProject={handleInquireProject}
      />

      {/* Claude Prompt Specification Modal (Discreet Modal) */}
      <PromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
        config={config}
      />
    </div>
  );
}
