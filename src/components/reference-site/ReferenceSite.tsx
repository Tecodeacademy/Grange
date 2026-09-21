import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Mail,
  Check,
  Loader2,
  AlertCircle,
  Send
} from 'lucide-react';
import { projectShowcase, steelFabricationGallery } from '../../data/constructionData';
import { ProjectItem } from '../../types';
import grangeLogo from '../../assets/images/grange_logo_1789776582651.jpg';
import buildingConstructionImg from '../../assets/images/building_construction_service_1789782205737.jpg';
import steelFabricationImg from '../../assets/images/steel_fabrication_service_1789782218564.jpg';
import finishingWorkImg from '../../assets/images/finishing_work_service_1789782230813.jpg';
import propertyMaintenanceImg from '../../assets/images/property_maintenance_service_1789782244116.jpg';
import { SuppliersSection } from './SuppliersSection';
import { SteelFabricationGallery } from './SteelFabricationGallery';

interface ReferenceSiteProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ReferenceSite: React.FC<ReferenceSiteProps> = ({
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [divisionSteelIndex, setDivisionSteelIndex] = useState<number>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formFeedback, setFormFeedback] = useState<string>('');
  const [formService, setFormService] = useState<string>('Building Construction');

  const categories = ['All', 'Building Construction', 'Steel Fabrication', 'Finishing Work', 'Property Maintenance'];

  const filteredProjects = selectedCategory === 'All'
    ? projectShowcase
    : projectShowcase.filter(p => p.category === selectedCategory);

  const handleRfpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormFeedback('');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", "b6a5d068-50a8-4f8e-a298-2dfc28078f73");
      formData.append("subject", "New Quotation Request - Grange Construction & Steel");
      formData.append("from_name", "Grange Construction Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormFeedback('Thank you! Your quote request has been sent to our estimation team. We will review your project details and contact you via email or phone shortly.');
        form.reset();
      } else {
        setFormStatus('error');
        setFormFeedback(data.message || 'Submission failed. Please try again or contact us directly on WhatsApp.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormFeedback('Could not connect to the form service. Please contact us directly via WhatsApp (+27 74 055 9954) or call +27 71 082 6359.');
    }
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
              From turnkey house construction, room extensions, and boundary walls to automated security gates, carports, and complete property maintenance. Delivered with precision craftsmanship and turnkey site supervision.
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
                href="https://wa.me/27740559954?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +27 74 055 9954</span>
              </a>

              <a
                href="tel:+27710826359"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: +27 71 082 6359</span>
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
                <span className="text-amber-400 font-bold block text-sm">Turnkey Oversight</span>
                <span className="text-slate-400">Strict Quality Control</span>
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
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={buildingConstructionImg} 
                    alt="Building Construction Architectural Plans Cape Town" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
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
                  href="https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Building%20Construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Building Quote</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setFormService('Building Construction')}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 2: Steel Fabrication */}
            <div className="bg-white rounded-2xl border-2 border-amber-500/40 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Active Photo with Badge & Overlay */}
                <div className="h-56 w-full overflow-hidden bg-slate-900 relative group">
                  <img 
                    src={steelFabricationGallery[divisionSteelIndex].image} 
                    alt={steelFabricationGallery[divisionSteelIndex].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Division 02 • Steel
                  </div>

                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {steelFabricationGallery[divisionSteelIndex].badge}
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs flex items-center justify-between px-1">
                    <span className="font-semibold text-white truncate drop-shadow-sm">
                      {steelFabricationGallery[divisionSteelIndex].title}
                    </span>
                    <span className="text-amber-400 font-mono text-[11px] flex-shrink-0 ml-2">
                      {divisionSteelIndex + 1}/4
                    </span>
                  </div>
                </div>

                {/* 4 Interactive Picture Thumbnails */}
                <div className="p-2 bg-slate-100 border-b border-slate-200">
                  <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5 px-0.5 flex items-center justify-between">
                    <span>Attached Fabrication Pictures:</span>
                    <span className="text-amber-700 font-normal">Click to switch</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {steelFabricationGallery.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDivisionSteelIndex(idx)}
                        className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all ${
                          divisionSteelIndex === idx
                            ? 'border-amber-600 ring-2 ring-amber-500/50 scale-102 shadow-xs'
                            : 'border-slate-300 opacity-70 hover:opacity-100 hover:border-slate-400'
                        }`}
                        title={item.title}
                      >
                        <img 
                          src={item.image} 
                          alt={item.badge} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer" 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Steel Fabrication
                    </h3>
                    <a
                      href="#steel-fabrication-gallery"
                      className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
                    >
                      View All 4 Specs ↓
                    </a>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Custom metal manufacturing in our Riverton workshop. We engineer robust security gates, carports, burglar bars, and architectural balustrades treated for Cape Town's coastal salt air.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Security Gates</strong> – Motorized vertical-slat sliding gates & swing gates</span>
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
                        <span><strong>Carports</strong> – Engineered pitched-roof, cantilever & solar-ready steel carports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Balustrades & Screens</strong> – Architectural balcony protection & corner louvers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                <a
                  href={`https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Steel%20Fabrication:%20${encodeURIComponent(steelFabricationGallery[divisionSteelIndex].title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Steel Quote</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setFormService('Steel Fabrication')}
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
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={finishingWorkImg} 
                    alt="Finishing Work Decorative Tray Ceilings & Lighting Cape Town" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
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
                    Flawless interior and exterior craftsmanship. Crisp laser-leveled porcelain tiling, smooth Rhinolite skim plastering, decorative tray ceilings, paving, and 100% leak-proof waterproofing.
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
                        <span><strong>Ceilings</strong> – Suspended drop-ceilings, decorative cove lighting & cornices</span>
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
                  href="https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Finishing%20Work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Finishes Quote</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setFormService('Finishing Work')}
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
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={propertyMaintenanceImg} 
                    alt="Property Maintenance Before and After Renovation Cape Town" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
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
                  href="https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20need%20a%20quote%20for%20Property%20Maintenance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp for Maintenance</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setFormService('Property Maintenance')}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated In-House Fabricated Steelwork Workshop Gallery */}
          <SteelFabricationGallery />
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

      {/* Verified Hardware & Material Suppliers Showcase */}
      <SuppliersSection />

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
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Official Email Inquiries</strong>
                    <a href="mailto:info@grangeconstructions.co.za" className="text-slate-300 hover:text-white text-xs block transition-colors">
                      info@grangeconstructions.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Telephone Call</strong>
                    <a href="tel:+27710826359" className="text-slate-300 hover:text-white text-xs block">
                      +27 71 082 6359
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">WhatsApp Instant Quote</strong>
                    <a 
                      href="https://wa.me/27740559954?text=Hello%20Grange%20Construction%20and%20Steel,%20I%20would%20like%20a%20quote" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-400 hover:underline text-xs"
                    >
                      +27 74 055 9954 (Send site photos & plan drawings)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Service Coverage</strong>
                    <span className="text-slate-300 text-xs">Serving Greater Cape Town Metro, Northern Suburbs, Southern Suburbs & Winelands</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleRfpSubmit} className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Send Project Inquiry
                </h3>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Quotes Sent to Email
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Michael van der Merwe"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 071 082 6359"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Your Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. client@example.co.za"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Service Category</label>
                <select 
                  name="service"
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                >
                  <option value="Building Construction">Building Construction (New Houses, Extensions, Boundary Walls)</option>
                  <option value="Steel Fabrication">Steel Fabrication (Security Gates, Carports, Balustrades)</option>
                  <option value="Finishing Work">Finishing Work (Tiling, Skimming, Painting, Waterproofing)</option>
                  <option value="Property Maintenance">Property Maintenance & Landlord Retainers</option>
                  <option value="Other / Comprehensive Multi-Division Project">Other / Comprehensive Multi-Division Project</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Property Suburb & Requirements *</label>
                <textarea
                  rows={3}
                  name="message"
                  required
                  placeholder="Detail your requirements, property location in Cape Town, approximate dimensions, and ideal timeline..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                ></textarea>
              </div>

              {/* Botcheck honeypot for Web3Forms spam prevention */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-900 text-xs border border-emerald-200 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Inquiry Sent to Email Successfully!</p>
                      <p className="text-emerald-800 mt-0.5">{formFeedback}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-emerald-200 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 underline"
                    >
                      Send another inquiry
                    </button>
                    <a
                      href="https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20just%20submitted%20a%20quote%20request%20via%20your%20website%20form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Follow up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 text-rose-900 text-xs border border-rose-200 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Issue</p>
                      <p className="text-rose-800 mt-0.5">{formFeedback}</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <a
                      href="https://wa.me/27740559954"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send inquiry via WhatsApp instead (+27 74 055 9954)</span>
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Quote Request to Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit for Free Inspection & Quote</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Clean, Professional Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-700/60 flex-shrink-0">
                <img 
                  src={grangeLogo} 
                  alt="Grange Construction & Steel" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-white tracking-wider text-sm block">
                  Grange Construction and Steel (Pty) Ltd
                </span>
                <span className="text-[11px] text-amber-500 font-medium">
                  Building & Steel Specialists • Cape Town
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a href="mailto:info@grangeconstructions.co.za" className="text-amber-400 hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>info@grangeconstructions.co.za</span>
              </a>
              <span>•</span>
              <a href="tel:+27710826359" className="text-slate-300 hover:text-white transition-colors">
                Call: +27 71 082 6359
              </a>
              <span>•</span>
              <a 
                href="https://wa.me/27740559954" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                WhatsApp: +27 74 055 9954
              </a>
              <span>•</span>
              <span>29 Bayside St, Riverton, Cape Town</span>
              <span>•</span>
              <span>CIPC Reg: 2026/727301/07</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Grange Construction and Steel (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
