// ==========================================================================
// KIMIKA · PROPIETATE PERIODIKOAK / PROPIEDADES PERIÓDICAS
// Laborategi Didaktiko Interaktiboa (2. Batxilergoa / 2.º Bachillerato)
// Errepresentazio garbia: Bohr-en esferak, geruzen eta balentziaren seinaleak,
// Pauling lotura-hodeia eta arrazoiketa zientifikoa.
// ==========================================================================

export const RAW_ELEMENTS = [
  ['H', 'Hidrogenoa', 'Hidrógeno', 1, 1, 1, [1], '1s¹', 31, 1312, 73, 2.20, 'nonmetal'],
  ['He', 'Helioa', 'Helio', 2, 1, 18, [2], '1s²', null, 2372, null, null, 'noble'],
  ['Li', 'Litioa', 'Litio', 3, 2, 1, [2, 1], '[He] 2s¹', 128, 520, 60, 0.98, 'alkali'],
  ['Be', 'Berilioa', 'Berilio', 4, 2, 2, [2, 2], '[He] 2s²', 96, 900, null, 1.57, 'alkaline'],
  ['B', 'Boroa', 'Boro', 5, 2, 13, [2, 3], '[He] 2s² 2p¹', 84, 801, 27, 2.04, 'metalloid'],
  ['C', 'Karbonoa', 'Carbono', 6, 2, 14, [2, 4], '[He] 2s² 2p²', 76, 1087, 122, 2.55, 'nonmetal'],
  ['N', 'Nitrogenoa', 'Nitrógeno', 7, 2, 15, [2, 5], '[He] 2s² 2p³', 71, 1402, null, 3.04, 'nonmetal'],
  ['O', 'Oxigenoa', 'Oxígeno', 8, 2, 16, [2, 6], '[He] 2s² 2p⁴', 66, 1314, 141, 3.44, 'nonmetal'],
  ['F', 'Fluorra', 'Flúor', 9, 2, 17, [2, 7], '[He] 2s² 2p⁵', 57, 1681, 328, 3.98, 'halogen'],
  ['Ne', 'Neona', 'Neón', 10, 2, 18, [2, 8], '[He] 2s² 2p⁶', null, 2081, null, null, 'noble'],
  ['Na', 'Sodioa', 'Sodio', 11, 3, 1, [2, 8, 1], '[Ne] 3s¹', 166, 496, 53, 0.93, 'alkali'],
  ['Mg', 'Magnesioa', 'Magnesio', 12, 3, 2, [2, 8, 2], '[Ne] 3s²', 141, 738, null, 1.31, 'alkaline'],
  ['Al', 'Aluminioa', 'Aluminio', 13, 3, 13, [2, 8, 3], '[Ne] 3s² 3p¹', 121, 578, 43, 1.61, 'postmetal'],
  ['Si', 'Silizioa', 'Silicio', 14, 3, 14, [2, 8, 4], '[Ne] 3s² 3p²', 111, 786, 134, 1.90, 'metalloid'],
  ['P', 'Fosforoa', 'Fósforo', 15, 3, 15, [2, 8, 5], '[Ne] 3s² 3p³', 107, 1012, 72, 2.19, 'nonmetal'],
  ['S', 'Sufrea', 'Azufre', 16, 3, 16, [2, 8, 6], '[Ne] 3s² 3p⁴', 105, 1000, 200, 2.58, 'nonmetal'],
  ['Cl', 'Kloroa', 'Cloro', 17, 3, 17, [2, 8, 7], '[Ne] 3s² 3p⁵', 102, 1251, 349, 3.16, 'halogen'],
  ['Ar', 'Argona', 'Argón', 18, 3, 18, [2, 8, 8], '[Ne] 3s² 3p⁶', null, 1521, null, null, 'noble'],
  ['K', 'Potasioa', 'Potasio', 19, 4, 1, [2, 8, 8, 1], '[Ar] 4s¹', 203, 419, 48, 0.82, 'alkali'],
  ['Ca', 'Kaltzioa', 'Calcio', 20, 4, 2, [2, 8, 8, 2], '[Ar] 4s²', 176, 590, 2, 1.00, 'alkaline'],
  ['Ga', 'Galioa', 'Galio', 31, 4, 13, [2, 8, 18, 3], '[Ar] 3d¹⁰ 4s² 4p¹', 122, 579, 29, 1.81, 'postmetal'],
  ['Ge', 'Germanioa', 'Germanio', 32, 4, 14, [2, 8, 18, 4], '[Ar] 3d¹⁰ 4s² 4p²', 120, 762, 119, 2.01, 'metalloid'],
  ['As', 'Artsenikoa', 'Arsénico', 33, 4, 15, [2, 8, 18, 5], '[Ar] 3d¹⁰ 4s² 4p³', 119, 947, 78, 2.18, 'metalloid'],
  ['Se', 'Selenioa', 'Selenio', 34, 4, 16, [2, 8, 18, 6], '[Ar] 3d¹⁰ 4s² 4p⁴', 120, 941, 195, 2.55, 'nonmetal'],
  ['Br', 'Bromoa', 'Bromo', 35, 4, 17, [2, 8, 18, 7], '[Ar] 3d¹⁰ 4s² 4p⁵', 120, 1140, 325, 2.96, 'halogen'],
  ['Kr', 'Kriptona', 'Kriptón', 36, 4, 18, [2, 8, 18, 8], '[Ar] 3d¹⁰ 4s² 4p⁶', null, 1351, null, null, 'noble']
];

export const ELEMENTS = RAW_ELEMENTS.map(([s, name_eu, name_es, z, p, g, shells, config, r, ie, ea, en, kind]) => ({
  s, name_eu, name_es, z, p, g, shells, config, r, ie, ea, en, kind
}));

export const BY_SYM = Object.fromEntries(ELEMENTS.map(e => [e.s, e]));

export const I18N = {
  eu: {
    badge: '2. BATXILERGOA · ATOMOAREN EGITURA ETA PROPIETATEAK',
    heroTitle: 'PROPIETATE ',
    heroTitleHighlight: 'PERIODIKOAK',
    heroLead: 'Elementuek taula periodikoan duten kokapenaren eta konfigurazio elektronikoaren arabera erregulartasunez aldatzen diren ezaugarri atomikoak dira.',
    motionToggleOn: '⏸ Animazioak pausatu',
    motionToggleOff: '▶ Animazioak aktibatu',
    selectPropHead: '01 · Aukeratu propietatea',
    trendHead: '02 · Taulako joera orokorra',
    pairsHead: '03 · PAUrako kasu garrantzitsuak',
    teacherKey: 'PAUrako gakoa:',
    teacherBody: 'Ez ikasi geziak bakarrik memorizatuz. Azterketan beti eskatu ohi da konfigurazio elektronikoa idaztea eta geruzen (n), pantailatzearen (S) eta karga nuklear eraginkorraren (Zer = Z - S) bidez arrazoitzea.',
    studioKicker: 'Laborategi birtuala · Konparazio gidatua',
    liveStatus: '● INTERAKTIBOA',
    elemALabel: 'A elementua',
    elemBLabel: 'B elementua',
    swapBtn: 'Elementuak trukatu',
    playBtn: '▶ Erakutsi animazioa',
    showdownHead: 'ALDERAKETA · ESKALA BERA',
    sameScale: 'Barrak neurri berean',
    scaleFoot: 'Barrak eskala berean daude: luzeena = bikote honetako balio handiena. Egiaztatu zenbakiak eta unitateak.',
    noDataTitle: 'Ezin da alderaketa numeriko segururik egin.',
    noDataBody: 'Aukeratu erreferentziazko datuak dituzten beste bi elementu. Datu falta batek ez du esan nahi propietatearen balioa zero denik.',
    eqTitle: 'Balio bera agertzen da bi elementuetan.',
    tableTitle: 'Taula periodikoa · Hautatu elementuak',
    tableLead: 'Egin klik edozein elementutan A edo B aldatzeko. Mapan kokatu eta alderatu.',
    editA: 'A aldatu',
    editB: 'B aldatu',
    families: {
      alkali: 'Alkalinoak',
      alkaline: 'Lurralkalinoak',
      metalloid: 'Semimetalak',
      nonmetal: 'Ez-metalak',
      halogen: 'Halogenoak',
      noble: 'Gas nobleak',
      postmetal: 'Trantsizio-ondokoak'
    },
    actionHints: {
      radius: 'Fikzatu kanpoko tamainan eta geruzen kopuruan. Erradioak alderatzea ez da protoi-kopurua alderatzea.',
      ion: 'Energia ematen da atomo bakoitzetik kanpoko elektroi bat erauzteko (+EI₁).',
      aff: 'Elektroi bat iristen da: harrapaketa exotermikoa denean, energia askatzen da (+AE).',
      en: 'Eremu distiratsua elektronegatibotasun handiagoko atomorantz lerratzen da (δ- / δ+).'
    },
    scientificNotes: {
      radius: 'Erradioa ez da esfera zurrun baten muga finkoa. Hemen erradio kobalenteen datu estandarrak alderatzen dira; elektroien benetako kokapena dentsitate-hodei probabilistikoa da.',
      ion: 'Ionizazio-energia: egoera gaseosoan eta oinarrizko egoeran dagoen atomo neutro bati kanpoko elektroia kentzeko behar den energia. Prozesu endotermikoa da beti (ΔH > 0).',
      aff: 'Afinitate elektronikoa: atomo gaseoso neutro batek elektroi bat hartzean trukatutako energia. Hemen askatutako energia positibotzat adierazten dugu; harrapaketa ez da beti exotermikoa.',
      en: 'Elektronegatibotasuna atomo batek lotura bateko elektroiak bereganatzeko duen ahalmena da (Pauling eskala erlatiboa). Ez nahastu lotura baten polaritatea eta molekularen polaritate orokorrarekin (geometria bektoriala).'
    }
  },
  es: {
    badge: '2.º BACHILLERATO · ESTRUCTURA ATÓMICA Y PROPIEDADES',
    heroTitle: 'PROPIEDADES ',
    heroTitleHighlight: 'PERIÓDICAS',
    heroLead: 'Propiedades atómicas que varían con regularidad según la posición de cada elemento en la tabla periódica y su configuración electrónica.',
    motionToggleOn: '⏸ Pausar animaciones',
    motionToggleOff: '▶ Activar animaciones',
    selectPropHead: '01 · Selecciona propiedad',
    trendHead: '02 · Tendencia en la tabla',
    pairsHead: '03 · Casos clave para la PAU',
    teacherKey: 'Clave para la PAU:',
    teacherBody: 'No te limites a memorizar flechas. En los exámenes siempre se evalúa escribir la configuración electrónica y justificar con el número de capas (n), el apantallamiento (S) y la carga nuclear efectiva (Zef = Z - S).',
    studioKicker: 'Laboratorio virtual · Comparación guiada',
    liveStatus: '● INTERACTIVO',
    elemALabel: 'Elemento A',
    elemBLabel: 'Elemento B',
    swapBtn: 'Intercambiar elementos',
    playBtn: '▶ Reproducir animación',
    showdownHead: 'COMPARACIÓN · MISMA ESCALA',
    sameScale: 'Barras proporcionales',
    scaleFoot: 'Barras a la misma escala: la más larga = valor máximo de esta pareja. Comprueba números y unidades.',
    noDataTitle: 'No es posible realizar una comparación numérica.',
    noDataBody: 'Elige otros dos elementos que dispongan de datos tabulados. La ausencia de dato no significa que la propiedad sea cero.',
    eqTitle: 'Ambos elementos presentan el mismo valor de referencia.',
    tableTitle: 'Tabla periódica · Elige los elementos',
    tableLead: 'Haz clic en cualquier elemento para cambiar A o B. Ubícalos en la tabla y compara.',
    editA: 'Editar A',
    editB: 'Editar B',
    families: {
      alkali: 'Alcalinos',
      alkaline: 'Alcalinotérreos',
      metalloid: 'Metaloides',
      nonmetal: 'No metales',
      halogen: 'Halógenos',
      noble: 'Gases nobles',
      postmetal: 'Metales bloque p'
    },
    actionHints: {
      radius: 'Fíjate en el tamaño exterior y en el número de capas. Comparar radios no es comparar el número de protones.',
      ion: 'Se aporta energía para extraer un electrón de valencia de cada átomo neutro gaseoso (+EI).',
      aff: 'Llega un electrón: cuando la captura es favorable, se desprende energía en forma de calor (+AE).',
      en: 'La zona luminosa y el par de electrones se desplazan hacia el átomo más electronegativo (generando δ- / δ+).'
    },
    scientificNotes: {
      radius: 'El radio no es el borde de una esfera sólida; los orbitales son nubes probabilísticas. Se comparan radios covalentes estandarizados (distancia internuclear dividida por 2).',
      ion: 'Energía de ionización: energía mínima necesaria para arrancar el electrón más externo de un átomo neutro en estado gaseoso y en su estado fundamental. Siempre es endotérmica (ΔH > 0).',
      aff: 'Afinidad electrónica: variación de energía cuando un átomo gaseoso neutro capta un electrón formando un anión. Aquí mostramos la energía desprendida con signo positivo cuando es exotérmica.',
      en: 'La electronegatividad mide la capacidad de un átomo enlazado para atraer hacia sí el par electrónico compartido (escala adimensional de Pauling). No confundir polaridad del enlace con polaridad molecular (influye la geometría).'
    }
  }
};

export const PROPS = {
  theory: {
    key: 'theory',
    name_eu: 'Aurretiko kontzeptuak',
    name_es: 'Conceptos previos',
    short_eu: '1. Periodoa, Taldea · 2. Z* eta p',
    short_es: '1. Período, Grupo · 2. Z* y apantallamiento'
  },
  radius: {
    key: 'r',
    unit: 'pm',
    arrow: '↙',
    title_eu: 'Zein atomok du erradio handiagoa?',
    title_es: '¿Qué átomo tiene mayor radio?',
    name_eu: 'Erradio atomikoa',
    name_es: 'Radio atómico',
    short_eu: 'Atomoaren tamaina (pm)',
    short_es: 'Tamaño del átomo (pm)',
    def_eu: '<p><span class="pk-hl">Elementu bereko bi atomo elkartzean, bi nukleoen arteko distantzia</span> da; esperimentalki, <span class="pk-hl">lotura kobalente sinpledun bi atomo berdinen arteko distantzia internuklearraren erdia</span> da.</p>',
    def_es: '<p><span class="pk-hl">Al unirse dos átomos del mismo elemento, es la distancia entre ambos núcleos</span>; experimentalmente se determina como <span class="pk-hl">la mitad de la distancia internuclear entre dos átomos idénticos unidos por enlace covalente simple</span>.</p>',
    desc_eu: 'Handitu ohi da taldean behera eta periodoan ezkerrera.',
    desc_es: 'Aumenta hacia abajo en un grupo y hacia la izquierda en un período.',
    pairs: [['Be', 'F'], ['Ca', 'Be'], ['Li', 'F'], ['Li', 'Na'], ['Na', 'K'], ['O', 'S']]
  },
  ion: {
    key: 'ie',
    unit: 'kJ/mol',
    arrow: '↗',
    title_eu: 'Zein atomori da zailagoa elektroi bat kentzea?',
    title_es: '¿A qué átomo cuesta más arrancarle un electrón?',
    name_eu: 'Ionizazio-energia',
    name_es: 'Energía de ionización',
    short_eu: 'Elektroi bat erauzteko energia',
    short_es: 'Energía para arrancar un electrón',
    def_eu: '<p><span class="pk-hl">Elektroiak askatzeko behar den energia</span> da: oinarrizko egoeran eta <span class="pk-hl">gas-egoeran dagoen atomo neutro bati kanpoko elektroia erauzteko</span> behar den gutxieneko energia: X(g) + IE → X⁺(g) + e⁻ (beti prozesu <span class="pk-hl">endotermikoa</span>, ΔH &gt; 0).</p>',
    def_es: '<p><span class="pk-hl">Es la energía necesaria para arrancar un electrón</span>: la <span class="pk-hl">energía mínima requerida</span> para arrancar el electrón de valencia de un átomo neutro en <span class="pk-hl">estado gaseoso y en su estado fundamental</span>: X(g) + EI → X⁺(g) + e⁻ (proceso siempre <span class="pk-hl">endotérmico</span>, ΔH &gt; 0).</p>',
    desc_eu: 'Handitu ohi da taldean gora eta periodoan eskuinera.',
    desc_es: 'Aumenta hacia arriba en un grupo y hacia la derecha en un período.',
    pairs: [['Be', 'F'], ['Ca', 'Be'], ['Na', 'Cl'], ['Be', 'B'], ['N', 'O'], ['F', 'Cl']]
  },
  aff: {
    key: 'ea',
    unit: 'kJ/mol',
    arrow: '↗*',
    title_eu: 'Zein atomok askatzen du energia gehiago elektroi bat hartzean?',
    title_es: '¿Qué átomo desprende más energía al captar un electrón?',
    name_eu: 'Afinitate elektronikoa',
    name_es: 'Afinidad electrónica',
    short_eu: 'Elektroi bat hartzean trukatutako energia',
    short_es: 'Energía al captar un electrón',
    def_eu: '<p><span class="pk-hl">Elementu bakoitzak elektroiak hartzeko daukan joera</span> da: <span class="pk-hl">gas-egoeran eta oinarrizko egoeran</span> dagoen atomo neutro batek <span class="pk-hl">elektroi bat hartzean trukatzen den energia</span>: X(g) + e⁻ → X⁻(g) + AE (harrapaketa egonkorrean energia askatzen da, prozesu exotermikoa).</p>',
    def_es: '<p><span class="pk-hl">Es la tendencia que tiene cada elemento para captar electrones</span>: la <span class="pk-hl">energía intercambiada cuando un átomo neutro</span> en <span class="pk-hl">estado gaseoso y fundamental capta un electrón</span> para formar un anión: X(g) + e⁻ → X⁻(g) + AE (cuando es estable se libera energía, proceso exotérmico).</p>',
    desc_eu: 'Oro har, eskuinerantz eta gorantz handiagoa da; salbuespen ugari daude.',
    desc_es: 'Suele ser mayor hacia la derecha y hacia arriba, pero presenta excepciones notables.',
    pairs: [['Be', 'F'], ['Ca', 'Be'], ['F', 'Cl'], ['O', 'S'], ['Na', 'Cl'], ['Li', 'F']]
  },
  en: {
    key: 'en',
    unit: 'Pauling',
    arrow: '↗',
    title_eu: 'Zein atomok erakartzen ditu indartsuago loturako elektroiak?',
    title_es: '¿Qué átomo atrae con más fuerza los electrones del enlace?',
    name_eu: 'Elektronegatibotasuna',
    name_es: 'Electronegatividad',
    short_eu: 'Loturako elektroiak erakartzea (Pauling)',
    short_es: 'Atracción del par enlazante (Pauling)',
    def_eu: '<p><span class="pk-hl">Lotura batean dauden elektroiak erakartzeko atomo batek duen gaitasuna</span> da (Pauling eskalan, <span class="pk-hl">Fluorra da maximoa: 3,98</span>; gas nobleek ez dute baliorik).</p>',
    def_es: '<p><span class="pk-hl">Es la capacidad que tiene un átomo para atraer los electrones de un enlace químico</span> (escala de Pauling, donde el <span class="pk-hl">Flúor es el máximo: 3,98</span>; los gases nobles no presentan valor).</p>',
    desc_eu: 'Gora eta eskuinera handitzen da (Fluorra da maximoa: 3,98). Gas nobleek ez dute baliorik.',
    desc_es: 'Aumenta hacia arriba y hacia la derecha (el Flúor es el máximo: 3,98). Los gases nobles no tienen valor.',
    pairs: [['Be', 'F'], ['Ca', 'Be'], ['H', 'F'], ['F', 'Cl'], ['O', 'S'], ['Na', 'Cl']]
  }
};

// ==========================================================================
// ARRAZOIKETA ZIENTIFIKOA (Motor de justificación química para 2.º Bach)
// ==========================================================================
export function explainChemistry(x, y, mode, lang = 'eu') {
  const cfg = PROPS[mode];
  const va = x[cfg.key];
  const vb = y[cfg.key];
  const pair = [x.s, y.s].sort().join('-');
  let why = '';
  let exception = '';
  const isEu = lang === 'eu';

  if (x.p === y.p && x.g !== y.g) {
    if (mode === 'radius') {
      why = isEu
        ? `Bi elementuak periodo berean daude (${x.p}. periodoa, balentzia-geruza bera): nukleo eta balentzia arteko elektroi kopurua berdina denez, pantailatzea (p) ez da aldatzen. Eskuinerantz zenbaki atomikoa (Z) handitu ahala, karga nuklear eraginkorra ere handitu egiten da (Z* = Z - p); ondorioz, elektroiak indartsuago erakartzen dira eta erradio atomikoa txikitu egiten da.`
        : `Ambos elementos pertenecen al mismo período (período ${x.p}, misma capa de valencia): el número de electrones internos es idéntico, por lo que el apantallamiento (p) no varía. Al desplazarse a la derecha y aumentar el número atómico (Z), la carga nuclear efectiva también aumenta (Z* = Z - p); en consecuencia, los electrones son atraídos con más fuerza y el radio atómico disminuye.`;
    } else if (mode === 'ion') {
      why = isEu
        ? `Periodoaren arabera, zenbaki atomikoa handitu ahala (Z), karga nuklear eraginkorra ere handitzen da (Z* = Z - p), beraz, erradio atomikoa txikitzen da. Ondorioz, elektroia sendoago lotuta dagoenez zailagoa da elektroi bat askatzea eta energia gehiago behar da hori lortzeko: ionizazio-energia handiagoa da.`
        : `En el período, al aumentar el número atómico (Z), la carga nuclear efectiva también aumenta (Z* = Z - p), por lo que el radio atómico disminuye. En consecuencia, al estar el electrón más fuertemente retenido, cuesta más arrancarlo y se necesita más energía: la energía de ionización es mayor.`;
    } else if (mode === 'en') {
      why = isEu
        ? `Periodoan eskuinerantz, zenbaki atomikoa handitu ahala (Z), karga nuklear eraginkorra ere handitzen da (Z* = Z - p), beraz, erradio atomikoa txikitzen da. Ondorioz, errazagoa da loturako elektroiak erakartzea: elektronegatibotasuna handiagoa da.`
        : `En el período, al desplazarse a la derecha y aumentar el número atómico (Z), la carga nuclear efectiva también aumenta (Z* = Z - p), por lo que el radio atómico disminuye. En consecuencia, resulta más fácil atraer los electrones del enlace: la electronegatividad es mayor.`;
    } else if (mode === 'aff') {
      why = isEu
        ? `Periodoaren arabera, zenbaki atomikoa handitu ahala (Z), karga nuklear eraginkorra ere handitzen da (Z* = Z - p), beraz, erradio atomikoa txikitzen da. Ondorioz, errazagoa da elektroi bat hartzea eta energia gehiago askatzen da: afinitate elektronikoa handiagoa da (salbuespenak salbuespen).`
        : `En el período, al aumentar el número atómico (Z), la carga nuclear efectiva también aumenta (Z* = Z - p), por lo que el radio atómico disminuye. En consecuencia, resulta más fácil captar un electrón: la afinidad electrónica es mayor (salvo notorias excepciones).`;
    }
  } else if (x.g === y.g && x.p !== y.p) {
    if (mode === 'radius') {
      why = isEu
        ? `Talde berean daude (${x.g}. taldea): balentzia elektroi kopuru bera dutenez, karga nuklear eraginkorra konstante mantentzen da (Z* ≈ konstantea). Balentzia geruza kopurua, ordea, handitu egiten da (n) eta espazio gehiago behar denez, erradio atomikoa handiagoa da.`
        : `Pertenecen al mismo grupo (grupo ${x.g}): al tener los mismos electrones de valencia, la carga nuclear efectiva se mantiene constante (Z* ≈ constante). Sin embargo, el número de capas de valencia aumenta (n) y, al necesitar más espacio, el radio atómico aumenta hacia abajo.`;
    } else if (mode === 'ion') {
      why = isEu
        ? `Taldearen arabera, zenbaki atomikoa handitu ahala, balentzia geruza kopurua gehitzen da (n handiagoa) eta espazio gehiago behar denez, erradio atomikoa ere handiagoa da. Ondorioz, elektroia nukleotik urrunago dagoenez errazagoa da elektroi bat askatzea eta energia gutxiago behar da hori lortzeko: ionizazio-energia txikiagoa da.`
        : `En el grupo, al descender se añaden capas (mayor n) y se necesita más espacio, por lo que el radio atómico es mayor. En consecuencia, al estar el electrón externo más alejado del núcleo, resulta más fácil arrancarlo y se necesita menos energía: la energía de ionización disminuye hacia abajo.`;
    } else if (mode === 'en') {
      why = isEu
        ? `Taldearen arabera, zenbaki atomikoa handitu ahala geruzak gehitzen dira (n handiagoa) eta espazio gehiago behar denez, erradio atomikoa handiagoa da. Ondorioz, nukleoa urrunago dagoenez, zailagoa da loturako elektroiak erakartzea: elektronegatibotasuna txikiagoa da.`
        : `En el grupo, al aumentar el número atómico se añaden capas (mayor n) y se necesita más espacio, por lo que el radio atómico es mayor. En consecuencia, al quedar el núcleo más lejos, resulta más difícil atraer los electrones del enlace: la electronegatividad disminuye hacia abajo.`;
    } else if (mode === 'aff') {
      why = isEu
        ? `Taldearen arabera, zenbaki atomikoa handitu ahala espazio gehiago behar da eta erradio atomikoa handiagoa da. Ondorioz, nukleoa urrunago dagoenez zailagoa da kanpoko elektroi berri bat hartzea eta energia gutxiago askatzen da: afinitate elektronikoa txikiagoa da.`
        : `En el grupo, al descender se necesita más espacio y el radio atómico es mayor. En consecuencia, al quedar el núcleo más lejos, resulta más difícil atraer y retener un electrón extra: la afinidad electrónica disminuye hacia abajo.`;
    }
  } else {
    if (mode === 'radius') {
      why = isEu
        ? `Konparatu bi faktore nagusiak: geruza elektronikoen kopurua (n, beherantz handitzen dena) eta karga nuklear eraginkorra (Zer, periodoan eskuinerantz handitzen dena). Oro har, geruza-kopuruak pisu handiagoa du.`
        : `Compara simultáneamente dos factores: el número de capas (n, que crece hacia abajo) y la carga nuclear efectiva (Zef, que crece a la derecha en el período). Normalmente el número de capas es el factor preponderante.`;
    } else if (mode === 'ion') {
      why = isEu
        ? `Ionizazio-energia elektroiak nukleoarekin duen erakarpen-indarraren araberakoa da: geruza gutxiago eta Zer handiagoa duten atomoek (taulako goiko eskuinaldean) energia handiagoa eskatzen dute.`
        : `La energía de ionización mide cuán fuertemente atrae el núcleo al electrón más externo: átomos con menos capas y mayor Zef (zona superior derecha) requieren mucha más energía de ionización.`;
    } else if (mode === 'en') {
      why = isEu
        ? `Elektronegatibotasuna Paulingen eskalan neurtzen da: fluorra da baliorik altuena duena (3,98). Taulan goian eta eskuinaldean dauden atomo ez-metalikoek dute erakarpen handiena.`
        : `La electronegatividad de Pauling sitúa el máximo en el flúor (3,98). Los átomos no metálicos pequeños y con alta Zef (arriba a la derecha) son los más electronegativos.`;
    } else if (mode === 'aff') {
      why = isEu
        ? `Afinitate elektronikoa ez da guztiz erregularra aldatzen: konfigurazio elektronikoak, azpimaila beteek edo erdi-beteek eta elektroi-elektroi aldarapenek paper erabakigarria dute.`
        : `La afinidad electrónica no sigue una variación continua: la configuración electrónica particular, las subcapas llenas o semillenas y la repulsión interelectrónica determinan el valor medido.`;
    }
  }

  // Specific PAU exam highlights
  if (mode === 'ion' && pair === 'B-Be') {
    exception = isEu
      ? `SALBUESPEN GARRANTZITSUA (PAU): Berilioaren (Be) lehenengo ionizazio-energia (900 kJ/mol) Boroarena (B, 801 kJ/mol) baino handiagoa da. Zergatia: Be-k 2s² azpimaila erabat betea du (oso egonkorra eta barneratzailea). Boroan, ordea, kendu beharreko elektroia 2p¹ azpimailan dago, energia altuagoan eta 2s² elektroiek partzialki pantailatuta.`
      : `EXCEPCIÓN CLÁSICA PAU: El Berilio (Be, 900 kJ/mol) tiene mayor energía de ionización que el Boro (B, 801 kJ/mol), pese a estar más a la izquierda. Causa: Be tiene la subcapa 2s² completamente llena (alta estabilidad y penetración). En el B, el electrón a arrancar está en un orbital 2p¹, de mayor energía y apantallado por los electrones 2s².`;
  } else if (mode === 'ion' && pair === 'N-O') {
    exception = isEu
      ? `SALBUESPEN GARRANTZITSUA (PAU): Nitrogenoaren (N) ionizazio-energia (1402 kJ/mol) Oxigenoarena (O, 1314 kJ/mol) baino handiagoa da. Zergatia: N-k 2p³ konfigurazio erdi-betea du (Hund-en arauaren araberako truke-egonkortasun handia). Oxigenoan (2p⁴), orbital batean bi elektroi daude elkarrekin; haien arteko aldarapen elektrostatikoak erraztu egiten du elektroia erauztea.`
      : `EXCEPCIÓN CLÁSICA PAU: El Nitrógeno (N, 1402 kJ/mol) tiene mayor energía de ionización que el Oxígeno (O, 1314 kJ/mol). Causa: el N presenta la subcapa 2p³ semillena con electrones desapareados paralelos (extraordinaria estabilidad de canje según Hund). En el Oxígeno (2p⁴), un orbital 2p aloja dos electrones apareados; la repulsión electrostática entre ellos facilita la salida del electrón.`;
  } else if (mode === 'ion' && pair === 'Al-Mg') {
    exception = isEu
      ? `SALBUESPENA: Magnesioak (Mg, 738 kJ/mol) Aluminioak (Al, 578 kJ/mol) baino ionizazio-energia handiagoa du, 3s² azpimaila betea 3p¹ baino egonkorragoa delako.`
      : `EXCEPCIÓN: El Magnesio (Mg, 738 kJ/mol) supera al Aluminio (Al, 578 kJ/mol) por la gran estabilidad de la subcapa 3s² completa frente al electrón solitario en 3p¹.`;
  } else if (mode === 'ion' && pair === 'P-S') {
    exception = isEu
      ? `SALBUESPENA: Fosforoak (P, 1012 kJ/mol) Sufreak (S, 1000 kJ/mol) baino ionizazio-energia handiagoa du, 3p³ erdi-betearen egonkortasunagatik.`
      : `EXCEPCIÓN: El Fósforo (P, 1012 kJ/mol) supera al Azufre (S, 1000 kJ/mol) debido a la estabilidad de su subcapa 3p³ semillena.`;
  } else if (mode === 'aff' && pair === 'Cl-F') {
    exception = isEu
      ? `SALBUESPEN NAGUSIA (PAU): Kloroak (Cl, 349 kJ/mol) Fluorrak (F, 328 kJ/mol) baino energia gehiago askatzen du elektroi bat hartzean. Zergatia: Fluor atomoa oso-oso txikia da eta haren 2p eskualdean karga-dentsitatea handia da; elektroi berri bat sartzean aldarapen handia jasaten du. Kloroan, ordea, 3p eskualdea zabalagoa denez, elektroia errazago hartzen da.`
      : `GRAN EXCEPCIÓN PAU: El Cloro (Cl, 349 kJ/mol) desprende MÁS energía al captar un electrón que el Flúor (F, 328 kJ/mol). Causa: el átomo de Flúor es extremadamente pequeño y sus orbitales 2p están muy concentrados; al entrar un electrón extra sufre una fortísima repulsión interelectrónica. En el Cloro, los orbitales 3p son más difusos y acomodan la carga negativa con menor repulsión.`;
  } else if (mode === 'aff' && pair === 'O-S') {
    exception = isEu
      ? `SALBUESPENA: Sufreak (S, 200 kJ/mol) Oxigenoak (O, 141 kJ/mol) baino afinitate elektroniko handiagoa du, Oxigenoaren 2p eskualde trinkoaren aldarapen elektronikoagatik.`
      : `EXCEPCIÓN: El Azufre (S, 200 kJ/mol) tiene mayor afinidad que el Oxígeno (O, 141 kJ/mol) por la misma causa de repulsión interelectrónica en la pequeña corteza 2p del oxígeno.`;
  } else if (mode === 'en' && va != null && vb != null && Math.abs(va - vb) >= 1.7) {
    const diff = Math.abs(va - vb).toFixed(2);
    exception = isEu
      ? `OHARRA (Lotura-mota): Elektronegatibotasun-aldea oso handia da (ΔEN = ${diff} ≥ 1,7). Horrek izaera ioniko nabarmena iradokitzen du (elektroien transferentzia), eta ez lotura kobalente puru bat.`
      : `ADVERTENCIA (Tipo de enlace): La diferencia de electronegatividad es muy alta (ΔEN = ${diff} ≥ 1,7). Esto indica un marcado carácter iónico (transferencia electrónica efectiva) más que un enlace covalente compartido.`;
  }

  return { why, exception };
}

// ==========================================================================
// RENDERIZADO DE LA MINI TABLA PERIÓDICA CON FLECHAS DE TENDENCIA
// ==========================================================================
function renderMiniTableTrendSVG(mode, isEs) {
  const isRadius = mode === 'radius';
  const isAff = mode === 'aff';
  const isEn = mode === 'en';

  let caption = '';
  if (isRadius) {
    caption = isEs
      ? 'Aumenta hacia abajo en el grupo y a la izquierda en el período'
      : 'Handitu ohi da taldean behera eta periodoan ezkerrera';
  } else if (isAff) {
    caption = isEs
      ? 'Aumenta hacia arriba y a la derecha (*con excepciones)'
      : 'Handitu ohi da taldean gora eta eskuinera (*salbuespenak)';
  } else if (isEn) {
    caption = isEs
      ? 'Aumenta hacia arriba y a la derecha (F = 3,98 máx)'
      : 'Handitu ohi da taldean gora eta eskuinera (F = 3,98 max)';
  } else {
    caption = isEs
      ? 'Aumenta hacia arriba en el grupo y a la derecha en el período'
      : 'Handitu ohi da taldean gora eta periodoan eskuinera';
  }

  const arrowDef = isRadius
    ? `
      <!-- Taldean behera (hacia abajo en el grupo) -->
      <line x1="16" y1="28" x2="16" y2="92" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round" marker-end="url(#pkArrHead)" />
      <!-- Periodoan ezkerrera (hacia la izquierda en el periodo) -->
      <line x1="152" y1="114" x2="34" y2="114" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round" marker-end="url(#pkArrHead)" />
      <!-- Diagonala (joera globala ↙) -->
      <line x1="140" y1="36" x2="42" y2="88" stroke="#0D9488" stroke-width="3" stroke-linecap="round" marker-end="url(#pkArrHeadBold)" stroke-dasharray="2 3" />
    `
    : `
      <!-- Taldean gora (hacia arriba en el grupo) -->
      <line x1="164" y1="92" x2="164" y2="28" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round" marker-end="url(#pkArrHead)" />
      <!-- Periodoan eskuinera (hacia la derecha en el periodo) -->
      <line x1="28" y1="10" x2="146" y2="10" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round" marker-end="url(#pkArrHead)" />
      <!-- Diagonala (joera globala ↗) -->
      <line x1="42" y1="88" x2="140" y2="36" stroke="#0D9488" stroke-width="3" stroke-linecap="round" marker-end="url(#pkArrHeadBold)" stroke-dasharray="2 3" />
    `;

  return `
    <div class="pk-mini-table-box" aria-hidden="true">
      <svg class="pk-mini-table-svg" viewBox="0 0 180 126" width="100%" height="auto">
        <defs>
          <marker id="pkArrHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#0D9488" />
          </marker>
          <marker id="pkArrHeadBold" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#0D9488" />
          </marker>
        </defs>

        <!-- Taula periodikoaren eskema silueta (Kontorno bakarra) -->
        <path class="pk-mini-outline" d="M 24 18 L 31.5 18 L 31.5 29 L 39 29 L 39 50 L 112.5 50 L 112.5 29 L 149 29 L 149 18 L 156 18 L 156 96 L 24 96 Z" />
        <rect x="39" y="101" width="110" height="6" rx="2" class="pk-mini-outline f-blk" />

        <!-- Nabarmendu puntua (Flúor o Francio) -->
        ${isEn ? '<circle cx="145" cy="35" r="4.5" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.5" /><text x="145" y="26" font-size="7.5" font-weight="800" fill="#EF4444" text-anchor="middle">F</text>' : ''}
        ${isRadius ? '<circle cx="28" cy="90" r="4.5" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.5" /><text x="28" y="104" font-size="7.5" font-weight="800" fill="#EF4444" text-anchor="middle">Cs/Fr</text>' : ''}

        <!-- Geziak / Flechas -->
        ${arrowDef}
      </svg>
      <div class="pk-mini-table-caption">${caption}</div>
    </div>
  `;
}

// ==========================================================================
// RENDERIZADO VISUAL DEL ÁTOMO (ESTILO DEL HTML EN CASTELLANO)
// ==========================================================================
function renderAtomModelHTML(d, which, mode, sameShells, sameValence, lang = 'eu') {
  const isEs = lang === 'es';
  const isRadius = mode === 'radius';
  const radius = d.r ?? 95;
  const diam = isRadius ? Math.max(115, Math.min(225, 75 + radius * 0.70)) : 176;
  const shellsCount = d.shells.length;

  const nucDiam = 44;
  const minInnerDiam = nucDiam + 32; // Garantiza al menos 16px de separación limpia respecto al núcleo
  const outerDiam = Math.max(minInnerDiam + (shellsCount - 1) * 26, diam - 16);

  let innerDiam = nucDiam + (outerDiam - nucDiam) / (shellsCount + 0.6);
  if (innerDiam < minInnerDiam) innerDiam = minInnerDiam;
  if (shellsCount === 1) innerDiam = Math.max(minInnerDiam, outerDiam * 0.88);

  let layers = '';
  d.shells.forEach((count, j) => {
    const shellDiam = shellsCount === 1
      ? innerDiam
      : innerDiam + (j / (shellsCount - 1)) * (outerDiam - innerDiam);
    const insetPercent = ((diam - shellDiam) / (2 * diam)) * 100;
    const isOuter = j === shellsCount - 1;

    let electronsHTML = '';
    for (let k = 0; k < count; k++) {
      const deg = (2 * Math.PI * k / count) - (Math.PI / 2);
      const x = 50 + 50 * Math.cos(deg);
      const y = 50 + 50 * Math.sin(deg);
      const isSharedValDot = isOuter && sameValence;
      electronsHTML += `<i class="pk-electron ${isSharedValDot ? 'shared-val-dot' : ''}" style="--ex:${x.toFixed(2)}%;--ey:${y.toFixed(2)}%"></i>`;
    }

    const isSharedLayer = isOuter && sameShells;
    layers += `<div class="pk-shell ${isSharedLayer ? 'shared-layer' : ''}" style="--inset:${insetPercent.toFixed(2)}%">${electronsHTML}</div>`;
  });

  const ruler = isRadius && d.r != null
    ? `<div class="pk-radius-line" style="--rad:${Math.round(outerDiam)}px"></div>`
    : '';

  const lastTerm = (d.config || '').trim().split(/\s+/).pop() || '';
  const subshell = lastTerm.replace(/^\d+/, '');
  const periodLabel = isEs ? 'Periodo' : 'Periodoa';
  const groupLabel = isEs ? 'Grupo' : 'Taldea';

  return `
    <div class="pk-atom-side-head">
      <span class="pk-elem-tag">${d.s}</span>
      <span>${periodLabel}: ${d.p} · ${groupLabel}: ${d.g} (${subshell})</span>
    </div>
    <div class="pk-atom-wrap">
      <div class="pk-atom-model" style="width:${diam.toFixed(1)}px;height:${diam.toFixed(1)}px">
        <div class="pk-nucleus">${d.s}</div>
        ${layers}
      </div>
      <div class="pk-traveller ion" aria-hidden="true">−</div>
      <div class="pk-traveller aff" aria-hidden="true">−</div>
      ${ruler}
    </div>
    <div class="pk-visual-foot">
      ${isRadius && d.r == null ? (isEs ? 'Sin radio covalente' : 'Erradio kobalenterik ez') : `
        <div>${isEs ? 'Número de capas' : 'Geruza kopurua'}: <strong>${d.shells.length}</strong></div>
        <div>${isEs ? 'Electrones en capa de valencia' : 'Elektroi kopurua azken balentzia mailan'}: <strong>${d.shells[d.shells.length - 1]}e⁻</strong></div>
      `}
    </div>
  `;
}

// ==========================================================================
// RENDERIZADO DE TABLA PERIÓDICA EN CUADRÍCULA (PDF Página 1)
// ==========================================================================
const GRID_CELLS = [
  [1, 1, 'H'], [1, 18, 'He'],
  [2, 1, 'Li'], [2, 2, 'Be'], [2, 13, 'B'], [2, 14, 'C'], [2, 15, 'N'], [2, 16, 'O'], [2, 17, 'F'], [2, 18, 'Ne'],
  [3, 1, 'Na'], [3, 2, 'Mg'], [3, 13, 'Al'], [3, 14, 'Si'], [3, 15, 'P'], [3, 16, 'S'], [3, 17, 'Cl'], [3, 18, 'Ar'],
  [4, 1, 'K'], [4, 2, 'Ca'], [4, 3, 'Sc'], [4, 4, 'Ti'], [4, 5, 'V'], [4, 6, 'Cr'], [4, 7, 'Mn'], [4, 8, 'Fe'], [4, 9, 'Co'], [4, 10, 'Ni'], [4, 11, 'Cu'], [4, 12, 'Zn'], [4, 13, 'Ga'], [4, 14, 'Ge'], [4, 15, 'As'], [4, 16, 'Se'], [4, 17, 'Br'], [4, 18, 'Kr'],
  [5, 1, 'Rb'], [5, 2, 'Sr'], [5, 3, 'Y'], [5, 4, 'Zr'], [5, 5, 'Nb'], [5, 6, 'Mo'], [5, 7, 'Tc'], [5, 8, 'Ru'], [5, 9, 'Rh'], [5, 10, 'Pd'], [5, 11, 'Ag'], [5, 12, 'Cd'], [5, 13, 'In'], [5, 14, 'Sn'], [5, 15, 'Sb'], [5, 16, 'Te'], [5, 17, 'I'], [5, 18, 'Xe'],
  [6, 1, 'Cs'], [6, 2, 'Ba'], [6, 3, 'Lu'], [6, 4, 'Hf'], [6, 5, 'Ta'], [6, 6, 'W'], [6, 7, 'Re'], [6, 8, 'Os'], [6, 9, 'Ir'], [6, 10, 'Pt'], [6, 11, 'Au'], [6, 12, 'Hg'], [6, 13, 'Tl'], [6, 14, 'Pb'], [6, 15, 'Bi'], [6, 16, 'Po'], [6, 17, 'At'], [6, 18, 'Rn'],
  [7, 1, 'Fr'], [7, 2, 'Ra'], [7, 3, 'Lr'], [7, 4, 'Rf'], [7, 5, 'Db'], [7, 6, 'Sg'], [7, 7, 'Bh'], [7, 8, 'Hs'], [7, 9, 'Mt'], [7, 10, 'Ds'], [7, 11, 'Rg'], [7, 12, 'Cn'], [7, 13, 'Nh'], [7, 14, 'Fl'], [7, 15, 'Mc'], [7, 16, 'Lv'], [7, 17, 'Ts'], [7, 18, 'Og']
];

function renderTableGridSVG(highlightType) {
  const isPeriod2 = highlightType === 'period2';
  const isGroup2 = highlightType === 'group2';

  const colW = 15;
  const rowH = 14;
  const startX = 22;
  const startY = 17;

  let colNums = '';
  for (let c = 1; c <= 18; c++) {
    colNums += `<text x="${startX + (c - 1) * colW + colW / 2}" y="11" font-size="6.2" font-weight="600" text-anchor="middle" fill="#94A3B8">${c}</text>`;
  }

  let rowNums = '';
  for (let r = 1; r <= 7; r++) {
    rowNums += `<text x="12" y="${startY + (r - 1) * rowH + rowH / 2 + 2.2}" font-size="6.2" font-weight="600" text-anchor="middle" fill="#94A3B8">${r}</text>`;
  }

  let cells = '';
  GRID_CELLS.forEach(([r, c, sym]) => {
    const x = startX + (c - 1) * colW;
    const y = startY + (r - 1) * rowH;
    const isHl = (isPeriod2 && r === 2) || (isGroup2 && c === 2);
    const fill = isHl ? '#FDE6D2' : '#FFFFFF';
    const stroke = isHl ? '#EA580C' : '#CBD5E1';
    const textColor = isHl ? '#9A3412' : '#1E293B';
    const fontWeight = isHl ? '750' : '500';

    cells += `
      <rect x="${x}" y="${y}" width="${colW}" height="${rowH}" fill="${fill}" stroke="${stroke}" stroke-width="0.75" />
      <text x="${x + colW / 2}" y="${y + rowH / 2 + 2.2}" font-size="6.2" font-weight="${fontWeight}" text-anchor="middle" fill="${textColor}">${sym}</text>
    `;
  });

  return `
    <div class="pk-pdf-table-grid-wrap" aria-hidden="true">
      <svg class="pk-pdf-table-svg" viewBox="0 0 300 125" width="100%" height="auto">
        ${colNums}
        ${rowNums}
        ${cells}
      </svg>
    </div>
  `;
}

// ==========================================================================
// RENDERIZADO VECTORIAL DEL ÁTOMO DE BOHR (PDF Página 1)
// ==========================================================================
function renderBohrAtomSVG(symbol, shells, z, isLarge = false) {
  const size = isLarge ? 170 : 130;
  const center = size / 2;
  const numShells = shells.length;
  const nucR = 15;
  const maxR = center - 8;
  const step = (maxR - nucR - 6) / numShells;

  let ringsHTML = '';
  let dotsHTML = '';

  shells.forEach((count, i) => {
    const r = nucR + 8 + (i + 1) * step;
    ringsHTML += `<circle cx="${center}" cy="${center}" r="${r.toFixed(1)}" fill="none" stroke="#64748B" stroke-width="1.2" />`;

    for (let k = 0; k < count; k++) {
      const angle = (2 * Math.PI * k / count) - (Math.PI / 2);
      const ex = center + r * Math.cos(angle);
      const ey = center + r * Math.sin(angle);
      dotsHTML += `<circle cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" r="3" fill="#1C2237" stroke="#FFFFFF" stroke-width="0.7" />`;
    }
  });

  return `
    <div class="pk-bohr-item">
      <div class="pk-bohr-svg-wrap ${isLarge ? 'large' : ''}">
        <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
          ${ringsHTML}
          <circle cx="${center}" cy="${center}" r="${nucR}" fill="#FFFFFF" stroke="#1C2237" stroke-width="1.6" />
          <text x="${center}" y="${center + 4.5}" font-size="12" font-weight="800" text-anchor="middle" fill="#1C2237">${symbol}</text>
          ${dotsHTML}
        </svg>
      </div>
      <div class="pk-bohr-meta">
        <strong>${symbol}</strong> <span class="pk-bohr-z">(Z=${z})</span>
        <span class="pk-bohr-config">${shells.join(' · ')}</span>
      </div>
    </div>
  `;
}

// ==========================================================================
// RENDERIZADO VECTORIAL DE CONCEPTOS: PANTAILATZEA ETA KARGA ERAGINKORRA
// ==========================================================================
function renderPantailatzeaSVG(isEs) {
  return `
    <div class="pk-concept-visual-wrap" aria-label="${isEs ? 'Diagrama del apantallamiento' : 'Pantailatzearen diagrama'}">
      <svg class="pk-concept-svg" viewBox="0 0 340 190" width="100%" height="auto">
        <defs>
          <marker id="pkRedArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#DC2626" />
          </marker>
          <linearGradient id="pkShieldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.2" />
          </linearGradient>
        </defs>

        <rect x="2" y="2" width="336" height="186" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />

        <!-- Órbita interna (capa n=1) -->
        <path d="M 60 25 A 65 65 0 0 1 60 155" fill="none" stroke="#CBD5E1" stroke-width="1.2" stroke-dasharray="3 3" />

        <!-- Escudo / Pantalla intermedia -->
        <path d="M 120 30 C 145 60, 145 120, 120 150" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round" stroke-dasharray="6 3" />
        <path d="M 105 38 C 130 65, 130 115, 105 142" fill="url(#pkShieldGrad)" opacity="0.4" />

        <!-- Órbita externa (capa n=2) -->
        <path d="M 60 10 A 175 175 0 0 1 60 170" fill="none" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4 4" />

        <!-- Núcleo positivo (+Z) -->
        <circle cx="60" cy="90" r="24" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2" />
        <text x="60" y="87" font-size="13" font-weight="900" text-anchor="middle" fill="#5B21B6">+Z</text>
        <text x="60" y="100" font-size="8.5" font-weight="700" text-anchor="middle" fill="#7C3AED">${isEs ? 'Núcleo' : 'Nukleoa'}</text>

        <!-- Electrones internos (apantallan) -->
        <circle cx="108" cy="56" r="8.5" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.8" />
        <text x="108" y="60" font-size="11" font-weight="900" text-anchor="middle" fill="#DC2626">e⁻</text>
        <circle cx="108" cy="124" r="8.5" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.8" />
        <text x="108" y="128" font-size="11" font-weight="900" text-anchor="middle" fill="#DC2626">e⁻</text>

        <!-- Etiqueta de la pantalla -->
        <rect x="92" y="81" width="62" height="18" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1" />
        <text x="123" y="93.5" font-size="8.5" font-weight="850" text-anchor="middle" fill="#B45309">${isEs ? 'PANTALLA (p)' : 'PANTAILA (p)'}</text>

        <!-- Flechas de repulsión hacia el electrón exterior -->
        <line x1="120" y1="58" x2="215" y2="82" stroke="#DC2626" stroke-width="2" stroke-linecap="round" marker-end="url(#pkRedArrow)" />
        <line x1="120" y1="122" x2="215" y2="98" stroke="#DC2626" stroke-width="2" stroke-linecap="round" marker-end="url(#pkRedArrow)" />

        <text x="175" y="66" font-size="8.5" font-weight="800" text-anchor="middle" fill="#DC2626">${isEs ? 'Repulsión' : 'Aldarapena'}</text>
        <text x="175" y="122" font-size="8.5" font-weight="800" text-anchor="middle" fill="#DC2626">${isEs ? 'Repulsión' : 'Aldarapena'}</text>

        <!-- Electrón de valencia (exterior) -->
        <circle cx="235" cy="90" r="10" fill="#1E293B" stroke="#38BDF8" stroke-width="2" />
        <text x="235" y="94" font-size="11" font-weight="900" text-anchor="middle" fill="#FFFFFF">e⁻</text>
        <text x="235" y="114" font-size="9" font-weight="800" text-anchor="middle" fill="#1E293B">${isEs ? 'e⁻ valencia' : 'Balentzia e⁻'}</text>

        <!-- Banda inferior resumen didáctico -->
        <rect x="10" y="156" width="320" height="24" rx="6" fill="#FEF2F2" stroke="#FEE2E2" stroke-width="1" />
        <text x="170" y="172" font-size="9.5" font-weight="750" text-anchor="middle" fill="#991B1B">
          ${isEs 
            ? '🛡️ Los e⁻ internos REPELEN al e⁻ externo y frenan la atracción' 
            : '🛡️ Barneko e⁻-ek kanpokoa ALDARATU eta erakarpena ahultzen dute'}
        </text>
      </svg>
    </div>
  `;
}

function renderKargaEraginkorraSVG(isEs) {
  return `
    <div class="pk-concept-visual-wrap" aria-label="${isEs ? 'Diagrama de la carga nuclear efectiva' : 'Karga nuklear eraginkorraren diagrama'}">
      <svg class="pk-concept-svg" viewBox="0 0 340 190" width="100%" height="auto">
        <defs>
          <marker id="pkTealArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0D9488" />
          </marker>
          <marker id="pkAmberArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D97706" />
          </marker>
        </defs>

        <rect x="2" y="2" width="336" height="186" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />

        <!-- Núcleo positivo (+Z) -->
        <circle cx="55" cy="62" r="23" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2" />
        <text x="55" y="58" font-size="13" font-weight="900" text-anchor="middle" fill="#5B21B6">+Z</text>
        <text x="55" y="72" font-size="8" font-weight="750" text-anchor="middle" fill="#7C3AED">${isEs ? 'Protones' : 'Protoiak'}</text>

        <!-- Barrera de apantallamiento (p) -->
        <rect x="130" y="32" width="34" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.6" stroke-dasharray="3 2" />
        <text x="147" y="56" font-size="14" font-weight="900" text-anchor="middle" fill="#B45309">p</text>
        <text x="147" y="70" font-size="7.5" font-weight="750" text-anchor="middle" fill="#B45309">${isEs ? 'Pantalla' : 'Pantaila'}</text>

        <!-- Electrón de valencia (e-) -->
        <circle cx="285" cy="62" r="10" fill="#1E293B" stroke="#38BDF8" stroke-width="2" />
        <text x="285" y="66" font-size="11" font-weight="900" text-anchor="middle" fill="#FFFFFF">e⁻</text>
        <text x="285" y="86" font-size="8.5" font-weight="800" text-anchor="middle" fill="#1E293B">${isEs ? 'e⁻ exterior' : 'Kanpo e⁻'}</text>

        <!-- Flecha 1: Apantallamiento p resta atracción -->
        <line x1="168" y1="48" x2="225" y2="48" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" marker-end="url(#pkAmberArrow)" />
        <text x="196" y="42" font-size="8.5" font-weight="800" text-anchor="middle" fill="#B45309">− p (${isEs ? 'freno' : 'galga'})</text>

        <!-- Flecha 2: Fuerza neta Z* (atracción real hacia el núcleo) -->
        <line x1="270" y1="62" x2="84" y2="62" stroke="#0D9488" stroke-width="3.2" stroke-linecap="round" marker-end="url(#pkTealArrow)" />
        <rect x="145" y="78" width="90" height="18" rx="4" fill="#0D9488" />
        <text x="190" y="90.5" font-size="9.5" font-weight="900" text-anchor="middle" fill="#FFFFFF">Z* = Z – p</text>

        <!-- Sección inferior: Ecuación visual desglosada -->
        <g transform="translate(18, 114)">
          <!-- Caja Z -->
          <rect x="0" y="0" width="76" height="34" rx="6" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="1.2" />
          <text x="38" y="15" font-size="12" font-weight="900" text-anchor="middle" fill="#6D28D9">+Z</text>
          <text x="38" y="27" font-size="7.5" font-weight="700" text-anchor="middle" fill="#6D28D9">${isEs ? 'Carga total' : 'Karga osoa'}</text>

          <!-- Signo menos -->
          <text x="90" y="21" font-size="16" font-weight="900" text-anchor="middle" fill="#64748B">−</text>

          <!-- Caja p -->
          <rect x="104" y="0" width="76" height="34" rx="6" fill="#FEF3C7" stroke="#FDE68A" stroke-width="1.2" />
          <text x="142" y="15" font-size="12" font-weight="900" text-anchor="middle" fill="#B45309">p</text>
          <text x="142" y="27" font-size="7.5" font-weight="700" text-anchor="middle" fill="#B45309">${isEs ? 'Pantalla' : 'Pantailatzea'}</text>

          <!-- Signo igual -->
          <text x="194" y="21" font-size="16" font-weight="900" text-anchor="middle" fill="#64748B">=</text>

          <!-- Caja Z* -->
          <rect x="208" y="0" width="96" height="34" rx="6" fill="#F0FDFA" stroke="#99F6E4" stroke-width="1.6" />
          <text x="256" y="15" font-size="13" font-weight="900" text-anchor="middle" fill="#0F766E">Z*</text>
          <text x="256" y="27" font-size="7.5" font-weight="800" text-anchor="middle" fill="#0D9488">${isEs ? 'Atracción real' : 'Benetako indarra'}</text>
        </g>

        <!-- Banda inferior resumen didáctico -->
        <rect x="10" y="158" width="320" height="24" rx="6" fill="#F0FDFA" stroke="#CCFBF1" stroke-width="1" />
        <text x="170" y="174" font-size="9.5" font-weight="750" text-anchor="middle" fill="#0F766E">
          ${isEs 
            ? '⚡ Z* es la fuerza efectiva que REALMENTE experimenta el electrón' 
            : '⚡ Z* da elektroiak BENETAN jasaten duen erakarpen garbia'}
        </text>
      </svg>
    </div>
  `;
}

// ==========================================================================
// RENDERIZADO DE LA UNIDAD TEÓRICA (PDF 3. GAIA: Página 1 eta 2)
// ==========================================================================
function renderTheoryView(isEs, lang) {
  return `
    <div class="pk-theory-clean-view">
      <!-- 1. AURRETIKO KONTZEPTUAK -->
      <section class="pk-theory-card-block">
        <h3 class="pk-theory-block-title">
          <span>1.</span> ${isEs ? 'CONCEPTOS PREVIOS' : 'AURRETIKO KONTZEPTUAK'}
        </h3>

        <!-- Bloque PERIODO BEREAN -->
        <div class="pk-theory-sub-block">
          <h4 class="pk-theory-sub-title">${isEs ? 'EN EL MISMO PERÍODO' : 'PERIODO BEREAN'}</h4>
          <p class="pk-theory-block-desc">
            ${isEs
              ? 'Dado que los átomos de los elementos que están en el mismo período tienen la misma capa de valencia, el número de electrones entre el núcleo y la capa de valencia es el mismo y, por tanto, <strong>el apantallamiento no varía</strong>. Por ello, para analizar la carga nuclear efectiva <strong>solo analizaremos el número atómico</strong>.'
              : 'Periodo berean dauden elementuen atomoak balentzia geruza berdina daukatenez, nukleo eta balentzia geruza artean dagoen elektroi kopurua berdina da eta beraz, <strong>pantailatzea ez da aldatzen</strong>. Hori dela eta, karga nuklear eraginkorra aztertzeko <strong>zenbaki atomikoa aztertuko dugu bakarrik</strong>.'}
          </p>
          <div class="pk-theory-example-label">
            ${isEs ? 'Por ejemplo:' : 'Adibidez:'} <span>• ${isEs ? 'Los átomos de Berilio y Flúor están en el mismo período y su período es 2.' : 'Berilio eta Fluor atomoak periodo berean daude eta haien periodoa 2 da.'}</span>
          </div>

          <div class="pk-theory-illustration-row">
            <div class="pk-theory-atoms-col">
              ${renderBohrAtomSVG('Be', [2, 2], 4, false)}
              ${renderBohrAtomSVG('F', [2, 7], 9, false)}
            </div>
            <div class="pk-theory-grid-col">
              ${renderTableGridSVG('period2')}
            </div>
          </div>
        </div>

        <hr class="pk-theory-divider" />

        <!-- Bloque TALDE BEREAN -->
        <div class="pk-theory-sub-block">
          <h4 class="pk-theory-sub-title">${isEs ? 'EN EL MISMO GRUPO' : 'TALDE BEREAN'}</h4>
          <p class="pk-theory-block-desc">
            ${isEs
              ? 'Dado que los átomos de los elementos del mismo grupo tienen el mismo número de electrones de valencia, el número de protones y el de electrones que causan apantallamiento son distintos pero varían en la misma cantidad, por lo que <strong>la carga nuclear efectiva se mantiene constante</strong>. Por tanto, para diferenciar átomos del mismo grupo <strong>se analiza el número de niveles energéticos</strong>.'
              : 'Talde berean dauden elementuen atomoak balentzia elektroi kopuru berdina daukatenez, protoi kopuru eta pantailatzea eragiten duen elektroi kopurua desberdina izango da baina kantitate berean aldatuko dira eta <strong>karga nuklear eraginkorra konstante mantenduko da</strong>. Beraz, talde bereko atomoak ezberdintzeko <strong>maila energetiko kopurua aztertzen da</strong>.'}
          </p>
          <div class="pk-theory-example-label">
            ${isEs ? 'Por ejemplo:' : 'Adibidez:'} <span>• ${isEs ? 'Los átomos de Calcio y Berilio están en el mismo grupo y su grupo es 2.' : 'Kaltzio eta Berilio atomoak talde berean daude eta haien taldea 2 da.'}</span>
          </div>

          <div class="pk-theory-illustration-row">
            <div class="pk-theory-atoms-col">
              ${renderBohrAtomSVG('Ca', [2, 8, 8, 2], 20, true)}
              ${renderBohrAtomSVG('Be', [2, 2], 4, false)}
            </div>
            <div class="pk-theory-grid-col">
              ${renderTableGridSVG('group2')}
            </div>
          </div>
        </div>
      </section>

      <!-- 2. KONTZEPTU BERRIAK -->
      <section class="pk-theory-card-block">
        <h3 class="pk-theory-block-title">
          <span>2.</span> ${isEs ? 'NUEVOS CONCEPTOS' : 'KONTZEPTU BERRIAK'}
        </h3>
        <p class="pk-theory-block-desc" style="margin-bottom: 12px;">
          ${isEs ? 'Debemos conocer dos conceptos nuevos: el apantallamiento y la carga nuclear efectiva.' : 'Bi kontzeptu berri jakin behar ditugu: pantailatzea eta karga nuklear eraginkorra.'}
        </p>

        <div class="pk-new-concepts-duo">
          <!-- Pantailatzea -->
          <div class="pk-new-concept-card">
            <h4>${isEs ? 'Apantallamiento:' : 'Pantailatzea:'}</h4>
            <p>
              ${isEs 
                ? 'Fuerza de repulsión que los electrones situados entre el núcleo y los electrones de valencia ejercen sobre los electrones más externos.' 
                : 'Nukleo eta balentzia elektroi arteko elektroiek kanpo elektroiengan egiten duten aldarapen indarra.'}
            </p>
            ${renderPantailatzeaSVG(isEs)}
          </div>

          <!-- Karga nuklear eraginkorra -->
          <div class="pk-new-concept-card">
            <h4>${isEs ? 'Carga nuclear efectiva:' : 'Karga nuklear eraginkorra:'}</h4>
            <p>
              ${isEs 
                ? 'Teniendo en cuenta el número atómico y el apantallamiento, es la atracción real que ejerce el núcleo sobre los electrones exteriores: <span class="pk-formula-badge">Z* = Z – p</span>.' 
                : 'Zenbaki atomikoa eta pantailatzea kontutan hartuta, nukleoak kanpo elektroiengan eragiten duen benetako erakarpen indarra da: <span class="pk-formula-badge">Z* = Z – p</span>.'}
            </p>
            ${renderKargaEraginkorraSVG(isEs)}
          </div>
        </div>
      </section>
    </div>
  `;
}
// ==========================================================================
export function mountPeriodicProperties(host, initialLang = 'eu', onLangChange = null) {
  let lang = initialLang;
  let mode = 'radius';
  let symA = 'Li';
  let symB = 'F';
  let targetSide = 'A';
  let isTableOpen = false;

  function setMode(newMode) {
    if (!PROPS[newMode]) return;
    mode = newMode;
    const defPairs = PROPS[mode].pairs;
    if (defPairs && defPairs.length) {
      [symA, symB] = defPairs[0];
    }
    render();
  }

  function setLanguage(newLang) {
    lang = newLang;
    render();
  }

  function formatVal(v, key) {
    if (v == null) return lang === 'es' ? 'Sin dato' : 'Daturik ez';
    if (key === 'en') return v.toFixed(2);
    return Math.round(v).toLocaleString(lang === 'es' ? 'es-ES' : 'eu-ES');
  }

  function playAnimation() {
    const frame = host.querySelector('#pkStageFrame');
    if (!frame) return;
    frame.classList.remove('running');
    void frame.offsetWidth;
    frame.classList.add('running');

    if (mode === 'radius') {
      const models = frame.querySelectorAll('.pk-atom-model');
      models.forEach(m => {
        m.animate([
          { transform: 'scale(0.88)', filter: 'brightness(0.8)' },
          { transform: 'scale(1.08)', filter: 'brightness(1.3)' },
          { transform: 'scale(1)', filter: 'brightness(1)' }
        ], { duration: 1250, easing: 'ease-in-out' });
      });
    } else if (mode === 'en') {
      const cloud = frame.querySelector('#pkBondCloud');
      const e = frame.querySelector('#pkBondElectron');
      const x = BY_SYM[symA], y = BY_SYM[symB];
      const diff = (x.en != null && y.en != null) ? y.en - x.en : 0;
      const offset = Math.round(Math.max(-70, Math.min(70, diff * 28)));

      [cloud, e].forEach(node => {
        if (!node) return;
        node.animate([
          { opacity: 0.3, transform: 'translate(-50%, -50%) scale(0.7)' },
          { opacity: 1, transform: `translate(calc(-50% + ${offset}px), -50%) scale(1.08)` },
          { opacity: 1, transform: `translate(calc(-50% + ${offset}px), -50%) scale(1)` }
        ], { duration: 1400, easing: 'ease-in-out' });
      });
    }
  }

  function renderBondHTML(x, y) {
    const isEs = lang === 'es';
    const va = x.en, vb = y.en;
    const has = va != null && vb != null;
    const diff = has ? vb - va : 0;
    const offset = Math.round(Math.max(-70, Math.min(70, diff * 28)));

    const chargeA = has && Math.abs(diff) > 0.04 ? (diff > 0 ? 'δ+' : 'δ−') : '';
    const chargeB = has && Math.abs(diff) > 0.04 ? (diff > 0 ? 'δ−' : 'δ+') : '';

    const bondHint = !has
      ? (isEs ? 'Sin datos de electronegatividad comparables.' : 'Ez dago elektronegatibotasun datu konparagarririk.')
      : Math.abs(diff) < 0.4
      ? (isEs ? 'Enlace covalente apolar: diferencia insignificante de electronegatividad (ΔEN < 0,4).' : 'Lotura kobalente apolarra: elektronegatibotasun-alde txikia (ΔEN < 0,4).')
      : Math.abs(diff) <= 1.7
      ? (isEs ? `Enlace covalente polar: la nube de electrones se desplaza hacia el elemento más electronegativo (ΔEN = ${Math.abs(diff).toFixed(2)}).` : `Lotura kobalente polarra: elektroi-hodeia atomo elektronegatiboenerantz lerratzen da (ΔEN = ${Math.abs(diff).toFixed(2)}).`)
      : (isEs ? `Carácter marcadamente iónico: gran diferencia (ΔEN = ${Math.abs(diff).toFixed(2)} ≥ 1,7). No hay enlace covalente con electrones compartidos, sino transferencia efectiva.` : `Izaera ioniko handia: alde handia (ΔEN = ${Math.abs(diff).toFixed(2)} ≥ 1,7). Ez dago partekatutako hodei kobalenterik, elektroien transferentzia baizik.`);

    return `
      <div class="pk-bond-stage">
        <div class="pk-bond-main">
          <div class="pk-bond-ball a">
            ${x.s}
            <span class="pk-charge">${chargeA}</span>
          </div>
          <div class="pk-bond-cloud-track">
            <div class="pk-bond-link"></div>
            <div class="pk-bond-cloud" id="pkBondCloud" style="--offset:${offset}px"></div>
            <div class="pk-bond-electron" id="pkBondElectron" style="--offset:${offset}px"></div>
          </div>
          <div class="pk-bond-ball b">
            ${y.s}
            <span class="pk-charge">${chargeB}</span>
          </div>
        </div>
        <div class="pk-bond-labels">
          <span>${isEs ? x.name_es : x.name_eu}: ${va != null ? va.toFixed(2) : '—'}</span>
          <span>${isEs ? y.name_es : y.name_eu}: ${vb != null ? vb.toFixed(2) : '—'}</span>
        </div>
        <p class="pk-bond-disclaimer">${bondHint}</p>
      </div>`;
  }

  function render() {
    const t = I18N[lang];
    const isEs = lang === 'es';
    const elemA = BY_SYM[symA] || ELEMENTS[2]; // Li default
    const elemB = BY_SYM[symB] || ELEMENTS[8]; // F default
    const cfg = PROPS[mode];
    const valA = elemA[cfg.key];
    const valB = elemB[cfg.key];
    const hasData = valA != null && valB != null;
    const isEq = hasData && Math.abs(valA - valB) < 0.0001;
    const greater = hasData ? (valA > valB ? 'A' : valB > valA ? 'B' : null) : null;
    const cmpSign = hasData ? (isEq ? '=' : (valA > valB ? '>' : '<')) : '?';

    const titleMode = isEs ? cfg.title_es : cfg.title_eu;
    const nameMode = isEs ? cfg.name_es : cfg.name_eu;
    const descMode = isEs ? cfg.desc_es : cfg.desc_eu;
    const factorsMode = isEs ? cfg.factors_es : cfg.factors_eu;

    const sameShells = elemA.p === elemB.p;
    const sameValence = elemA.shells[elemA.shells.length - 1] === elemB.shells[elemB.shells.length - 1];

    host.innerHTML = `
    <div class="pk-container">
      <header class="pk-clean-header">
        <div class="pk-header-title-row">
          <h1>${t.heroTitle}<span>${t.heroTitleHighlight}</span></h1>
          <button type="button" class="pk-aurretikoak-btn ${mode === 'theory' ? 'active' : ''}" data-mode="theory">
            <span class="pk-aurr-btn-icon">📘</span>
            <span>${isEs ? 'Conceptos previos' : 'Aurretikoak'}</span>
          </button>
        </div>
        <p>${t.heroLead}</p>
      </header>

      <!-- 4 Columnas de Selección: 4 Propietateak sin número de orden -->
      <div class="pk-property-strip" role="tablist" aria-label="${isEs ? 'Propiedades periódicas' : 'Propietate periodikoak'}">
        <button type="button" class="pk-prop-col ${mode === 'radius' ? 'active' : ''}" data-mode="radius">
          <span class="pk-prop-col-icon">◉</span>
          <span class="pk-prop-col-info">
            <strong>${isEs ? PROPS.radius.name_es : PROPS.radius.name_eu}</strong>
          </span>
        </button>
        <button type="button" class="pk-prop-col ${mode === 'ion' ? 'active' : ''}" data-mode="ion">
          <span class="pk-prop-col-icon">↗</span>
          <span class="pk-prop-col-info">
            <strong>${isEs ? PROPS.ion.name_es : PROPS.ion.name_eu}</strong>
          </span>
        </button>
        <button type="button" class="pk-prop-col ${mode === 'aff' ? 'active' : ''}" data-mode="aff">
          <span class="pk-prop-col-icon">↘</span>
          <span class="pk-prop-col-info">
            <strong>${isEs ? PROPS.aff.name_es : PROPS.aff.name_eu}</strong>
          </span>
        </button>
        <button type="button" class="pk-prop-col ${mode === 'en' ? 'active' : ''}" data-mode="en">
          <span class="pk-prop-col-icon">⇄</span>
          <span class="pk-prop-col-info">
            <strong>${isEs ? PROPS.en.name_es : PROPS.en.name_eu}</strong>
          </span>
        </button>
      </div>

      ${mode === 'theory' ? renderTheoryView(isEs, lang) : `
      <!-- Tarjeta de Definición y Tendencia Periódica -->
      <section class="pk-def-card" aria-label="${isEs ? 'Definición teórica y tendencia' : 'Definizio teorikoa eta joera'}">
        <div class="pk-def-grid">
          <div class="pk-def-col-main">
            <div class="pk-def-body">${isEs ? cfg.def_es : cfg.def_eu}</div>

            <div class="pk-def-quick-pairs">
              <div class="pk-pairs-header-row">
                <span class="pk-quick-label">${isEs ? 'EJEMPLOS DE PAREJAS:' : 'BIKOTE ADIBIDEAK:'}</span>
                <button type="button" class="pk-table-dropdown-btn ${isTableOpen ? 'open' : ''}" id="pkToggleTableBtn" aria-expanded="${isTableOpen}">
                  <span class="pk-btn-grid-icon">▦</span>
                  <span>${isEs ? 'Tabla periódica' : 'Taula periodikoa'}</span>
                  <span class="pk-caret">${isTableOpen ? '▲' : '▼'}</span>
                </button>
              </div>
              <div class="pk-pairs-wrap" id="pkPairsHolder">
                ${cfg.pairs.map(([s1, s2]) => `
                  <button type="button" class="pk-pair-chip ${symA === s1 && symB === s2 ? 'active' : ''}" data-a="${s1}" data-b="${s2}">
                    ${s1} / ${s2}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="pk-def-col-trend">
            ${renderMiniTableTrendSVG(mode, isEs)}
          </div>
        </div>

        ${isTableOpen ? `
        <!-- Desplegable de la Tabla Periódica -->
        <div class="pk-table-dropdown-panel open" id="pkTableDropdownPanel">
          <div class="pk-dropdown-table-inner">
            <div class="pk-periodic-head">
              <div>
                <h3>${t.tableTitle}</h3>
                <p>${t.tableLead}</p>
              </div>
              <div class="pk-target-toggle" role="group" aria-label="${isEs ? 'Elemento objetivo a cambiar' : 'Aldatzeko elementua'}">
                <button type="button" id="pkTargetA" class="${targetSide === 'A' ? 'selected target-a' : ''}" aria-pressed="${targetSide === 'A'}">${t.editA}</button>
                <button type="button" id="pkTargetB" class="${targetSide === 'B' ? 'selected target-b' : ''}" aria-pressed="${targetSide === 'B'}">${t.editB}</button>
              </div>
            </div>

            <div class="pk-table-scroll">
              <div class="pk-table-grid" id="pkTableGrid"></div>
            </div>

            <div class="pk-periodic-legend">
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#FDECEC;border-color:#F8BEBE"></i> ${t.families.alkali}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#FEF4E8;border-color:#FBD7B3"></i> ${t.families.alkaline}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#E9F6F3;border-color:#BBE3DA"></i> ${t.families.metalloid}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#EBF7EE;border-color:#BFE8C7"></i> ${t.families.nonmetal}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#EDF3FB;border-color:#BCD3F3"></i> ${t.families.halogen}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#F2ECFB;border-color:#D3BEF3"></i> ${t.families.noble}</span>
              <span class="pk-legend-item"><i class="pk-legend-swatch" style="background:#F2F4F7;border-color:#CCD2DD"></i> ${t.families.postmetal}</span>
            </div>
          </div>
        </div>
        ` : ''}
      </section>

      <!-- Representación de la Propiedad (Estudio Atómico) -->
      <main class="pk-studio">
        <!-- Selectores A y B -->
        <div class="pk-selectors">
          <div class="pk-field a">
            <label for="pkSelectA"><span class="pk-dot"></span> ${t.elemALabel}</label>
            <select id="pkSelectA" class="pk-select"></select>
          </div>
          <button type="button" class="pk-swap-btn" id="pkSwapBtn" title="${t.swapBtn}" aria-label="${t.swapBtn}">⇄</button>
          <div class="pk-field b">
            <label for="pkSelectB"><span class="pk-dot"></span> ${t.elemBLabel}</label>
            <select id="pkSelectB" class="pk-select"></select>
          </div>
        </div>

        <!-- Escenario Atómico -->
        <section class="pk-stage-frame mode-${mode}" id="pkStageFrame" aria-label="Escenario interactivo">
          <button type="button" class="pk-stage-play-btn" id="pkPlayBtn" title="${isEs ? 'Reproducir animación' : 'Animazioa erreproduzitu'}" aria-label="${isEs ? 'Reproducir animación' : 'Animazioa erreproduzitu'}">▶</button>

          <!-- Modo Átomos (Radio, Ionización, Afinidad) -->
          <div class="pk-atom-stage" id="pkAtomStage">
            <div class="pk-atom-side left" id="pkPanelA">
              ${renderAtomModelHTML(elemA, 'left', mode, sameShells, sameValence, lang)}
            </div>
            <div class="pk-between">
              <div class="pk-between-line"></div>
              <span>VS</span>
              <div class="pk-between-line"></div>
            </div>
            <div class="pk-atom-side right" id="pkPanelB">
              ${renderAtomModelHTML(elemB, 'right', mode, sameShells, sameValence, lang)}
            </div>
          </div>

          <!-- Modo Enlace (Electronegatividad) -->
          ${renderBondHTML(elemA, elemB)}
        </section>

        <!-- Comparación Numérica (Misma Escala) -->
        <section class="pk-showdown" aria-label="${isEs ? 'Comparación numérica' : 'Zenbakizko alderaketa'}">
          <div class="pk-number-line">
            <span class="a-val">${formatVal(valA, cfg.key)}</span>
            <span class="cmp-sign">${cmpSign}</span>
            <span class="b-val">${formatVal(valB, cfg.key)}</span>
            <small style="font-size:13px;color:var(--ks-muted);font-weight:700">${cfg.unit}</small>
          </div>

          <div class="pk-measure-row">
            <span class="pk-row-label a">A · ${elemA.s} (${isEs ? elemA.name_es : elemA.name_eu})</span>
            <div class="pk-track">
              <div class="pk-bar a ${greater === 'A' ? 'winner' : ''}" id="pkBarA"></div>
            </div>
            <span class="pk-score">${formatVal(valA, cfg.key)}</span>
          </div>

          <div class="pk-measure-row">
            <span class="pk-row-label b">B · ${elemB.s} (${isEs ? elemB.name_es : elemB.name_eu})</span>
            <div class="pk-track">
              <div class="pk-bar b ${greater === 'B' ? 'winner' : ''}" id="pkBarB"></div>
            </div>
            <span class="pk-score">${formatVal(valB, cfg.key)}</span>
          </div>
        </section>

        <!-- Veredicto y Razón Escrita Abajo -->
        <section class="pk-verdict" aria-live="polite">
          <span class="pk-verdict-icon">✓</span>
          <div>
            <h3 id="pkVerdictTitle"></h3>
            <p id="pkVerdictBody"></p>
          </div>
        </section>

        <!-- Excepciones PAU -->
        <div class="pk-exception" id="pkException">
          <span class="pk-exception-badge">PAU</span>
          <span id="pkExceptionText"></span>
        </div>
      </main>
      `}
    </div>
    `;

    // Attach Mode Listeners (Available in both views)
    host.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        setMode(btn.dataset.mode);
      });
    });

    // Try in Studio Buttons (From Theory View)
    host.querySelectorAll('[data-try-a]').forEach(btn => {
      btn.addEventListener('click', () => {
        symA = btn.dataset.tryA;
        symB = btn.dataset.tryB;
        setMode(btn.dataset.tryMode || 'radius');
      });
    });

    // If theory view, skip studio-specific wiring
    if (mode === 'theory') return;

    // Populate Selects
    const selectA = host.querySelector('#pkSelectA');
    const selectB = host.querySelector('#pkSelectB');
    ELEMENTS.forEach(el => {
      const optA = new Option(`${el.s} · ${isEs ? el.name_es : el.name_eu} (Z=${el.z})`, el.s);
      const optB = new Option(`${el.s} · ${isEs ? el.name_es : el.name_eu} (Z=${el.z})`, el.s);
      selectA.add(optA);
      selectB.add(optB);
    });
    selectA.value = symA;
    selectB.value = symB;

    // Periodic Table Grid (desplegable)
    const grid = host.querySelector('#pkTableGrid');
    if (grid) {
      grid.innerHTML = '';
      ELEMENTS.forEach(d => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `pk-cell ${d.kind} ${d.s === symA ? 'activeA' : ''} ${d.s === symB ? 'activeB' : ''}`;
        btn.style.gridColumn = String(d.g);
        btn.style.gridRow = String(d.p);
        btn.title = `${isEs ? d.name_es : d.name_eu} (Z=${d.z})`;
        btn.innerHTML = `<span class="pk-cell-z">${d.z}</span><span class="pk-cell-sym">${d.s}</span>`;
        btn.addEventListener('click', () => {
          if (targetSide === 'A') symA = d.s;
          else symB = d.s;
          render();
        });
        grid.appendChild(btn);
      });
    }

    // Set Bars
    const maxVal = hasData ? Math.max(valA, valB) : 1;
    const barA = host.querySelector('#pkBarA');
    const barB = host.querySelector('#pkBarB');
    if (barA) barA.style.setProperty('--w', valA != null ? Math.max(0, 100 * valA / maxVal).toFixed(1) + '%' : '0%');
    if (barB) barB.style.setProperty('--w', valB != null ? Math.max(0, 100 * valB / maxVal).toFixed(1) + '%' : '0%');

    // Verdict and Chemistry Reasoning
    const reasoning = explainChemistry(elemA, elemB, mode, lang);
    const vTitle = host.querySelector('#pkVerdictTitle');
    const vBody = host.querySelector('#pkVerdictBody');

    if (!hasData) {
      vTitle.textContent = t.noDataTitle;
      vBody.textContent = t.noDataBody;
    } else if (isEq) {
      vTitle.textContent = t.eqTitle;
      vBody.textContent = reasoning.why;
    } else {
      const winner = greater === 'A' ? elemA : elemB;
      const loser = greater === 'A' ? elemB : elemA;
      const winnerName = isEs ? winner.name_es : winner.name_eu;
      const loserName = isEs ? loser.name_es : loser.name_eu;

      let action = '';
      if (isEs) {
        action = mode === 'radius'
          ? 'tiene un radio atómico mayor'
          : mode === 'ion'
          ? 'requiere más energía para arrancar un electrón (mayor EI)'
          : mode === 'aff'
          ? 'desprende más energía al captar un electrón'
          : 'atrae con mayor fuerza los electrones enlazantes';
        vTitle.textContent = `${winnerName} (${winner.s}) ${action} que ${loserName} (${loser.s}).`;
      } else {
        action = mode === 'radius'
          ? 'erradio atomiko handiagoa du'
          : mode === 'ion'
          ? 'elektroia erauzteko energia handiagoa behar du (EI altuagoa)'
          : mode === 'aff'
          ? 'energia gehiago askatzen du elektroi bat hartzean'
          : 'indartsuago erakartzen ditu loturako elektroiak';
        vTitle.textContent = `${winnerName}k (${winner.s}) ${loserName}k (${loser.s}) baino ${action}.`;
      }
      vBody.textContent = reasoning.why;
    }

    // Exception callout
    const excBox = host.querySelector('#pkException');
    const excText = host.querySelector('#pkExceptionText');
    if (reasoning.exception) {
      excBox.classList.add('visible');
      excText.textContent = reasoning.exception;
    } else {
      excBox.classList.remove('visible');
    }

    // Attach Event Listeners
    selectA.addEventListener('change', e => {
      symA = e.target.value;
      render();
    });

    selectB.addEventListener('change', e => {
      symB = e.target.value;
      render();
    });

    host.querySelector('#pkSwapBtn').addEventListener('click', () => {
      [symA, symB] = [symB, symA];
      render();
    });

    host.querySelectorAll('.pk-pair-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        symA = chip.dataset.a;
        symB = chip.dataset.b;
        render();
      });
    });

    const toggleBtn = host.querySelector('#pkToggleTableBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        isTableOpen = !isTableOpen;
        render();
      });
    }

    const targetABtn = host.querySelector('#pkTargetA');
    if (targetABtn) {
      targetABtn.addEventListener('click', () => {
        targetSide = 'A';
        targetABtn.className = 'selected target-a';
        const tB = host.querySelector('#pkTargetB');
        if (tB) tB.className = '';
      });
    }

    const targetBBtn = host.querySelector('#pkTargetB');
    if (targetBBtn) {
      targetBBtn.addEventListener('click', () => {
        targetSide = 'B';
        targetBBtn.className = 'selected target-b';
        const tA = host.querySelector('#pkTargetA');
        if (tA) tA.className = '';
      });
    }

    host.querySelector('#pkPlayBtn').addEventListener('click', playAnimation);
  }

  render();

  return {
    setLanguage,
    setMode,
    destroy() {
      host.innerHTML = '';
    }
  };
}
