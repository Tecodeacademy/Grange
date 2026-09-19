import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Search, 
  ArrowUpRight,
  Truck,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { verifiedSuppliers, supplierCategories, SupplierItem } from '../../data/suppliersData';

export const SuppliersSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Materials');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSuppliers = verifiedSuppliers.filter(item => {
    const matchesCategory = activeCategory === 'All Materials' || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brandOrProducer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.capeTownBranches.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyProducts.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="suppliers" className="py-20 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header: Formal Corporate Specification */}
        <div className="border-b border-slate-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
              <Building2 className="w-3.5 h-3.5 text-slate-600" />
              <span>Procurement & Trade Supply Register</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Cape Town Trade Merchants & Approved Material Manufacturers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every building project and steel fabrication executed by Grange Construction and Steel (Pty) Ltd is supplied through verified Western Cape trade merchants and SABS/SANS-certified producers. We source directly through local Cape Town depots to ensure verifiable material provenance, valid manufacturer warranties, and reliable delivery schedules.
            </p>
          </div>

          {/* Compliance Summary Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2 lg:w-80 flex-shrink-0">
            <div className="font-semibold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>Quality Assurance Mandate</span>
              <FileCheck2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex justify-between py-1 border-b border-slate-150 text-slate-600">
              <span>Primary Trade Merchant:</span>
              <strong className="text-slate-800">Builders Warehouse</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-150 text-slate-600">
              <span>Structural Cement Standard:</span>
              <strong className="text-slate-800">SANS 50197-1 (42.5N)</strong>
            </div>
            <div className="flex justify-between py-1 text-slate-600">
              <span>Coastal Roofing Guarantee:</span>
              <strong className="text-slate-800">AZ150 Marine Grade</strong>
            </div>
          </div>
        </div>

        {/* Filter Controls: Corporate Office Tabs & Clean Search Input */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Navigation Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {supplierCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Filter Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search merchant, product, or Cape branch..."
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          <div className="text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Showing {filteredSuppliers.length} approved regional suppliers & manufacturers</span>
            <span>All materials traceable to Western Cape depots</span>
          </div>
        </div>

        {/* Clean Corporate Supplier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400 transition-all flex flex-col justify-between shadow-xs space-y-5"
            >
              <div className="space-y-4">
                {/* Header: Name and Category */}
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                    {supplier.category}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                    {supplier.name}
                  </h3>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">
                    {supplier.brandOrProducer}
                  </div>
                </div>

                {/* Local Cape Town Branches & Distribution */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-150 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                    <span>Cape Town Branches & Trade Yards:</span>
                  </div>
                  <p className="text-slate-600 pl-5 text-[11px] leading-relaxed">
                    {supplier.capeTownBranches}
                  </p>
                </div>

                {/* Operational Role & Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {supplier.description}
                </p>

                {/* Key Specified Materials */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider font-mono">
                    Key Materials Sourced on Site:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {supplier.keyProducts.map((product, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Standard Certification & Provenance */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1 text-slate-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                  <span>{supplier.standards}</span>
                </span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified Cape Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Note & Specification Request Banner */}
        <div className="rounded-xl border border-slate-300 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Architectural Bill of Quantities (BOQ) & Specific Brand Sourcing
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your structural engineer, project manager, or architect has specified a particular product code from Builders Warehouse, a specific batch rating from PPC/Lafarge, or custom tile batches from CTM or Italtile, our commercial trade accounts enable direct procurement at wholesale rates with full manufacturer delivery dockets.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Provide Project Specifications</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
