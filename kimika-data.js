// KIMIKA · FORMULAZIO ORGANIKOA — Datu kimiko eta didaktiko bateratuak (Euskaraz)
// Edukia estilo eta logikatik bereizita dago, irakasleak erraz editatzeko.
// Adibide guztiak DIDAKTIKOAK dira; ez dira PAUko enuntziatu ofizialak.

export const CHEM_COLOR_LEGEND = [
  { role: 'chain', label: 'Kate nagusia', short: 'C–C hezurdura' },
  { role: 'multiple', label: 'Lotura anizkoitzak', short: 'C=C / C≡C' },
  { role: 'branch', label: 'Ordezkatzaileak eta adarrak', short: '–CH₃, –Br…' },
  { role: 'function', label: 'Funtzio-talde nagusia', short: 'Atzizkia' },
  { role: 'locator', label: 'Lokatzaileak eta zenbaketa', short: '1, 2, 3…' }
];

export const CARBON_ROOTS = [
  { prefix: 'met-', count: 1, alkane: 'metanoa', formula: 'CH₄' },
  { prefix: 'et-', count: 2, alkane: 'etanoa', formula: 'CH₃–CH₃' },
  { prefix: 'prop-', count: 3, alkane: 'propanoa', formula: 'CH₃–CH₂–CH₃' },
  { prefix: 'but-', count: 4, alkane: 'butanoa', formula: 'CH₃–CH₂–CH₂–CH₃' },
  { prefix: 'pent-', count: 5, alkane: 'pentanoa', formula: 'CH₃–(CH₂)₃–CH₃' },
  { prefix: 'hex-', count: 6, alkane: 'hexanoa', formula: 'CH₃–(CH₂)₄–CH₃' },
  { prefix: 'hept-', count: 7, alkane: 'heptanoa', formula: 'CH₃–(CH₂)₅–CH₃' },
  { prefix: 'okt-', count: 8, alkane: 'oktanoa', formula: 'CH₃–(CH₂)₆–CH₃' },
  { prefix: 'non-', count: 9, alkane: 'nonanoa', formula: 'CH₃–(CH₂)₇–CH₃' },
  { prefix: 'dek-', count: 10, alkane: 'dekanoa', formula: 'CH₃–(CH₂)₈–CH₃' },
  { prefix: 'undek-', count: 11, alkane: 'undekanoa', formula: 'CH₃–(CH₂)₉–CH₃' },
  { prefix: 'dodek-', count: 12, alkane: 'dodekanoa', formula: 'CH₃–(CH₂)₁₀–CH₃' }
];

export const ALKYL_RADICALS = [
  { name: 'metil-', formula: '–CH₃', carbons: 1 },
  { name: 'etil-', formula: '–CH₂–CH₃', carbons: 2 },
  { name: 'propil-', formula: '–CH₂–CH₂–CH₃', carbons: 3 },
  { name: 'butil-', formula: '–(CH₂)₃–CH₃', carbons: 4 }
];

export const EVERYDAY_EXAMPLES = [
  {
    id: 'sugar',
    object: 'Azukre-koskorra',
    substance: 'Sakarosa',
    formula: 'C₁₂H₂₂O₁₁',
    atoms: ['C', 'H', 'O'],
    carbon: true,
    explanation: 'Azukre-koskorren osagai nagusia sakarosa da. Sakarosa molekula organiko bat da: karbono, hidrogeno eta oxigeno atomoak ditu.',
    takeaway: 'Gure elikagaietan ere karbonoz osatutako molekulak daude.'
  },
  {
    id: 'cotton',
    object: 'Kotoizko kamiseta',
    substance: 'Zelulosa',
    formula: '(C₆H₁₀O₅)ₙ',
    atoms: ['C', 'H', 'O'],
    carbon: true,
    explanation: 'Kotoizko ehuna zelulosaz osatuta dago neurri handi batean. Zelulosa karbonoz osatutako kate luzeak dituen polimero organikoa da; n-k errepikapen asko adierazten ditu.',
    takeaway: 'Arropa bateko zuntza ere molekula organikoz osatuta egon daiteke.'
  },
  {
    id: 'bag',
    object: 'Polietilenozko poltsa',
    substance: 'Polietilenoa',
    formula: '[–CH₂–CH₂–]ₙ',
    atoms: ['C', 'H'],
    carbon: true,
    explanation: 'Polietilenozko poltsetan, karbono-atomo asko elkarren segidan lotuta daude. Kate luze horietako unitate errepikakorra –CH₂–CH₂– da.',
    takeaway: 'Karbonoak bere buruarekin loturak eginez material berriak sortzeko aukera ematen du.'
  },
  {
    id: 'medicine',
    object: 'Aspirina duen pilula',
    substance: 'Azido azetilsalizilikoa',
    formula: 'C₉H₈O₄',
    atoms: ['C', 'H', 'O'],
    carbon: true,
    explanation: 'Aspirinaren osagai aktiboa azido azetilsalizilikoa da. Molekula organiko horrek karbonoa, hidrogenoa eta oxigenoa ditu; pilulak beste osagai batzuk ere izan ditzake.',
    takeaway: 'Sendagaietako substantzia aktibo asko ere konposatu organikoak dira.'
  },
  {
    id: 'water',
    object: 'Ur-edalontzia',
    substance: 'Ura',
    formula: 'H₂O',
    atoms: ['H', 'O'],
    carbon: false,
    explanation: 'Uraren molekulan hidrogenoa eta oxigenoa bakarrik daude: ez dago karbonorik. Horregatik, ura ez da konposatu organikoa.',
    takeaway: 'Eguneroko substantzia guztiak ez dira organikoak: konposizioa begiratu behar dugu.'
  }
];

export const CLASSIFICATION_EXAMPLES = [
  {
    id: 'methane', name: 'Metanoa', formula: 'CH₄', kind: 'organic', hasCarbon: true,
    eyebrow: 'HIDROKARBUROA',
    explanation: 'Metanoa hidrokarburoa da, hau da, karbonoz eta hidrogenoz osatutako konposatua. Hidrokarburoen familia organikoa da.',
    key: 'CH₄ organikoa da hidrokarburoen familiakoa delako; lau C–H loturak ditu.'
  },
  {
    id: 'ethanol', name: 'Etanola', formula: 'CH₃–CH₂–OH', kind: 'organic', hasCarbon: true,
    eyebrow: 'ALKOHOLA',
    explanation: 'Etanola organikoa da. Bi karbono elkarri lotuta daude eta –OH taldea ere agertzen da. Beraz, konposatu organikoek C, H eta beste elementu batzuk izan ditzakete.',
    key: 'Konposatu organikoak ez dira C eta H bakarrik dituztenak.'
  },
  {
    id: 'urea', name: 'Urea', formula: 'NH₂–C(=O)–NH₂', kind: 'organic', hasCarbon: true,
    eyebrow: 'SALBUESPEN INTERESGARRIA',
    explanation: 'Urea konposatu organikoa da, nahiz eta karbono-hidrogeno (C–H) loturarik ez izan. Horrek erakusten du ez dagoela sailkapen osoa egiteko arau bakar eta sinplerik.',
    key: 'C–H lotura izatea ohikoa da, baina ez da derrigorrezkoa organikoa izateko.'
  },
  {
    id: 'water', name: 'Ura', formula: 'H₂O', kind: 'inorganic', hasCarbon: false,
    eyebrow: 'KONPOSATU MOLEKULARRA',
    explanation: 'Ura inorganikoa da: hidrogenoa eta oxigenoa ditu, baina ez du karbonorik. O–H loturak kobalenteak dira.',
    key: 'Inorganiko guztiak ez dira lotura ionikoz osatuak.'
  },
  {
    id: 'salt', name: 'Gatz arrunta', formula: 'NaCl', kind: 'inorganic', hasCarbon: false,
    eyebrow: 'KONPOSATU IONIKOA',
    explanation: 'Sodio kloruroa inorganikoa da. Na⁺ eta Cl⁻ ioien arteko erakarpenak sare kristalino bat osatzen du.',
    key: 'Gatz mineralak kimika inorganikoan lantzen dira.'
  },
  {
    id: 'carbonDioxide', name: 'Karbono dioxidoa', formula: 'CO₂', kind: 'inorganic', hasCarbon: true,
    eyebrow: 'KARBONOA DU, BAINA…',
    explanation: 'CO₂-k karbonoa du, baina karbonoaren oxidoa da. Karbonoaren oxido arruntak inorganikoen artean sailkatzen dira: O=C=O.',
    key: 'Biek C dute: CH₄ hidrokarburo organikoa da; CO₂, berriz, oxido inorganikoa.'
  }
];

// 14 familiak eta 32 adibideak (iturri bakarra Kontsultatu osorako eta tiradera azkarrerako)
const item = (name, formula, why, ring = null) => ({ name, formula, why, ...(ring ? { ring } : {}) });

export const FAMILIES = [
  {
    id: 'alkano', badge: 'C–C', badgeRole: 'chain',
    title: 'Alkanoak', family: 'Hidrokarburoak',
    general: 'C–C (lotura bakunak)', suffix: '-anoa', prefix: '— (alkil- adar gisa)',
    name: 'butanoa', formula: 'CH3–CH2–CH2–CH3',
    tip: 'Kate irekiko alkanoek, adarkadurarik edo eraztunik gabe, CₙH₂ₙ₊₂ formula orokorra dute.',
    explanation: 'Karbonoen arteko lotura guztiak bakunak dira. Katea osatu eta hidrogenoak gehitu, C bakoitzak lau lotura-unitate izan arte.',
    rule: 'Zenbatu kate nagusiko karbonoak → aukeratu aurrizkia → gehitu -anoa.',
    examples: [
      item('butanoa', 'CH3–CH2–CH2–CH3', '4 C elkarren segidan; C–C lotura guztiak bakunak.'),
      item('2-metilpropanoa', 'CH3–CH(CH3)–CH3', 'Kate nagusia 3 C-koa da; C2-an metil adarra dago.')
    ]
  },
  {
    id: 'alkene', badge: 'C=C', badgeRole: 'multiple',
    title: 'Alkenoak', family: 'Hidrokarburoak',
    general: 'C=C (lotura bikoitza)', suffix: '-enoa', prefix: '— (-en- kate barruan)',
    name: 'but-2-enoa', formula: 'CH3–CH=CH–CH3',
    tip: 'Lotura bikoitzaren hasierako C-aren lekutzailea adierazi.',
    explanation: 'C=C loturak karbono bakoitzaren bi lotura-unitate erabiltzen ditu. Zenbakitzean, lotura bikoitzari ahalik eta lekutzaile txikiena dagokio, nagusiagoa den funtzio-talderik ez badago.',
    rule: 'Bilatu C=C → zenbakitu → adierazi kokapena + -enoa.',
    examples: [
      item('but-1-enoa', 'CH2=CH–CH2–CH3', 'Lotura bikoitza C1–C2 artean hasten da.'),
      item('but-2-enoa', 'CH3–CH=CH–CH3', 'Lotura bikoitza C2–C3 artean hasten da.')
    ]
  },
  {
    id: 'alkyne', badge: 'C≡C', badgeRole: 'multiple',
    title: 'Alkinoak', family: 'Hidrokarburoak',
    general: 'C≡C (lotura hirukoitza)', suffix: '-inoa', prefix: '— (-in- kate barruan)',
    name: 'but-1-inoa', formula: 'CH≡C–CH2–CH3',
    tip: 'Lotura hirukoitzak 3 lotura-unitate hartzen ditu C bakoitzean.',
    explanation: 'C≡C lotura identifikatu; lehen C-aren zenbakia ematen da. Hiru lotura-unitate hartzen dituen karbonoak hidrogeno gutxiago izango ditu.',
    rule: 'Bilatu C≡C → zenbakitu → gehitu -inoa.',
    examples: [
      item('but-1-inoa', 'CH≡C–CH2–CH3', 'C1≡C2 eta katean 4 C guztira.'),
      item('pent-2-inoa', 'CH3–C≡C–CH2–CH3', 'C2≡C3; kate nagusian 5 C daude.')
    ]
  },
  {
    id: 'cycle', badge: '⬡', badgeRole: 'chain',
    title: 'Zikloalkanoak', family: 'Hidrokarburoak',
    general: 'Eraztun itxia · C–C bakunak', suffix: 'ziklo- + -anoa', prefix: 'zikloalkil- (adar gisa)',
    name: 'ziklohexanoa', formula: 'C6H12',
    tip: 'Eraztunean ez dago hasierako edo amaierako karbonorik: erpin bakoitza C da. Zikloalkano monozikliko aseek CₙH₂ₙ formula dute.',
    explanation: 'Karbono-katea itxi egiten da. Eraztun bakuna marrazteko, lotu azken karbonoa lehenengoarekin. Ordezkatzaile bakarra dagoenean, normalean ez da 1- zenbakia behar.',
    rule: 'Kontatu erpinak → aukeratu alkanoaren erroa → jarri ziklo- → kokatu adarrak.',
    examples: [
      item('ziklopropanoa', 'C3H6', '3 karbonoko eraztuna: triangelua.', { n: 3, bonds: [], branches: [], formula: 'C3H6' }),
      item('ziklobutanoa', 'C4H8', '4 karbonoko eraztuna: laukia.', { n: 4, bonds: [], branches: [], formula: 'C4H8' }),
      item('ziklohexanoa', 'C6H12', '6 karbonoko eraztuna: sei erpinak karbonoak dira.', { n: 6, bonds: [], branches: [], formula: 'C6H12' }),
      item('metilziklohexanoa', 'C7H14', '6 C-ko eraztuna + CH₃ adar bat. Adar bakarrak ez du lekutzailerik behar.', { n: 6, bonds: [], branches: [{ at: 0, label: 'CH₃' }], formula: 'C7H14' }),
      item('1,2-dimetilziklohexanoa', 'C8H16', 'Bi CH₃ adar ondoko karbonoetan: 1 eta 2.', { n: 6, bonds: [], branches: [{ at: 0, label: 'CH₃' }, { at: 1, label: 'CH₃' }], formula: 'C8H16' })
    ]
  },
  {
    id: 'aromatic', badge: '⌬', badgeRole: 'multiple',
    title: 'Bentzenoa eta aromatikoak', family: 'Hidrokarburoak',
    general: 'Sei C-ko eraztun aromatikoa', suffix: 'bentzenoa / -bentzenoa', prefix: 'fenil- (talde gisa)',
    name: 'bentzenoa', formula: 'C6H6',
    tip: 'Bentzenoa ez da ziklohexanoa. Lotura π deslokalizatuak ditu; marrazkiko lotura bikoitz txandakatuak irudikapen bat baino ez dira.',
    explanation: 'Bentzenoaren eraztunak 6 C ditu, baina bere lotura π-elektroiak ez daude hiru lotura bikoitz jakinetan lokalizatuta. Izendatzean, eraztuneko ordezkatzaileen posizioak zenbakitzen dira.',
    rule: 'Aurkitu bentzeno-eraztuna → kokatu ordezkatzaileak → izendatu lekutzaileekin, behar badira.',
    examples: [
      item('bentzenoa', 'C6H6', 'Sei karbonoko eraztun aromatikoa.', { n: 6, bonds: [0, 2, 4], branches: [], aromatic: true, formula: 'C6H6' }),
      item('metilbentzenoa', 'C7H8', 'Bentzeno-eraztuna eta CH₃ ordezkatzaile bakarra.', { n: 6, bonds: [0, 2, 4], branches: [{ at: 0, label: 'CH₃' }], aromatic: true, formula: 'C7H8' }),
      item('1,3-dimetilbentzenoa', 'C8H10', 'Metil bi 1 eta 3 posizioetan.', { n: 6, bonds: [0, 2, 4], branches: [{ at: 0, label: 'CH₃' }, { at: 2, label: 'CH₃' }], aromatic: true, formula: 'C8H10' })
    ]
  },
  {
    id: 'halogen', badge: '–X', badgeRole: 'branch',
    title: 'Halogenodun deribatuak', family: 'Halogenodunak',
    general: 'R–X (X = F, Cl, Br, I)', suffix: '— (beti aurrizki)', prefix: 'fluoro-, kloro-, bromo-, iodo-',
    name: '2-bromobutanoa', formula: 'CH3–CH(Br)–CH2–CH3',
    tip: 'Halogenoa aurrizki gisa idatzi, bere kokapena adieraziz.',
    explanation: 'H atomo baten ordez halogenoa ageri da. Karbono-kateari dagokion izena mantentzen da, eta halogenoaren aurrizkia gehitzen zaio.',
    rule: 'Bilatu F/Cl/Br/I → aukeratu katea → zenbakitu → izendatu aurrizkiarekin.',
    examples: [
      item('2-bromobutanoa', 'CH3–CH(Br)–CH2–CH3', 'Br C2-an.'),
      item('1,2-dikloroetanoa', 'ClCH2–CH2Cl', 'Bi Cl atomo, C1 eta C2-an.')
    ]
  },
  {
    id: 'alcohol', badge: '–OH', badgeRole: 'function',
    title: 'Alkoholak', family: 'Oxigenodunak',
    general: 'R–OH', suffix: '-ola', prefix: 'hidroxi- (beharrezkoa denean)',
    name: 'butan-2-ola', formula: 'CH3–CH(OH)–CH2–CH3',
    tip: '–OH C-ri lotua dago; haren posizioa lehenetsi, talde nagusia denean.',
    explanation: 'Hidroxilo taldea (–OH) karbonoari lotuta dago. Zenbakitu taldea ahalik eta posizio txikienean jartzeko.',
    rule: 'Bilatu –OH → aukeratu katea → zenbakitu → gehitu -ola.',
    examples: [
      item('propan-1-ola', 'CH3–CH2–CH2OH', 'OH muturreko C1-ean.'),
      item('butan-2-ola', 'CH3–CH(OH)–CH2–CH3', 'OH bigarren karbonoan.')
    ]
  },
  {
    id: 'ether', badge: '–O–', badgeRole: 'branch',
    title: 'Eterrak', family: 'Oxigenodunak',
    general: 'R–O–R′', suffix: '— (ordezkapen-izenetan)', prefix: 'alkoxi- (metoxi-, etoxi-…)',
    name: 'metoxietanoa', formula: 'CH3–O–CH2–CH3',
    tip: 'Oxigenoa bi karbono-talderen artean dago; ez nahastu R–OH alkoholarekin.',
    explanation: 'Eterrak oxigeno-zubi bat du, bi karbono-zati lotzen dituena. Ordezkapen-izendapenean zati laburrena «-oxi» ordezkatzaile gisa erabil daiteke.',
    rule: 'Bilatu C–O–C → aukeratu kate nagusia → izendatu beste zatia -oxi gisa.',
    examples: [
      item('metoxietanoa', 'CH3–O–CH2–CH3', 'Kate nagusia etanoa; –O–CH₃ = metoxi.'),
      item('etoxietanoa', 'CH3–CH2–O–CH2–CH3', 'Bi aldeak etil taldea dira; dietil eter ere esaten zaio.')
    ]
  },
  {
    id: 'aldehyde', badge: '–CHO', badgeRole: 'function',
    title: 'Aldehidoak', family: 'Oxigenodunak',
    general: 'R–C(=O)H (–CHO)', suffix: '-ala', prefix: 'oxo- / formil- (testuinguruaren arabera)',
    name: 'butanala', formula: 'CH3–CH2–CH2–CHO',
    tip: '–CHO taldeko C-a kate nagusiaren parte da eta C1 da.',
    explanation: 'Aldehidoaren C=O karbonoa H bati ere lotuta dago. Kate ireki arruntetan, karbono hori 1. posizioan dago.',
    rule: 'Bilatu –CHO → zenbatu C guztiak, –CHOko C-a barne → gehitu -ala.',
    examples: [
      item('butanala', 'CH3–CH2–CH2–CHO', 'CHOko C-a laugarren karbonoa da guztizkoan.'),
      item('2-metilpropanala', 'CH3–CH(CH3)–CHO', 'Propanalaren C2-an metil adarra.')
    ]
  },
  {
    id: 'ketone', badge: '>C=O', badgeRole: 'function',
    title: 'Zetonak', family: 'Oxigenodunak',
    general: 'R–C(=O)–R′', suffix: '-ona', prefix: 'oxo-',
    name: 'butan-2-ona', formula: 'CH3–CO–CH2–CH3',
    tip: 'Karboniloa katearen barneko C batean dago, bi C-ri lotuta.',
    explanation: 'Karbonilo taldea (C=O) bi karbono-talderen artean dago: horrek zetona eta aldehidoa bereizten laguntzen du.',
    rule: 'Bilatu C=O barnean → zenbakitu → adierazi -ona.',
    examples: [
      item('butan-2-ona', 'CH3–CO–CH2–CH3', 'Karboniloa C2-an.'),
      item('pentan-3-ona', 'CH3–CH2–CO–CH2–CH3', 'Karboniloa C3-an.')
    ]
  },
  {
    id: 'acid', badge: '–COOH', badgeRole: 'function',
    title: 'Azido karboxilikoak', family: 'Oxigenodunak',
    general: 'R–C(=O)–OH (–COOH)', suffix: 'azido …-oikoa', prefix: 'karboxi- (beste talde nagusi bat dagoenean)',
    name: 'azido propanoikoa', formula: 'CH3–CH2–COOH',
    tip: 'COOHko karbonoa zenbatu; ez da gehigarri bat.',
    explanation: 'Karboxilo taldeak karboniloa eta –OH batera ditu: –C(=O)–OH. Bere karbonoa C1 da kate ireki arruntetan.',
    rule: 'Bilatu –COOH → zenbatu bere C-a barne → «azido» + izena + «-oikoa».',
    examples: [
      item('azido propanoikoa', 'CH3–CH2–COOH', 'Azidoaren 3 C-ak: CH₃, CH₂ eta COOHko C.'),
      item('azido 2-metilpropanoikoa', 'CH3–CH(CH3)–COOH', 'Azidoaren C1-etik zenbatuta, metila C2-an.')
    ]
  },
  {
    id: 'ester', badge: '–COO–', badgeRole: 'function',
    title: 'Esterrak', family: 'Oxigenodunak',
    general: 'R–C(=O)–O–R′', suffix: 'alkil …-oatoa', prefix: '—',
    name: 'metil propanoatoa', formula: 'CH3–CH2–COO–CH3',
    tip: 'Izenaren lehenengo zatia O-ri lotutako taldearena da; bigarrena, azidoaren aldearena.',
    explanation: 'Esterrak bi zati ditu: R–C(=O)– (azidoaren aldea) eta –O–R′ (alkoholaren aldea). Izenetan, O-ri lotutako alkil taldea lehenengo.',
    rule: 'Banandu –C(=O)–O– zubian → izendatu O-ren aldea → izendatu azidoaren aldea.',
    examples: [
      item('metil propanoatoa', 'CH3–CH2–C(=O)–O–CH3', 'Azidoaren aldeak 3 C ditu; O-ren aldeak 1 C.'),
      item('etil etanoatoa', 'CH3–C(=O)–O–CH2–CH3', 'Azidoaren aldeak 2 C; O-ren aldeak 2 C.')
    ]
  },
  {
    id: 'amine', badge: '–NH₂', badgeRole: 'function',
    title: 'Aminak', family: 'Nitrogenodunak',
    general: 'R–NH₂ (amina primarioa)', suffix: '-amina', prefix: 'amino- (beharrezkoa denean)',
    name: 'etanamina', formula: 'CH3–CH2–NH2',
    tip: '–NH₂ taldea: nitrogenoak normalean 3 lotura osatzen ditu molekula neutro hauetan.',
    explanation: 'Amina primario batean N atomoak karbono bati eta bi H-ri lotura bana egiten die. Hemen amina primario arruntak bakarrik landuko ditugu.',
    rule: 'Bilatu –NH₂ → aukeratu kate nagusia → eman N taldearen kokapena, behar bada → -amina.',
    examples: [
      item('etanamina', 'CH3–CH2–NH2', 'Bi karbonoko katea, amaieran –NH₂.'),
      item('propan-2-amina', 'CH3–CH(NH2)–CH3', 'NH₂ erdiko C2-an.')
    ]
  },
  {
    id: 'amide', badge: '–CONH₂', badgeRole: 'function',
    title: 'Amidak', family: 'Nitrogenodunak',
    general: 'R–C(=O)–NH₂', suffix: '-amida', prefix: 'karbamoil- (beste talde nagusi bat dagoenean)',
    name: 'propanamida', formula: 'CH3–CH2–CONH2',
    tip: '–CONH₂ eta –NH₂ ez dira gauza bera: amidak karbonilo bat du N-ren ondoan.',
    explanation: 'Amidan karboniloa C=O nitrogenoarekin zuzenean lotuta dago. Kate nagusiko karbonoa da karboniloarena.',
    rule: 'Bilatu –C(=O)–NH₂ → zenbatu karboniloaren C-a → gehitu -amida.',
    examples: [
      item('etanamida', 'CH3–CONH2', 'Bi C guztira, karboniloarena barne.'),
      item('propanamida', 'CH3–CH2–CONH2', 'Hiru C guztira, karboniloarena barne.')
    ]
  }
];

export const FAMILY_CATEGORIES = ['Guztiak', 'Hidrokarburoak', 'Halogenodunak', 'Oxigenodunak', 'Nitrogenodunak'];

export const CYCLE_STAGES = [
  { heading: 'Eraztuna marraztu', text: '«ziklohex-» = sei karbonoko eraztuna. Marraztu sei aldeko forma itxia; erpin bakoitza karbono bat da.', why: 'Kate irekiaren aldean, azken C-a lehenengoarekin ere lotzen da. Karbono guztiek bi C–C lotura bakun dituzte hasieran.', showNumbers: false, showBranches: false },
  { heading: 'Karbonoak zenbakitu', text: 'Eraztuneko lehen karbonoa 1 gisa hartuko dugu, eta ondokoa 2 izango da. Sei erpin dira guztira.', why: 'Bi adar daudenean, zenbakiak ahalik eta txikienak izatea bilatzen dugu: 1,2 hobetsi 1,6-ren aldean beste noranzkoan zenbakiak berregokituz.', showNumbers: true, showBranches: false },
  { heading: 'Bi metil taldeak kokatu', text: '«1,2-dimetil» = bi CH₃ adar, C1 eta C2 karbonoetan. Gehitu biak eraztunean.', why: '«di-» aurrizkiak talde berdinaren bi ale adierazten ditu. Adarrak ez dira eraztunaren sei karbonoen barruan zenbatzen.', showNumbers: true, showBranches: true },
  { heading: 'Hidrogenoak eta formula egiaztatu', text: 'Eraztuneko bi C ordezkatuek CH bana dute; gainerako lauek CH₂. Bi adarrak CH₃ dira. Formula: C₈H₁₆.', why: 'Eraztuneko C bakoitzak 4 lotura-unitate bete behar ditu. Guztira: 2 × CH + 4 × CH₂ + 2 × CH₃ = C₈H₁₆.', showNumbers: true, showBranches: true }
];

export const GUIDED_CYCLE = { n: 6, bonds: [], branches: [{ at: 0, label: 'CH₃' }, { at: 1, label: 'CH₃' }], formula: 'C8H16' };

// Molekula egiaztatuen grafoak
const a = (id, x, y, el = 'C', role = 'chain') => ({ id, x, y, el, role });
const b = (from, to, order = 1, role = 'chain') => ({ from, to, order, role });

export const MOLECULES = {
  butane: {
    name: 'butanoa', condensed: 'CH3–CH2–CH2–CH3', molecular: 'C4H10',
    atoms: [a('c1', 130, 218), a('c2', 250, 218), a('c3', 370, 218), a('c4', 490, 218)],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylpentene: {
    name: '3-metilpent-1-enoa', condensed: 'CH2=CH–CH(CH3)–CH2–CH3', molecular: 'C6H12',
    atoms: [a('c1', 110, 222), a('c2', 210, 222), a('c3', 310, 222), a('c4', 410, 222), a('c5', 510, 222), a('c6', 310, 322, 'C', 'branch')],
    bonds: [b('c1', 'c2', 2, 'multiple'), b('c2', 'c3'), b('c3', 'c4'), b('c4', 'c5'), b('c3', 'c6', 1, 'branch')],
    main: ['c1', 'c2', 'c3', 'c4', 'c5']
  },
  butanol2: {
    name: 'butan-2-ola', condensed: 'CH3–CH(OH)–CH2–CH3', molecular: 'C4H10O',
    atoms: [a('c1', 130, 235), a('c2', 250, 235), a('c3', 370, 235), a('c4', 490, 235), a('o', 250, 120, 'O', 'group')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c2', 'o', 1, 'group')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylbutanal: {
    name: '2-metilbutanala', condensed: 'CH3–CH2–CH(CH3)–CHO', molecular: 'C5H10O',
    atoms: [a('c4', 140, 230), a('c3', 250, 230), a('c2', 360, 230), a('c1', 470, 230), a('o', 470, 120, 'O', 'group'), a('c5', 360, 325, 'C', 'branch')],
    bonds: [b('c4', 'c3'), b('c3', 'c2'), b('c2', 'c1'), b('c1', 'o', 2, 'group'), b('c2', 'c5', 1, 'branch')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylpropanoate: {
    name: 'metil propanoatoa', condensed: 'CH3–CH2–C(=O)–O–CH3', molecular: 'C4H8O2',
    atoms: [a('c3', 100, 230), a('c2', 210, 230), a('c1', 320, 230), a('o1', 320, 120, 'O', 'group'), a('o2', 430, 230, 'O', 'group'), a('c4', 540, 230, 'C', 'esterAlcohol')],
    bonds: [b('c3', 'c2'), b('c2', 'c1'), b('c1', 'o1', 2, 'group'), b('c1', 'o2', 1, 'group'), b('o2', 'c4', 1, 'esterAlcohol')], main: ['c1', 'c2', 'c3']
  },
  butene2: {
    name: 'but-2-enoa', condensed: 'CH3–CH=CH–CH3', molecular: 'C4H8',
    atoms: [a('c1', 130, 218), a('c2', 250, 218), a('c3', 370, 218), a('c4', 490, 218)],
    bonds: [b('c1', 'c2'), b('c2', 'c3', 2, 'multiple'), b('c3', 'c4')], main: ['c1', 'c2', 'c3', 'c4']
  },
  ethylethanoate: {
    name: 'etil etanoatoa', condensed: 'CH3–C(=O)–O–CH2–CH3', molecular: 'C4H8O2',
    atoms: [a('c2', 100, 230), a('c1', 210, 230), a('o1', 210, 120, 'O', 'group'), a('o2', 320, 230, 'O', 'group'), a('c3', 430, 230, 'C', 'esterAlcohol'), a('c4', 540, 230, 'C', 'esterAlcohol')],
    bonds: [b('c2', 'c1'), b('c1', 'o1', 2, 'group'), b('c1', 'o2', 1, 'group'), b('o2', 'c3', 1, 'esterAlcohol'), b('c3', 'c4', 1, 'esterAlcohol')], main: ['c1', 'c2']
  },
  butyne1: {
    name: 'but-1-inoa', condensed: 'CH≡C–CH2–CH3', molecular: 'C4H6',
    atoms: [a('c1', 130, 218), a('c2', 250, 218), a('c3', 370, 218), a('c4', 490, 218)],
    bonds: [b('c1', 'c2', 3, 'multiple'), b('c2', 'c3'), b('c3', 'c4')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylbutane2: {
    name: '2-metilbutanoa', condensed: 'CH3–CH(CH3)–CH2–CH3', molecular: 'C5H12',
    atoms: [a('c1', 130, 215), a('c2', 250, 215), a('c3', 370, 215), a('c4', 490, 215), a('c5', 250, 325, 'C', 'branch')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c2', 'c5', 1, 'branch')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylbutanol1: {
    name: '3-metilbutan-1-ola', condensed: 'HO–CH2–CH2–CH(CH3)–CH3', molecular: 'C5H12O',
    atoms: [a('c1', 115, 230), a('c2', 235, 230), a('c3', 355, 230), a('c4', 475, 230), a('c5', 355, 328, 'C', 'branch'), a('o', 115, 120, 'O', 'group')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c3', 'c5', 1, 'branch'), b('c1', 'o', 1, 'group')], main: ['c1', 'c2', 'c3', 'c4']
  },
  hydroxybutanal3: {
    name: '3-hidroxibutanala', condensed: 'CH3–CH(OH)–CH2–CHO', molecular: 'C4H8O2',
    atoms: [a('c1', 510, 225), a('c2', 380, 225), a('c3', 250, 225), a('c4', 120, 225), a('o1', 510, 100, 'O', 'group'), a('o2', 250, 100, 'O', 'secondary')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c1', 'o1', 2, 'group'), b('c3', 'o2', 1, 'secondary')], main: ['c1', 'c2', 'c3', 'c4']
  },
  hydroxypropanoicacid2: {
    name: 'azido 2-hidroxipropanoikoa', condensed: 'CH3–CH(OH)–C(=O)–OH', molecular: 'C3H6O3',
    atoms: [a('c1', 455, 220), a('c2', 320, 220), a('c3', 185, 220), a('o1', 455, 95, 'O', 'group'), a('o2', 565, 220, 'O', 'group'), a('o3', 320, 95, 'O', 'secondary')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c1', 'o1', 2, 'group'), b('c1', 'o2', 1, 'group'), b('c2', 'o3', 1, 'secondary')], main: ['c1', 'c2', 'c3']
  },
  bromobutanol3: {
    name: '3-bromobutan-2-ola', condensed: 'CH3–CH(Br)–CH(OH)–CH3', molecular: 'C4H9BrO',
    atoms: [a('c1', 510, 225), a('c2', 385, 225), a('c3', 260, 225), a('c4', 135, 225), a('o', 385, 100, 'O', 'group'), a('br', 260, 100, 'Br', 'branch')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c2', 'o', 1, 'group'), b('c3', 'br', 1, 'branch')], main: ['c1', 'c2', 'c3', 'c4']
  },
  methylbutenol3: {
    name: '3-metilbut-2-en-1-ola', condensed: 'HO–CH2–CH=C(CH3)–CH3', molecular: 'C5H10O',
    atoms: [a('c1', 120, 225), a('c2', 240, 225), a('c3', 360, 225), a('c4', 480, 225), a('o', 120, 100, 'O', 'group'), a('b1', 360, 345, 'C', 'branch')],
    bonds: [b('c1', 'c2'), b('c2', 'c3', 2, 'multiple'), b('c3', 'c4'), b('c1', 'o', 1, 'group'), b('c3', 'b1', 1, 'branch')], main: ['c1', 'c2', 'c3', 'c4']
  },
  oxobutanal3: {
    name: '3-oxobutanala', condensed: 'CH3–C(=O)–CH2–CHO', molecular: 'C4H6O2',
    atoms: [a('c1', 510, 225), a('c2', 380, 225), a('c3', 250, 225), a('c4', 120, 225), a('o1', 510, 100, 'O', 'group'), a('o2', 250, 100, 'O', 'secondary')],
    bonds: [b('c1', 'c2'), b('c2', 'c3'), b('c3', 'c4'), b('c1', 'o1', 2, 'group'), b('c3', 'o2', 2, 'secondary')], main: ['c1', 'c2', 'c3', 'c4']
  },
  propane: {
    name: 'propanoa', condensed: 'CH3–CH2–CH3', molecular: 'C3H8',
    atoms: [a('c1', 180, 210), a('c2', 310, 210), a('c3', 440, 210)],
    bonds: [b('c1', 'c2'), b('c2', 'c3')], main: ['c1', 'c2', 'c3']
  }
};

// 02.4 Oinarriak · Kate nagusia, zenbaketa eta adarrak
const c = (id, x, y, role = 'chain', element = 'C') => ({ id, x, y, role, element });
const l = (from, to, order = 1) => ({ from, to, order });

export const BRANCH_LESSONS = [
  {
    id: 'longest', tab: '01 · Kate nagusia', tag: 'KATEAREN AUKERA', name: '2-metilbutanoa', formula: 'CH₃–CH(CH₃)–CH₂–CH₃', molecular: 'C5H12',
    atoms: [c('c1', 100, 150), c('c2', 245, 150), c('c3', 390, 150), c('c4', 535, 150), c('b1', 245, 260, 'branch')],
    bonds: [l('c1', 'c2'), l('c2', 'c3'), l('c3', 'c4'), l('c2', 'b1')],
    main: ['c1', 'c2', 'c3', 'c4'], alternative: ['c1', 'c2', 'b1'], numbers: ['c1', 'c2', 'c3', 'c4'],
    altLabel: 'Hiru C-ko bidea ikusi', altResult: '3 C-ko bidea: motzegia', correctResult: '4 C-ko kate jarraitua: butanoa',
    steps: [
      { title: 'Ikusi C guztiak', text: 'Egituran bost karbono daude guztira, baina ez daude bostak kate jarraitu bakarrean. Zein bide har dezakegu adarkatu gabe?', why: 'Kate nagusia ez da molekularen C guztien batura: jarraian konektatutako atomoen ibilbidea da.', mode: 'all' },
      { title: 'Alderatu bi ibilbide', text: 'Bide berdeak lau karbono hartzen ditu. Beste bide batek hiru besterik ez. Kasu sinple honetan lau C-ko kate jarraitua aukeratzen dugu.', why: 'Konposatu honetan ez dago nagusitasuna aldatuko duen talde funtzionalik edo bestelako ezaugarririk. Horregatik, kate luzeena hautatzen da.', mode: 'main' },
      { title: 'Geratzen dena adarra da', text: 'Lau karbonoko katearen kanpoan CH₃ bat geratzen da: metil ordezkatzailea. Bi muturretatik zenbatuta 2 edo 3 izan daiteke.', why: 'Ordezkatzailearen lekutzaile txikiena hartu: 2. Ez du zentzurik kate nagusian ez dagoen C-a beste adar baten gisa kontatzea.', mode: 'branch', numbered: true },
      { title: 'Osatu izena', text: '2-metil + butano → 2-metilbutanoa. Egitura molekularra C₅H₁₂ da eta metilak 5. karbonoa gehitzen du.', why: '«but» = lau karbonoko kate nagusia; «metil» = beste karbono bat duen ordezkatzailea.', mode: 'main', numbered: true, reveal: true }
    ]
  },
  {
    id: 'double', tab: '02 · Lotura bikoitza', tag: 'BI NORANZKOAK', name: '3-metilpent-1-enoa', formula: 'CH₂=CH–CH(CH₃)–CH₂–CH₃', molecular: 'C6H12',
    atoms: [c('c1', 90, 150), c('c2', 205, 150), c('c3', 320, 150), c('c4', 435, 150), c('c5', 550, 150), c('b1', 320, 260, 'branch')],
    bonds: [l('c1', 'c2', 2), l('c2', 'c3'), l('c3', 'c4'), l('c4', 'c5'), l('c3', 'b1')],
    main: ['c1', 'c2', 'c3', 'c4', 'c5'], alternative: ['c1', 'c2', 'c3', 'c4', 'c5'], numbers: ['c1', 'c2', 'c3', 'c4', 'c5'],
    altLabel: 'Zenbakitu eskuinetik', altResult: 'Eskuinetik: 4-en eta 3-metil', correctResult: 'Ezkerretik: 1-en eta 3-metil',
    steps: [
      { title: 'Katea eta loturak antzeman', text: 'Kate nagusiak bost karbono ditu. Lotura bikoitz bat du muturretik gertu, eta metil bat erdiko karbonoan.', why: 'Asegabetasuna, katearen luzera eta adarrak bereizita aztertzeak akatsak saihesten ditu.', mode: 'all' },
      { title: 'Bi zenbaketak probatu', text: 'Ezkerretik C=C lotura C1–C2 artean hasten da. Eskuinetik hasita, C4–C5 artean izango litzateke.', why: 'Alkeno honetan lotura bikoitzaren lekutzaile txikiena lehenetsi behar da, metilarena baino lehen.', mode: 'main', numbered: true },
      { title: 'Ordezkatzailearen zenbakia', text: 'Aukeratutako ezkerreko zenbaketarekin metil taldea C3-an dago.', why: 'Ez da hautatu behar zenbaketa adarrarengatik lotura bikoitzari zenbaki handiagoa ematen badio.', mode: 'branch', numbered: true },
      { title: 'Izen osoa', text: '3-metilpent-1-enoa: 1-en lotura bikoitza da eta 3-metil adarra. Zenbaki bakoitza dagokion zatiaren aurrean doa.', why: 'Bikoitzaren 1 lekutzailea eta metilaren 3 lekutzailea funtzio desberdineko informazioak dira.', mode: 'main', numbered: true, reveal: true }
    ]
  },
  {
    id: 'alphabet', tab: '03 · Hainbat adar', tag: 'ORDENA ALFABETIKOA', name: '3-etil-2-metilhexanoa', formula: 'CH₃–CH(CH₃)–CH(CH₂CH₃)–CH₂–CH₂–CH₃', molecular: 'C9H20',
    atoms: [c('c1', 72, 145), c('c2', 177, 145), c('c3', 282, 145), c('c4', 387, 145), c('c5', 492, 145), c('c6', 597, 145), c('b1', 177, 265, 'branch'), c('b2', 282, 265, 'branch'), c('b3', 387, 265, 'branch')],
    bonds: [l('c1', 'c2'), l('c2', 'c3'), l('c3', 'c4'), l('c4', 'c5'), l('c5', 'c6'), l('c2', 'b1'), l('c3', 'b2'), l('b2', 'b3')],
    main: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'], alternative: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'], numbers: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'],
    altLabel: 'Konparatu beste zenbaketa', altResult: 'Beste muturretik: 4-etil eta 5-metil', correctResult: 'Zenbaketa egokia: 3-etil eta 2-metil',
    steps: [
      { title: 'Kate nagusia identifikatu', text: 'Kate nagusian sei karbono daude. Beste bi C-ko adarra etil da; C bakarrekoa, metil.', why: 'Etil = –CH₂CH₃. Metil = –CH₃. Adarrak ez dira beti karbono bakarrekoak.', mode: 'main' },
      { title: 'Zenbaketa alderatu', text: 'Ezkerretik adarrak 2,3 posizioetan daude; eskuinetik 4,5. Aukeratu 2,3 multzoa.', why: 'Ez dira lekutzaile guztiak batzen. Lehenengo ezberdintasunean txikiena den zenbaki-segida da hobetsia.', mode: 'main', numbered: true },
      { title: 'Etil eta metil antzeman', text: 'C3-an etil dago eta C2-an metil. Biak izenean aipatu behar dira, bakoitza bere lekutzailearekin.', why: 'Kate nagusitik kanpo geratzen diren karbono guztiak adar egokiari atxiki behar zaizkio.', mode: 'branch', numbered: true },
      { title: 'Ordena alfabetikoa erabili', text: 'Etil (e) lehenago doa metil (m) baino: 3-etil-2-metilhexanoa.', why: 'Izenaren ordena alfabetikoa da, ez adarren lekutzaileen zenbaki-ordena. Horregatik, «3-etil» lehenago idazten dugu «2-metil» baino.', mode: 'branch', numbered: true, reveal: true }
    ]
  },
  {
    id: 'alcohol', tab: '04 · Talde nagusiaren aurrerapena', tag: '–OH TALDEAREN AURRERAPENA', name: '3-metilbutan-1-ola', formula: 'HO–CH₂–CH₂–CH(CH₃)–CH₃', molecular: 'C5H12O',
    atoms: [c('c1', 105, 145), c('c2', 245, 145), c('c3', 385, 145), c('c4', 525, 145), c('b1', 385, 265, 'branch'), c('o', 105, 265, 'function', 'O')],
    bonds: [l('c1', 'c2'), l('c2', 'c3'), l('c3', 'c4'), l('c3', 'b1'), l('c1', 'o')],
    main: ['c1', 'c2', 'c3', 'c4'], alternative: ['c1', 'c2', 'c3', 'c4'], numbers: ['c1', 'c2', 'c3', 'c4'],
    altLabel: 'Zenbakitu –OH-tik urrun', altResult: 'Beste muturretik: 4-ol, 2-metil', correctResult: '–OH-ren muturretik: 1-ol, 3-metil',
    steps: [
      { title: 'Funtzio-talde bat agertzen denean', text: 'Hidrokarburo hutsetatik harago, molekula honek –OH taldea dauka (alkohola, hurrengo kapituluan sakonduko duguna).', why: 'Funtzio-talde nagusi bat dagoenean, hark agintzen du zenbaketan adarren gainetik.', mode: 'all' },
      { title: 'Kate nagusia hartu', text: '–OH taldea duen karbonoa barne hartzen duen lau C-ko kate egokia dugu: butan-. Metila adar moduan geratzen da.', why: 'Hemen ez da talde nagusia utzi behar kate nagusitik kanpo, beste adar bat sartzeagatik.', mode: 'main' },
      { title: '–OH-ri zenbaki txikiena', text: 'Ezkerretik –OH C1-ean dago; eskuinetik, C4-an. Beraz, C1 hautatzen dugu, nahiz eta metilak C3 izan.', why: 'Talde bereizgarri nagusiaren lekutzailea adarrarena baino lehen optimizatzen da.', mode: 'branch', numbered: true },
      { title: 'Emaitza egiaztatu', text: '3-metilbutan-1-ola. Lau C-ko kate nagusia, –OH C1-ean eta CH₃ adarra C3-an.', why: 'Ez genuke 2-metilbutan-4-ola aukeratuko: –OH taldeak 1 lekutzaile txikiagoa hartu dezake.', mode: 'main', numbered: true, reveal: true }
    ]
  }
];

// 03.2 Familiak eta Lehentasunak
export const CHOSEN_HIERARCHY = [
  { family: 'Azido karboxilikoak', group: '–COOH', suffix: 'azido …-oikoa', prefix: 'karboxi-' },
  { family: 'Esterrak', group: '–C(=O)–O–R′', suffix: 'alkil …-oatoa', prefix: '—' },
  { family: 'Amidak', group: '–CONH₂', suffix: '-amida', prefix: 'karbamoil-' },
  { family: 'Aldehidoak', group: '–CHO', suffix: '-ala', prefix: 'oxo- / formil-' },
  { family: 'Zetonak', group: '>C=O', suffix: '-ona', prefix: 'oxo-' },
  { family: 'Alkoholak', group: '–OH', suffix: '-ola', prefix: 'hidroxi-' },
  { family: 'Aminak', group: '–NH₂', suffix: '-amina', prefix: 'amino-' }
];

export const COMPLEMENTARY_HIERARCHY = [
  { kind: 'Lotura anizkoitzak (katean txertatzen dira)', items: 'C=C (-en-) · C≡C (-in-)', note: 'Ez dira funtzio-talde bereizgarriak, baina adarren aurretik zenbakitzen dira funtzio nagusirik ez badago.' },
  { kind: 'Beti aurrizki gisa doazen taldeak', items: 'Halogenoak (fluoro-, kloro-, bromo-, iodo-) · Eterrak (metoxi-, etoxi-…) · Alkil adarrak (metil-, etil-…)', note: 'Ez dute atzizki nagusirik hartzen; alfabetikoki ordenatzen dira.' }
];

export const PRIORITY_LESSONS = [
  {
    id: 'hydroxybutanal3', tab: '01 · –CHO eta –OH', tag: 'ALDEHIDOA > ALKOHOLA',
    name: '3-hidroxibutanala', condensed: 'CH₃–CH(OH)–CH₂–CHO',
    mainGroup: '–CHO', secondaryGroup: '–OH', mainLabel: 'aldehidoa', secondaryLabel: 'alkohola',
    mainNodes: ['c1', 'o1'], secondaryNodes: ['c3', 'o2'], chain: ['c1', 'c2', 'c3', 'c4'],
    transformed: '–CHO → -ala', otherAsPrefix: '–OH → hidroxi-',
    comparison: 'Zergatik ez da «butan-3-ola»? –CHO taldearen lehentasuna handiagoa da.',
    steps: [
      { title: 'Bi talde desberdin aurkitu', text: 'Muturreko –CHO aldehidoa da; erdiko –OH, alkohola. Biak kontuan hartu behar ditugu.', why: 'Egitura bera bi taldek osatzen dute, baina izen batean ezin dituzte biek atzizki nagusia hartu.', focus: [] },
      { title: 'Aukeratu talde nagusia', text: '–CHO taldeak –OH baino lehentasun handiagoa du. Izenean –ala amaiera erabiliko dugu; –OH «hidroxi-» bihurtuko da.', why: 'IUPACen talde bereizgarrien hierarkiari jarraitzen diogu: aldehidoa alkoholaren gainetik doa.', focus: ['c1', 'o1'] },
      { title: 'Kate nagusia identifikatu', text: '–CHO karbonoa barne hartzen duen kateak lau C ditu: «butan».', why: 'Aldehidoaren karbonoa kate nagusikoa da, ez beste karbono bat.', focus: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Zenbakitu –CHO-tik', text: 'Aldehidoaren karbonoa C1 da; –OH taldea C3-an geratzen da.', why: 'Talde nagusiak zehazten du zenbaketa; ezin dugu –OH-ri zenbaki txikiena emateko noranzkoa aldatu.', focus: ['c3', 'o2'], numbering: true },
      { title: 'Eraiki izen osoa', text: '3-hidroxi + butan + ala → 3-hidroxibutanala.', why: '«hidroxi-» bigarren mailako taldearen aurrizkia da; «-ala» aldehido nagusiaren atzizkia.', focus: [], numbering: true, result: true }
    ]
  },
  {
    id: 'hydroxypropanoicacid2', tab: '02 · –COOH eta –OH', tag: 'AZIDOA > ALKOHOLA',
    name: 'azido 2-hidroxipropanoikoa', condensed: 'CH₃–CH(OH)–COOH',
    mainGroup: '–COOH', secondaryGroup: '–OH', mainLabel: 'azido karboxilikoa', secondaryLabel: 'alkohola',
    mainNodes: ['c1', 'o1', 'o2'], secondaryNodes: ['c2', 'o3'], chain: ['c1', 'c2', 'c3'],
    transformed: '–COOH → azido …-oikoa', otherAsPrefix: '–OH → hidroxi-',
    comparison: 'Zergatik ez da «propan-2-ola»? –COOH azidoa da talde nagusia.',
    steps: [
      { title: 'Funtzio-taldeak topatu', text: '–COOH azido karboxilikoa da eta –OH beste karbono batean dago. Biak daude molekulan.', why: '–COOH barruko –OH ez da alkohol-talde bereizi bat; azido-taldearen parte da.', focus: [] },
      { title: 'Azidoa da nagusia', text: '–COOH taldeak lehentasuna du. Beraz, izena «azido …-oikoa» eredukoa izango da.', why: 'Hidroxi aurrizkia erabiliko dugu azido-taldeaz aparte ageri den –OH-rentzat.', focus: ['c1', 'o1', 'o2'] },
      { title: 'Hiru C-ko katea', text: 'Azidoaren karbonoa ere kontuan hartuta, hiru C ditugu: propan-.', why: '–COOH taldeko C ez da katearen kanpoko adar bat: kate nagusiko C1 da.', focus: ['c1', 'c2', 'c3'] },
      { title: 'Kokatu beste taldea', text: '–COOH karbonotik zenbatuz, –OH taldea C2-an dago: 2-hidroxi.', why: 'Karboxiloaren C1 ez da aukerakoa; azido alifatiko honetan zenbaketa hor hasten da.', focus: ['c2', 'o3'], numbering: true },
      { title: 'Izena egiaztatu', text: 'azido 2-hidroxipropanoikoa. 3 C eta bi talde oxigenodun bereizi identifikatu ditugu.', why: 'Formula molekularra C₃H₆O₃ da: –COOH taldeak bi O ditu eta beste –OH-k bat.', focus: [], numbering: true, result: true }
    ]
  },
  {
    id: 'bromobutanol3', tab: '03 · –OH eta –Br', tag: 'ALKOHOLA ETA HALOGENOA',
    name: '3-bromobutan-2-ola', condensed: 'CH₃–CH(Br)–CH(OH)–CH₃',
    mainGroup: '–OH', secondaryGroup: '–Br', mainLabel: 'alkohola', secondaryLabel: 'bromo ordezkatzailea',
    mainNodes: ['c2', 'o'], secondaryNodes: ['c3', 'br'], chain: ['c1', 'c2', 'c3', 'c4'],
    transformed: '–OH → -ola', otherAsPrefix: '–Br → bromo-',
    comparison: 'Ez aukeratu «2-bromobutan-3-ola»: –OH-ri 2 lekutzailea dagokio.',
    steps: [
      { title: 'OH eta Br bereizi', text: 'Alkohola (–OH) eta bromo ordezkatzailea ditugu.', why: 'Halogenoa aurrizki gisa izendatzen da, eta hemen –OH da talde bereizgarri nagusia.', focus: [] },
      { title: '–OH nagusi', text: 'Izenaren amaierak –ola izan behar du; bromoa, ordea, «bromo-» aurrizki bihurtzen da.', why: 'Hemen OH taldeari ematen zaio atzizkia; Br ez da atzizki nagusia.', focus: ['c2', 'o'] },
      { title: 'Kate nagusia', text: 'Lau karbonoko kate jarraitua: butan-.', why: 'Ez dago lotura anizkoitzik. Lau C-ko kate sinple bat dago.', focus: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Bi muturrak alderatu', text: 'Eskuin muturretik –OH C2-an eta Br C3-an. Alderantziz, –OH C3-an izango litzateke. Aukeratu C2.', why: 'Talde nagusiaren lekutzaile txikiena lehenesten da bromoaren zenbakiaren aurretik.', focus: ['c2', 'o', 'c3', 'br'], numbering: true },
      { title: 'Osatu izena', text: '3-bromo + butan-2-ola → 3-bromobutan-2-ola.', why: 'Bromoaren zenbakia 3 da, baina alkoholaren zenbakia 2. Bi informazioak behar dira.', focus: [], numbering: true, result: true }
    ]
  },
  {
    id: 'methylbutenol3', tab: '04 · –OH eta C=C', tag: 'ATZIZKIA ETA ASEGABETASUNA',
    name: '3-metilbut-2-en-1-ola', condensed: 'HO–CH₂–CH=C(CH₃)–CH₃',
    mainGroup: '–OH', secondaryGroup: 'C=C eta –CH₃', mainLabel: 'alkohola', secondaryLabel: 'lotura bikoitza eta metila',
    mainNodes: ['c1', 'o'], secondaryNodes: ['c2', 'c3', 'b1'], chain: ['c1', 'c2', 'c3', 'c4'],
    transformed: '–OH → -ola', otherAsPrefix: 'C=C → -en- · CH₃ → metil-',
    comparison: 'Ez da «2-metilbut-2-en-4-ola»: OH taldeari 1 zenbakia dagokio.',
    steps: [
      { title: 'Zer osagai daude?', text: '–OH taldea, C=C lotura bikoitza eta metil adarra bereizi behar ditugu.', why: 'C=C lotura izenean adierazten da, baina IUPACen nomenklaturan ez da talde bereizgarri gisa hartzen.', focus: [] },
      { title: 'Alkohola da talde nagusia', text: '–OH-k –ola amaiera zehazten du. C=C lotura –en– bidez adierazten da eta metila aurrizkia da.', why: 'Ez ditugu «–en» eta «–ol» aukeren artean hautatu behar; biak izenean sartzen dira, eginkizun desberdinekin.', focus: ['c1', 'o'] },
      { title: 'Kate nagusia eta lotura bikoitza', text: '–OH duen lau C-ko kateak C2 eta C3 artean lotura bikoitza dauka.', why: 'Lau karbonoko kate nagusi egokia aukeratu dugu, lotura bikoitza barne hartuta.', focus: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Zenbakia –OH-ri lehenengo', text: '–OH C1, C=C C2–C3 eta metila C3: 1-ol, 2-en eta 3-metil.', why: 'OH taldea alde horretatik 1 da; kontrako aldean 4 izango litzateke.', focus: ['c1', 'o', 'c2', 'c3', 'b1'], numbering: true },
      { title: 'Izena osatu', text: '3-metil + but-2-en-1-ola → 3-metilbut-2-en-1-ola.', why: 'Karbonoen balentziak egiaztatu: C=C loturak bi lotura-unitate erabiltzen ditu.', focus: [], numbering: true, result: true }
    ]
  },
  {
    id: 'oxobutanal3', tab: '05 · –CHO eta >C=O', tag: 'ALDEHIDOA > ZETONA',
    name: '3-oxobutanala', condensed: 'CH₃–C(=O)–CH₂–CHO',
    mainGroup: '–CHO', secondaryGroup: '>C=O', mainLabel: 'aldehidoa', secondaryLabel: 'zetona',
    mainNodes: ['c1', 'o1'], secondaryNodes: ['c3', 'o2'], chain: ['c1', 'c2', 'c3', 'c4'],
    transformed: '–CHO → -ala', otherAsPrefix: '>C=O → oxo-',
    comparison: 'Ez da «butano-2,4-diona»: muturreko –CHO aldehidoa da eta –ala erabiltzen dugu.',
    steps: [
      { title: 'Bi karbonilo bereizi', text: 'Muturreko karboniloa –CHO aldehidoa da; katearen barruko >C=O karboniloa zetona da.', why: 'Karboniloaren kokapenak bereizten ditu aldehidoa eta zetona.', focus: [] },
      { title: 'Aldehidoa da nagusia', text: '–CHO-k lehentasuna du >C=O zetona-taldearen aldean: –ala atzizkia erabiliko dugu.', why: 'Zetonaren karboniloari «oxo-» aurrizkia dagokio talde nagusia aldehidoa denean.', focus: ['c1', 'o1'] },
      { title: 'Lau C-ko kate nagusia', text: 'Aldehidoaren C-a barne hartuta lau karbonoko katea dugu.', why: 'Ketona barruko karbonoak katearen parte izaten jarraitzen du.', focus: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Karbonoa C1-etik zenbatu', text: '–CHO aldehidotik abiatuta, bigarren karboniloa C3-an dago.', why: 'Zenbaketa ez da ketonaren C-ri zenbaki txikiena emateko aldatzen.', focus: ['c3', 'o2'], numbering: true },
      { title: 'Eraiki izen osoa', text: '3-oxo + butan + ala → 3-oxobutanala.', why: 'Bigarren karboniloak oxo- aurrizkia hartzen du, talde nagusia aldehidoa delako.', focus: [], numbering: true, result: true }
    ]
  }
];

// 04 · Izenetik formulara (3 mailatan antolatuta)
export const NAME_TO_FORMULA = [
  {
    id: 'butane', tier: 1, title: 'butanoa', level: '1. maila · Lehenengo katea',
    parts: [{ text: 'but', role: 'chain' }, { text: 'anoa', role: 'neutral' }],
    steps: [
      { title: 'Lau karbono eta lotura bakunak', explain: '«but-» = 4 C; «-ano-» = C–C lotura bakunak.', why: 'Alkanoek ez dute karbono-karbono lotura bikoitzik edo hirukoitzik.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'Katea marraztu', explain: 'Elkartu lau C-ak hiru lotura bakunen bidez.', why: 'n karbonoko kate irekiak n − 1 lotura C–C ditu.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'H-ak gehitu', explain: 'Muturretako karbonoek 3 H dituzte; erdikoek, 2 H.', why: 'Karbono bakoitzak lau lotura bete behar ditu.', focus: 'hydrogens', show: ['chain', 'hydrogens', 'numbers'] },
      { title: 'Emaitza egiaztatu', explain: 'CH₃–CH₂–CH₂–CH₃. Lau karbono eta hamar hidrogeno.', why: 'C₄H₁₀ alkanoaren formula molekularra da.', focus: 'validation', show: ['chain', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'methylbutane2', tier: 1, title: '2-metilbutanoa', level: '1. maila · Kate nagusia eta adarra',
    parts: [{ text: '2-metil', role: 'branch' }, { text: 'but', role: 'chain' }, { text: 'anoa', role: 'neutral' }],
    steps: [
      { title: 'Izena banatu', explain: '«but» = lau karbono kate nagusian. «2-metil» = CH₃ adarra C2-an. Ez nahastu bost karbono guztira izatearekin.', why: 'Izeneko karbono-aurrizkiak kate nagusiari egiten dio erreferentzia, ez C guztiei.', focus: 'chain', show: [] },
      { title: 'Lau karbonoko katea', explain: 'C1–C2–C3–C4 marraztu, hasieran lotura bakunekin.', why: 'Alkano arruntean kate nagusiko C-ak lotura bakunez konektatzen dira.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'CH₃ adarra C2-an', explain: 'Metil taldea C2-an gehitu; adarra ez da kate nagusiko bosgarren posizioa.', why: 'Metil = karbono bakarreko ordezkatzailea.', focus: 'branch', show: ['chain', 'branch', 'numbers'] },
      { title: 'Hidrogenoak bete', explain: 'CH₃–CH(CH₃)–CH₂–CH₃. Adarra daraman C2-ak H bakarra dauka.', why: 'C2-aren hiru C–C lotura bakunek 3 unitate ematen dituzte; 4ra iristeko H bat behar du.', focus: 'hydrogens', show: ['chain', 'branch', 'hydrogens', 'numbers'] },
      { title: 'Balentziak egiaztatu', explain: 'Lau C kate nagusian eta beste C bat adarrean: C₅H₁₂.', why: 'Atomoen lotura-unitateen batura egokia izan behar da.', focus: 'validation', show: ['chain', 'branch', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'butyne1', tier: 1, title: 'but-1-inoa', level: '1. maila · Lotura hirukoitza',
    parts: [{ text: 'but', role: 'chain' }, { text: '1-in', role: 'multiple' }, { text: 'oa', role: 'neutral' }],
    steps: [
      { title: 'Izena zatitu', explain: '«but» = lau karbono; «1-in» = lotura hirukoitza C1 eta C2 artean.', why: '–inoa amaierak C≡C lotura adierazten du.', focus: 'multiple', show: [] },
      { title: 'Lau karbonoko katea', explain: 'Marraztu lau karbonoko kate bat, hasieran C–C lotura bakunekin.', why: 'Lotura-ordena hurrengo pausoa da; hasieran katearen luzera ezartzen dugu.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'C1≡C2 hirukoitza', explain: 'Lehenengo bi karbonoen arteko lotura hirukoitz bihurtu.', why: 'Lotura hirukoitzak karbono bakoitzaren hiru balentzia erabiltzen ditu.', focus: 'multiple', show: ['chain', 'multiple', 'numbers'] },
      { title: 'Hidrogenoak osatu', explain: 'C1-ek H bat du, C2-k bat ere ez. Gainerakoak CH₂ eta CH₃ dira.', why: 'C1: hirukoitza (3) + H (1) = 4. C2: hirukoitza (3) + bakuna (1) = 4.', focus: 'hydrogens', show: ['chain', 'multiple', 'hydrogens', 'numbers'] },
      { title: 'Emaitza egiaztatu', explain: 'CH≡C–CH₂–CH₃ eta formula molekularra C₄H₆.', why: 'Alkino aziklikoaren formula orokorra CₙH₂ₙ₋₂ da kate ireki eta lotura hirukoitz bakarra duenean.', focus: 'validation', show: ['chain', 'multiple', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'methylpentene', tier: 1, title: '3-metilpent-1-enoa', level: '1. maila · Lotura bikoitza + adarkadura',
    parts: [{ text: '3-metil', role: 'branch' }, { text: 'pent', role: 'chain' }, { text: '1-en', role: 'multiple' }, { text: 'oa', role: 'neutral' }],
    steps: [
      { title: 'Izena deskodetu', explain: '«pent» kate nagusiari dagokio, «1-en» lotura bikoitzari eta «3-metil» adarrari. Amaierako «-oa» izenaren bukaeraren parte da.', why: 'Izenaren zati bakoitzak egituran kokatu beharreko informazioa ematen du.', focus: '', show: [] },
      { title: 'Bost karbonoko katea', explain: '«pent» = bost karbono. Lehenik, marraztu C1–C2–C3–C4–C5 kate jarraitua.', why: 'Kate nagusia da egitura osoa antolatzeko erreferentzia.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'Lotura bikoitza C1–C2 artean', explain: '«1-en» esatean, lotura bikoitza lehenengo eta bigarren karbonoen artean dago.', why: 'Loturaren zenbakia lotura hasten den lehen karbonoarena da.', focus: 'multiple', show: ['chain', 'numbers', 'multiple'] },
      { title: 'Metil taldea C3-an', explain: '«3-metil» = CH₃ adarra hirugarren karbonoan.', why: 'Metil taldea kate nagusiko karbono bati lotzen zaio; ez da katearen beste mutur bat.', focus: 'branch', show: ['chain', 'multiple', 'branch', 'numbers'] },
      { title: 'Hidrogenoak osatu', explain: 'Orain osatu karbono bakoitzaren lau loturak: CH₂=CH–CH(CH₃)–CH₂–CH₃.', why: 'Lotura bikoitz batek bi balentzia erabiltzen ditu, bakunak bat.', focus: 'hydrogens', show: ['chain', 'multiple', 'branch', 'hydrogens', 'numbers'] },
      { title: 'Balentziak egiaztatu', explain: 'Karbono bakoitzaren lotura-ordenen batura + H kopurua = 4. Egiaztapena marrazkian ikus dezakezu.', why: 'Lotura bakoitzak ordena bat dauka: bakuna 1, bikoitza 2 eta hirukoitza 3.', focus: 'validation', show: ['chain', 'multiple', 'branch', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'butanol2', tier: 2, title: 'butan-2-ola', level: '2. maila · Funtzio-taldea: –OH',
    parts: [{ text: 'butan', role: 'chain' }, { text: '2', role: 'locator' }, { text: '-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Kate nagusia', explain: '«butan» = lau karbonoko kate asea.', why: '–ol taldearen kokapena zenbakitu egin behar da.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: '–OH taldea C2-an', explain: '«2-ol» adierazpenak hidroxilo taldea C2-an kokatzen du.', why: '–OH taldea karbonoari lotzen zaio O atomoaren bidez.', focus: 'group', show: ['chain', 'group', 'numbers'] },
      { title: 'Hidrogenoak osatu', explain: 'C2-ak bi C–C lotura eta C–O lotura ditu; H bakarra falta zaio. O-k H bat darama.', why: 'Oxigeno neutroak, normalean, bi lotura osatzen ditu.', focus: 'hydrogens', show: ['chain', 'group', 'hydrogens', 'numbers'] },
      { title: 'Balentzia egiaztatu', explain: 'CH₃–CH(OH)–CH₂–CH₃. C bakoitzak 4 lotura eta O-k 2 lotura ditu.', why: 'OH taldea ez da karbono gehigarri bat.', focus: 'validation', show: ['chain', 'group', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'methylbutanol1', tier: 2, title: '3-metilbutan-1-ola', level: '2. maila · OH nagusia adarra baino lehen',
    parts: [{ text: '3-metil', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: '1-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Aztertu izenaren amaiera', explain: '«1-ol» alkoholaren –OH taldea lehen karbonoan dagoela adierazten du.', why: 'Funtzio nagusiak izenaren amaiera eta zenbaketa baldintzatzen ditu.', focus: 'function', show: [] },
      { title: 'Lau C-ko katea', explain: 'Marraztu lau karbonoko kate nagusia; –OH kokatuko duen muturra C1 da.', why: '–OH talde nagusia daraman karbonoa katearen barruan hartu behar dugu adibide honetan.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: '–OH C1-an', explain: 'Lehenengo karbonoari –OH taldea gehitu.', why: 'Oxigenoak bi lotura ditu: bata C-rekin, bestea H-rekin.', focus: 'group', show: ['chain', 'group', 'numbers'] },
      { title: 'Metil C3-an', explain: 'Hirugarren karbonoari CH₃ adarra lotu, OH-ren muturretik zenbatuta.', why: 'Zenbaketa alderantziz egingo bagenu, –OH C4-an geratuko litzateke: ez da hobetsia.', focus: 'branch', show: ['chain', 'group', 'branch', 'numbers'] },
      { title: 'Osatu H-ak eta egiaztatu', explain: 'HO–CH₂–CH₂–CH(CH₃)–CH₃; C bakoitzak 4 lotura-unitate ditu.', why: '–OH taldeko O-k H bat badu eta C1-ek bi H; formula molekularra C₅H₁₂O da.', focus: 'validation', show: ['chain', 'group', 'branch', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'methylbutanal', tier: 2, title: '2-metilbutanala', level: '2. maila · Aldehidoa + adarkadura',
    parts: [{ text: '2-metil', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: 'al', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–al amaiera bilatu', explain: 'Aldehido bat da: –CHO taldea katearen muturrean dago, eta bere karbonoa C1 da.', why: 'Aldehidoaren karboniloa kate nagusiaren parte da; ez gehitu bosgarren karbono gisa.', focus: 'function', show: ['chain', 'numbers'] },
      { title: 'Lau karbonoko katea', explain: '«butan» = lau C guztira, –CHO taldeko karbonoa barne.', why: 'Aldehidoaren karbonoak automatikoki 1 zenbakia hartzen du adibide honetan.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'Karbonilo taldea marraztu', explain: 'C1 atomoak O-rekin lotura bikoitza du; gainerako lotura H-arekin egingo du.', why: '–CHO = –C(=O)H.', focus: 'group', show: ['chain', 'numbers', 'group'] },
      { title: 'Metila C2-an', explain: 'Jarri CH₃ adarra aldehidotik zenbatutako bigarren karbonoan.', why: '2-metil ez da 3-metil: zenbaketa –CHO-tik hasten da.', focus: 'branch', show: ['chain', 'numbers', 'group', 'branch'] },
      { title: 'H-ak osatu eta egiaztatu', explain: 'Egitura: CH₃–CH₂–CH(CH₃)–CHO (C₅H₁₀O).', why: 'C1-ek O-rako lotura bikoitza, C2-rako bakuna eta H-rako bakuna ditu.', focus: 'validation', show: ['chain', 'numbers', 'group', 'branch', 'hydrogens', 'validation'] }
    ]
  },
  {
    id: 'methylpropanoate', tier: 2, title: 'metil propanoatoa', level: '2. maila · Esterraren bi aldeak',
    parts: [{ text: 'metil', role: 'esterAlcohol' }, { text: 'propanoato', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Izena bitan banatu', explain: '«metil» = oxigenoari lotutako alkohol-aldea; «propanoato» = azidoaren 3 karbonoko aldea.', why: 'Ester baten izenean lehenik O-ri lotutako alkil taldea, gero azidoaren partea adierazten da.', focus: 'function', show: [] },
      { title: 'Propanoatoaren katea', explain: 'Propanoatoaren 3 C-ak marraztu; muturreko karbonoa karboniloaren C-a izango da.', why: 'Azidoaren C(=O) karbonoa hiru karbono horietako bat da.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: '–C(=O)–O– taldea', explain: 'Karboniloari O bikoitza eta beste O bakuna gehitu.', why: 'Esterra R–C(=O)–O–R′ moduko lotura da.', focus: 'group', show: ['chain', 'group', 'numbers'] },
      { title: 'Metila O-ri lotu', explain: 'Beste oxigenoaren beste aldean CH₃ jarri; ez lotu zuzenean karboniloaren C-ari.', why: 'Metil talde hori esterraren alkohol-aldekoa da.', focus: 'esterAlcohol', show: ['chain', 'group', 'esterAlcohol', 'numbers'] },
      { title: 'H-ak osatu eta egiaztatu', explain: 'CH₃–CH₂–C(=O)–O–CH₃. Propanoatoaren aldeak 3 C ditu; metil aldeak C bat (C₄H₈O₂).', why: '–O– zubiko oxigenoak bi lotura bakun ditu; esterrean –C(=O)–O– ez da –C(=O)–C–.', focus: 'validation', show: ['chain', 'group', 'esterAlcohol', 'hydrogens', 'numbers', 'validation'] }
    ]
  },
  {
    id: 'hydroxybutanal3', tier: 3, title: '3-hidroxibutanala', level: '3. maila · Bi talde: aldehidoa + alkohola',
    parts: [{ text: '3-hidroxi', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: 'al', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Talde nagusia identifikatu', explain: '«-al» aldehido nagusiari dagokio; «hidroxi-» OH taldearen aurrizkia da.', why: '–CHO aldehidoa –OH alkoholaren gainetik dago izendapenean.', focus: 'function', show: [] },
      { title: 'Lau karbonoko katea', explain: '«butan» = lau karbono, aldehidoaren –CHO karbonoa barne.', why: 'Aldehidoaren C-a kate nagusiko C1 da.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: '–CHO taldea kokatu', explain: 'C1-en karbonilo C=O eta H dago; muturreko aldehidoa osatzen dute.', why: 'Aldehidoaren karbonoak karbonoarekin, oxigenoarekin (bikoitza) eta H-rekin osatzen ditu lau loturak.', focus: 'function', show: ['chain', 'group', 'numbers'] },
      { title: '3-hidroxi gehitu', explain: '–OH taldea C3-an jartzen da, C1 aldehidotik kontatuz.', why: 'OH taldearen kokapena aldatu egingo litzateke kontrako muturretik hasiko bagina.', focus: 'branch', show: ['chain', 'group', 'secondary', 'numbers'] },
      { title: 'Hidrogenoak eta egiaztapena', explain: 'CH₃–CH(OH)–CH₂–CHO (C₄H₈O₂). Balentzia guztiak osatuta.', why: 'C bakoitzak 4 lotura-unitate eta O bakoitzak 2 lotura osatzen ditu.', focus: 'validation', show: ['chain', 'group', 'secondary', 'numbers', 'hydrogens', 'validation'] }
    ]
  },
  {
    id: 'hydroxypropanoicacid2', tier: 3, title: 'azido 2-hidroxipropanoikoa', level: '3. maila · Azidoa eta hidroxiloa',
    parts: [{ text: 'azido', role: 'function' }, { text: '2-hidroxi', role: 'branch' }, { text: 'propan', role: 'chain' }, { text: 'oiko', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Azidoa identifikatu', explain: '«azido …-oikoa» = –COOH talde nagusia. «hidroxi-» beste OH talde baten adierazlea da.', why: '–COOH talde barruko OH ez da beste alkohol independente bat.', focus: 'function', show: [] },
      { title: 'Hiru karbonoko katea', explain: '«propan» = hiru karbono, –COOH taldeko karbonoa barne.', why: 'Azido karboxilikoaren C-a kate nagusikoa da.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: '–COOH taldea eraiki', explain: 'C1-en C=O eta C–OH loturak gehitu.', why: '–COOH = –C(=O)OH; bi oxigeno ditu talde berean.', focus: 'function', show: ['chain', 'group', 'numbers'] },
      { title: '2-hidroxi kokatu', explain: 'Beste –OH bat C2-an jarri, azidotik zenbatuta.', why: 'Azidoaren talde nagusiko C1 da zenbaketaren abiapuntua.', focus: 'branch', show: ['chain', 'group', 'secondary', 'numbers'] },
      { title: 'Formula osatu eta egiaztatu', explain: 'CH₃–CH(OH)–C(=O)–OH (C₃H₆O₃).', why: 'Talde nagusia azidoa da, ez alkohola.', focus: 'validation', show: ['chain', 'group', 'secondary', 'numbers', 'hydrogens', 'validation'] }
    ]
  },
  {
    id: 'methylbutenol3', tier: 3, title: '3-metilbut-2-en-1-ola', level: '3. maila · –OH, C=C eta metil adarra',
    parts: [{ text: '3-metil', role: 'branch' }, { text: 'but', role: 'chain' }, { text: '2-en', role: 'multiple' }, { text: '1-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Izena zatitu', explain: 'But = 4 C, 2-en = C2=C3, 1-ol = –OH C1-en, 3-metil = adarra C3-an.', why: '–OH taldea da nagusia; lotura bikoitza ere izenean mantentzen da.', focus: 'function', show: [] },
      { title: 'Kate nagusia marraztu', explain: 'Lau C-ko katea sortu eta C1etik C4ra zenbakitu.', why: '–OH-ri 1 zenbakia egokitzeko erabiltzen den noranzkoa da.', focus: 'chain', show: ['chain', 'numbers'] },
      { title: 'C=C eta OH kokatu', explain: 'OH C1-ean eta C2=C3 lotura bikoitza.', why: 'Lotura bikoitzak bi lotura-unitate erabiltzen ditu karbono bakoitzean.', focus: 'multiple', show: ['chain', 'group', 'multiple', 'numbers'] },
      { title: 'Metil adarra gehitu', explain: 'C3-an CH₃ adarra lotu.', why: 'C3-ak C2-rekin bikoitza, C4-rekin bakuna eta metilarekin bakuna ditu; ez du H-rik.', focus: 'branch', show: ['chain', 'group', 'multiple', 'branch', 'numbers'] },
      { title: 'Hidrogenoak eta egiaztapena', explain: 'HO–CH₂–CH=C(CH₃)–CH₃ (C₅H₁₀O).', why: 'Bikoitzaren zenbakia 2 da, baina OH-rena 1; ez alderantziz.', focus: 'validation', show: ['chain', 'group', 'multiple', 'branch', 'numbers', 'hydrogens', 'validation'] }
    ]
  }
];

// 05 · Formulatik izenera (3 mailatan antolatuta)
export const FORMULA_TO_NAME = [
  {
    id: 'methylbutane2', tier: 1, title: 'CH3–CH(CH3)–CH2–CH3', level: '1. maila · Kate luzeena eta ordezkatzailea',
    parts: [{ text: '2-metil', role: 'branch' }, { text: 'but', role: 'chain' }, { text: 'anoa', role: 'neutral' }],
    steps: [
      { title: 'Egitura osoa aztertu', explain: 'Bost C daude, baina ez dute guztiek bost karbonoko kate jarraitu bat osatzen.', why: 'Karbono kopurua guztira ez da beti kate nagusiaren luzera.', focusNodes: [] },
      { title: 'Lau C-ko kate nagusia', explain: 'Aukeratutako biderik luzeenean lau karbono jarraian daude: butano.', why: 'Konposatu arrunt honetan ez dago bestelako talde nagusirik; kate luzeena aukeratzen da.', focusNodes: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Zenbakitu bi muturretatik', explain: 'Metila C2 edo C3 izan liteke; 2 zenbakia hartu.', why: 'Ordezkatzaileari lekutzaile txikiena ematen zaio zenbaketa posibleen artean.', focusNodes: ['c1', 'c2', 'c3', 'c4'], numbering: true, numberingBoth: true },
      { title: 'Identifikatu metil taldea', explain: 'C2-ri lotutako CH₃ taldea adarra da.', why: '«2-metil» izen-zatiak adar horren posizioa eta mota adierazten ditu.', focusNodes: ['c2', 'c5'], numbering: true },
      { title: 'Izena osatu', explain: '2-metil + butanoa = 2-metilbutanoa.', why: 'Lau karbono katean + bat adarrean = C₅H₁₂.', focusNodes: ['c1', 'c2', 'c5'], numbering: true, assemble: true }
    ]
  },
  {
    id: 'butene2', tier: 1, title: 'CH3–CH=CH–CH3', level: '1. maila · Lotura bikoitzaren kokapena',
    parts: [{ text: 'but', role: 'chain' }, { text: '2-en', role: 'multiple' }, { text: 'oa', role: 'neutral' }],
    steps: [
      { title: 'Lotura bikoitza aurkitu', explain: 'C=C ageri da; beraz alkenoa da eta –enoa amaiera behar du.', why: 'Lotura bikoitzak atzizkia zehazten du hidrokarburo honetan.', focusNodes: ['c2', 'c3'] },
      { title: 'Kate nagusia hartu', explain: 'Lau karbono dituen kate bakarra dago: «but».', why: 'Lau C horiek guztiak hartzen ditu kateak.', focusNodes: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Bi muturretatik zenbakitu', explain: 'Bai ezkerretik bai eskuinetik, C=C lotura 2. karbonoan hasten da.', why: 'Bi orientazioetan 2 ateratzen da; ez dago alderik.', focusNodes: ['c2', 'c3'], numbering: true, numberingBoth: true },
      { title: 'Izena osatu', explain: 'but + 2-en + oa → but-2-enoa.', why: '2 zenbakia lotura bikoitza hasten den karbonoari dagokio.', focusNodes: ['c2', 'c3'], numbering: true, assemble: true }
    ]
  },
  {
    id: 'butanol2', tier: 2, title: 'CH3–CH(OH)–CH2–CH3', level: '2. maila · Alkohola eta zenbaketa',
    parts: [{ text: 'butan', role: 'chain' }, { text: '2', role: 'locator' }, { text: '-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–OH taldea identifikatu', explain: 'Hidroxilo taldea du: alkohola da; –ola atzizkia.', why: '–OH talde nagusiaren kokapena kontuan hartu behar da.', focusNodes: ['c2', 'o'] },
      { title: 'Lau C-ko katea', explain: 'Kateak lau karbono ditu: «butan».', why: 'OH taldea daraman karbonoa kate nagusian dago.', focusNodes: ['c1', 'c2', 'c3', 'c4'] },
      { title: 'Bi noranzkoak alderatu', explain: 'Ezkerretik zenbatuz OH 2-an; eskuinetik, 3-an. Aukeratu 2.', why: 'Funtzio-talde nagusiari ahalik eta zenbaki txikiena esleitzen zaio.', focusNodes: ['c1', 'c2', 'o'], numbering: true, numberingBoth: true },
      { title: 'Izena osatu', explain: 'butan + 2-ol + a → butan-2-ola.', why: '2 zenbakia –ol amaieraren aurrean dago.', focusNodes: ['c2', 'o'], numbering: true, assemble: true }
    ]
  },
  {
    id: 'methylbutanol1', tier: 2, title: 'HO–CH2–CH2–CH(CH3)–CH3', level: '2. maila · Funtzio nagusiak zenbaketa erabakitzen du',
    parts: [{ text: '3-metil', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: '1-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–OH taldea aurkitu', explain: '–OH taldea identifikatu: alkohola da, eta –ola atzizkia izango du.', why: 'Talde bereizgarri nagusia lehenik ezagutu, zenbaketa erabakitzeko.', focusNodes: ['c1', 'o'] },
      { title: 'Kate egokia aukeratu', explain: '–OH daraman C barne hartzen duen lau karbonoko katea aukeratu.', why: 'Beste C bakarra adarrean geratzen da.', focusNodes: ['c1', 'c2', 'c3', 'c4'] },
      { title: '–OH-ren muturretik zenbakitu', explain: '–OH C1-an eta metila C3-an. Kontrako noranzkoan –OH C4 izango litzateke.', why: 'Talde nagusiari ahalik eta lekutzaile baxuena dagokio, metilarena baino lehen.', focusNodes: ['c1', 'c2', 'c3', 'o'], numbering: true, numberingBoth: true },
      { title: 'Metil taldea kokatu', explain: 'Metil adarra C3-an dago; ez erabili C2, OH lehenetsi behar delako.', why: 'Adarren lekutzaileak ez du talde nagusiaren zenbaketa aldatzen.', focusNodes: ['c3', 'c5'], numbering: true },
      { title: 'Izena osatu', explain: '3-metil + butan + 1-ol + a → 3-metilbutan-1-ola.', why: 'OH taldearen 1 eta metil taldearen 3 banandu behar dira.', focusNodes: ['c1', 'c3', 'c5', 'o'], numbering: true, assemble: true }
    ]
  },
  {
    id: 'methylbutanal', tier: 2, title: 'CH3–CH2–CH(CH3)–CHO', level: '2. maila · Aldehidoa + adarkadura',
    parts: [{ text: '2-metil', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: 'al', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Funtzio-taldea identifikatu', explain: '–CHO aurkitu: aldehidoa da. –al atzizkia erabiliko dugu.', why: 'Funtzio-talde nagusiak atzizkia eta zenbaketa zehazten laguntzen du.', focusNodes: ['c1', 'o'], numbering: false },
      { title: 'Kate nagusia aukeratu', explain: '–CHO-ko C-a barne hartzen duen kate jarraitu luzeena lau karbonokoa da.', why: 'Adarkadurako CH₃ ez da kate nagusiaren parte.', focusNodes: ['c1', 'c2', 'c3', 'c4'] },
      { title: '–CHO-tik zenbakitu', explain: 'Aldehidoaren C-a = 1; ondoren 2, 3 eta 4.', why: 'Aldehido azikliko hauetan taldearen karbonoa C1 da.', focusNodes: ['c1', 'c2', 'c3', 'c4'], numbering: true },
      { title: 'Adarra identifikatu', explain: 'C2-an metil (–CH₃) talde bat dago.', why: 'C2-tik adarkatzen den C-a ez da kate nagusikoa.', focusNodes: ['c2', 'c5'], numbering: true },
      { title: 'Izena eraiki', explain: '2-metil + butan + al + a → 2-metilbutanala.', why: 'Lehenengo adarraren kokapena eta izena; azkenik kate nagusia eta funtzioaren amaiera.', focusNodes: ['c1', 'c2', 'c5', 'o'], numbering: true, assemble: true }
    ]
  },
  {
    id: 'ethylethanoate', tier: 2, title: 'CH3–C(=O)–O–CH2–CH3', level: '2. maila · Esterra noranzko egokian irakurri',
    parts: [{ text: 'etil', role: 'esterAlcohol' }, { text: 'etanoato', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–C(=O)–O– identifikatu', explain: 'Bi oxigeno horien antolaketak esterra adierazten du.', why: 'Ester batek karbonilo C=O eta C–O–C lotura ditu.', focusNodes: ['c1', 'o1', 'o2'] },
      { title: 'Azidoaren aldea', explain: 'Karboniloaren aldeko kateak bi karbono ditu: etanoatoa.', why: 'Azidoaren izenetik dator: azido etanoikoa → etanoatoa.', focusNodes: ['c1', 'c2', 'o1'] },
      { title: 'O-ren beste aldea', explain: 'O zubitik abiatzen den beste aldeak bi C ditu: etil.', why: 'Izenean aurrena alkohol-aldeko taldea jartzen da.', focusNodes: ['o2', 'c3', 'c4'] },
      { title: 'Izena osatu', explain: 'etil + etanoatoa → etil etanoatoa.', why: 'Ez nahasi: etil metanoatoak eta metil propanoatoak egitura desberdinak dituzte.', focusNodes: ['c1', 'o1', 'o2', 'c3', 'c4'], assemble: true }
    ]
  },
  {
    id: 'hydroxybutanal3', tier: 3, title: 'CH3–CH(OH)–CH2–CHO', level: '3. maila · –CHO eta –OH bereizi',
    parts: [{ text: '3-hidroxi', role: 'branch' }, { text: 'butan', role: 'chain' }, { text: 'al', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: 'Bi taldeak antzeman', explain: 'Muturreko –CHO aldehidoa da eta erdian –OH alkohol taldea dago.', why: 'Bi talde bereizi ditugu, ez bi alkohol.', focusNodes: ['c1', 'o1', 'c3', 'o2'] },
      { title: 'Nagusia zehaztu', explain: 'Aldehidoak lehentasuna du: –ala atzizkia.', why: 'OH bestea «hidroxi-» aurrizki gisa adieraziko dugu.', focusNodes: ['c1', 'o1'] },
      { title: 'Kate nagusia eta zenbakiak', explain: 'Lau C-ko katea da eta C1 aldehidoaren karbonoa da.', why: 'Aldehidoaren karbonoak katean sartzen da.', focusNodes: ['c1', 'c2', 'c3', 'c4'], numbering: true },
      { title: '–OH C3-an', explain: 'Hidroxi taldea C3-an geratzen da.', why: 'Aldehidoaren posizioak zehazten du numerazioaren noranzkoa.', focusNodes: ['c3', 'o2'], numbering: true },
      { title: 'Izena osatu', explain: '3-hidroxi + butan + ala → 3-hidroxibutanala.', why: 'Hidroxi aurrizkia + aldehido atzizkia.', focusNodes: [], numbering: true, assemble: true }
    ]
  },
  {
    id: 'hydroxypropanoicacid2', tier: 3, title: 'CH3–CH(OH)–C(=O)–OH', level: '3. maila · Azidoa eta OH gehigarria',
    parts: [{ text: 'azido', role: 'function' }, { text: '2-hidroxi', role: 'branch' }, { text: 'propan', role: 'chain' }, { text: 'oiko', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–COOH eta OH bereizi', explain: 'Azido karboxilikoa dago muturrean eta beste hidroxilo bat katean.', why: 'Karboxiloaren –OH ez da beste alkohol bat.', focusNodes: ['c1', 'o1', 'o2', 'c2', 'o3'] },
      { title: 'Azidoa nagusi', explain: 'Izenaren egitura «azido …-oikoa» da.', why: '–COOH > –OH lehentasun-ordenan.', focusNodes: ['c1', 'o1', 'o2'] },
      { title: 'Hiru C-ko katea', explain: 'Hiru C ditu eta azidoaren C-a C1 da.', why: '–COOH taldeko C ere zenbatzen da.', focusNodes: ['c1', 'c2', 'c3'], numbering: true },
      { title: 'Beste OH C2-an', explain: 'Beste OH taldea C2-an: 2-hidroxi.', why: 'Karboxiloaren karbonoa C1 da.', focusNodes: ['c2', 'o3'], numbering: true },
      { title: 'Izen zuzena', explain: 'azido 2-hidroxipropanoikoa.', why: 'Azidoa atzizki bidez, beste OH aurrizki bidez.', focusNodes: [], numbering: true, assemble: true }
    ]
  },
  {
    id: 'methylbutenol3', tier: 3, title: 'HO–CH2–CH=C(CH3)–CH3', level: '3. maila · Alkohola + C=C + adarra',
    parts: [{ text: '3-metil', role: 'branch' }, { text: 'but', role: 'chain' }, { text: '2-en', role: 'multiple' }, { text: '1-ol', role: 'function' }, { text: 'a', role: 'neutral' }],
    steps: [
      { title: '–OH, C=C eta metil', explain: 'Egituran hidroxilo, lotura bikoitza eta adar bat aurkitu.', why: 'C=C ez da talde bereizgarri nagusia.', focusNodes: ['c1', 'o', 'c2', 'c3', 'b1'] },
      { title: 'OH da talde nagusia', explain: '–ola amaiera aukeratu; C=C izenean «-en-» gisa mantendu.', why: 'OH talde nagusiak numerazioa ere baldintzatzen du.', focusNodes: ['c1', 'o'] },
      { title: 'Lau karbono nagusi', explain: 'Kate nagusiak 4 C ditu. OH-tik hasi zenbatzen.', why: 'C1-en OH dago eta C2=C3.', focusNodes: ['c1', 'c2', 'c3', 'c4'], numbering: true },
      { title: 'Bikoitza eta adarra', explain: 'C2=C3 eta metil C3-an.', why: 'C3 ez da CH; C=C, C–C eta C–metil ditu.', focusNodes: ['c2', 'c3', 'b1'], numbering: true },
      { title: 'Izen osoa', explain: '3-metilbut-2-en-1-ola.', why: '3-metil + 2-en + 1-ol kokapenak zuzenean egituratik atera ditugu.', focusNodes: [], numbering: true, assemble: true }
    ]
  }
];

// 06 · Laburpena — 9 akats ohikoak
export const COMMON_MISTAKES = [
  { group: 'Kate nagusia eta ordena', title: 'Kate nagusia eta C guztiak nahastea', bad: 'CH₃–CH(CH₃)–CH₂–CH₃ → pentanoa', good: 'CH₃–CH(CH₃)–CH₂–CH₃ → 2-metilbutanoa', why: 'Bost C daude guztira, baina lau C-ko kate jarraitua da egokia.' },
  { group: 'Kate nagusia eta ordena', title: 'Adarrak zenbakiaren arabera ordenatzea', bad: '3-etil-2-metilhexanoa → 2-metil-3-etilhexanoa', good: '3-etil-2-metilhexanoa', why: 'Etil etorri behar da metil baino lehen, izenak alfabetikoki ordenatzen direlako.' },
  { group: 'Zenbaketa eta lokatzaileak', title: 'Metil taldeagatik –OH gaizki zenbakitzea', bad: 'HO–CH₂–CH₂–CH(CH₃)–CH₃ → 2-metilbutan-4-ola', good: 'HO–CH₂–CH₂–CH(CH₃)–CH₃ → 3-metilbutan-1-ola', why: '–OH talde nagusiaren lekutzailea txikiena izan behar da.' },
  { group: 'Zenbaketa eta lokatzaileak', title: 'Lotura bikoitza oker kokatzea', bad: 'but-1-enoa → CH₃–CH=CH–CH₃', good: 'but-1-enoa → CH₂=CH–CH₂–CH₃', why: '«1-en»: lotura C1 eta C2 artean hasten da.' },
  { group: 'Zenbaketa eta lokatzaileak', title: 'OH taldearen zenbakia ahaztea', bad: 'butan-2-ola → CH₃–CH₂–CH₂–CH₂OH', good: 'butan-2-ola → CH₃–CH(OH)–CH₂–CH₃', why: '–OH C2-an dago, ez C1-ean.' },
  { group: 'Karboniloak eta esterrak', title: 'Aldehidoaren C-a gaizki zenbatzea', bad: '2-metilbutanala → CH₃–CH₂–CH₂–CH(CH₃)–CHO', good: '2-metilbutanala → CH₃–CH₂–CH(CH₃)–CHO', why: '–CHO taldeko karbonoa kate nagusiko C1 da.' },
  { group: 'Karboniloak eta esterrak', title: 'Aldehidoari zenbakia ez ematea', bad: '3-hidroxibutanala → CH₃–CH₂–CH(OH)–CHO', good: '3-hidroxibutanala → CH₃–CH(OH)–CH₂–CHO', why: '–CHO taldeko karbonoa C1 da; horretatik zenbatuta, –OH C3-an egon behar du.' },
  { group: 'Karboniloak eta esterrak', title: 'Bigarren karboniloa alkoholtzat hartzea', bad: '3-oxobutanala → CH₃–CO–CH₂–CH₂OH', good: '3-oxobutanala → CH₃–CO–CH₂–CHO', why: 'Aldehidoaren –CHO taldea nagusia da eta C1-en dago; barruko karboniloa oxo- da.' },
  { group: 'Karboniloak eta esterrak', title: 'Esterrean metila C-ri lotzea', bad: 'Metil propanoatoa → CH₃–CH₂–CH(CH₃)–COOH', good: 'Metil propanoatoa → CH₃–CH₂–C(=O)–O–CH₃', why: '«metil» oxigenoaren beste aldean dago esterrean.' }
];

export const KORA_ASSETS = {
  welcome: 'assets/kora-welcome.png',
  remember: 'assets/kora-explain.png',
  important: 'assets/kora-important.png',
  think: 'assets/kora-think.png',
  success: 'assets/kora-success.png'
};

