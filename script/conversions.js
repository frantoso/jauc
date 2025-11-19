/* jshint esversion: 6 */
/* jshint globalstrict:true */

'use strict'

// eslint-disable-next-line no-unused-vars
const conversions = [{
  name: 'length',
  title: 'length',
  units: [{
    name: 'length:meter',
    title: 'meter',
    symbol: 'm',
    si: 'True',
    op1: '1'
  }, {
    name: 'length:kilometer',
    title: 'kilometer',
    symbol: 'km',
    op1: '0.001'
  }, {
    name: 'length:centimeter',
    title: 'centimeter',
    symbol: 'cm',
    op1: '100'
  }, {
    name: 'length:millimeter',
    title: 'millimeter',
    symbol: 'mm',
    op1: '1000'
  }, {
    name: 'length:micrometer',
    title: 'micrometer',
    symbol: 'µm',
    op1: '1000000'
  }, {
    name: 'length:inch',
    title: 'inch',
    symbol: 'in',
    op1: '39.3700787401575'
  }, {
    name: 'length:yard',
    title: 'yard',
    symbol: 'yd',
    op1: '1.09361329833771'
  }, {
    name: 'length:foot',
    title: 'foot',
    symbol: 'ft',
    op1: '3.28083989501312'
  }, {
    name: 'length:mile',
    title: 'mile',
    symbol: 'mi',
    op1: '0.000621371192237334'
  }, {
    name: 'length:link_(U.S._survey_foot)',
    title: 'link (U.S. survey foot)',
    symbol: 'li',
    op1: '4.97095965370307'
  }, {
    name: 'length:link_(Engineer’s_measurement)',
    title: 'link (Engineer’s measurement)',
    symbol: 'lnk',
    op1: '3.28083989501312'
  }, {
    name: 'length:rod__pole__perch',
    title: 'rod / pole / perch',
    symbol: 'rd',
    op1: '0.198838386148123'
  }, {
    name: 'length:chain_(U.S._survey_foot)',
    title: 'chain (U.S. survey foot)',
    symbol: 'ch',
    op1: '0.0497095965370307'
  }, {
    name: 'length:chain_(Engineer’s_measurement)',
    title: 'chain (Engineer’s measurement)',
    symbol: 'ch',
    op1: '0.0328083989501312'
  }, {
    name: 'length:furlong',
    title: 'furlong',
    symbol: 'ch',
    op1: '0.00497095965370307'
  }, {
    name: 'length:fathom',
    title: 'fathom',
    symbol: 'fm',
    op1: '0.546806649168854'
  }, {
    name: 'length:shackle_(UK),_shot_(US)',
    title: 'shackle (UK), shot (US)',
    symbol: '-',
    op1: '0.0364537766112569'
  }, {
    name: 'length:cable',
    title: 'cable',
    symbol: 'cbl',
    op1: '0.00546806649168854'
  }, {
    name: 'length:nautical_mile__sea_mile',
    title: 'nautical mile / sea mile',
    symbol: 'NM',
    op1: '0.000539956803455724'
  }, {
    name: 'length:twip',
    title: 'twip',
    symbol: 'twp',
    op1: '56695.770495521'
  }, {
    name: 'length:calibre',
    title: 'calibre',
    symbol: 'cal',
    op1: '3937.00787401575'
  }, {
    name: 'length:point',
    title: 'point',
    symbol: 'pt',
    op1: '2834.70816679423'
  }, {
    name: 'length:line',
    title: 'line',
    symbol: 'ln',
    op1: '472.589792060491'
  }, {
    name: 'length:league',
    title: 'league',
    symbol: 'lea',
    op1: '0.000207123730745778'
  }]
}, {
  name: 'mass',
  title: 'mass',
  units: [{
    name: 'mass:kilogram',
    title: 'kilogram',
    symbol: 'kg',
    si: 'True',
    op1: '1'
  }, {
    name: 'mass:megaton',
    title: 'megaton',
    symbol: 'mt',
    op1: '0.000000001'
  }, {
    name: 'mass:kiloton',
    title: 'kiloton',
    symbol: 'kt',
    op1: '0.000001'
  }, {
    name: 'mass:ton',
    title: 'ton',
    symbol: 't',
    op1: '0.001'
  }, {
    name: 'mass:hectogram',
    title: 'hectogram',
    symbol: 'hg',
    op1: '10'
  }, {
    name: 'mass:decagram',
    title: 'decagram',
    symbol: 'dag',
    op1: '100'
  }, {
    name: 'mass:gram',
    title: 'gram',
    symbol: 'g',
    op1: '1000'
  }, {
    name: 'mass:decigram',
    title: 'decigram',
    symbol: 'dg',
    op1: '10000'
  }, {
    name: 'mass:centigram',
    title: 'centigram',
    symbol: 'cg',
    op1: '100000'
  }, {
    name: 'mass:milligram',
    title: 'milligram',
    symbol: 'mg',
    op1: '1000000'
  }, {
    name: 'mass:microgram',
    title: 'microgram',
    symbol: 'µg',
    op1: '1000000000'
  }, {
    name: 'mass:nanogram',
    title: 'nanogram',
    symbol: 'ng',
    op1: '1000000000000'
  }, {
    name: 'mass:hundredweight_german',
    title: 'hundredweight (german)',
    symbol: 'zt',
    op1: '0.02'
  }, {
    name: 'mass:pound_german',
    title: 'pound (german)',
    symbol: 'pfund',
    op1: '2'
  }, {
    name: 'mass:carat_metric',
    title: 'carat (metric)',
    symbol: 'ct',
    op1: '5000'
  }, {
    name: 'mass:long_ton',
    title: 'long ton',
    symbol: 'tn. l.',
    op1: '0.0009842065'
  }, {
    name: 'mass:short_ton',
    title: 'short ton',
    symbol: 'tn. sh.',
    op1: '0.0011023113'
  }, {
    name: 'mass:long_hundredweight',
    title: 'long hundredweight',
    symbol: 'cwt. l.',
    op1: '0.0196841306'
  }, {
    name: 'mass:short_hundredweight',
    title: 'short hundredweight',
    symbol: 'cwt. sh.',
    op1: '0.0220462262'
  }, {
    name: 'mass:long_quarter',
    title: 'long quarter',
    symbol: 'qr. l.',
    op1: '0.07873652221'
  }, {
    name: 'mass:short_quarter',
    title: 'short quarter',
    symbol: 'qr. sh.',
    op1: '0.08818849049'
  }, {
    name: 'mass:stone',
    title: 'stone',
    symbol: 'st.',
    op1: '0.1574730444'
  }, {
    name: 'mass:pound_lb',
    title: 'pound',
    symbol: 'lb.',
    op1: '2.2046226218'
  }, {
    name: 'mass:ounce',
    title: 'ounce',
    symbol: 'oz.',
    op1: '35.27396195'
  }, {
    name: 'mass:dram',
    title: 'dram',
    symbol: 'dr.',
    op1: '564.38339119'
  }, {
    name: 'mass:grain',
    title: 'grain',
    symbol: 'gr',
    op1: '15432.358353'
  }, {
    name: 'mass:pound_troy',
    title: 'pound (troy)',
    symbol: 'ld. t.',
    op1: '2.679228885'
  }, {
    name: 'mass:ounce_troy',
    title: 'ounce (troy)',
    symbol: 'oz. tr.',
    op1: '32.150747396'
  }, {
    name: 'mass:pennyweight_troy',
    title: 'pennyweight',
    symbol: 'dwt.',
    op1: '642.9506'
  }, {
    name: 'mass:carat_troy',
    title: 'carat (troy)',
    symbol: 'ct',
    op1: '4877.561'
  }, {
    name: 'mass:grain_troy',
    title: 'grain (troy)',
    symbol: 'gr. tr.',
    op1: '15432.358378'
  }, {
    name: 'mass:mite_troy',
    title: 'mite (troy)',
    symbol: '',
    op1: '308616.4'
  }, {
    name: 'mass:doite_troy',
    title: 'doite (troy)',
    symbol: '',
    op1: '7406796'
    // }, {
    //     "name": "mass:",
    //     "title": "",
    //     "symbol": "",
    //     "op1": "1",
    // }, {
    //     "name": "mass:",
    //     "title": "",
    //     "symbol": "",
    //     "op1": "1",
    // }, {
    //     "name": "mass:",
    //     "title": "",
    //     "symbol": "",
    //     "op1": "1",
    // }, {
    //     "name": "mass:",
    //     "title": "",
    //     "symbol": "",
    //     "op1": "1",
  }]

}, {
  name: 'rated_power',
  title: 'rated power',
  units: [{
    name: 'rated_power:watt',
    title: 'watt',
    symbol: 'W',
    si: 'True',
    op1: '1'
  }, {
    name: 'rated_power:kilowatt',
    title: 'kilowatt',
    symbol: 'kW',
    op1: '0.001'
  }, {
    name: 'rated_power:german_horsepower',
    title: 'german horsepower',
    symbol: 'hp',
    op1: '0.00136'
  }, {
    name: 'rated_power:brake_horsepower',
    title: 'brake horsepower',
    symbol: 'bhp',
    op1: '0.0013410218586563'
  }, {
    name: 'rated_power:large_calorie_(kilocalorie)_per_hour',
    title: 'large calorie (kilocalorie) per hour',
    symbol: 'kcal/h',
    op1: '0.86'
  }]
}, {
  name: 'temperature',
  title: 'temperature',
  units: [{
    name: 'temperature:Kelvin',
    title: 'Kelvin',
    symbol: 'K',
    si: 'True',
    op1: '1'
  }, {
    name: 'temperature:Celsius',
    title: 'Celsius',
    symbol: '°C',
    op1: '273.15',
    formula: 'f02',
    signed: 'True'
  }, {
    name: 'temperature:Fahrenheit',
    title: 'Fahrenheit',
    symbol: '°F',
    op1: '1.8',
    op2: '459.67',
    formula: 'f03',
    signed: 'True'
  }, {
    name: 'temperature:Rankine',
    title: 'Rankine',
    symbol: '°Ra',
    op1: '1.8'
  }, {
    name: 'temperature:Réaumur',
    title: 'Réaumur',
    symbol: '°Ré',
    op1: '273.15',
    op2: '0.8',
    formula: 'f04',
    signed: 'True'
  }, {
    name: 'temperature:Newton',
    title: 'Newton',
    symbol: '°N',
    op1: '273.15',
    op2: '0.33',
    formula: 'f04',
    signed: 'True'
  }, {
    name: 'temperature:Delisle',
    title: 'Delisle',
    symbol: '°De',
    op1: '373.15',
    op2: '-1.5',
    formula: 'f04',
    signed: 'True'
  }, {
    name: 'temperature:Rømer',
    title: 'Rømer',
    symbol: '°Rø',
    op1: '273.15',
    op2: '0.525',
    op3: '7.5',
    formula: 'f05',
    signed: 'True'
  }]
}, {
  name: 'speed_or_velocity',
  title: 'speed or velocity',
  units: [{
    name: 'speed_or_velocity:meter_per_second',
    title: 'meter per second',
    symbol: 'm/s',
    si: 'True',
    op1: '1'
  }, {
    name: 'speed_or_velocity:kilometers_per_hour',
    title: 'kilometers per hour',
    symbol: 'km/h',
    op1: '3.6'
  }, {
    name: 'speed_or_velocity:mile_per_hour',
    title: 'mile per hour',
    symbol: 'mph',
    op1: '2.2369362920544'
  }, {
    name: 'speed_or_velocity:mile_per_minute',
    title: 'mile per minute',
    symbol: 'mpm',
    op1: '0.03728227153424'
  }, {
    name: 'speed_or_velocity:mile_per_second',
    title: 'mile per second',
    symbol: 'mps',
    op1: '0.000621371192237334'
  }, {
    name: 'speed_or_velocity:foot_per_hour',
    title: 'foot per hour',
    symbol: 'fph',
    op1: '11811.0236220472'
  }, {
    name: 'speed_or_velocity:foot_per_minute',
    title: 'foot per minute',
    symbol: 'fpm',
    op1: '196.850393700787'
  }, {
    name: 'speed_or_velocity:foot_per_second',
    title: 'foot per second',
    symbol: 'fps',
    op1: '3.28083989501312'
  }, {
    name: 'speed_or_velocity:inch_per_hour',
    title: 'inch per hour',
    symbol: 'iph',
    op1: '141732.283464567'
  }, {
    name: 'speed_or_velocity:inch_per_minute',
    title: 'inch per minute',
    symbol: 'ipm',
    op1: '2362.20472440945'
  }, {
    name: 'speed_or_velocity:inch_per_second',
    title: 'inch per second',
    symbol: 'ips',
    op1: '39.3700787401575'
  }, {
    name: 'speed_or_velocity:knot',
    title: 'knot',
    symbol: 'kn/ kt',
    op1: '1.9438444924406'
  }, {
    name: 'speed_or_velocity:knot_(Admiralty)',
    title: 'knot (Admiralty)',
    symbol: 'kn',
    op1: '1.94260382731806'
  }, {
    name: 'speed_or_velocity:mach_number_(-50_°C)',
    title: 'mach number (-50 °C)',
    symbol: 'M',
    op1: '0.00333555703802535'
  }, {
    name: 'speed_or_velocity:mach_number_(20_°C)',
    title: 'mach number (20 °C)',
    symbol: 'M',
    op1: '0.00291545189504373'
  }]
}, {
  name: 'shoe_size',
  title: 'shoe size',
  units: [{
    name: 'shoe_size:Mondopoint',
    title: 'Mondopoint',
    symbol: 'mm',
    si: 'True',
    op1: '1'
  }, {
    name: 'shoe_size:Continental_Europe',
    title: 'Continental Europe',
    symbol: '-',
    op1: '-15',
    op2: '0.15',
    formula: 'f04'
  }, {
    name: 'shoe_size:Asia',
    title: 'Asia',
    symbol: 'cm',
    op1: '0.1'
  }, {
    name: 'shoe_size:UK_children',
    title: 'UK children',
    symbol: '-',
    op1: '-15',
    op2: '0.118110236220472',
    op3: '-12',
    formula: 'f05'
  }, {
    name: 'shoe_size:UK_adults',
    title: 'UK adults',
    symbol: '-',
    op1: '-15',
    op2: '0.118110236220472',
    op3: '-25',
    formula: 'f05'
  }, {
    name: 'shoe_size:US_children',
    title: 'US children',
    symbol: '-',
    op1: '-15',
    op2: '0.118110236220472',
    op3: '-11.6666666666667',
    formula: 'f05'
  }, {
    name: 'shoe_size:US_male',
    title: 'US male',
    symbol: '-',
    op1: '-15',
    op2: '0.118110236220472',
    op3: '-24',
    formula: 'f05'
  }, {
    name: 'shoe_size:US_female',
    title: 'US female',
    symbol: '-',
    op1: '-15',
    op2: '0.118110236220472',
    op3: '-23',
    formula: 'f05'
  }, {
    name: 'shoe_size:US_children,_athletic',
    title: 'US children, athletic',
    symbol: '-',
    op1: '0.1',
    op2: '6',
    formula: 'f03'
  }, {
    name: 'shoe_size:US_youth,_athletic',
    title: 'US youth, athletic',
    symbol: '-',
    op1: '0.1',
    op2: '19',
    formula: 'f03'
  }, {
    name: 'shoe_size:US_male,_athletic',
    title: 'US male, athletic',
    symbol: '-',
    op1: '0.1',
    op2: '18',
    formula: 'f03'
  }, {
    name: 'shoe_size:US_female,_athletic',
    title: 'US female, athletic',
    symbol: '-',
    op1: '0.1',
    op2: '17',
    formula: 'f03'
  }]
}, {
  name: 'pressure',
  title: 'pressure',
  units: [{
    name: 'pressure:pascal',
    title: 'pascal',
    symbol: 'Pa',
    si: 'True',
    op1: '1'
  }, {
    name: 'pressure:Hectopascal',
    title: 'Hectopascal',
    symbol: 'hPa',
    op1: '0.01'
  }, {
    name: 'pressure:Kilopascal',
    title: 'Kilopascal',
    symbol: 'kPa',
    op1: '0.001'
  }, {
    name: 'pressure:bar',
    title: 'bar',
    symbol: 'bar',
    op1: '1E-05'
  }, {
    name: 'pressure:millibar',
    title: 'millibar',
    symbol: 'mbar',
    op1: '0.01'
  }, {
    name: 'pressure:technical_atmosphere',
    title: 'technical atmosphere',
    symbol: 'at',
    op1: '1.01971621297793E-05'
  }, {
    name: 'pressure:standard_atmosphere',
    title: 'standard atmosphere',
    symbol: 'atm',
    op1: '9.8692E-06'
  }, {
    name: 'pressure:torr',
    title: 'torr',
    symbol: 'Torr',
    op1: '0.0075006168270417'
  }, {
    name: 'pressure:pound_per_square_inch',
    title: 'pound per square inch',
    symbol: 'psi',
    op1: '0.000145037743897283'
  }, {
    name: 'pressure:pound_per_square_foot',
    title: 'pound per square foot',
    symbol: 'psf',
    op1: '0.0208854337883712'
  }, {
    name: 'pressure:centimetre_of_mercury',
    title: 'centimetre of mercury',
    symbol: 'cmHg',
    op1: '0.000750063755419211'
  }, {
    name: 'pressure:foot_of_mercury',
    title: 'foot of mercury',
    symbol: 'ftHg',
    op1: '2.46083216484819E-05'
  }, {
    name: 'pressure:inch_of_mercury',
    title: 'inch of mercury',
    symbol: 'inHg',
    op1: '0.000295299801647123'
  }, {
    name: 'pressure:micron_(micrometre)_of_mercury',
    title: 'micron (micrometre) of mercury',
    symbol: 'µmHg',
    op1: '7.50061505043414'
  }, {
    name: 'pressure:millimetre_of_mercury',
    title: 'millimetre of mercury',
    symbol: 'mmHg',
    op1: '0.00750061505043414'
  }, {
    name: 'pressure:centimetre_of_water_(4_°C)',
    title: 'centimetre of water (4 °C)',
    symbol: 'cmH2O',
    op1: '0.0101974428892211'
  }, {
    name: 'pressure:foot_of_water_(39.2_°F)',
    title: 'foot of water (39.2 °F)',
    symbol: 'ftH2O',
    op1: '0.000334562292153176'
  }, {
    name: 'pressure:inch_of_water_(39.2_°F)',
    title: 'inch of water (39.2 °F)',
    symbol: 'inH2O',
    op1: '0.00401474213311279'
  }, {
    name: 'pressure:millimetre_of_water_(3.98_°C)',
    title: 'millimetre of water (3.98 °C)',
    symbol: 'mmH2O',
    op1: '0.101974428892211'
  }, {
    name: 'pressure:barye',
    title: 'barye',
    symbol: 'Ba',
    op1: '10'
  }, {
    name: 'pressure:kilogram-force_per_square_millimetre',
    title: 'kilogram-force per square millimetre',
    symbol: 'kgf/mm²',
    op1: '1.01971621297793E-07'
  }, {
    name: 'pressure:kip_per_square_inch',
    title: 'kip per square inch',
    symbol: 'ksi',
    op1: '1.45037743897283E-07'
  }, {
    name: 'pressure:pièze',
    title: 'pièze',
    symbol: 'pz',
    op1: '0.001'
  }, {
    name: 'pressure:poundal_per_square_foot',
    title: 'poundal per square foot',
    symbol: 'pdl/sq ft',
    op1: '0.671968949658774'
  }, {
    name: 'pressure:short_ton_per_square_foot',
    title: 'short ton per square foot',
    symbol: '-',
    op1: '1.04427171122863E-05'
  }]
}, {
  name: 'area',
  title: 'area',
  units: [{
    name: 'area:square_metre',
    title: 'square metre',
    symbol: 'm²',
    si: 'True',
    op1: '1'
  }, {
    name: 'area:square_kilometer',
    title: 'square kilometer',
    symbol: 'km²',
    op1: '1E-06'
  }, {
    name: 'area:hectare',
    title: 'hectare',
    symbol: 'ha',
    op1: '0.0001'
  }, {
    name: 'area:are',
    title: 'are',
    symbol: 'a',
    op1: '0.01'
  }, {
    name: 'area:square_decimeter',
    title: 'square decimeter',
    symbol: 'dm²',
    op1: '100'
  }, {
    name: 'area:square_centimeter',
    title: 'square centimeter',
    symbol: 'cm²',
    op1: '10000'
  }, {
    name: 'area:square_millimeter',
    title: 'square millimeter',
    symbol: 'mm²',
    op1: '1000000'
  }, {
    name: 'area:square_inch',
    title: 'square inch',
    symbol: 'sq in',
    op1: '1550.0031000062'
  }, {
    name: 'area:square_foot',
    title: 'square foot',
    symbol: 'sq ft',
    op1: '10.7639104167097'
  }, {
    name: 'area:square_yard',
    title: 'square yard',
    symbol: 'sq yd',
    op1: '1.19599004630108'
  }, {
    name: 'area:square_mile',
    title: 'square mile',
    symbol: 'sq mi',
    op1: '3.86102158542446E-07'
  }, {
    name: 'area:acre',
    title: 'acre',
    symbol: 'ac',
    op1: '0.000247105381467165'
  }, {
    name: 'area:circular_milthou',
    title: 'circular mil/thou',
    symbol: 'circ mil',
    op1: '1973527107.38158'
  }, {
    name: 'area:square_milthou',
    title: 'square mil/thou',
    symbol: 'sq mil',
    op1: '1550003100.0062'
  }, {
    name: 'area:circular_inch',
    title: 'circular inch',
    symbol: 'circ in',
    op1: '1973.52524113097'
  }, {
    name: 'area:saarland',
    title: 'Saarland (part of Germany)',
    symbol: 'SL',
    op1: '3.8915199887924224322778233950399e-10'
  }, {
    name: 'area:soccer_field',
    title: 'soccer field',
    symbol: 'sf',
    op1: '1.4005602240896358543417366946779e-4'
  }]
}, {
  name: 'volume_wet',
  title: 'volume wet',
  units: [{
    name: 'volume_wet:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_wet:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_wet:milliliter',
    title: 'milliliter',
    symbol: 'ml',
    op1: '1000000'
  }, {
    name: 'volume_wet:centiliter',
    title: 'centiliter',
    symbol: 'cl',
    op1: '100000'
  }, {
    name: 'volume_wet:deciliter',
    title: 'deciliter',
    symbol: 'dl',
    op1: '10000'
  }, {
    name: 'volume_wet:hectoliter',
    title: 'hectoliter',
    symbol: 'hl',
    op1: '10'
  }, {
    name: 'volume_wet:cubic_inch',
    title: 'cubic inch',
    symbol: 'cu.in.',
    op1: '61023.7440947323'
  }, {
    name: 'volume_wet:cubic_foot',
    title: 'cubic foot',
    symbol: 'cu.ft.',
    op1: '35.3146667214886'
  }, {
    name: 'volume_wet:perch_(UK)',
    title: 'perch (UK)',
    symbol: 'perch',
    op1: '1.42685522097252'
  }, {
    name: 'volume_wet:cubic_yard',
    title: 'cubic yard',
    symbol: 'cu.yd.',
    op1: '1.30795061931439'
  }, {
    name: 'volume_wet:register_ton_(UK)',
    title: 'register ton (UK)',
    symbol: 'RT',
    op1: '0.353146667214886'
  }, {
    name: 'volume_wet:minim_drop_(UK)',
    title: 'minim/ drop (UK)',
    symbol: 'min.',
    op1: '16893637.2214946'
  }, {
    name: 'volume_wet:minim_drop_(US)',
    title: 'minim/ drop (US)',
    symbol: 'min.',
    op1: '16230730.8973786'
  }, {
    name: 'volume_wet:fluid_scruple_(UK)',
    title: 'fluid scruple (UK)',
    symbol: 'fl.sc.',
    op1: '844681.861072592'
  }, {
    name: 'volume_wet:fluid_drachm_(UK)',
    title: 'fluid drachm (UK)',
    symbol: 'fl.dr.',
    op1: '281560.620357531'
  }, {
    name: 'volume_wet:fluid_dram_(US)',
    title: 'fluid dram (US)',
    symbol: 'fl.dr.',
    op1: '270512.181614927'
  }, {
    name: 'volume_wet:fluid_ounce_(UK)',
    title: 'fluid ounce (UK)',
    symbol: 'fl.oz.',
    op1: '35195.1571463767'
  }, {
    name: 'volume_wet:fluid_ounce_(US)',
    title: 'fluid ounce (US)',
    symbol: 'fl.oz.',
    op1: '33814.022701843'
  }, {
    name: 'volume_wet:glass_(UK)',
    title: 'glass (UK)',
    symbol: '-',
    op1: '14077.9637633213'
  }, {
    name: 'volume_wet:gill_noggin_(UK)',
    title: 'gill/ noggin (UK)',
    symbol: 'gi.',
    op1: '7039.03142927533'
  }, {
    name: 'volume_wet:gill_(US)',
    title: 'gill (US)',
    symbol: 'gi.',
    op1: '8453.50567546075'
  }, {
    name: 'volume_wet:pint_(UK)',
    title: 'pint (UK)',
    symbol: 'fl.pt./ pt.',
    op1: '1759.75785731883'
  }, {
    name: 'volume_wet:pint_(US)',
    title: 'pint (US)',
    symbol: 'pt.',
    op1: '2113.37641886519'
  }, {
    name: 'volume_wet:quart_(UK)',
    title: 'quart (UK)',
    symbol: 'qt.',
    op1: '879.878928659416'
  }, {
    name: 'volume_wet:quart_(US)',
    title: 'quart (US)',
    symbol: 'qt.',
    op1: '1056.68820943259'
  }, {
    name: 'volume_wet:gallon_(UK)',
    title: 'gallon (UK)',
    symbol: 'gal.',
    op1: '219.969248299088'
  }, {
    name: 'volume_wet:gallon_(US)',
    title: 'gallon (US)',
    symbol: 'gal.',
    op1: '264.172052358148'
  }, {
    name: 'volume_wet:barrel_(UK)',
    title: 'barrel (UK)',
    symbol: 'bl./ bbl.',
    op1: '6.28484159056771'
  }, {
    name: 'volume_wet:petrol_barrel_(US)',
    title: 'petrol barrel (US)',
    symbol: 'bl./ bbl.',
    op1: '6.2898107704321'
  }]
}, {
  name: 'volume_dry',
  title: 'volume dry',
  units: [{
    name: 'volume_dry:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_dry:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_dry:cubic_millimeter',
    title: 'cubic millimeter',
    symbol: 'mm³',
    op1: '1000000000'
  }, {
    name: 'volume_dry:cubic_centimeter',
    title: 'cubic centimeter',
    symbol: 'cm³',
    op1: '1000000'
  }, {
    name: 'volume_dry:cubic_decimeter',
    title: 'cubic decimeter',
    symbol: 'dm³',
    op1: '1000'
  }, {
    name: 'volume_dry:cubic_inch',
    title: 'cubic inch',
    symbol: 'cu.in.',
    op1: '61023.7440947323'
  }, {
    name: 'volume_dry:cubic_foot',
    title: 'cubic foot',
    symbol: 'cu.ft.',
    op1: '35.3146667214886'
  }, {
    name: 'volume_dry:perch_(UK)',
    title: 'perch (UK)',
    symbol: 'perch',
    op1: '1.42685522097252'
  }, {
    name: 'volume_dry:cubic_yard',
    title: 'cubic yard',
    symbol: 'cu.yd.',
    op1: '1.30795061931439'
  }, {
    name: 'volume_dry:register_ton_(UK)',
    title: 'register ton (UK)',
    symbol: 'RT',
    op1: '0.353146667214886'
  }, {
    name: 'volume_dry:peck_(UK)',
    title: 'peck (UK)',
    symbol: 'pk.',
    op1: '109.985591887463'
  }, {
    name: 'volume_dry:peck_(US)',
    title: 'peck (US)',
    symbol: 'pk.',
    op1: '113.510363985007'
  }, {
    name: 'volume_dry:kenning_(UK)',
    title: 'kenning (UK)',
    symbol: '-',
    op1: '54.9924935246339'
  }, {
    name: 'volume_dry:bushel_(UK)',
    title: 'bushel (UK)',
    symbol: 'bsh./ bu.',
    op1: '27.4961711581662'
  }, {
    name: 'volume_dry:(Winchester)_bushel_(US)',
    title: '(Winchester) bushel (US)',
    symbol: 'bsh./ bu.',
    op1: '28.3775909970572'
  }, {
    name: 'volume_dry:sack_bag_(UK)',
    title: 'sack/ bag (UK)',
    symbol: '-',
    op1: '9.16539038605541'
  }, {
    name: 'volume_dry:quarter_(UK)',
    title: 'quarter (UK)',
    symbol: 'qr.',
    op1: '3.43760742523204'
  }, {
    name: 'volume_dry:quarter_(US)',
    title: 'quarter (US)',
    symbol: 'qr.',
    op1: '3.5471988745944'
  }, {
    name: 'volume_dry:chaldron_(UK)',
    title: 'chaldron (UK)',
    symbol: '-',
    op1: '0.763782532171284'
  }, {
    name: 'volume_dry:load_(UK)',
    title: 'load (UK)',
    symbol: '-',
    op1: '0.687521485046408'
  }, {
    name: 'volume_dry:pint_(US)',
    title: 'pint (US)',
    symbol: 'pt.',
    op1: '1816.1658237964'
  }, {
    name: 'volume_dry:quart_(US)',
    title: 'quart (US)',
    symbol: '-',
    op1: '908.082912292367'
  }, {
    name: 'volume_dry:gallon_(US)',
    title: 'gallon (US)',
    symbol: 'gal.',
    op1: '227.020727974396'
  }]
}, {
  name: 'volume_beer',
  title: 'volume beer',
  units: [{
    name: 'volume_beer:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_beer:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_beer:hectoliter',
    title: 'hectoliter',
    symbol: 'hl',
    op1: '10'
  }, {
    name: 'volume_beer:gallon_(UK)',
    title: 'gallon (UK)',
    symbol: 'gal.',
    op1: '219.969248299088'
  }, {
    name: 'volume_beer:pin_(UK)',
    title: 'pin (UK)',
    symbol: '-',
    op1: '48.8830229261378'
  }, {
    name: 'volume_beer:firkin_(UK)',
    title: 'firkin (UK)',
    symbol: '-',
    op1: '24.4410335624273'
  }, {
    name: 'volume_beer:kilderkin_(UK)',
    title: 'kilderkin (UK)',
    symbol: '-',
    op1: '12.2205167812136'
  }, {
    name: 'volume_beer:barrel_(UK)',
    title: 'barrel (UK)',
    symbol: '-',
    op1: '6.11025839060682'
  }, {
    name: 'volume_beer:hogshead_(UK)',
    title: 'hogshead (UK)',
    symbol: 'hd./ hhd.',
    op1: '4.07350227505102'
  }, {
    name: 'volume_beer:puncheon_(UK)',
    title: 'puncheon (UK)',
    symbol: '-',
    op1: '3.05512826192226'
  }, {
    name: 'volume_beer:butt_(UK)',
    title: 'butt (UK)',
    symbol: '-',
    op1: '2.03675113752551'
  }, {
    name: 'volume_beer:tun_ton_(UK)',
    title: 'tun/ ton (UK)',
    symbol: '-',
    op1: '1.01837619101641'
  }]
}, {
  name: 'volume_wine',
  title: 'volume wine',
  units: [{
    name: 'volume_wine:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_wine:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_wine:hectoliter',
    title: 'hectoliter',
    symbol: 'hl',
    op1: '10'
  }, {
    name: 'volume_wine:gallon_(UK)',
    title: 'gallon (UK)',
    symbol: 'gal.',
    op1: '219.969248299088'
  }, {
    name: 'volume_wine:gallon_(US)',
    title: 'gallon (US)',
    symbol: 'gal.',
    op1: '264.172052358148'
  }, {
    name: 'volume_wine:rundlet_(UK)',
    title: 'rundlet (UK)',
    symbol: '-',
    op1: '14.6646165532725'
  }, {
    name: 'volume_wine:rundlet_(US)',
    title: 'rundlet (US)',
    symbol: '-',
    op1: '14.6762251310082'
  }, {
    name: 'volume_wine:barrel_(UK)',
    title: 'barrel (UK)',
    symbol: 'bl.',
    op1: '8.37977123224536'
  }, {
    name: 'volume_wine:barrel_(US)',
    title: 'barrel (US)',
    symbol: 'bl.',
    op1: '8.38641436057614'
  }, {
    name: 'volume_wine:tierce_(UK)',
    title: 'tierce (UK)',
    symbol: '-',
    op1: '6.28484159056771'
  }, {
    name: 'volume_wine:tierce_(US)',
    title: 'tierce (US)',
    symbol: '-',
    op1: '6.2898107704321'
  }, {
    name: 'volume_wine:hogshead_(UK)',
    title: 'hogshead (UK)',
    symbol: 'hd./ hhd.',
    op1: '4.18988561612268'
  }, {
    name: 'volume_wine:hogshead_(US)',
    title: 'hogshead (US)',
    symbol: 'hd./ hhd.',
    op1: '4.19320718028807'
  }, {
    name: 'volume_wine:firkin_puncheon_tertian_(UK)',
    title: 'firkin/ puncheon/ tertian (UK)',
    symbol: '-',
    op1: '3.14242079528386'
  }, {
    name: 'volume_wine:firkin_pon_tertian_(US)',
    title: 'firkin/ pon/ tertian (US)',
    symbol: '-',
    op1: '3.14490538521605'
  }, {
    name: 'volume_wine:pipe_butt_(UK)',
    title: 'pipe/ butt (UK)',
    symbol: '-',
    op1: '2.0949471968559'
  }, {
    name: 'volume_wine:pipe_butt_(US)',
    title: 'pipe/ butt (US)',
    symbol: '-',
    op1: '2.09660359014404'
  }, {
    name: 'volume_wine:tun_(UK)',
    title: 'tun (UK)',
    symbol: '-',
    op1: '1.04747140403067'
  }, {
    name: 'volume_wine:tun_(US)',
    title: 'tun (US)',
    symbol: '-',
    op1: '1.04830179507202'
  }]
}, {
  name: 'volume_kitchen',
  title: 'volume kitchen',
  units: [{
    name: 'volume_kitchen:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_kitchen:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_kitchen:milliliter',
    title: 'milliliter',
    symbol: 'ml',
    op1: '1000000'
  }, {
    name: 'volume_kitchen:centiliter',
    title: 'centiliter',
    symbol: 'cl',
    op1: '100000'
  }, {
    name: 'volume_kitchen:saltspoon_(UK)',
    title: 'saltspoon (UK)',
    symbol: 'ssp.',
    op1: '901063.254640476'
  }, {
    name: 'volume_kitchen:saltspoon_(US)',
    title: 'saltspoon (US)',
    symbol: 'ssp.',
    op1: '811536.544473774'
  }, {
    name: 'volume_kitchen:teaspoon_(UK)',
    title: 'teaspoon (UK)',
    symbol: 'tsp.',
    op1: '225275.963054742'
  }, {
    name: 'volume_kitchen:teaspoon_(US)',
    title: 'teaspoon (US)',
    symbol: 'tsp.',
    op1: '202884.136159606'
  }, {
    name: 'volume_kitchen:dessertspoon_(UK)',
    title: 'dessertspoon (UK)',
    symbol: 'dsp.',
    op1: '112625.295641401'
  }, {
    name: 'volume_kitchen:dessertspoon_(US)',
    title: 'dessertspoon (US)',
    symbol: 'dsp.',
    op1: '101442.068079803'
  }, {
    name: 'volume_kitchen:tablespoon_(UK)',
    title: 'tablespoon (UK)',
    symbol: 'tbsp.',
    op1: '56312.6478207005'
  }, {
    name: 'volume_kitchen:tablespoon_(US)',
    title: 'tablespoon (US)',
    symbol: 'tbsp.',
    op1: '67628.0453979691'
  }, {
    name: 'volume_kitchen:tea_cup_(UK)',
    title: 'tea cup (UK)',
    symbol: 'tc.',
    op1: '5279.2735719565'
  }, {
    name: 'volume_kitchen:tea_cup_(US)',
    title: 'tea cup (US)',
    symbol: 'tc.',
    op1: '5635.67046221746'
  }, {
    name: 'volume_kitchen:cup_(UK)',
    title: 'cup (UK)',
    symbol: 'c./ cu.',
    op1: '3519.51571463767'
  }, {
    name: 'volume_kitchen:cup_(US)',
    title: 'cup (US)',
    symbol: 'c./ cu.',
    op1: '4226.75283773037'
  }]
}, {
  name: 'volume_wine_bottle',
  title: 'volume wine bottle',
  units: [{
    name: 'volume_wine_bottle:cubic_meter',
    title: 'cubic meter',
    symbol: 'm³',
    si: 'True',
    op1: '1'
  }, {
    name: 'volume_wine_bottle:liter',
    title: 'liter',
    symbol: 'l',
    op1: '1000'
  }, {
    name: 'volume_wine_bottle:milliliter',
    title: 'milliliter',
    symbol: 'ml',
    op1: '1000000'
  }, {
    name: 'volume_wine_bottle:centiliter',
    title: 'centiliter',
    symbol: 'cl',
    op1: '100000'
  }, {
    name: 'volume_wine_bottle:glass',
    title: 'glass',
    symbol: '-',
    op1: '8474.57627118644'
  }, {
    name: 'volume_wine_bottle:split',
    title: 'split',
    symbol: '-',
    op1: '5291.00529100529'
  }, {
    name: 'volume_wine_bottle:tenth',
    title: 'tenth',
    symbol: '-',
    op1: '2666.66666666667'
  }, {
    name: 'volume_wine_bottle:fifth_bottle',
    title: 'fifth/ bottle',
    symbol: '-',
    op1: '1333.33333333333'
  }, {
    name: 'volume_wine_bottle:magnum',
    title: 'magnum',
    symbol: '-',
    op1: '666.666666666667'
  }, {
    name: 'volume_wine_bottle:jeroboam',
    title: 'jeroboam',
    symbol: '-',
    op1: '333.333333333333'
  }, {
    name: 'volume_wine_bottle:rehoboam',
    title: 'rehoboam',
    symbol: '-',
    op1: '222.222222222222'
  }, {
    name: 'volume_wine_bottle:methuselah',
    title: 'methuselah',
    symbol: '-',
    op1: '166.666666666667'
  }, {
    name: 'volume_wine_bottle:shalmanazar',
    title: 'shalmanazar',
    symbol: '-',
    op1: '111.111111111111'
  }, {
    name: 'volume_wine_bottle:balthazar',
    title: 'balthazar',
    symbol: '-',
    op1: '83.3333333333333'
  }, {
    name: 'volume_wine_bottle:nebuchadnezzar',
    title: 'nebuchadnezzar',
    symbol: '-',
    op1: '66.6666666666667'
  }]
}, {
  name: 'animals_(fun)',
  title: 'animals (fun)',
  units: [{
    name: 'animals_(fun):horse',
    title: 'horse', // 510 kg
    symbol: 'h',
    si: 'True',
    op1: '1'
  }, {
    name: 'animals_(fun):mosquito',
    title: 'mosquito', // 2 mg
    symbol: 'm',
    op1: '255000000'
  }, {
    name: 'animals_(fun):elephant',
    title: 'elephant', // 4130 kg
    symbol: 'e',
    op1: '0.123486682808717'
  }, {
    name: 'animals_(fun):german_shepherd',
    title: 'german shepherd', // 31 kg
    symbol: 'gs',
    op1: '16.4516129032258'
  }, {
    name: 'animals_(fun):pet_cat',
    title: 'pet cat', // 3,43 kg
    symbol: 'pc',
    op1: '148.68804664723'
  }, {
    name: 'animals_(fun):guinea_pig',
    title: 'guinea pig', // 1,05 kg
    symbol: 'gp',
    op1: '485.714285714286'
  }, {
    name: 'animals_(fun):kittis_hog-nosed_bat',
    title: "kitti's hog-nosed bat", // 2 g
    symbol: 'khnb',
    op1: '255000'
  }, {
    name: 'animals_(fun):bee_hummingbird',
    title: 'bee hummingbird', // 2 g
    symbol: 'bh',
    op1: '255000'
  }, {
    name: 'animals_(fun):goliath_beetle',
    title: 'goliath beetle', // 110 g
    symbol: 'gb',
    op1: '4636.3636363636'
  }, {
    name: 'animals_(fun):lion',
    title: 'lion', // 250 kg
    symbol: 'l',
    op1: '2.04'
  }, {
    name: 'animals_(fun):milk_cow',
    title: 'milk cow', // 700 kg
    symbol: 'mc',
    op1: '0.72857142857'
  }, {
    name: 'animals_(fun):blue_whale',
    title: 'blue whale', // 100000 kg
    symbol: 'bw',
    op1: '0.0051'
  }]
}]
