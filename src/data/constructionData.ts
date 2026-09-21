import { ProjectItem, ServicePillar, LeadershipMember, OfficeLocation } from '../types';
import directorAndileImg from '../assets/images/director_andile_mntambo_1789783854811.jpg';
import steelSlidingGateImg from '../assets/images/steel_sliding_gate_1789972008465.jpg';
import pitchedMetalCarportImg from '../assets/images/pitched_metal_carport_1789972022375.jpg';
import balconyMetalScreenImg from '../assets/images/balcony_metal_screen_1789972035335.jpg';
import cantileverSolarCarportImg from '../assets/images/cantilever_solar_carport_1789972048111.jpg';

export {
  steelSlidingGateImg,
  pitchedMetalCarportImg,
  balconyMetalScreenImg,
  cantileverSolarCarportImg
};

export interface SteelFabricationShowcaseItem {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  specs: string[];
}

export const steelFabricationGallery: SteelFabricationShowcaseItem[] = [
  {
    id: 'motorized-slat-gate',
    title: 'Motorized Vertical-Slat Security Gate & Wall Fencing',
    category: 'Automated Security Gates',
    image: steelSlidingGateImg,
    badge: 'Custom Gates & Walls',
    description: 'Precision black vertical-slat motorized sliding security gate with matching architectural boundary wall fence panels anchored into plastered masonry pillars.',
    specs: ['Heavy-gauge steel slats & anti-lift track', 'Matching perimeter wall fence inserts', 'Centurion automated gate motor integration', 'Coastal anti-rust powder coating']
  },
  {
    id: 'pitched-metal-carport',
    title: 'Engineered Pitched Gable Steel Carport',
    category: 'Structural Steel Carports',
    image: pitchedMetalCarportImg,
    badge: 'Gable Roof Structure',
    description: 'Heavy-duty freestanding structural steel carport featuring engineered welded triangular roof trusses, robust SHS uprights, and corrugated chromadek roofing.',
    specs: ['Engineered welded triangular trusses', 'Corrugated chromadek all-weather sheeting', 'Heavy-duty anchored foundation baseplates', 'Cape Town high wind-load certified']
  },
  {
    id: 'balcony-metal-screen',
    title: 'Architectural Corner Metal Balcony Screen',
    category: 'Balustrades & Screens',
    image: balconyMetalScreenImg,
    badge: 'Architectural Metalwork',
    description: 'Contemporary corner-wrapping architectural metal protection screen and horizontal louvered steel balustrade providing privacy and high-security structural integrity.',
    specs: ['Seamless corner mitred steel frame', 'Aerodynamic horizontal louver profile', 'Concealed tamper-proof facade fixings', 'Matte exterior architectural finish']
  },
  {
    id: 'cantilever-solar-carport',
    title: 'Cantilever Solar-Ready Steel Carport',
    category: 'Solar Carports',
    image: cantileverSolarCarportImg,
    badge: 'Solar-Ready Cantilever',
    description: 'Modern angled cantilever structural steel carport engineered for effortless vehicle clearance with integrated structural mounts for rooftop photovoltaic (PV) solar panels.',
    specs: ['Angled cantilever space-efficient design', 'Photovoltaic (PV) solar panel support rails', 'High-tensile welded steel box sections', 'Precision paved driveway integration']
  }
];

export const companyOverview = {
  name: 'Grange Construction and Steel (Pty) Ltd',
  tradingName: 'Grange Construction & Steel',
  director: 'Management Team',
  tagline: 'Precision Building Construction, Custom Structural Steelwork & Turnkey Property Solutions',
  description: 'Grange Construction and Steel (Pty) Ltd is a full-service general building, structural steel fabrication, architectural finishing, and property maintenance contractor based in Riverton, Cape Town, serving residential, commercial, and industrial clients throughout the Western Cape.',
  address: '29 Bayside Street, Riverton, Cape Town, Western Cape, 7490',
  phone: '+27 71 082 6359',
  whatsapp: '+27 74 055 9954',
  email: 'info@grangeconstructions.co.za',
  stats: [
    { label: 'Core Specializations', value: '4 Divisions', detail: 'Building, Steel, Finishes & Maintenance' },
    { label: 'Regional Coverage', value: 'Cape Town', detail: 'Greater Western Cape Metro' },
    { label: 'Workshop Facility', value: 'Riverton Hub', detail: 'In-House Steel Fabrication' },
    { label: 'Client Guarantee', value: '100% Turnkey', detail: 'Single Point of Contractor Accountability' }
  ],
  coreValues: [
    {
      title: 'Structural Steel Precision',
      description: 'In-house certified fabrication for bespoke security gates, heavy-duty burglar bars, architectural balustrades, steel staircases, and custom engineered carports.'
    },
    {
      title: 'Turnkey Building Excellence',
      description: 'From foundation trenches to roof trusses — executing new residential homes, room extensions, boundary perimeter security walls, and complete structural renovations.'
    },
    {
      title: 'Commercial Maintenance Retainers',
      description: 'Structured property care contracts for property managers, body corporates, and corporate landlords covering wall restoration, repainting, gate maintenance, and rapid repairs.'
    }
  ]
};

export const servicePillars: ServicePillar[] = [
  {
    id: 'building-construction',
    number: '01',
    categoryTag: 'Structural Civil & Residential',
    title: 'Building Construction',
    shortDesc: 'Complete ground-up construction, extensions, structural boundary security walls, and architectural residential and commercial renovations.',
    fullDesc: 'Grange Construction delivers robust, engineered building solutions adhering strictly to SANS 10400 building standards. We manage structural brickwork, concrete slabs, foundations, and turnkey project coordination from approved municipal plans to final occupation.',
    subServices: [
      'New Houses (Turnkey residential developments)',
      'Extensions (Second-storey additions, living space expansions)',
      'Rooms and Garages (Automated garages, granny flats, studio conversions)',
      'Boundary Walls (Vibrated concrete, reinforced masonry, security parapets)',
      'Renovations (Structural knock-throughs, open-plan reconfigurations, modernization)'
    ],
    deliverables: [
      'Site excavations, reinforced strip footing & raft foundation engineering',
      'Structural facebrick and plastered masonry work',
      'NHBRC-compliant roof trusses, timber framing, and tile/corrugated sheeting',
      'Engineered retaining walls and perimeter boundary security walls',
      'Full architectural renovation and room additions'
    ],
    benefits: ['Full NHBRC & municipal compliance', 'Quality materials with manufacturer warranties', 'On-time milestone delivery'],
    icon: 'Building2'
  },
  {
    id: 'steel-fabrication',
    number: '02',
    categoryTag: 'Architectural & Security Steel',
    title: 'Steel Fabrication',
    shortDesc: 'Bespoke custom steel manufacturing, high-security gates, architectural balustrades, burglar bars, and engineered steel carports.',
    fullDesc: 'Our dedicated steel fabrication division combines precision welding, laser-cut styling, anti-corrosion galvanizing, and industrial powder coating. We engineer durable security and structural steel assets built to endure Cape Town’s harsh coastal conditions.',
    subServices: [
      'Security Gates (Sliding, swing, pedestrian, and motorized automated access gates)',
      'Burglar Bars (Spanish style, cottage pane, internal fixture, and clear-bar integration)',
      'Steel Doors (Heavy-duty security doors, fire doors, and warehouse access points)',
      'Carports (Cantilevered, multi-vehicle, polycarb, and galvanized chromadek roofing)',
      'Balustrades (Architectural stainless steel, mild steel, glass infill, and minimalist vertical pickets)',
      'Steel Stairs (Industrial fire escapes, spiral staircases, and interior architectural floating stairs)',
      'Fencing (Palisade fencing, razor wire, anti-climb mesh, and welded perimeter barriers)'
    ],
    deliverables: [
      'Custom CAD measurement, structural drafting, and bespoke metalwork',
      'MIG/TIG certified welding and high-tensile steel joinery',
      'Hot-dip galvanizing and UV-stable exterior powder coating for coastal corrosion resistance',
      'Automated motor gate integration (Centurion / ET Nice systems)',
      'On-site welding, structural anchoring, and certified installation'
    ],
    benefits: ['Maximum intruder deterrence & safety', 'Coastal anti-rust protective treatments', 'Tailor-made to exact property dimensions'],
    icon: 'ShieldCheck'
  },
  {
    id: 'finishing-work',
    number: '03',
    categoryTag: 'Interior & Exterior Craftsmanship',
    title: 'Finishing Work',
    shortDesc: 'Pristine porcelain & ceramic tiling, premium interior/exterior painting, skim plastering, decorative ceilings, brick paving, and waterproofing.',
    fullDesc: 'The final finishes define the aesthetic quality and durability of any structure. Grange Construction executes master-level finishing with zero visible flaws, razor-sharp grout lines, seamless skim plastering, and industrial-grade waterproofing.',
    subServices: [
      'Tiling (Large-format porcelain, ceramic, natural stone, mosaic splashbacks, and commercial non-slip floors)',
      'Painting (Interior wall prep, exterior weather-resistant coatings, enamel trims, and roof spraying)',
      'Plastering (Smooth rhinolite skim plaster, textured rendering, and damp-barrier base coats)',
      'Ceiling Installation (Drop ceilings, knotty pine, flush-plastered suspended ceilings, and cornices)',
      'Paving (Interlocking pavers, bevel paving, cobblestones for driveways, patios, and walkways)',
      'Waterproofing (Torch-on membrane, liquid acrylic waterproofing, parapet flashing, and balcony sealing)'
    ],
    deliverables: [
      'Laser-leveled floor and wall tile alignment with flexible waterproof grouting',
      'Multi-coat high-durability paint systems (Plascon / Dulux trade specifications)',
      'Moisture-resistant gypsum and acoustic drop-ceiling suspension grids',
      'Heavy-duty compacted gravel sub-base for vehicular driveway paving',
      '10-year certified torch-on waterproofing membranes for flat roofs and balconies'
    ],
    benefits: ['Flawless visual finishes', 'Guaranteed leak-free waterproofing', 'Enhanced property market valuation'],
    icon: 'Paintbrush'
  },
  {
    id: 'property-maintenance',
    number: '04',
    categoryTag: 'Commercial & Residential Retainers',
    title: 'Property Maintenance',
    shortDesc: 'Routine building care, crack and wall repairs, preventative maintenance contracts, and rapid servicing for landlords and businesses.',
    fullDesc: 'We safeguard property asset values through structured maintenance solutions. From urgent structural crack stitching and repainting to commercial facility contracts, we ensure properties remain pristine, safe, and fully functional.',
    subServices: [
      'Repair Damaged Walls (Crack stitching, damp repair, replastering, and foundation settling remediation)',
      'Repaint Buildings (Full exterior building painting, high-pressure washing, and weather protection)',
      'Fix Gates and Fences (Motor servicing, track re-alignment, rust treatment, and hinge welding)',
      'General Building Maintenance (Plumbing fixtures, roof tile replacements, fascia board repairs)',
      'Maintenance Contracts for Businesses and Landlords (Scheduled monthly/quarterly SLA facility management)'
    ],
    deliverables: [
      'Scheduled preventative facility maintenance audits and structural health reports',
      'Priority emergency call-out response for security gates, burst pipes, and structural damage',
      'Body corporate and sectional title common-property upkeep agreements',
      'Tenant change-over fast-track renovations and touch-ups',
      'Itemized monthly billing with transparent material and labor accounts'
    ],
    benefits: ['Eliminates costly emergency repairs', 'Preferred SLA response times', 'Dedicated point of contact for property managers'],
    icon: 'Wrench'
  }
];

export const projectShowcase: ProjectItem[] = [
  {
    id: 'riverton-modern-residence',
    title: 'Turnkey Double-Storey Home & Boundary Wall',
    client: 'Private Residential Homeowner',
    category: 'Building Construction',
    location: 'Riverton, Cape Town',
    area: '280 m²',
    year: '2026',
    deliveryMethod: 'Turnkey General Contracting',
    description: 'Ground-up residential build featuring reinforced concrete foundations, structural clay brickwork, automated double garage, and a 2.4-meter perimeter security boundary wall with integrated lighting conduits.',
    highlights: [
      'Completed full foundation, brickwork, roof trusses, and interior room divisions in 18 weeks',
      'Engineered reinforced boundary wall with anti-climb foundation footing',
      'Integrated solar-ready conduit routing and rainwater harvesting storage slab'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      sqft: '280 m² (3,010 sq ft)',
      timeline: '4.5 Months',
      engineerOrFabricator: 'Grange Construction Civils Team',
      scope: 'New house construction, double garage, perimeter wall, plumbing & electrical rough-ins'
    }
  },
  {
    id: 'camps-bay-architectural-steel',
    title: 'Custom Motorized Slat Security Gate & Balcony Screen',
    client: 'Residential Property Owner',
    category: 'Steel Fabrication',
    location: 'Camps Bay, Western Cape',
    area: '45 Linear Meters Custom Steelwork',
    year: '2026',
    deliveryMethod: 'Bespoke Fabrication & Turnkey Install',
    description: 'Architectural marine-grade hot-dip galvanized and matte black powder-coated steelwork package including automated vertical-slat driveway sliding gate, integrated boundary masonry fence grilles, and contemporary corner-louvered balcony balustrades.',
    highlights: [
      'Vertical-slat automated sliding gate with matching boundary wall inserts',
      'Marine-grade coastal powder coating preventing rust and salt-air deterioration',
      'Centurion automated gate motor integration with remote access and battery backup',
      'Architectural corner metal balcony screen and safety louver enclosure'
    ],
    imageUrl: steelSlidingGateImg,
    galleryImages: [
      balconyMetalScreenImg,
      pitchedMetalCarportImg,
      cantileverSolarCarportImg
    ],
    specs: {
      sqft: '6m Motorized Slat Gate + 35m Boundary & Balcony Steelwork',
      timeline: '3 Weeks Fabrication & 3 Days Install',
      engineerOrFabricator: 'Grange Steel Fabrication Workshop',
      scope: 'Motorized security gate, boundary wall slats, corner balcony protection louvers'
    }
  },
  {
    id: 'constantia-pitched-cantilever-carports',
    title: 'Engineered Pitched-Roof & Cantilever Solar Steel Carports',
    client: 'Private Estate & Commercial Yard',
    category: 'Steel Fabrication',
    location: 'Constantia & Riverton, Cape Town',
    area: 'Multi-Bay Engineered Carport Solutions',
    year: '2026',
    deliveryMethod: 'Custom Design, Welding & Erection',
    description: 'Turnkey structural steel carport projects including heavy-duty gable roof carports with welded triangular trusses and chromadek corrugated roofing, alongside modern angled cantilever carports engineered for rooftop solar photovoltaic arrays.',
    highlights: [
      'Heavy-duty gable steel trusses designed for Cape Town winter gale-force wind loads',
      'Corrosion-resistant marine undercoat with matte black industrial finish',
      'Cantilever solar-ready carport profile providing unobstructed vehicle parking clearance',
      'Engineered concrete footings with heavy-gauge anchoring baseplate assemblies'
    ],
    imageUrl: pitchedMetalCarportImg,
    galleryImages: [
      cantileverSolarCarportImg,
      steelSlidingGateImg,
      balconyMetalScreenImg
    ],
    specs: {
      sqft: 'Double & Triple Bay Carport Footprint',
      timeline: '2 Weeks Fabrication & 2 Days On-Site Erection',
      engineerOrFabricator: 'Grange Steel Fabrication Hub',
      scope: 'Pitched gable steel carport, welded trusses, cantilever solar frame, chromadek roof'
    }
  },
  {
    id: 'century-city-corporate-finishes',
    title: 'Full Porcelain Tiling, Ceiling & Waterproofing Overhaul',
    client: 'Commercial Property Fund',
    category: 'Finishing Work',
    location: 'Century City, Cape Town',
    area: '620 m²',
    year: '2026',
    deliveryMethod: 'Turnkey Finishes Contract',
    description: 'High-end interior finishing contract across two commercial floors including 1200x600mm rectified porcelain floor tiling, acoustic flush-plastered suspended ceilings, skimmed partition walls, and flat-roof torch-on waterproofing.',
    highlights: [
      'Flawless laser-aligned tiling across expansive 450 m² open reception and boardroom areas',
      'Dual-layer 4mm bitumen torch-on waterproofing over rooftop terrace with 10-year warranty',
      'Executed under night-shift schedule ensuring zero disruption to existing building tenants'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      sqft: '620 m² Tiling & Ceilings',
      timeline: '4 Weeks (Fast-Track Night Shift)',
      engineerOrFabricator: 'Grange Finishes Craftsmen Group',
      scope: 'Large-format tiling, rhinolite skim, drop ceilings, torch-on waterproofing, paving'
    }
  },
  {
    id: 'atlantic-seaboard-maintenance-sla',
    title: 'Residential Complex Multi-Year Maintenance Retainer',
    client: 'Bayside View Body Corporate',
    category: 'Property Maintenance',
    location: 'Sea Point & Bayside, Cape Town',
    area: '18 Units Sectional Title Scheme',
    year: '2026',
    deliveryMethod: 'Annual SLA Maintenance Contract',
    description: 'Comprehensive property upkeep SLA covering exterior crack repairs, weatherproof building repainting, monthly gate motor servicing, boundary fence rust prevention, and emergency plumbing/maintenance call-outs.',
    highlights: [
      '24-Hour guaranteed response SLA for security gate and perimeter fencing failures',
      'Structural crack stitching and elastomeric waterproof coating applied to ocean-facing facade',
      'Reduced annual unbudgeted body corporate maintenance expenses by 32%'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      sqft: '18 Sectional Title Residential Units',
      timeline: '12-Month Ongoing Retainer SLA',
      engineerOrFabricator: 'Grange Maintenance Response Unit',
      scope: 'Structural crack repair, full exterior repainting, gate servicing, paving restoration'
    }
  }
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: 'Andile',
    role: 'Managing Director & Founder',
    experience: 'Hands-On Building Contractor & Steel Fabrication Specialist',
    bio: 'Andile founded Grange Construction and Steel (Pty) Ltd to provide Western Cape property owners and developers with an integrated contractor that unites structural civil building with precision in-house metal fabrication. As active Managing Director, he personally oversees on-site quality, structural integrity, and client satisfaction on every project.',
    credentials: 'Director (CIPC Reg: 2026/727301/07); Registered Office: 29 Bayside Street, Riverton, Cape Town',
    image: directorAndileImg
  },
  {
    name: 'Chief Metal Fabricator & Engineer',
    role: 'Head of Steelwork & Welding Operations',
    experience: '15+ Years in High-Tensile Security & Architectural Metal Fabrication',
    bio: 'Leads our fabrication workshop in precision TIG/MIG welding, automated gate assemblies, anti-corrosion galvanizing treatments, and custom architectural balustrade engineering.',
    credentials: 'Certified Structural Steel Welder; SANS 10162 Steel Standards',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Lead Site Superintendent & Finishes Specialist',
    role: 'Building Construction & Finishing Supervisor',
    experience: '14+ Years in Brickwork, Porcelain Tiling, and Waterproofing',
    bio: 'Directs day-to-day site operations, brickwork quality control, level tiling inspections, and certified torch-on waterproofing installations across Cape Town job sites.',
    credentials: 'NHBRC Quality Compliance Officer; SANS 10400 Code of Practice',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Riverton, Cape Town',
    state: 'Western Cape',
    region: 'Registered Office & Steel Workshop Hub',
    address: '29 Bayside Street, Riverton, Cape Town, Western Cape, 7490',
    phone: '+27 71 082 6359',
    email: 'info@grangeconstructions.co.za',
    coordinates: '33.9512° S, 18.5721° E',
    isPrimary: true
  },
  {
    city: 'Cape Town Metro & Western Cape',
    state: 'Western Cape',
    region: 'Direct Mobile & WhatsApp Quote Line',
    address: 'Serving City Bowl, Atlantic Seaboard, Northern & Southern Suburbs, Winelands',
    phone: '+27 74 055 9954',
    email: 'info@grangeconstructions.co.za',
    coordinates: '33.9249° S, 18.4241° E',
    isPrimary: false
  }
];
