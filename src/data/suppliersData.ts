export interface SupplierItem {
  id: string;
  category: 'Cement & Concrete' | 'Tiles & Ceramics' | 'Roofsheets & Cladding' | 'Wheelbarrows & Tools' | 'Sand, Aggregates & ReadyMix' | 'Lift Mechanisms & Hoists' | 'Hardware Merchants & Outlets';
  name: string;
  brandOrProducer: string;
  capeTownBranches: string;
  tradeRole: string;
  keyProducts: string[];
  description: string;
  standards: string;
}

export const supplierCategories = [
  'All Materials',
  'Hardware Merchants & Outlets',
  'Cement & Concrete',
  'Tiles & Ceramics',
  'Roofsheets & Cladding',
  'Wheelbarrows & Tools',
  'Sand, Aggregates & ReadyMix',
  'Lift Mechanisms & Hoists'
] as const;

export const verifiedSuppliers: SupplierItem[] = [
  // 1. Hardware Merchants & Outlets (Builders & Local Cape Town Trade Merchants)
  {
    id: 'sup-builders',
    category: 'Hardware Merchants & Outlets',
    name: 'Builders Warehouse / Builders Express',
    brandOrProducer: 'Massmart / Trade & Commercial Supply',
    capeTownBranches: 'Tyger Valley, City Rivergate, Tokai, Northgate & Helderberg',
    tradeRole: 'Primary Trade Merchant & Fast-Turnaround Materials',
    keyProducts: ['PPC & AfriSam Cements in Bulk', 'Lasher Falcon Heavy-Duty Wheelbarrows', 'IBR Galvanised & Colorplus Roofsheets', 'Fixings, Anchors, Structural Fasteners & Angle Irons'],
    description: 'Our primary Cape Town hardware merchant partner for scheduled site runs, bulk bagged materials, power tools, safety gear, and daily trade consumables across the Peninsula.',
    standards: 'SABS Approved Products / Commercial Trade Account'
  },
  {
    id: 'sup-buco',
    category: 'Hardware Merchants & Outlets',
    name: 'BUCO Western Cape',
    brandOrProducer: 'The Building Company (Pty) Ltd',
    capeTownBranches: 'Parow, Paarden Eiland, Blackheath & Somerset West',
    tradeRole: 'Trade Building Merchant & Timber/Roof Yard',
    keyProducts: ['SA Pine Structural Roof Trusses', 'Corrugated & IBR Sheeting', 'Brickforce & Welded Mesh 193/245', 'Lintels, Cement, Mortar Mixes'],
    description: 'Dedicated trade yard supporting Grange with heavy building lumber, reinforcing wire mesh, and direct-to-site flatbed deliveries across the Western Cape.',
    standards: 'SANS Timber & Wire Mesh Certified'
  },
  {
    id: 'sup-brights',
    category: 'Hardware Merchants & Outlets',
    name: 'Brights Hardware (Western Cape)',
    brandOrProducer: 'Independent Western Cape Merchant (Est. 1971)',
    capeTownBranches: 'Stikland (HQ), Boston/Bellville, Brackenfell, Sunningdale & Plattekloof',
    tradeRole: 'Local Cape Hardware & Electrical Specialist',
    keyProducts: ['Steel Tubing, Flat Bar & Angle Iron', 'Specialist Welding Electrodes & Cut-Off Discs', 'Industrial Hardware, Locks & Gate Automation Spares'],
    description: 'Family-founded Western Cape institution known for deep industrial and steel-welding stocks, heavy gate hardware, and trade tools in the Northern Suburbs.',
    standards: 'Western Cape Master Builders Affiliated'
  },

  // 2. Cement & Concrete (Western Cape Producers)
  {
    id: 'sup-ppc',
    category: 'Cement & Concrete',
    name: 'PPC Cement (Pretoria Portland Cement)',
    brandOrProducer: 'PPC Surebuild 42.5N / OPC 52.5N',
    capeTownBranches: 'Riebeeck West Plant & Western Cape Distribution Depots',
    tradeRole: 'Western Cape Regional Cement Manufacturing Mill',
    keyProducts: ['Surebuild 42.5N General Structural Purpose', 'OPC 52.5N High Strength Structural Castings', 'Sureroad Soil Stabilization'],
    description: 'Produced locally in the Western Cape at Riebeeck West. PPC 42.5N is the structural foundation standard specified across all Grange concrete columns, ring beams, and slabs.',
    standards: 'SANS 50197-1 / CEM II 42.5N / SABS Mark'
  },
  {
    id: 'sup-afrisam',
    category: 'Cement & Concrete',
    name: 'AfriSam South Africa',
    brandOrProducer: 'AfriSam All Purpose 42.5R & Starbuild',
    capeTownBranches: 'Bellville & Philippi Western Cape Depots',
    tradeRole: 'Coastal Blended Cement & Aggregates Manufacturer',
    keyProducts: ['AfriSam All Purpose 42.5R Rapid Hardening', 'Starbuild 32.5N Plaster & Mortar', 'Pre-blended Concrete Mortars'],
    description: 'Engineered specifically for coastal durability to minimize hairline cracking in Western Cape sea-air and winter moisture environments.',
    standards: 'SANS 50197-1 / Low Carbon Footprint Tested'
  },

  // 3. Tiles & Ceramics (Cape Town Showrooms & Trade Depots)
  {
    id: 'sup-ctm',
    category: 'Tiles & Ceramics',
    name: 'CTM South Africa (Cape Town Trade)',
    brandOrProducer: 'Italtile Group / Tivoli / Kilimanjaro',
    capeTownBranches: 'Paarden Eiland, Brackenfell, Tokai & Mitchells Plain',
    tradeRole: 'High-Volume Ceramic & Porcelain Floor Specialist',
    keyProducts: ['Full-Body Vitrified Porcelain Tiles', 'Non-Slip Textured Outdoor Patio Pavers', 'Glazed Ceramic Wall Tiles', 'TAL & CTM Professional Tile Adhesives'],
    description: 'Cape Town trade depot supplying high-abrasion resistance (PEI 4 & 5) porcelain tiles and adhesives for residential extensions, kitchens, and commercial bathrooms.',
    standards: 'ISO 10545 Quality Tested / SABS Wear Rated'
  },
  {
    id: 'sup-italtile',
    category: 'Tiles & Ceramics',
    name: 'Italtile Commercial Cape Town',
    brandOrProducer: 'Italtile Architectural Ceramics',
    capeTownBranches: 'Somerset West & Tygervalley Showrooms',
    tradeRole: 'Architectural Spec Tile & Sanitaryware Importer',
    keyProducts: ['Large-Format Slab Porcelains (1200x600 & 1600x800)', 'Slip-Resistant R10/R11 External Tiles', 'Epoxy Chemical-Resistant Grouts'],
    description: 'Specified for Grange executive builds and modern architectural renovations requiring laser-rectified edges and seamless floor finishes.',
    standards: 'EN 14411 / Slip Resistance R10/R11'
  },
  {
    id: 'sup-tile-africa',
    category: 'Tiles & Ceramics',
    name: 'Tile Africa Commercial',
    brandOrProducer: 'Norcros SA / TAL Bonding Systems',
    capeTownBranches: 'Paarden Eiland & Bellville Commercial Yards',
    tradeRole: 'Contractor Tile & Surface Bonding Depot',
    keyProducts: ['TAL Goldstar Rapid-Set Adhesives', 'Waterproof Shower Barrier Membranes', 'Heavy Commercial Quarry Flooring'],
    description: 'Specialists in heavy substrate preparation and flexible bonding mortars preventing tile hollows or debonding under Western Cape temperature swings.',
    standards: 'SABS 1307 Approved Adhesives'
  },

  // 4. Roofsheets & Cladding (Cape Town Steel Coaters & Roll-Formers)
  {
    id: 'sup-safal',
    category: 'Roofsheets & Cladding',
    name: 'Safal Steel / Macsteel Western Cape',
    brandOrProducer: 'Colorplus® & Zincal® Marine Spec',
    capeTownBranches: 'Epping Industrial & Bellville South Yards',
    tradeRole: 'Primary Steel Coil Coater & Roll-Former',
    keyProducts: ['IBR 0.58mm Profile Marine AZ150 Sheeting', 'Corrugated 10.5 High-Rib Profile', 'Concealed-Fix Klip-Lok Industrial Sheets', 'Color-Matched Flashings & Cappings'],
    description: 'Zincal® and Colorplus® alloy-coated roofsheets rolled in Cape Town to precise site cut lengths. Specifically treated for extreme Atlantic salt-mist resistance with 20-year guarantees.',
    standards: 'SANS 4998 / AZ150 Marine Grade Coastal Spec'
  },
  {
    id: 'sup-palram',
    category: 'Roofsheets & Cladding',
    name: 'Palram Canopies & Skylights Cape',
    brandOrProducer: 'Suntuf® Polycarbonate',
    capeTownBranches: 'Airport Industrial, Cape Town',
    tradeRole: 'Specialist Polycarbonate & Translucent Sheet Importer',
    keyProducts: ['Corrugated Polycarbonate Carport Sheeting', 'Multi-Wall UV-Treated Pergola Canopies', 'Industrial Skylight Sections'],
    description: 'Hail-resistant, UV-blocked architectural roofsheets custom mounted by Grange on structural steel carports, perimeter walkways, and outdoor braai areas.',
    standards: 'EN 1013 / 10-Year UV Discolouration Warranty'
  },

  // 5. Wheelbarrows & Contractor Tools (South African Heritage Tooling)
  {
    id: 'sup-lasher',
    category: 'Wheelbarrows & Tools',
    name: 'Lasher Tools South Africa',
    brandOrProducer: 'Falcon & Panther Contractor Barrows',
    capeTownBranches: 'Paarden Eiland Depot & Distributed via Builders Warehouse',
    tradeRole: 'National Industrial Tool & Barrow Manufacturer',
    keyProducts: ['Lasher Concrete Wheelbarrow (Seamless Deep Pan)', 'Solid Polyurethane Flat-Free Wheel Assemblies', 'Contractor Spades, Shovels, Picks & Trowels', 'Heavy Mortar Mixing Troughs'],
    description: 'The standard on all Grange building sites since inception. Heavy 1.2mm steel pans with reinforced nose bumpers and welded chassis that take 250kg concrete loads without flexing.',
    standards: 'SABS 1137 / Certified Contractor Lifetime Body Guarantee'
  },

  // 6. Sand, Aggregates & ReadyMix (Direct Cape Town Quarries)
  {
    id: 'sup-afrimat',
    category: 'Sand, Aggregates & ReadyMix',
    name: 'Afrimat Quarries Western Cape',
    brandOrProducer: 'Afrimat Aggregates (Pty) Ltd',
    capeTownBranches: 'Tygerberg Quarry, Durbanville & Klipheuwel',
    tradeRole: 'Primary Regional Stone Quarry & Sand Pit',
    keyProducts: ['19mm Crushed Granite Concrete Stone', '13mm Pea Gravel for Precast Lintels', 'Clean Sharp Plaster Sand (Washed)', 'Cape Dune & Philippi Washed Sand', 'G5 Subbase Filling'],
    description: 'Locally quarried aggregates tested for zero silt and organic impurities. Ensures structural strength compliance and prevents plaster dusting and hair-cracking.',
    standards: 'SANS 1083 / Regular Laboratory Sieve Grading'
  },
  {
    id: 'sup-readymix',
    category: 'Sand, Aggregates & ReadyMix',
    name: 'PPC & Lafarge ReadyMix Cape Town',
    brandOrProducer: 'Certified 25MPa / 30MPa ReadyMix',
    capeTownBranches: 'Epping, Ndabeni & Bellville Batching Plants',
    tradeRole: 'Computerized Concrete Batching & Mixer Fleet',
    keyProducts: ['25MPa Foundation Strip Footings Mix', '30MPa High-Early Strength Suspended Slabs', 'Pumpable Micro-Mix for Columns & Lintels', 'Cube Crush Test Verification Certificates'],
    description: 'Direct computerized batching with on-site slump tests and certified 7-day and 28-day laboratory cube crush certificates for structural engineer sign-off.',
    standards: 'SANS 878 / Engineer Cube Crush Compliance'
  },

  // 7. Lift Mechanisms, Hoists & Rigging (Western Cape Certified Entities)
  {
    id: 'sup-konecranes',
    category: 'Lift Mechanisms & Hoists',
    name: 'Konecranes & Demag Western Cape',
    brandOrProducer: 'Demag Industrial Lifting Entities',
    capeTownBranches: 'Paarden Eiland Service Centre & Workshop',
    tradeRole: 'Industrial Workshop Cranes & Heavy Electric Hoists',
    keyProducts: ['Electric Wire Rope Workshop Hoists (1T to 10T)', 'Overhead Travelling Gantry Cranes', 'Precision Inverter-Driven Hoists for Steel Fabrication'],
    description: 'Heavy lifting infrastructure installed at our Riverton steel fabrication yard to maneuver heavy I-beams, portal frames, and structural columns with precision.',
    standards: 'Lifting Machine Entity (LME) / SANS 15011 Certified'
  },
  {
    id: 'sup-vital',
    category: 'Lift Mechanisms & Hoists',
    name: 'Vital & Tractel Rigging Cape Town',
    brandOrProducer: 'Vital Heavy-Duty Mechanical Hoists',
    capeTownBranches: 'Montague Gardens Industrial Depot',
    tradeRole: 'Site Rigging, Chain Blocks & Steel Erection Hoists',
    keyProducts: ['Manual Geared Chain Blocks (1T, 2T, 5T)', 'Lever Ratchet Hoists for Column Alignment', 'Tirfor Cable Pulling Winches', 'Beam Clamps & Safety Webbing Slings'],
    description: 'Fail-safe mechanical manual lifting equipment utilized on Grange construction sites to hoist steel roof beams, concrete lintels, and heavy sliding gates into place.',
    standards: 'SANS 1594 / Annual Proof-Load Certificate Issued'
  }
];
