import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  MapPin, 
  MessageSquare,
  Mail,
  Menu,
  X
} from 'lucide-react';
import grangeLogo from '../assets/images/grange_logo_1789776582651.jpg';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
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
              CIPC Reg: <strong>2026/727301/07</strong>
            </span>
          </div>

          {/* Right: Direct Contact & WhatsApp */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <a 
              href="mailto:info@grangeconstructions.co.za"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@grangeconstructions.co.za</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a 
              href="tel:+27710826359" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">+27 71 082 6359</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://wa.me/27740559954?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>+27 74 055 9954 (WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity with Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <img
              src={grangeLogo}
              alt="Grange Construction & Steel Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display">
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
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">
            Services
          </a>
          <a href="#steel-fabrication-gallery" className="hover:text-amber-600 font-semibold transition-colors flex items-center gap-1 text-slate-800">
            <span>Steelwork Gallery</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-mono font-bold">4</span>
          </a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">
            Our Work
          </a>
          <a href="#suppliers" className="hover:text-amber-600 font-semibold transition-colors flex items-center gap-1">
            <span>Materials & Suppliers</span>
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
            href="https://wa.me/27740559954?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://wa.me/27740559954"
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
              href="#steel-fabrication-gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-amber-700 flex items-center justify-between"
            >
              <span>Steelwork Gallery (4 Products)</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-mono font-bold">New</span>
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Cape Town Portfolio
            </a>
            <a 
              href="#suppliers" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-amber-700"
            >
              Materials & Hardware Suppliers
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
              href="mailto:info@grangeconstructions.co.za"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>info@grangeconstructions.co.za</span>
            </a>
            <a 
              href="tel:+27710826359"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call: +27 71 082 6359</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-center text-slate-800 bg-slate-100 border border-slate-200"
            >
              Request a Free Quote
            </a>
            <a
              href="https://wa.me/27740559954?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-600"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +27 74 055 9954</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
