import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Check,
  ExternalLink
} from 'lucide-react';
import { projectShowcase } from '../../data/constructionData';
import { ProjectItem } from '../../types';

interface ReferenceSiteProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenPromptModal: () => void;
}

export const ReferenceSite: React.FC<ReferenceSiteProps> = ({
  onSelectProject,
  onOpenPromptModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [rfpSubmitted, setRfpSubmitted] = useState<boolean>(false);

  const categories = ['All', 'Building Construction', 'Steel Fabrication', 'Finishing Work', 'Property Maintenance'];

  const filteredProjects = selectedCategory === 'All'
    ? projectShowcase
    : projectShowcase.filter(p => p.category === selectedCategory);

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfpSubmitted(true);
    setTimeout(() => setRfpSubmitted(false), 4000);
  };

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-950">
      
      {/* Hero Section - Clean, Trustworthy & High Contrast */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Real photo background with warm professional overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="Grange Construction & Steel Cape Town"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-300 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>General Building & Custom Steel Fabrication • Cape Town</span>
            </div>

            {/* Clear, Human Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Quality Building & Custom Steel Fabrication in Cape Town.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From turnkey house construction, room extensions, and boundary walls to automated security gates, carports, and complete property maintenance. Supervised on-site by Managing Director Andile Mntambo.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-sm flex items-center gap-2"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/27724508820?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 072 450 8820</span>
              </a>

              <a
                href="tel:0724508820"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Direct</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="space-y-0.5">
                <span className="text-amber-400 font-bold block text-sm">Riverton Workshop</span>
                <span className="text-slate-400">29 Bayside St, Cape Town</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-amber-400 font-bold block text-sm">4 Core Divisions</span>
                <span className="text-slate-400">Building, Steel, Finishes, Repairs</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-amber-400 font-bold block text-sm">Direct Supervision</span>
                <span className="text-slate-400">Led by Andile Mntambo</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-amber-400 font-bold block text-sm">Western Cape Wide</span>
                <span className="text-slate-400">Residential & Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Divisions - Clean, Spacious & Straightforward */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold font-mono">
              Complete Capability
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Our 4 Core Divisions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate the stress of hiring multiple separate contractors. Grange handles structural building, steel fabrication, architectural finishes, and ongoing repairs under one roof.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Division 1: Building Construction */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1000&q=80" 
                    alt="Building Construction Cape Town" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Division 01
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Building Construction
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Turnkey ground-up construction, room additions, second storeys, garages, and reinforced security boundary walls adhering to SANS building standards.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>New Houses</strong> – Complete turnkey residential home builds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Extensions</strong> – Second-storey additions & living room expansions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Rooms and Garages</strong> – Automated garages, studios & granny flats</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Boundary Walls</strong> – Reinforced concrete & brick security walls</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Renovations</strong> – Knock-throughs, open-plan layouts & modernizations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                <a
                  href="https://wa.me/27724508820?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Building%20Construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Building Quote</span>
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 2: Steel Fabrication */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" 
                    alt="Steel Fabrication Workshop Cape Town" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Division 02
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Steel Fabrication
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Custom metal manufacturing in our Riverton workshop. We build robust security gates, carports, burglar bars, and balustrades treated for Cape Town's coastal salt air.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Security Gates</strong> – Motorized sliding gates & swing gates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Burglar Bars</strong> – Spanish, cottage pane & custom welded bar sets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Steel Doors</strong> – Heavy-duty security doors & warehouse gates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Carports</strong> – Engineered single, double & commercial steel carports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Balustrades & Stairs</strong> – Architectural handrails, staircases & fencing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                <a
                  href="https://wa.me/27724508820?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Steel%20Fabrication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Steel Quote</span>
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 3: Finishing Work */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Finishing Work Tiling Painting Cape Town" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Division 03
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Finishing Work
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Flawless interior and exterior craftsmanship. Crisp laser-leveled porcelain tiling, smooth Rhinolite skim plastering, ceilings, paving, and 100% leak-proof waterproofing.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Tiling</strong> – Large-format porcelain, ceramic & bathroom tiles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Painting</strong> – Interior prep, weather-coat exterior & roof spraying</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Plastering</strong> – Smooth Rhinolite skim & exterior textured render</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Ceilings</strong> – Suspended drop-ceilings, flush plaster & cornices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Paving & Waterproofing</strong> – Interlocking pavers & 4mm torch-on</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                <a
                  href="https://wa.me/27724508820?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Finishing%20Work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Finishes Quote</span>
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 4: Property Maintenance */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
                    alt="Property Maintenance Cape Town" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Division 04
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Property Maintenance
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Protect your property asset value. Fast repair of cracked walls, exterior repainting, gate motor servicing, and routine maintenance retainers for landlords & body corporates.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Repair Damaged Walls</strong> – Structural crack stitching & damp remediation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Repaint Buildings</strong> – Full exterior high-pressure wash & repainting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Fix Gates and Fences</strong> – Centurion motor servicing & track welding</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>General Building Maintenance</strong> – Roof leaks, fascia boards, gutters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Landlord & Business Contracts</strong> – Scheduled monthly maintenance SLAs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                <a
                  href="https://wa.me/27724508820?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Property%20Maintenance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Maintenance</span>
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Cape Town Projects Portfolio */}
      <section id="portfolio" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold font-mono">
                Recent Works
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Cape Town Project Showcase
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-slate-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-900 shadow-sm border border-slate-200">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-mono bg-slate-900/90 text-white">
                    {project.location}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs text-slate-500 font-mono">
                    {project.deliveryMethod} • {project.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Scope: <strong className="text-slate-900">{project.specs.sqft}</strong>
                    </span>
                    <span className="font-semibold text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Andile Mntambo & Grange Construction */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image / Leadership card */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                  alt="Andile Mntambo Grange Construction Riverton"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white">
                  <div className="font-bold text-lg sm:text-xl">Andile Mntambo</div>
                  <div className="text-amber-400 text-xs font-semibold">Managing Director & Founder</div>
                  <div className="text-xs text-slate-300 mt-1">Grange Construction and Steel (Pty) Ltd</div>
                </div>
              </div>

              {/* Direct credentials callout */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">Workshop & Operations Hub:</strong>
                  <span className="text-slate-600">29 Bayside Street, Riverton, Cape Town, 7490</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 font-semibold text-[11px]">
                  Riverton, Cape Town
                </span>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold font-mono">
                  Why Work With Us
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  One Contractor for Both Building & Steel.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most Cape Town homeowners and property managers face the headache of juggling different builders, welders, tilers, and painters. When timelines slip or measurements don't line up, everyone blames each other.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Grange Construction and Steel (Pty) Ltd</strong> was established by Director Andile Mntambo to solve this problem. Because we have our own in-house steel fabrication workshop in Riverton alongside our certified masonry and finishes teams, your gates, carports, boundary walls, and house extensions are designed and built in complete harmony.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>On-Site Supervision</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Direct hands-on supervision by Andile Mntambo on every active project.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>In-House Workshop</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    No middlemen markups on custom gates, burglar bars, and carports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Free Quote Form */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Request a Free Site Inspection & Quote
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Have an upcoming project in Cape Town? Send us your requirements or WhatsApp us directly for advice and transparent pricing.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Workshop & Office Location</strong>
                    <span className="text-slate-300 text-xs">29 Bayside Street, Riverton, Cape Town, Western Cape, 7490</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Telephone Call</strong>
                    <a href="tel:0724508820" className="text-slate-300 hover:text-white text-xs">
                      +27 72 450 8820 (Director: Andile Mntambo)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">WhatsApp Instant Chat</strong>
                    <a 
                      href="https://wa.me/27724508820?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20quote" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-400 hover:underline text-xs"
                    >
                      +27 72 450 8820 (Send site photos & plan drawings)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Service Coverage</strong>
                    <span className="text-slate-300 text-xs">Serving the Greater Cape Town Metro & Western Cape</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleRfpSubmit} className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900">
                Send Project Inquiry
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael van der Merwe"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 072 450 8820"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Service Category</label>
                <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors">
                  <option>Building Construction (New Houses, Extensions, Walls)</option>
                  <option>Steel Fabrication (Gates, Bars, Carports, Balustrades)</option>
                  <option>Finishing Work (Tiling, Painting, Waterproofing)</option>
                  <option>Property Maintenance & Landlord Retainers</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Property Suburb & Requirements</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail your requirements, property location in Cape Town, and ideal timeline..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                ></textarea>
              </div>

              {rfpSubmitted ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs text-center font-medium border border-emerald-200">
                  ✓ Inquiry sent successfully! Managing Director Andile Mntambo will contact you shortly.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  Submit for Free Inspection & Quote
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Clean, Professional Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white tracking-wider text-sm">
                Grange Construction and Steel (Pty) Ltd
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>29 Bayside St, Riverton, Cape Town</span>
              <span>•</span>
              <span>Director: Andile Mntambo</span>
              <span>•</span>
              <span>Western Cape</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Grange Construction and Steel (Pty) Ltd.</p>
            
            {/* Discreet button for the prompt spec */}
            <button
              onClick={onOpenPromptModal}
              className="text-amber-400 hover:underline text-xs flex items-center gap-1 font-medium"
            >
              <span>Claude Prompt Specification</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
