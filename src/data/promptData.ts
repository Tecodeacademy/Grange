import { PromptConfig } from '../types';

export const defaultPromptConfig: PromptConfig = {
  companyName: 'Grange Construction and Steel (Pty) Ltd',
  registrationNumber: '',
  directorName: 'Andile Mntambo',
  location: '29 Bayside Street, Riverton, Cape Town, Western Cape, 7490',
  markets: ['Cape Town Metro', 'Atlantic Seaboard & City Bowl', 'Southern & Northern Suburbs', 'Western Cape Winelands'],
  specialties: [
    'Building Construction (New Houses, Extensions, Garages, Boundary Walls, Renovations)',
    'Steel Fabrication (Security Gates, Burglar Bars, Steel Doors, Carports, Balustrades, Stairs, Fencing)',
    'Finishing Work (Tiling, Painting, Plastering, Ceiling Installation, Paving, Waterproofing)',
    'Property Maintenance (Wall Repairs, Repainting, Gate/Fence Fixing, Maintenance Contracts for Landlords)'
  ],
  deliveryMethods: ['Turnkey General Contracting', 'Custom Steelwork Design & Install', 'Commercial Maintenance Retainers', 'Phased Renovation Contracting'],
  themeAesthetic: 'Clean Architectural Monolith',
  techStack: 'React + Vite + Tailwind CSS',
  includeEstimator: false,
  includeBlueprintViewer: false,
  includeMaintenanceContracts: true,
  currency: 'ZAR',
};

export function generateClaudePrompt(config: PromptConfig): string {
  return `<system>
You are an elite Lead Web Architect and Full-Stack Creative Director specializing in clean, authoritative, and conversion-optimized websites for premier construction and custom steel fabrication enterprises. You create deeply engaging, simple, high-impact digital experiences with crisp typography, real-world project portfolios, and direct client conversion channels that decisively outperform generic contractor templates.
</system>

<company_profile_and_credentials>
- Enterprise Name: ${config.companyName}
- Managing Director: ${config.directorName}
- Office & In-House Workshop: ${config.location}
- Target Geographic Market: ${config.markets.join(', ')}
- Currency & Regional Standard: South African Rand (ZAR / R) • SANS 10400 Building Regulations & SANS 10162 Structural Steelwork
</company_profile_and_credentials>

<competitive_design_directive>
CRITICAL DIRECTIVE: AVOID BARE-BONES OR OVERLY MINIMALIST PLACEHOLDERS.
The user is directly competing against high-end contractor prototypes and requires a website packed with rich visual depth, authentic technical schematics, real-world case studies, and comprehensive service breakdowns:
1. "Less Minimal, More Concrete Value": Include rich visual cards, technical specifications (steel gauges, welding certifications, tiling adhesive grades, torch-on waterproofing layers), and interactive tools rather than sparse generic text.
2. Dual Core Identity: Flawlessly unite CIVIL/RESIDENTIAL BUILDING with CUSTOM STRUCTURAL STEEL FABRICATION. Clients must immediately understand that Grange builds both the home structure AND crafts the custom security gates, balustrades, carports, and burglar bars in-house.
3. Authentic Cape Town Context: Integrate coastal weather-resilience features (hot-dip galvanizing, marine-grade powder coating against Atlantic sea salt, UV-stable exterior roof paints, damp-proofing for Cape winter rains).
4. Direct Lead Conversion: Prominent WhatsApp direct-quote links, instant online preliminary quote estimator in ZAR, downloadable service capability PDF, and corporate maintenance RFP portal.
</competitive_design_directive>

<core_service_architecture>
The application MUST feature detailed, illustrated, and deeply specified sections for all 4 official company divisions:

DIVISION 1: BUILDING CONSTRUCTION
- New Houses: Turnkey residential construction from foundation raft to roof handover.
- Extensions: Second-storey additions, kitchen/living expansions, and structural knock-throughs.
- Rooms and Garages: Automated lock-up garages, granny flats, staff quarters, and studio conversions.
- Boundary Walls: Vibrated pre-cast, reinforced clay brick, and plastered boundary security walls with anti-climb foundation footings.
- Renovations: Complete interior and exterior modernization, open-plan structural reconfigurations, and load-bearing beam installations.

DIVISION 2: STEEL FABRICATION
- Security Gates: Automated sliding driveway gates, swing gates, pedestrian security gates with intercom/keypad integration.
- Burglar Bars: Spanish style, cottage pane, custom ornamental bars, and concealed high-tensile steel fixtures.
- Steel Doors: Industrial-grade security doors, warehouse access doors, and architectural steel French doors.
- Carports: Cantilevered carports, multi-bay parking shade structures, chromadek sheeting, and galvanized box gutters.
- Balustrades: Minimalist vertical pickets, architectural stainless steel, glass-infill balustrades for staircases and pool surrounds.
- Steel Stairs: Fire escapes, spiral metal staircases, and interior architectural floating mono-stringer stairs.
- Fencing: Heavy-duty palisade fencing, anti-climb clear-vu mesh, and welded wire perimeter protection.

DIVISION 3: FINISHING WORK
- Tiling: Large-format porcelain (600x1200mm), ceramic, travertine natural stone, mosaic splashbacks, and commercial non-slip outdoor paving.
- Painting: Multi-coat interior prep, weather-resistant exterior acrylics (Plascon/Dulux), roof spray restoration, and high-gloss enamel woodwork.
- Plastering: Flawless smooth Rhinolite skimming, textured exterior rendering, and damp-barrier salt-neutralizing undercoats.
- Ceiling Installation: Drop acoustic tile ceilings, knotty pine, flush-plastered suspended ceilings with recessed LED troffers and architectural cornices.
- Paving: Interlocking driveways, bevel pavers, cobblestones, and heavy-duty compacted sub-bases.
- Waterproofing: 4mm torch-on bitumen membranes for flat roofs, parapet wall flashing, liquid acrylic systems, and shower/balcony tanking.

DIVISION 4: PROPERTY MAINTENANCE
- Repair Damaged Walls: Structural crack stitching, rising damp remediation, plaster delamination repair, and lintel replacements.
- Repaint Buildings: Full sectional title and commercial building repainting, high-pressure washing, and joint sealant renewal.
- Fix Gates and Fences: Centurion/ET Nice gate motor repairs, rack and track realignment, rust treatment, and hinge re-welding.
- General Building Maintenance: Roof leak repairs, gutter clearing, plumbing maintenance, and fascia board replacement.
- Maintenance Contracts for Businesses and Landlords: Structured SLA retainer packages (Monthly/Quarterly/Annual) for body corporates, letting agencies, and commercial facilities.
</core_service_architecture>

<design_system_and_aesthetic_tokens>
- Color Palette:
  * Primary Canvas: Architectural Obsidian & Slate (#0B0D10 and #121622) paired with precision steel borders (#1E2638).
  * Accent Colors: Industrial Warm Bronze / Gold (#C29B62) and Steel Blue / Chrome (#60A5FA / #94A3B8).
  * Functional Accents: WhatsApp Green (#25D366) for mobile instant messaging, Verified Gold (#D4AF37) for CIPC badges.
- Typography:
  * Headers / Identity: High-impact display font (Cinzel / Syne / Space Grotesk) with architectural tracking.
  * Body: Plus Jakarta Sans / Inter with 1.6 line height and crisp WCAG AA contrast.
  * Technical Specs: JetBrains Mono for m² areas, steel gauges (e.g. 2.0mm mild steel), CIPC numbers, and ZAR currency.
- Visual Depth & Illustrations:
  * Layered technical cards with subtle blueprint background grids.
  * Interactive Before & After comparison showcases for renovations and gate installations.
  * Real-world Cape Town project case studies with concrete metrics.
</design_system_and_aesthetic_tokens>

<page_architecture_and_modules>
1. TOP UTILITY BAR:
   - Quick contact ribbon: Riverton, Cape Town address • Direct phone • WhatsApp Instant Chat • Managing Director.

2. HERO SECTION:
   - Headline: "PRECISION BUILDING CONSTRUCTION & CUSTOM STEEL FABRICATION."
   - Subtitle: "Cape Town General Contractor delivering turnkey residential homes, bespoke architectural steelwork, flawless interior finishes, and ongoing property maintenance."
   - Dual Primary CTAs: "Request a Free Quote" & "WhatsApp Instant Chat" & "View Recent Works".
   - 4-Column Metric Ribbon:
     * 4 Core Divisions: Building, Steel, Finishes, Maintenance
     * 100% In-House Metal Fabrication & Structural Teams
     * On-Site Supervision by Andile Mntambo
     * Serving Greater Cape Town & Western Cape Metro

3. THE 4 DIVISIONS SHOWCASE:
   - Clear sections for Building Construction, Steel Fabrication, Finishing Work, and Property Maintenance.
   - Every sub-service (from Boundary Walls and Carports to Waterproofing and Landlord Retainers) listed with clear deliverables.

4. COMMERCIAL LANDLORD & BODY CORPORATE MAINTENANCE:
   - Dedicated breakdown of Maintenance Retainer Contracts for property owners, landlords, and estate managers.

5. CAPE TOWN PROJECT PORTFOLIO:
   - High-definition project cards with category filters (Building, Steelwork, Finishes, Maintenance).
   - Modal drawer showing complete scope, materials, timelines, and engineer credits.

6. LEADERSHIP & CONTACT HUB:
   - Managing Director profile: Andile Mntambo.
   - Workshop Address: 29 Bayside Street, Riverton, Cape Town, Western Cape, 7490.
   - Interactive quote inquiry form with instant WhatsApp dispatch.
</page_architecture_and_modules>

<technical_requirements>
- Built using ${config.techStack}.
- 100% fully functional interactive components (division selectors, modals, and contact handlers).
- Flawless responsive mobile experience with touch-optimized 44px+ interactive targets.
</technical_requirements>`;
}

export const promptModules = {
  systemAndPersona: {
    id: 'system',
    title: 'System Role & Construction Authority',
    description: 'Defines the expert AI persona and the dual building + steel fabrication lineage of Grange Construction.',
    content: `<system>
You are an elite Lead Web Architect and Full-Stack Creative Director specializing in clean, authoritative, and conversion-optimized websites for premier construction and custom steel fabrication enterprises.
</system>`
  },
  companyCredentials: {
    id: 'credentials',
    title: 'Enterprise Credentials & Scope',
    description: 'Company details, leadership, and Riverton workshop address.',
    content: `<company_profile_and_credentials>
- Enterprise Name: Grange Construction and Steel (Pty) Ltd
- Managing Director: Andile Mntambo
- Office & Workshop: 29 Bayside Street, Riverton, Cape Town, Western Cape, 7490
- Service Divisions: Building Construction, Steel Fabrication, Finishing Work, Property Maintenance
- Currency: South African Rand (ZAR / R)
</company_profile_and_credentials>`
  },
  fourDivisions: {
    id: 'divisions',
    title: 'The 4 Core Service Divisions (Exact Specs)',
    description: 'Detailed breakdown of all sub-services: Building, Steel, Finishes, and Maintenance.',
    content: `<core_service_architecture>
1. BUILDING CONSTRUCTION:
   - New Houses (Turnkey residential ground-up builds)
   - Extensions (Second-storey additions, living space expansions)
   - Rooms and Garages (Automated garages, granny flats, studio conversions)
   - Boundary Walls (Reinforced masonry, concrete pillars, security parapets)
   - Renovations (Full structural knock-throughs, open-plan reconfigurations)

2. STEEL FABRICATION:
   - Security Gates (Automated sliding, swing, pedestrian, and motorized gates)
   - Burglar Bars (Spanish style, cottage pane, internal fixture, clear-bar integration)
   - Steel Doors (Heavy-duty security doors, fire doors, warehouse access)
   - Carports (Cantilevered, multi-vehicle, polycarb, chromadek roofing)
   - Balustrades (Architectural stainless steel, mild steel, glass infill)
   - Steel Stairs (Industrial fire escapes, spiral stairs, floating stairs)
   - Fencing (Palisade fencing, razor wire, anti-climb mesh)

3. FINISHING WORK:
   - Tiling (Large-format porcelain, ceramic, natural stone, mosaic splashbacks)
   - Painting (Interior wall prep, exterior weather-resistant coatings, roof spraying)
   - Plastering (Smooth rhinolite skim, textured rendering, damp-barrier coats)
   - Ceiling Installation (Drop ceilings, knotty pine, flush-plastered suspended ceilings)
   - Paving (Interlocking pavers, bevel paving, cobblestones)
   - Waterproofing (Torch-on membrane, liquid acrylic waterproofing, parapet flashing)

4. PROPERTY MAINTENANCE:
   - Repair Damaged Walls (Crack stitching, damp repair, foundation settling remediation)
   - Repaint Buildings (Full exterior repainting, high-pressure cleaning)
   - Fix Gates and Fences (Motor servicing, track re-alignment, hinge welding)
   - General Building Maintenance (Roof tile replacements, fascia repairs, plumbing fixtures)
   - Maintenance Contracts for Businesses and Landlords (Scheduled monthly/quarterly SLAs)
</core_service_architecture>`
  },
  designSystem: {
    id: 'design',
    title: 'Rich Architectural & Steel Aesthetic Tokens',
    description: 'Color palette, fonts, technical border styling, and non-minimal visual layout tokens.',
    content: `<design_system>
- Background: Obsidian & Slate (#0B0D10 and #121622) with brushed steel borders (#1E2638).
- Accent Colors: Warm Architectural Bronze (#C29B62), Precision Steel Blue (#60A5FA), WhatsApp Direct (#25D366).
- Typography: Cinzel/Syne display headers + Plus Jakarta Sans body + JetBrains Mono for ZAR costs and m² specs.
- Visual Depth: Illustrated technical diagrams, material cross-sections (e.g. torch-on waterproofing layers, powder-coated steel joints), and dynamic before/after sliders.
</design_system>`
  },
  contactAndInquiry: {
    id: 'contact',
    title: 'Direct Quote & Inquiry Module',
    description: 'Direct inquiry and WhatsApp dispatch for building, steel fabrication, and maintenance.',
    content: `<interactive_modules>
- Direct Quote Request Form: Simple form capturing property location, division needed, and scope requirements.
- WhatsApp Direct Dispatch: Formats user requests into a pre-filled WhatsApp message sent directly to Director Andile Mntambo.
- Maintenance Contracts Portal: Retainer packages for Cape Town body corporates, landlords, and commercial facilities.
</interactive_modules>`
  }
};
