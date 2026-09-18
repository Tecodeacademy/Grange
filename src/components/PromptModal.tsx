import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode2, ExternalLink } from 'lucide-react';
import { PromptConfig } from '../types';
import { defaultPromptConfig, generateClaudePrompt } from '../data/promptData';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: PromptConfig;
}

export const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose, config = defaultPromptConfig }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const promptText = generateClaudePrompt(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([promptText], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'grange-construction-claude-prompt.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative text-slate-800 border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <FileCode2 className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Claude System Prompt Specification
              </h3>
              <p className="text-xs text-slate-500">
                Grange Construction & Steel • Structured for Claude 3.5 / 3.7
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
              title="Download as Markdown"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 flex-1 overflow-y-auto bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed">
          <pre className="whitespace-pre-wrap selection:bg-amber-400 selection:text-slate-950">
            {promptText}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Formatted with modular XML tags for Claude LLMs</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
