import React, { useState, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  Settings2, 
  Sparkles, 
  BookOpen, 
  Sliders, 
  RefreshCw, 
  FileCode2, 
  Layers, 
  Palette, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2,
  Building2,
  Wrench,
  Paintbrush
} from 'lucide-react';
import { PromptConfig } from '../../types';
import { defaultPromptConfig, generateClaudePrompt, promptModules } from '../../data/promptData';

interface PromptStudioProps {
  config: PromptConfig;
  setConfig: React.Dispatch<React.SetStateAction<PromptConfig>>;
}

export const PromptStudio: React.FC<PromptStudioProps> = ({ config, setConfig }) => {
  const [activeTab, setActiveTab] = useState<'master' | 'credentials' | 'divisions' | 'design' | 'contact' | 'tips'>('master');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Computed full prompt
  const fullPrompt = useMemo(() => {
    return generateClaudePrompt(config);
  }, [config]);

  // Handle section copy
  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2200);
  };

  // Download prompt as Markdown
  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([fullPrompt], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `grange-construction-and-steel-claude-prompt.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const estimatedTokens = Math.round(fullPrompt.length / 3.8);

  const marketOptions = [
    'Cape Town Metro',
    'Atlantic Seaboard & City Bowl',
    'Southern & Northern Suburbs',
    'Western Cape Winelands',
    'Riverton & Surrounds'
  ];

  const specialtyOptions = [
    'Building Construction (New Houses, Extensions, Rooms/Garages, Boundary Walls, Renovations)',
    'Steel Fabrication (Security Gates, Burglar Bars, Steel Doors, Carports, Balustrades, Stairs, Fencing)',
    'Finishing Work (Tiling, Painting, Plastering, Ceilings, Paving, Waterproofing)',
    'Property Maintenance (Wall Repairs, Repainting, Gate/Fence Fix, Landlord Maintenance SLAs)'
  ];

  const deliveryOptions = [
    'Turnkey General Contracting',
    'Custom Steelwork Design & Install',
    'Commercial Maintenance SLA Retainers',
    'Phased Renovation Contracting'
  ];

  const toggleMarket = (market: string) => {
    if (config.markets.includes(market)) {
      if (config.markets.length > 1) {
        setConfig({ ...config, markets: config.markets.filter(m => m !== market) });
      }
    } else {
      setConfig({ ...config, markets: [...config.markets, market] });
    }
  };

  const toggleSpecialty = (item: string) => {
    if (config.specialties.includes(item)) {
      if (config.specialties.length > 1) {
        setConfig({ ...config, specialties: config.specialties.filter(s => s !== item) });
      }
    } else {
      setConfig({ ...config, specialties: [...config.specialties, item] });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Intro Header Banner with CIPC Verification */}
      <div className="bg-gradient-to-r from-[#121620] via-[#161c28] to-[#121620] border border-[#232b3c] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#c29b62]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#34d399] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              CIPC Verified: 2026 / 727301 / 07
            </span>
            <span className="px-3 py-1 rounded-full bg-[#c29b62]/10 border border-[#c29b62]/30 text-[#c29b62] text-xs font-semibold uppercase tracking-wider">
              Director: Andile Mntambo
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1e2538] text-[#94a3b8] text-xs">
              29 Bayside St, Riverton, Cape Town, 7490
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-wide leading-tight">
            Grange Construction & Steel: Master Claude Prompt
          </h1>

          <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
            Tailored specifically for <strong>Grange Construction and Steel (Pty) Ltd</strong>. Designed to produce a visually rich, non-minimalist, high-converting digital platform that decisively outperforms competing contractor prototypes with concrete technical drawings, 4 core divisions, and real-time ZAR estimating.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-[#1e2535] text-[#e2e8f0] font-mono">
              Tokens: <strong className="text-[#c29b62]">{estimatedTokens.toLocaleString()}</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-[#1e2535] text-[#e2e8f0]">
              Currency: <strong className="text-[#34d399]">ZAR (South African Rand)</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-[#1e2535] text-[#e2e8f0]">
              Scope: <strong className="text-white">Building + Steel + Finishes + Maintenance</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Parameters on Left, Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Parameter Tuner */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#10141d] border border-[#1e2637] rounded-xl p-5 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-[#1c2333] pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#c29b62]" />
                <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
                  Company Specification
                </h2>
              </div>
              <button
                onClick={() => setConfig(defaultPromptConfig)}
                className="text-[11px] text-[#94a3b8] hover:text-[#c29b62] flex items-center gap-1 transition-colors"
                title="Reset to CIPC defaults"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Enterprise Legal Details */}
            <div className="space-y-2 p-3 rounded-lg bg-[#0b0e14] border border-[#1c2434] text-xs">
              <div className="text-[10px] uppercase font-mono text-[#94a3b8] tracking-wider">
                Official CIPC Registration
              </div>
              <div className="font-semibold text-white">
                {config.companyName}
              </div>
              <div className="text-[#94a3b8] font-mono text-[11px]">
                Reg No: <span className="text-[#c29b62]">{config.registrationNumber}</span>
              </div>
              <div className="text-[#94a3b8] text-[11px]">
                Director: <span className="text-white">{config.directorName}</span>
              </div>
              <div className="text-[#94a3b8] text-[11px]">
                {config.location}
              </div>
            </div>

            {/* Target Markets */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#cbd5e1] block">
                Target Western Cape Suburbs
              </label>
              <div className="flex flex-wrap gap-1.5">
                {marketOptions.map((market) => {
                  const isSelected = config.markets.includes(market);
                  return (
                    <button
                      key={market}
                      onClick={() => toggleMarket(market)}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-all ${
                        isSelected
                          ? 'bg-[#c29b62]/20 border border-[#c29b62] text-[#c29b62] font-medium'
                          : 'bg-[#0d1017] border border-[#1e2535] text-[#94a3b8] hover:text-white'
                      }`}
                    >
                      {market}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Project Specialties */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#cbd5e1] block">
                The 4 Core Service Divisions
              </label>
              <div className="space-y-1.5">
                {specialtyOptions.map((item) => {
                  const isChecked = config.specialties.includes(item);
                  return (
                    <label
                      key={item}
                      onClick={() => toggleSpecialty(item)}
                      className={`flex items-start gap-2 p-2.5 rounded-lg text-xs cursor-pointer border transition-colors ${
                        isChecked
                          ? 'bg-[#151b27] border-[#c29b62]/40 text-white'
                          : 'bg-[#0b0e14] border-[#1a2130] text-[#94a3b8] hover:text-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="rounded border-[#2a3447] text-[#c29b62] focus:ring-0 mt-0.5"
                      />
                      <span className="leading-snug">{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Aesthetic Theme */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#cbd5e1] block">
                Visual Aesthetic
              </label>
              <select
                value={config.themeAesthetic}
                onChange={(e) => setConfig({ ...config, themeAesthetic: e.target.value as any })}
                className="w-full bg-[#0b0e14] border border-[#232b3b] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c29b62]"
              >
                <option value="Architectural Charcoal & Industrial Steel">Architectural Charcoal & Industrial Steel (Grange Signature)</option>
                <option value="Modern High-End Slate & Bronze">Modern High-End Slate & Bronze</option>
                <option value="Clean Architectural Monolith">Clean Architectural Monolith</option>
              </select>
            </div>

            {/* Feature Modules */}
            <div className="space-y-2 pt-2 border-t border-[#1c2333]">
              <span className="text-xs font-medium text-[#cbd5e1] block">
                Interactive Modules Included
              </span>
              <label className="flex items-center gap-2 text-xs text-[#cbd5e1] cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.includeEstimator}
                  onChange={(e) => setConfig({ ...config, includeEstimator: e.target.checked })}
                  className="rounded border-[#2a3447] text-[#c29b62]"
                />
                <span>ZAR Parametric Budget & Schedule Estimator</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-[#cbd5e1] cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.includeMaintenanceContracts}
                  onChange={(e) => setConfig({ ...config, includeMaintenanceContracts: e.target.checked })}
                  className="rounded border-[#2a3447] text-[#c29b62]"
                />
                <span>Landlord & Body Corporate Maintenance SLA Portal</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-[#cbd5e1] cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.includeBlueprintViewer}
                  onChange={(e) => setConfig({ ...config, includeBlueprintViewer: e.target.checked })}
                  className="rounded border-[#2a3447] text-[#c29b62]"
                />
                <span>Technical Steel Schematic & Finish Case Studies</span>
              </label>
            </div>
          </div>

          {/* Competitive Strategy Callout */}
          <div className="bg-[#0e1219] border border-[#1b2230] rounded-xl p-4 space-y-2.5 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-2 text-[#c29b62] font-semibold">
              <Lightbulb className="w-4 h-4" />
              <span>Competitive Advantage</span>
            </div>
            <p className="leading-relaxed text-[#cbd5e1]">
              Competing contractor sites often look like empty templates with cartoon hardhats. This prompt forces Claude to showcase Grange’s dual superpower: <strong>structural civil building</strong> AND <strong>in-house security steel fabrication</strong>, anchored by official CIPC registration and Cape Town coastal durability standards.
            </p>
          </div>
        </div>

        {/* Right Column: Prompt Viewer & Tabs */}
        <div className="lg:col-span-8 space-y-4">
          {/* Sub-Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#1c2333] pb-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setActiveTab('master')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'master'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                🚀 Full Master Prompt
              </button>
              <button
                onClick={() => setActiveTab('credentials')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'credentials'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                📋 Company Profile
              </button>
              <button
                onClick={() => setActiveTab('divisions')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'divisions'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                🏗️ 4 Core Divisions
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'design'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                🎨 Design Tokens
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'contact'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                💬 Quote & Inquiry Spec
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'tips'
                    ? 'bg-[#c29b62] text-black font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#151b27]'
                }`}
              >
                💡 Claude Pro Tips
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#141822] hover:bg-[#1c2230] text-[#cbd5e1] border border-[#263042] transition-colors"
                title="Download prompt as a Markdown file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.md</span>
              </button>
              <button
                onClick={() => {
                  let textToCopy = fullPrompt;
                  if (activeTab === 'credentials') textToCopy = promptModules.companyCredentials.content;
                  if (activeTab === 'divisions') textToCopy = promptModules.fourDivisions.content;
                  if (activeTab === 'design') textToCopy = promptModules.designSystem.content;
                  if (activeTab === 'contact') textToCopy = promptModules.contactAndInquiry.content;
                  handleCopy(textToCopy, activeTab);
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#c29b62] hover:bg-[#d4af37] text-black transition-all shadow-md"
              >
                {copiedSection === activeTab ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Section</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Active Content Window */}
          {activeTab === 'tips' ? (
            <div className="bg-[#0b0e14] border border-[#1e2535] rounded-xl p-6 space-y-6 text-sm">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c29b62]" />
                  How to Build a Market-Dominating Construction Site in Claude
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  To beat competing prototypes and avoid bare-bones minimalist outputs, follow these 4 rules when pasting into Claude:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#121620] border border-[#20283a] space-y-2">
                  <div className="flex items-center gap-2 text-[#c29b62] font-semibold text-xs uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    1. Enforce the 4 Official Divisions
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    Make sure Claude renders all 4 divisions with their exact sub-services: <strong>Boundary walls</strong>, <strong>Burglar bars</strong>, <strong>Security gates</strong>, <strong>Carports</strong>, <strong>Waterproofing</strong>, and <strong>Landlord Maintenance SLAs</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121620] border border-[#20283a] space-y-2">
                  <div className="flex items-center gap-2 text-[#c29b62] font-semibold text-xs uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    2. CIPC Registration Trust Anchor
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    Displaying <strong>CIPC Reg: 2026/727301/07</strong> and Director <strong>Andile Mntambo</strong> prominently at the top creates instant legal credibility that competitor prototypes lack.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121620] border border-[#20283a] space-y-2">
                  <div className="flex items-center gap-2 text-[#c29b62] font-semibold text-xs uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    3. Local Western Cape Weather Proofing
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    Include coastal protection specifications: hot-dip galvanizing against Atlantic salt spray, 4mm torch-on waterproofing for winter rains, and high-durability masonry sealers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121620] border border-[#20283a] space-y-2">
                  <div className="flex items-center gap-2 text-[#c29b62] font-semibold text-xs uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    4. WhatsApp Instant Conversion
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    In South Africa, contractors win clients through rapid WhatsApp quotes. The prompt mandates an integrated WhatsApp trigger connected directly to the ZAR budget estimator.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group bg-[#0b0e14] border border-[#1e2535] rounded-xl overflow-hidden shadow-2xl">
              {/* Header Ribbon */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#080a0e] border-b border-[#181d29] text-xs text-[#94a3b8] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 inline-block"></span>
                  <span className="text-[#64748b] ml-2">grange_construction_and_steel_claude_prompt.xml</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Riverton, Cape Town</span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Scrollable Prompt Text Area */}
              <div className="p-4 sm:p-6 overflow-x-auto max-h-[640px] overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed text-[#e2e8f0] selection:bg-[#c29b62]/40">
                <pre className="whitespace-pre-wrap break-words font-code">
                  {activeTab === 'master' && fullPrompt}
                  {activeTab === 'credentials' && promptModules.companyCredentials.content}
                  {activeTab === 'divisions' && promptModules.fourDivisions.content}
                  {activeTab === 'design' && promptModules.designSystem.content}
                  {activeTab === 'contact' && promptModules.contactAndInquiry.content}
                </pre>
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-4 py-3 bg-[#080a0e]/90 border-t border-[#181d29] flex items-center justify-between text-xs text-[#94a3b8]">
                <span>
                  {activeTab === 'master' ? 'Full Prompt Ready for Claude 3.5 / 3.7' : `Module: ${activeTab.toUpperCase()}`}
                </span>
                <button
                  onClick={() => {
                    let text = fullPrompt;
                    if (activeTab === 'credentials') text = promptModules.companyCredentials.content;
                    if (activeTab === 'divisions') text = promptModules.fourDivisions.content;
                    if (activeTab === 'design') text = promptModules.designSystem.content;
                    if (activeTab === 'contact') text = promptModules.contactAndInquiry.content;
                    handleCopy(text, activeTab);
                  }}
                  className="text-[#c29b62] hover:text-[#d4af37] font-medium flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  Copy to Clipboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
