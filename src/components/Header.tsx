import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  MapPin, 
  MessageSquare,
  Menu,
  X,
  FileCode2
} from 'lucide-react';

interface HeaderProps {
  onOpenPromptModal: () => void;
  onCopyPrompt: () => void;
  isCopied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPromptModal,
  onCopyPrompt,
  isCopied
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-xs">
      {/* Top Utility Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Location & Service Scope */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>29 Bayside St, Riverton, Cape Town</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-300">
              Director: <strong>Andile Mntambo</strong>
            </span>
          </div>

          {/* Right: Direct Contact & WhatsApp */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href="tel:0724508820" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">072 450 8820</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://wa.me/27724508820?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-sm group-hover:bg-slate-800 transition-colors">
            <Building2 className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                GRANGE
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-700">
                Construction & Steel
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal">
              (Pty) Ltd • Riverton, Cape Town
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">
            Our Work
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About & Director
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Request a Quote Button */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            Request a Quote
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/27724508820?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          {/* Discreet Prompt Tool Button */}
          <button
            onClick={onOpenPromptModal}
            className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
            title="View Claude system prompt specification"
          >
            <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden xl:inline">Prompt Spec</span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://wa.me/27724508820"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-600 text-white"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Services (4 Divisions)
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Cape Town Portfolio
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              About Andile Mntambo
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Contact & Address
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-center text-slate-800 bg-slate-100 border border-slate-200"
            >
              Request a Free Quote
            </a>
            <a
              href="https://wa.me/27724508820?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-600"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Quote</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPromptModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-slate-500 hover:text-slate-800"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>View Claude Prompt Specification</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
