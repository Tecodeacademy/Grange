import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink, 
  Check, 
  ChevronRight, 
  Sparkles,
  Maximize2,
  X,
  Phone
} from 'lucide-react';
import { 
  steelFabricationGallery, 
  SteelFabricationShowcaseItem 
} from '../../data/constructionData';

export const SteelFabricationGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SteelFabricationShowcaseItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'Automated Security Gates', 'Structural Steel Carports', 'Balustrades & Screens', 'Solar Carports'];

  const filteredItems = activeTab === 'All'
    ? steelFabricationGallery
    : steelFabricationGallery.filter(item => item.category === activeTab);

  return (
    <div id="steel-fabrication-gallery" className="pt-16 pb-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Division 02 • In-House Riverton Steel Workshop</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Fabricated Steelwork Gallery
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every steel project is custom-manufactured in our Riverton workshop, treated with coastal anti-corrosion protection, and installed by our certified teams across Cape Town.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab
                  ? 'bg-amber-600 text-white shadow-xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab === 'All' ? 'All Steelwork (4)' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image with zoom overlay */}
              <div 
                className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 text-amber-400 backdrop-blur-xs border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                {/* Expand icon indicator */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-[11px] font-mono font-medium text-amber-700 uppercase tracking-wider block">
                  {item.category}
                </span>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs bullets */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions footer */}
            <div className="p-4 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between gap-2">
              <a
                href={`https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20am%20interested%20in%20a%20quote%20for:%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Quote</span>
              </a>

              <button
                onClick={() => setSelectedItem(item)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="View full specs & photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for closer inspection */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High res image */}
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-slate-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 shadow-md">
                  {selectedItem.badge}
                </span>
              </div>
            </div>

            {/* Modal details */}
            <div className="p-6 sm:p-8 space-y-4 text-slate-800">
              <div>
                <span className="text-xs font-mono text-amber-700 uppercase tracking-wider block font-semibold">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Engineering & Fabrication Highlights:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/27740559954?text=Hello%20Grange%20Construction,%20I%20want%20a%20quote%20for%20the%20fabricated%20steel%20product:%20${encodeURIComponent(selectedItem.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Custom Quote on WhatsApp (+27 74 055 9954)</span>
                </a>

                <a
                  href="tel:+27710826359"
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +27 71 082 6359</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
