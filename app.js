import { MOLECULES } from './kimika-data.js';
import { mountConsult, openQuickConsultDrawer, closeQuickConsultDrawer, chemHTML, proseChemHTML } from './kontsultatu.js';
import { mountPeriodicProperties } from './periodikoak.js';

// Eduki didaktikoak, aplikazioaren logikatik bereizita. Adibide guztiak didaktikoak dira (EZ PAU OFIZIALAK).
const units = [
  {
    id:'mundu', number:'00', title:'Karbonoa gure inguruan', short:'Zer da kimika organikoa?',
    description:'Kimika organikoa eta eguneroko substantziak bereizten hasi.',
    accent:'mint', duration:'7–9 min', symbol:'molecule',
    slides:[
      {id:'sarrera',type:'intro',tag:'ABIAPUNTUA',title:'Kimika organikoa ez dago laborategian bakarrik',
       body:'Jaten dugun azukrea, erabiltzen dugun kotoia eta plastiko askoren molekulak karbonoan oinarrituta daude. Molekula horiek nola osatuta dauden ikertzen du, besteak beste, kimika organikoak.',
       note:'Gaur: zer den, zertarako den eta zergatik den berezia karbonoa.',visual:'everyday'},
      {id:'egunerokoa',type:'everyday',tag:'BEHATU',title:'Non dago karbonoa zure egunerokoan?',
       body:'Hautatu objektu bakoitza eta ikusi haren barruan aurki daitekeen karbonodun substantzia bat.',
       items:[
        {id:'sugar',title:'Azukrea',detail:'Sakarosa · C₁₂H₂₂O₁₁',why:'Elikagaietan aurkitzen dugun konposatu organikoa da.',icon:'cube'},
        {id:'cotton',title:'Kotoizko kamiseta',detail:'Zelulosa · (C₆H₁₀O₅)ₙ',why:'Kotoiaren osagai nagusia zelulosa da, karbonoz osatutako polimeroa.',icon:'shirt'},
        {id:'bottle',title:'Plastikozko botila',detail:'PET · (C₁₀H₈O₄)ₙ',why:'PET botila askotan erabiltzen den polimero organikoa da.',icon:'bottle'}
       ],note:'Objektu batek hainbat substantzia izan ditzake; hemen adibide adierazgarri bat aztertzen dugu.'},
      {id:'bereizi',type:'contrast',tag:'ULERTU',title:'Karbonoa izateak ez du beti «organikoa» esan nahi',
       body:'Bi molekulek karbonoa dute, baina konposatu-familia desberdinetakoak dira. Begiratu zer atomo eta lotura agertzen diren.',
       note:'CH₄: organikoa. CO₂: ez-organikoa. Sailkapena ez da soilik C zenbatzean oinarritzen.'},
      {id:'galdera1',type:'choice',tag:'PROBATU',title:'Zein da konposatu organikoa?',body:'Aukeratu hiru aukeren artean.',
       options:['Etanola (CH₃CH₂OH)','Karbono dioxidoa (CO₂)','Sodio kloruroa (NaCl)'],correct:0,
       success:'Bai! Etanola alkohol bat da, konposatu organikoa.',retry:'Begiratu taldeari: CO₂ oxido ez-organikoa da; NaCl gatz ez-organikoa.'},
      {id:'amaiera',type:'finish',tag:'LORTUTA',title:'Karbonoa gure inguruan dago',body:'Orain badakizu kimika organikoak zer aztertzen duen, eta zergatik ez den nahikoa C ikustea konposatua sailkatzeko.',
       points:['Konposatu organiko asko karbonoan oinarritzen dira.','Eguneroko objektuetan aurki ditzakegu.','CO₂ salbuespen ez-organiko arrunta da.']}
    ]
  },
  {
    id:'loturak', number:'01', title:'Atomoak eta loturak', short:'Zergatik C-k 4 lotura?',
    description:'Balentzia-elektroiak, lotura kobalenteak eta metanoaren egitura.',
    accent:'coral',duration:'8–10 min',symbol:'atom',
    slides:[
      {id:'sarrera',type:'intro',tag:'ABIAPUNTUA',title:'Zergatik egiten ditu karbonoak lau lotura?',
       body:'Erantzuna ez da «horrela delako». Atomoko elektroiak nola antolatuta dauden eta beste atomoekin nola partekatzen diren ulertu behar dugu.',
       note:'Helburua: 4 lotura-unitateak ulertzea, ez buruz ikastea.',visual:'atom'},
      {id:'eredua',type:'atom',tag:'AZTERTU',title:'Begiratu kanpoko elektroiak',
       body:'Karbonoak 6 elektroi ditu: 2 lehen geruzan eta 4 bigarrenean. Hidrogenoak elektroi bakarra du. Sakatu C eta H irudiak alderatzeko.',
       note:'Bohr-en eredu didaktiko sinplifikatua da, ez elektroien benetako ibilbideen irudia.'},
      {id:'partekatzea',type:'concept',tag:'ULERTU',title:'Lotura kobalentea = elektroiak partekatzea',
       body:'Karbonoak, normalean, lau lotura-unitate osatzen ditu kanpoko geruzan zortzikotea lortzeko joeran. Hidrogenoak lotura bat egiten du, bere lehen geruzan bi elektroi izateko.',
       note:'Lotura bakuna = partekatutako elektroi-bikote bat. Lotura bikoitzak bi bikote partekatzen ditu; hirukoitzak, hiru.',visual:'lewis'},
      {id:'metanoa',type:'bond',tag:'ERAIKI',title:'Eraiki metanoa lau urratsetan',body:'Erantsi hidrogenoak banan-banan karbonoari. Zenbat C–H lotura sortuko dituzu?',
       note:'CH₄-ren 2D eskema da; metanoaren benetako geometria tetraedrikoa da.'},
      {id:'galdera',type:'choice',tag:'EGIAZTATU',title:'Zenbat lotura-unitate ditu karbono honek?',body:'CH₂=CH₂ molekulako C bakoitza aztertu: C=C bikoitza eta bi C–H lotura bakun.',
       options:['3 lotura-unitate','4 lotura-unitate','5 lotura-unitate'],correct:1,
       success:'Zuzena: bikoitzak 2 balio du eta bi lotura bakunek beste 2. Guztira: 4.',retry:'Ez zenbatu marra mota bakarrik: C=C lotura bikoitzak 2 lotura-unitate dira.'},
      {id:'amaiera',type:'finish',tag:'LORTUTA',title:'Orain badakizu H-ak zergatik gehitzen diren',
       body:'Karbono bakoitzaren lau lotura-unitateak osatzea izango da formula erdi-garatuak eraikitzeko oinarria.',
       points:['C: 4 balentzia-elektroi, 4 lotura-unitate ohiko egituretan.','H: elektroi 1 eta lotura bakarra.','Bakuna = 1, bikoitza = 2, hirukoitza = 3.']}
    ]
  },
  {
    id:'kateak',number:'02',title:'Karbono-kateak',short:'Kateetatik formulak sortu',
    description:'Aurrizkiak, kate irekiak eta hidrogenoak osatzea.',
    accent:'lavender',duration:'8–10 min',symbol:'chain',
    slides:[
      {id:'sarrera',type:'intro',tag:'ABIAPUNTUA',title:'Hiru karbono berdinak; hiru molekula desberdin?',
       body:'Molekula organikoetan karbonoak bata bestearen ondoan lotu daitezke. Katearen luzera izenaren hasieran agertzen da: met-, et-, prop-, but-…',
       note:'Gaur kate ireki aseak erabiliko ditugu. Lotura anizkoitzak hurrengo eduki bereizietan landuko dira.',visual:'chain'},
      {id:'erroak',type:'roots',tag:'AZTERTU',title:'Katearen izena karbono kopurutik dator',body:'Sakatu erroak eta ikusi zenbat C dituen kate bakoitzak.',
       note:'Met- = 1, et- = 2, prop- = 3, but- = 4, pent- = 5 eta hex- = 6.'},
      {id:'propanoa',type:'concept',tag:'ULERTU',title:'Propanoaren hezurdura: C–C–C',
       body:'Karbono bakoitzak lau lotura-unitate behar ditu. Muturretako C bakoitzak C–C lotura bakarra du: 3 H falta zaizkio. Erdiko C-k bi C–C lotura ditu: 2 H falta zaizkio.',
       note:'Emaitza: CH₃–CH₂–CH₃; formula molekularra C₃H₈.',visual:'propane'},
      {id:'errogaldera',type:'choice',tag:'PROBATU',title:'Zenbat karbono ditu «butanoak»?',body:'Kontuan hartu izenaren erroa.',
       options:['2 karbono','3 karbono','4 karbono'],correct:2,
       success:'Primeran! «but-» = 4 karbono.',retry:'Pentsatu hurrenkeran: met- 1, et- 2, prop- 3, but- 4.'},
      {id:'hgaldera',type:'hydrogen',tag:'EGIAZTATU',title:'Osatu hiru karbonoko katea',body:'C–C–C kate irekian lotura guztiak bakunak badira, zenbat H behar ditugu?',
       options:['6 H','8 H','10 H'],correct:1,
       success:'Hori da: 3 + 2 + 3 = 8 H. Propanoa: CH₃–CH₂–CH₃.',retry:'C mutur bakoitzak 3 H behar ditu; erdiko C-k 2 H. Batu kantitateak.'},
      {id:'amaiera',type:'finish',tag:'LORTUTA',title:'Lehenengo formula erdi-garatua osatu duzu',
       body:'Orain karbono kopurua eta H bakoitzaren lekua uztar ditzakezu kate ase sinple batean.',
       points:['Erroa = kate nagusiko karbono kopurua.','Lotura bakun bakoitzak 1 lotura-unitate erabiltzen du.','H-ak amaieran gehitu eta balentziak egiaztatu.']}
    ]
  }
];

const futureRoadmap = [
 'Lotura bikoitzak eta hirukoitzak',
 'Kate nagusia eta zenbaketa',
 'Adarkadurak eta zikloak',
 'Alkoholak eta beste taldeak',
 'Izenetik formulara / formulatik izenera',
 'Funtzio-taldeen lehentasunak'
];

// Gidariaren ohar didaktiko laburrak. Ez dago kanpoko zerbitzurik.
const guideMoments = {
  'mundu:sarrera': {kind:'welcome',text:'Kaixo! Zientzia pixkanaka eraikiko dugu: lehenik begiratu, gero ulertu eta azkenik probatu.'},
  'mundu:bereizi': {kind:'adi',text:'Karbonoa izateak ez du beti esan nahi konposatu bat organikoa denik.'},
  'loturak:sarrera': {kind:'welcome',text:'Galdera ona dugu: zergatik ditu karbonoak normalean lau lotura-unitate? Ikus dezagun.'},
  'loturak:partekatzea': {kind:'remember',text:'Lotura bakunak bikote bat, bikoitzak bi eta hirukoitzak hiru elektroi-bikote partekatzen ditu.'},
  'loturak:metanoa': {kind:'important',text:'Erantsi H bana. Loturak marraztu ahala, C-ren lau lotura-unitateak osatuko dituzu.'},
  'kateak:sarrera': {kind:'welcome',text:'Orain kateak eraikiko ditugu. Karbono kopuruak izenaren hasiera ematen digu.'},
  'kateak:propanoa': {kind:'remember',text:'Katearen muturretan 3 H falta dira; erdiko karbonoan, 2 H. Hortik dator C₃H₈.'},
};
const guideTypes = {
  welcome: 'Ongi etorri!',
  remember: 'Gogoratu!',
  adi: 'Adi!',
  important: 'Garrantzitsua!',
  error: 'Pista',
  success: 'Primeran!',
  finish: 'Primeran!',
  help: 'Pista'
};

// ARIKETA DIDAKTIKOAK (EZ PAU OFIZIALAK).
// Molekulen ereduak egitura deterministetatik sortzen dira; ez dira ausazko izen arbitrarioak.
const roots=['','met','et','prop','but','pent','hex','hept','okt','non','dek','undek','dodek'];
const alkyl=['','metil','etil','propil','butil','pentil'];
const atoms=(n,order=()=>1,side={})=>{
 let out=[];
 for(let i=1;i<=n;i++){
  const prev=i===1?0:order(i-1),next=i===n?0:order(i),extra=side[i]?.bonds||0;
  const h=4-prev-next-extra;
  if(h<0)throw Error('Balentzia okerra: '+n+','+i);
  let frag='C'+(h>0?'H'+(h>1?h:''):'');
  if(side[i]?.prefix)frag=side[i].prefix+frag;
  if(side[i]?.suffix)frag+=side[i].suffix;
  out.push(frag);
 }
 return out.map((c,i)=>i?((order(i)===2?'=':order(i)===3?'≡':'–')+c):c).join('');
};
const make=(id,level,family,name,formula,reason,steps)=>({id,level,family,name,formula,reason,steps});
const pool=[];
// 1. maila: kate irekiak eta lotura mota bakarra.
for(let n=1;n<=10;n++)pool.push(make('alkane-'+n,1,'Alkanoak',roots[n]+'anoa',atoms(n),`${n} karbono; C–C lotura bakunak.`,[`«${roots[n]}-»: ${n} karbono.`,`Lotura bakunak ezarri katean.`,`H-ak osatu: ${atoms(n)}.`]));
for(const [type,symbol,suffix] of [['alkene',2,'enoa'],['alkyne',3,'inoa']])for(let n=2;n<=8;n++)for(let p=1;p<=Math.floor(n/2);p++){
 const formula=atoms(n,i=>i===p?symbol:1),name=n<=3?roots[n]+suffix:`${roots[n]}-${p}-${suffix}`;
 pool.push(make(`${type}-${n}-${p}`,1,type==='alkene'?'Alkenoak':'Alkinoak',name,formula,`${symbol===2?'Bikoitza':'Hirukoitza'} C${p} eta C${p+1} artean.`,[`Kate nagusian ${n} C daude.`,`C${p}–C${p+1} lotura ${symbol===2?'bikoitza':'hirukoitza'} jarri.`,`H-ak bete karbono bakoitzean: ${formula}.`]));
}
// 2. maila: funtzio-talde bakarreko kateak eta halogenoak.
for(let n=2;n<=8;n++)for(let p=1;p<=Math.floor((n+1)/2);p++){
 const formula=atoms(n,()=>1,{[p]:{bonds:1,prefix:p===1?'HO–':'',suffix:p!==1?'(OH)':''}}).replace(/^HO–CH2–/,'HO–CH2–');
 let correct=formula;
 if(p===1)correct=atoms(n,()=>1,{1:{bonds:1}}).replace(/^CH2/,'HO–CH2');
 const name=n===2?'etanola':`${roots[n]}an-${p}-ola`;
 pool.push(make(`alcohol-${n}-${p}`,2,'Alkoholak',name,correct,'Hidroxilo-talde nagusiari lekutzaile baxuena ematen zaio.',[`–OH alkoholaren funtzio-taldea da.`,`${n} karbonoko katean –OH C${p}-an dago.`,`C-ren balentzia osatu: ${correct}.`]));
}
for(let n=3;n<=8;n++)for(let p=2;p<=Math.floor((n+1)/2);p++){
 const formula=atoms(n,()=>1,{[p]:{bonds:2,suffix:'(=O)'}}),name=n===3?'propanona':`${roots[n]}an-${p}-ona`;
 pool.push(make(`ketone-${n}-${p}`,2,'Zetonak',name,formula,'C=O taldeko karbonoa katearen barruan dago.',[`Funtzio-talde nagusia karboniloa da (zetona).`,`Kateak ${n} C ditu eta C=O C${p}-an dago.`,`Idatzi: ${formula}.`]));
}
for(let n=1;n<=8;n++){
 const alkylPart=n===1?'H':atoms(n-1,()=>1,{[n-1]:{bonds:1}});
 const aldehyde=n===1?'H–CHO':alkylPart+'–CHO';
 const acid=n===1?'H–COOH':alkylPart+'–COOH';
 pool.push(make(`aldehyde-${n}`,2,'Aldehidoak',roots[n]+'anala',aldehyde,'–CHO taldeko karbonoa kate nagusiko C1 da.',[`–al atzizkiak aldehidoa adierazten du.`,`Karboniloaren C-a barne hartuta ${n} karbono daude.`,`Emaitza: ${aldehyde}.`]));
 pool.push(make(`acid-${n}`,2,'Azido karboxilikoak',`azido ${roots[n]}anoikoa`,acid,'–COOH taldeak C=O eta –OH ditu karbono berean.',[`Azido karboxilikoaren taldea: –COOH.`,`Karboxiloaren C-a ${n} karbonoen barruan kontatu.`,`Emaitza: ${acid}.`]));
}
// Halogenoak: Fluoroa, Kloroa, Bromoa, Iodoa
for(const hal of [
  {part:'fluoro',symbol:'F'},
  {part:'kloro',symbol:'Cl'},
  {part:'bromo',symbol:'Br'},
  {part:'iodo',symbol:'I'}
]) for(let n=1;n<=6;n++) for(let p=1;p<=Math.floor((n+1)/2);p++){
 const skeleton=atoms(n,()=>1,{[p]:{bonds:1,suffix:p!==1?`(${hal.symbol})`:''}});
 const formula=p===1?`${hal.symbol}–${skeleton}`:skeleton;
 const name=n<=2?`${hal.part}${roots[n]}anoa`:`${p}-${hal.part}${roots[n]}anoa`;
 pool.push(make(`${hal.part}-${n}-${p}`,2,'Halogenodunak',name,formula,`Halogenoak (${hal.symbol}) lotura bakarra egiten du.`,[`«${hal.part}-» halogenoa identifikatu.`,`${n} C-ko katean posizioa hartu.`,`C horren H bat ${hal.symbol}-rekin ordeztu: ${formula}.`]));
}
// Aminak eta Amidak
for(let n=1;n<=5;n++){
 const alkylPart=atoms(n,()=>1,{[n]:{bonds:1}});
 pool.push(make(`amine-${n}`,2,'Aminak',`${roots[n]}anamina`,`${alkylPart}–NH2`,'–NH2 taldeak amina adierazten du.',[`Amina taldea: –NH2.`,`${n} karbonoko katea.`,`Emaitza: ${alkylPart}–NH2.`]));
}
pool.push(make('amine-prop-2',2,'Aminak','propan-2-amina','CH3–CH(NH2)–CH3','–NH2 taldea erdiko karbonoan dago.',['3 karbonoko katea.','–NH2 taldea C2 posizioan jarri.','Emaitza: CH3–CH(NH2)–CH3.']));

for(let n=1;n<=5;n++){
 const alkylPart=n===1?'H':atoms(n-1,()=>1,{[n-1]:{bonds:1}});
 pool.push(make(`amide-${n}`,2,'Amidak',`${roots[n]}anamida`,`${alkylPart}–CONH2`,'–CONH2 taldeak amida funtzioa adierazten du.',[`Amida taldea: –CONH2.`,`Karboniloaren C-a barne ${n} C dira.`,`Emaitza: ${alkylPart}–CONH2.`]));
}

// Zikloalkanoak
pool.push(make('cycle-propane',1,'Zikloalkanoak','ziklopropanoa','C3H6','3 karbonoko eraztun itxia (triangelua).',['3 karbonoko katea itxi egiten da.','C-C lotura bakunak.','Formula molekularra: C3H6.']));
pool.push(make('cycle-butane',1,'Zikloalkanoak','ziklobutanoa','C4H8','4 karbonoko eraztun itxia (laukia).',['4 karbonoko eraztuna.','Formula molekularra: C4H8.']));
pool.push(make('cycle-pentane',1,'Zikloalkanoak','ziklopentanoa','C5H10','5 karbonoko eraztun itxia (pentagonoa).',['5 karbonoko eraztun asea.','Formula molekularra: C5H10.']));
pool.push(make('cycle-hexane',1,'Zikloalkanoak','ziklohexanoa','C6H12','6 karbonoko eraztun itxia (hexagonoa).',['6 karbonoko eraztun asea.','Formula molekularra: C6H12.']));
pool.push(make('cycle-methylcyclohexane',2,'Zikloalkanoak','metilziklohexanoa','C7H14','6 C-ko eraztuna eta metil adar bat.',['Ziklohexanoaren 6 C-ko eraztuna.','Metil (-CH3) adarra gehitu: C7H14 (C6H11–CH3).']));
pool.push(make('cycle-cyclohexanol',2,'Zikloalkanoak','ziklohexanola','C6H11–OH','Ziklohexanoari lotutako -OH taldea.',['Ziklohexanoaren eraztuna (6 C).','-OH hidroxilo taldea erpinean kokatu: C6H11–OH.']));
pool.push(make('cycle-dimethylcyclohexane',3,'Zikloalkanoak','1,2-dimetilziklohexanoa','C8H16','6 C-ko eraztuna eta bi metil adar 1 eta 2 posizioetan.',['Ziklohexano eraztuna.','Bi metil adar ondoko erpinetan: C8H16 (C6H10(CH3)2).']));

// Bentzenoa eta aromatikoak
pool.push(make('aromatic-benzene',2,'Aromatikoak','bentzenoa','C6H6','Sei karbonoko eraztun aromatikoa.',['Bentzenoaren eraztuna (6 C).','Lotura deslokalizatuak: C6H6.']));
pool.push(make('aromatic-toluene',2,'Aromatikoak','metilbentzenoa','C7H8','Bentzenoa eta metil taldea (toluenoa).',['Bentzenoaren eraztuna.','Metil adarra gehitu: C7H8 (C6H5–CH3).']));
pool.push(make('aromatic-chlorobenzene',2,'Aromatikoak','klorobentzenoa','C6H5–Cl','Bentzenoaren kloro-deribatua.',['Bentzenoaren eraztuna.','Kloro ordezkatzailea: C6H5–Cl (C6H5Cl).']));
pool.push(make('aromatic-bromobenzene',2,'Aromatikoak','bromobentzenoa','C6H5–Br','Bentzenoaren bromo-deribatua.',['Bentzenoaren eraztuna.','Bromo ordezkatzailea: C6H5–Br.']));
pool.push(make('aromatic-phenol',2,'Aromatikoak','fenola','C6H5–OH','Bentzenoari lotutako -OH hidroxilo taldea.',['Bentzenoaren eraztuna.','-OH taldea: C6H5–OH.']));
pool.push(make('aromatic-dimethylbenzene',3,'Aromatikoak','1,4-dimetilbentzenoa','C8H10','Bi metil talde 1 eta 4 aurrez aurreko posizioetan.',['Bentzenoaren eraztuna.','Bi metil talde 1 eta 4 posizioetan: C8H10 (C6H4(CH3)2).']));

// Adarkatuak eta konbinatuak
pool.push(make('branch-2-methylbutane',3,'Adarkatuak','2-metilbutanoa','CH3–CH(CH3)–CH2–CH3','4 C-ko kate nagusia eta metil adar bat C2-an.',['Kate nagusia butanoa da (4 C).','C2 posizioan -CH3 adarra jarri.','Emaitza: CH3–CH(CH3)–CH2–CH3.']));
pool.push(make('branch-23-dimethylbutane',3,'Adarkatuak','2,3-dimetilbutanoa','CH3–CH(CH3)–CH(CH3)–CH3','4 C-ko kate nagusia eta bi metil adar C2 eta C3-an.',['Kate nagusia butanoa da (4 C).','Bi metil adar C2 eta C3-an.','Emaitza: CH3–CH(CH3)–CH(CH3)–CH3.']));
pool.push(make('branch-2-methylpropanol',3,'Adarkatuak','2-metilpropan-1-ola','CH3–CH(CH3)–CH2–OH','3 C-ko alkohola eta metil adarra C2-an.',['Kate nagusia propanola da (3 C).','-OH C1-ean eta -CH3 C2-an.','Emaitza: CH3–CH(CH3)–CH2–OH.']));
pool.push(make('branch-3-methylpentane',3,'Adarkatuak','3-metilpentanoa','CH3–CH2–CH(CH3)–CH2–CH3','5 C-ko kate nagusia eta metil adar bat erdian.',['Kate nagusia pentanoa da (5 C).','C3 karbonoan -CH3 adarra kokatu.','Emaitza: CH3–CH2–CH(CH3)–CH2–CH3.']));
// 3. maila: esterrak + adarrak/funtzio konbinatuak, egitura egiaztatuetatik.
for(let a=1;a<=5;a++)for(let b=1;b<=4;b++){
 const acyl=a===1?'H':atoms(a-1,()=>1,{[a-1]:{bonds:1}});const alcohol=atoms(b,()=>1,{1:{bonds:1}});
 const formula=`${acyl}–C(=O)–O–${alcohol}`;
 const name=`${alkyl[b]} ${roots[a]}anoatoa`;
 pool.push(make(`ester-${a}-${b}`,3,'Esterrak',name,formula,'Esterreko –C(=O)–O– bi zatitan banatu behar da.',[`«${roots[a]}anoato» azidoaren aldea da (${a} C, karboniloa barne).`,`«${alkyl[b]}» oxigenoari lotutako zatia da (${b} C).`,`Lotu bi aldeak –C(=O)–O– bidez: ${formula}.`]));
}
for(const [id,mol] of Object.entries(MOLECULES)){
 if(pool.some(q=>q.name===mol.name))continue;
 const branches=mol.atoms.filter(x=>x.role==='branch').length;
 const lvl=branches||mol.atoms.some(x=>x.role==='secondary')?3:mol.name.includes('metil ')?3:2;
 pool.push(make(`verified-${id}`,lvl,'Egitura konbinatuak',mol.name,mol.condensed,`Jatorrizko gida: ${mol.molecular}; atomoen balentziak egiaztatutako egitura.`,[
   'Konposatuaren izenean bilatu kate nagusia eta funtzio-taldea.',
   'Lotura anizkoitzak, talde nagusia eta ordezkatzaileak kokatu.',
   `Hidrogenoak osatu eta egiaztatu: ${mol.condensed} (${mol.molecular}).`
 ]));
}
const practicePool=pool;
const practiceLevels=[
 {id:1,title:'01 · Oinarriak',desc:'Kate soilak eta lotura anizkoitzak.','tip':'met-, et-, prop- … / -anoa, -enoa, -inoa'},
 {id:2,title:'02 · Funtzio-taldeak',desc:'Alkoholak, zetonak, aldehidoak, azidoak eta halogenoak.',tip:'Taldearen posizioa aztertu.'},
 {id:3,title:'03 · Konbinazioak',desc:'Esterrak, adarkadurak eta funtzio konbinatuak.',tip:'Kate nagusia, posizioak eta bi aldeak.'}
];

(function(){const clean=s=>String(s??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[₀-₉]/g,n=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(n)).replace(/[–—−]/g,'-').replace(/\s+/g,'').replace(/[·.]/g,'');
const cleanFormula=s=>clean(s)
  .replace(/c\(=o\)/g,'co')
  .replace(/\(oh\)/g,'oh')
  .replace(/hooc/g,'cooh')
  .replace(/ohc/g,'cho')
  .replace(/h2noc/g,'conh2')
  .replace(/h2n/g,'nh2')
  .replace(/o2n/g,'no2')
  .replace(/\(cl\)/g,'cl')
  .replace(/\(br\)/g,'br')
  .replace(/\(f\)/g,'f')
  .replace(/\(i\)/g,'i')
  .replace(/\(ch3\)/g,'ch3')
  .replace(/\(ch2ch3\)/g,'ch2ch3')
  .replace(/\(c2h5\)/g,'ch2ch3')
  .replace(/\(nh2\)/g,'nh2')
  .replace(/\(no2\)/g,'no2')
  .replace(/-/g,'');
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STORAGE='kimika-praktikatu-3-2';
const directions=[{id:'forward',name:'Izenetik formulara',short:'Izena → formula'},{id:'reverse',name:'Formulatik izenera',short:'Formula → izena'}];
const read=()=>{try{const s=JSON.parse(localStorage.getItem(STORAGE));if(s&&Array.isArray(s.seen))return s}catch{}return {seen:[],correct:0,total:0}};
const write=s=>{try{localStorage.setItem(STORAGE,JSON.stringify(s))}catch{}};
let instances=new WeakMap();

// Helper: Convert interactive cycle state to formula string
function cycleBuilderToFormula(b) {
  const type = b.cycleType || 'hexane';
  const grps = Object.entries(b.cycleGroups || {}).filter(([_, g]) => g && g !== 'none');
  
  if (type === 'benzene') {
    if (grps.length === 0) return 'C6H6';
    if (grps.length === 1) {
      const g = grps[0][1];
      if (g === 'CH3') return 'C6H5–CH3';
      if (g === 'OH') return 'C6H5–OH';
      if (g === 'Cl') return 'C6H5–Cl';
      if (g === 'Br') return 'C6H5–Br';
      if (g === 'F') return 'C6H5–F';
      if (g === 'I') return 'C6H5–I';
      if (g === 'NH2') return 'C6H5–NH2';
      return `C6H5–${g}`;
    }
    return `C6H${Math.max(0, 6 - grps.length)}` + grps.map(([_, g]) => `(${g})`).join('');
  }

  const n = type === 'propane' ? 3 : type === 'butane' ? 4 : type === 'pentane' ? 5 : 6;
  const totalH = 2 * n;
  if (grps.length === 0) return `C${n}H${totalH}`;
  if (grps.length === 1) {
    const g = grps[0][1];
    return `C${n}H${totalH - 1}–${g}`;
  }
  return `C${n}H${Math.max(0, totalH - grps.length)}` + grps.map(([_, g]) => `(${g})`).join('');
}

// Helper: Convert interactive builder state to semi-developed formula string
function builderToFormula(b) {
  if (!b) return '';
  if (b.mode === 'cycle') {
    return cycleBuilderToFormula(b);
  }
  const n = Math.max(1, Math.min(8, b.carbons || 3));
  if (n === 1) {
    const grp = b.groups && b.groups[1];
    if (!grp) return 'CH4';
    if (grp === 'OH') return 'CH3–OH';
    if (grp === '=O' || grp === 'CHO') return 'H–CHO';
    if (grp === 'COOH') return 'H–COOH';
    if (grp === 'F') return 'CH3–F';
    if (grp === 'Cl') return 'CH3–Cl';
    if (grp === 'Br') return 'CH3–Br';
    if (grp === 'I') return 'CH3–I';
    if (grp === 'NH2') return 'CH3–NH2';
    if (grp === 'CONH2') return 'H–CONH2';
    if (grp === 'NO2') return 'CH3–NO2';
    if (grp === 'CH3') return 'CH3–CH3';
    return 'CH4';
  }
  const frags = [];
  for (let i = 1; i <= n; i++) {
    const prev = i === 1 ? 0 : (b.bonds[i - 2] || 1);
    const next = i === n ? 0 : (b.bonds[i - 1] || 1);
    const grp = (b.groups && b.groups[i]) || '';
    if (grp === 'COOH') {
      frags.push(i === 1 ? 'HOOC' : 'COOH');
      continue;
    }
    if (grp === 'CHO') {
      frags.push(i === 1 ? 'OHC' : 'CHO');
      continue;
    }
    if (grp === 'CONH2') {
      frags.push(i === 1 ? 'H2NOC' : 'CONH2');
      continue;
    }
    let extra = 0;
    let sfx = '';
    let pfx = '';
    if (grp === 'OH') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'HO–';
      else sfx = '(OH)';
    } else if (grp === '=O') {
      extra = 2;
      if (i === 1 && prev === 0) {
        frags.push('OHC');
        continue;
      } else if (i === n && next === 0) {
        frags.push('CHO');
        continue;
      } else {
        sfx = '(=O)';
      }
    } else if (grp === 'F') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'F–';
      else sfx = '(F)';
    } else if (grp === 'Cl') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'Cl–';
      else sfx = '(Cl)';
    } else if (grp === 'Br') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'Br–';
      else sfx = '(Br)';
    } else if (grp === 'I') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'I–';
      else sfx = '(I)';
    } else if (grp === 'CH3') {
      extra = 1;
      sfx = '(CH3)';
    } else if (grp === 'CH2CH3') {
      extra = 1;
      sfx = '(CH2CH3)';
    } else if (grp === 'NH2') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'H2N–';
      else sfx = '(NH2)';
    } else if (grp === 'NO2') {
      extra = 1;
      if (i === 1 && prev === 0) pfx = 'O2N–';
      else sfx = '(NO2)';
    }
    let h = 4 - prev - next - extra;
    if (h < 0) h = 0;
    const hStr = h > 0 ? ('H' + (h > 1 ? h : '')) : '';
    frags.push(pfx + 'C' + hStr + sfx);
  }
  let res = '';
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const order = b.bonds[i - 1] || 1;
      res += (order === 2 ? '=' : order === 3 ? '≡' : '–');
    }
    res += frags[i];
  }
  return res.replace(/–+HO–/g, '–O–').replace(/–+/g, '–');
}

// Helper: Convert typed formula back to builder state (for smooth mode sync)
function parseFormulaToBuilder(str) {
  if (!str || typeof str !== 'string') return null;
  const cleanStr = str.replace(/[–—−]/g, '-').replace(/\s+/g, '');
  const tokens = cleanStr.split(/(-|=|≡)/).filter(Boolean);
  const carbonFrags = [];
  const bonds = [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok === '-' || tok === '=' || tok === '≡') {
      bonds.push(tok === '=' ? 2 : tok === '≡' ? 3 : 1);
    } else {
      carbonFrags.push(tok);
    }
  }
  const n = carbonFrags.length;
  if (n < 1 || n > 8) return null;
  const groups = {};
  for (let i = 0; i < n; i++) {
    const f = carbonFrags[i];
    if (f.includes('COOH')) groups[i + 1] = 'COOH';
    else if (f.includes('CONH2')) groups[i + 1] = 'CONH2';
    else if (f.includes('(OH)') || f.startsWith('HO') || f.endsWith('OH')) groups[i + 1] = 'OH';
    else if (f.includes('(=O)')) groups[i + 1] = '=O';
    else if (f.includes('CHO') || f.startsWith('OHC')) groups[i + 1] = 'CHO';
    else if (f.includes('(F)') || f.startsWith('F')) groups[i + 1] = 'F';
    else if (f.includes('(Cl)') || f.startsWith('Cl')) groups[i + 1] = 'Cl';
    else if (f.includes('(Br)') || f.startsWith('Br')) groups[i + 1] = 'Br';
    else if (f.includes('(I)') || f.startsWith('I')) groups[i + 1] = 'I';
    else if (f.includes('(NH2)') || f.startsWith('H2N') || f.endsWith('NH2')) groups[i + 1] = 'NH2';
    else if (f.includes('(NO2)') || f.startsWith('O2N')) groups[i + 1] = 'NO2';
    else if (f.includes('(CH2CH3)') || f.includes('(C2H5)')) groups[i + 1] = 'CH2CH3';
    else if (f.includes('(CH3)')) groups[i + 1] = 'CH3';
  }
  while (bonds.length < n - 1) bonds.push(1);
  bonds.length = Math.max(0, n - 1);
  return { mode: 'linear', carbons: n, bonds, groups, cycleType: 'hexane', cycleGroups: {}, activePicker: null };
}

function groupBadgeName(grp) {
  if (grp === 'OH') return '–OH';
  if (grp === '=O') return '=O';
  if (grp === 'CHO') return '–CHO';
  if (grp === 'COOH') return '–COOH';
  if (grp === 'F') return '–F';
  if (grp === 'Cl') return '–Cl';
  if (grp === 'Br') return '–Br';
  if (grp === 'I') return '–I';
  if (grp === 'CH3') return '–CH₃';
  if (grp === 'CH2CH3' || grp === 'C2H5') return '–CH₂CH₃';
  if (grp === 'NH2') return '–NH₂';
  if (grp === 'CONH2') return '–CONH₂';
  if (grp === 'NO2') return '–NO₂';
  return grp;
}

function builderStageHTML(b, disabled) {
  const n = b.carbons;
  let html = '<div class="builder-chain-row">';
  for (let i = 1; i <= n; i++) {
    const prev = i === 1 ? 0 : (b.bonds[i - 2] || 1);
    const next = i === n ? 0 : (b.bonds[i - 1] || 1);
    const grp = (b.groups && b.groups[i]) || null;
    let grpBonds = 0;
    if (grp === 'OH' || grp === 'F' || grp === 'Cl' || grp === 'Br' || grp === 'I' || grp === 'CH3' || grp === 'CH2CH3' || grp === 'NH2' || grp === 'NO2') grpBonds = 1;
    else if (grp === '=O') grpBonds = 2;
    else if (grp === 'CHO' || grp === 'COOH' || grp === 'CONH2') grpBonds = 3;

    let h = 4 - prev - next - grpBonds;
    if (h < 0) h = 0;

    let cFrag = 'C';
    if (grp === 'COOH') cFrag = (i === 1 ? 'HOOC' : 'COOH');
    else if (grp === 'CHO') cFrag = (i === 1 ? 'OHC' : 'CHO');
    else if (grp === 'CONH2') cFrag = (i === 1 ? 'H2NOC' : 'CONH2');
    else if (grp === '=O' && (i === 1 || i === n)) cFrag = (i === 1 ? 'OHC' : 'CHO');
    else {
      cFrag = 'C' + (h > 0 ? ('H' + (h > 1 ? `<sub>${h}</sub>` : '')) : '');
    }

    // Carbon Column (clean chemical drawing: NO C1, NO 4/4)
    html += `<div class="builder-col" data-drop-zone="carbon" data-drop-idx="${i}" title="${disabled?'':`Karbonoa (arrastratu taldea hona edo sakatu +)`}">
      <div class="builder-group-slot">
        ${grp ? `
          <div class="builder-group-node" ${disabled ? '' : `draggable="true" data-drag-type="group" data-drag-val="${grp}" data-drag-from="${i}"`} title="${disabled?'':`Arrastratu beste C batera edo kendu`}">
            <span class="builder-group-tag">${safe(groupBadgeName(grp))}</span>
            ${!disabled ? `<button type="button" class="builder-group-del" data-builder-del-group="${i}" title="Kendu taldea">×</button>` : ''}
          </div>
          <div class="builder-group-wire"></div>
        ` : `
          ${!disabled ? `<button type="button" class="builder-group-add" data-builder-pick-group="${i}" title="Gehitu taldea">+</button>` : ''}
        `}
      </div>
      <div class="builder-c-box ${grp ? 'has-group' : ''}">
        <span class="builder-c-sym chem">${cFrag}</span>
      </div>
    </div>`;

    // Bond Column (clean bond connector: NO bond type text badge)
    if (i < n) {
      const order = b.bonds[i - 1] || 1;
      html += `<div class="builder-bond-col" data-drop-zone="bond" data-drop-idx="${i}">
        <button type="button" class="builder-bond-btn order-${order}" data-builder-cycle-bond="${i}" ${disabled ? 'disabled' : ''} title="${disabled?'':`Lotura aldatu (sakatu edo arrastratu)`}">
          <span class="builder-bond-graphic">
            ${order === 1 ? `<span class="bond-stripe"></span>` : ''}
            ${order === 2 ? `<span class="bond-stripe"></span><span class="bond-stripe"></span>` : ''}
            ${order === 3 ? `<span class="bond-stripe"></span><span class="bond-stripe"></span><span class="bond-stripe"></span>` : ''}
          </span>
        </button>
      </div>`;
    }
  }
  html += '</div>';
  return html;
}

function builderCycleStageHTML(b, disabled) {
  const type = b.cycleType || 'hexane';
  const isBenzene = type === 'benzene';
  const n = type === 'propane' ? 3 : type === 'butane' ? 4 : type === 'pentane' ? 5 : 6;
  const cx = 190, cy = 145, R = n <= 4 ? 66 : 76;

  const points = [];
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    points.push({
      idx: i + 1,
      a,
      x: cx + R * Math.cos(a),
      y: cy + R * Math.sin(a),
      bx: cx + (R + 46) * Math.cos(a),
      by: cy + (R + 46) * Math.sin(a)
    });
  }

  let edges = '';
  for (let i = 0; i < n; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    edges += `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="var(--chem-chain-stroke, #2D8662)" stroke-width="4.2" stroke-linecap="round"/>`;
  }

  let innerCore = '';
  if (isBenzene) {
    innerCore = `<circle cx="${cx}" cy="${cy}" r="${(R * 0.58).toFixed(1)}" fill="none" stroke="var(--chem-multiple-stroke, #7B4EC2)" stroke-width="3" stroke-linecap="round"/>`;
  }

  let vertices = '';
  for (const pt of points) {
    const grp = (b.cycleGroups && b.cycleGroups[pt.idx]) || null;
    if (grp) {
      vertices += `<line x1="${pt.x.toFixed(1)}" y1="${pt.y.toFixed(1)}" x2="${pt.bx.toFixed(1)}" y2="${pt.by.toFixed(1)}" stroke="var(--chem-function-stroke, #D19110)" stroke-width="3.2" stroke-linecap="round"/>`;
      vertices += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="7.5" fill="#196144" stroke="#FFFFFF" stroke-width="1.8"/>`;
      vertices += `<foreignObject x="${(pt.bx - 40).toFixed(1)}" y="${(pt.by - 18).toFixed(1)}" width="80" height="36" style="overflow:visible">
        <div class="builder-group-node cycle-node" ${disabled ? '' : `draggable="true" data-drag-type="group" data-drag-val="${grp}" data-drag-from="${pt.idx}"`} title="${disabled ? '' : 'Arrastratu edo kendu'}">
          <span class="builder-group-tag">${safe(groupBadgeName(grp))}</span>
          ${!disabled ? `<button type="button" class="builder-group-del" data-builder-del-cycle-group="${pt.idx}" title="Kendu taldea">×</button>` : ''}
        </div>
      </foreignObject>`;
    } else {
      vertices += `<g class="cycle-vertex-anchor" data-drop-zone="cycle-vertex" data-drop-idx="${pt.idx}" title="${disabled ? '' : 'Erpina: arrastratu taldea hona edo sakatu +'}">
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" class="cycle-anchor-halo" />
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6" fill="#2D8662" stroke="#FFFFFF" stroke-width="1.5" />
        ${!disabled ? `
          <foreignObject x="${(pt.x + 16 * Math.cos(pt.a) - 12).toFixed(1)}" y="${(pt.y + 16 * Math.sin(pt.a) - 12).toFixed(1)}" width="24" height="24" style="overflow:visible">
            <button type="button" class="builder-group-add mini" data-builder-pick-cycle-group="${pt.idx}" title="Gehitu taldea">+</button>
          </foreignObject>
        ` : ''}
      </g>`;
    }
  }

  return `<div class="builder-cycle-stage">
    <svg class="builder-cycle-svg" viewBox="0 0 380 290" role="img" aria-label="Eraztunaren marrazkia">
      ${edges}
      ${innerCore}
      ${vertices}
    </svg>
  </div>`;
}

function builderTrayHTML(disabled, selectedToken, isCycle) {
  const isSel = (type, val) => (selectedToken && selectedToken.type === type && selectedToken.val === String(val)) ? 'is-selected' : '';
  return `<div class="builder-tray" aria-label="Talde eta loturen erretilua">
    <div class="builder-tray-section">
      <span class="builder-tray-label">
        <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="1.5"/><circle cx="4" cy="8" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="12" r="1.5"/></svg>
        TALDEAK ETA ADARRAK (Arrastratu karbonoetara edo sakatu):
      </span>
      <div class="builder-tray-tokens">
        <div class="builder-token ${isSel('group','OH')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="OH" title="–OH (Alkohola)">
          <span class="token-chem chem">–OH</span>
          <span class="token-desc">Alkohola</span>
        </div>
        <div class="builder-token ${isSel('group','=O')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="=O" title="=O (Karboniloa)">
          <span class="token-chem chem">=O</span>
          <span class="token-desc">Zetona</span>
        </div>
        <div class="builder-token ${isSel('group','CHO')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="CHO" title="–CHO (Aldehidoa)">
          <span class="token-chem chem">–CHO</span>
          <span class="token-desc">Aldehidoa</span>
        </div>
        <div class="builder-token ${isSel('group','COOH')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="COOH" title="–COOH (Azidoa)">
          <span class="token-chem chem">–COOH</span>
          <span class="token-desc">Azidoa</span>
        </div>
        <div class="builder-token ${isSel('group','F')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="F" title="–F (Fluoroa)">
          <span class="token-chem chem">–F</span>
          <span class="token-desc">Fluoroa</span>
        </div>
        <div class="builder-token ${isSel('group','Cl')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="Cl" title="–Cl (Kloroa)">
          <span class="token-chem chem">–Cl</span>
          <span class="token-desc">Kloroa</span>
        </div>
        <div class="builder-token ${isSel('group','Br')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="Br" title="–Br (Bromoa)">
          <span class="token-chem chem">–Br</span>
          <span class="token-desc">Bromoa</span>
        </div>
        <div class="builder-token ${isSel('group','I')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="I" title="–I (Iodoa)">
          <span class="token-chem chem">–I</span>
          <span class="token-desc">Iodoa</span>
        </div>
        <div class="builder-token ${isSel('group','CH3')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="CH3" title="–CH₃ (Metila)">
          <span class="token-chem chem">–CH₃</span>
          <span class="token-desc">Metila</span>
        </div>
        <div class="builder-token ${isSel('group','CH2CH3')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="CH2CH3" title="–CH₂CH₃ (Etila)">
          <span class="token-chem chem">–CH₂CH₃</span>
          <span class="token-desc">Etila</span>
        </div>
        <div class="builder-token ${isSel('group','NH2')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="NH2" title="–NH₂ (Amina)">
          <span class="token-chem chem">–NH₂</span>
          <span class="token-desc">Amina</span>
        </div>
        <div class="builder-token ${isSel('group','CONH2')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="CONH2" title="–CONH₂ (Amida)">
          <span class="token-chem chem">–CONH₂</span>
          <span class="token-desc">Amida</span>
        </div>
        <div class="builder-token ${isSel('group','NO2')}" ${disabled?'':'draggable="true"'} data-drag-type="group" data-drag-val="NO2" title="–NO₂ (Nitro)">
          <span class="token-chem chem">–NO₂</span>
          <span class="token-desc">Nitro</span>
        </div>
      </div>
    </div>
    ${!isCycle ? `
      <div class="builder-tray-section">
        <span class="builder-tray-label">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="1.5"/><circle cx="4" cy="8" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="12" r="1.5"/></svg>
          LOTURAK (Arrastratu karbonoen arteko loturara edo sakatu):
        </span>
        <div class="builder-tray-tokens">
          <div class="builder-token ${isSel('bond','1')}" ${disabled?'':'draggable="true"'} data-drag-type="bond" data-drag-val="1" title="Lotura bakuna (—)">
            <span class="token-bond-lines single"><span class="bond-stripe"></span></span>
            <span class="token-desc">1 Bakuna</span>
          </div>
          <div class="builder-token ${isSel('bond','2')}" ${disabled?'':'draggable="true"'} data-drag-type="bond" data-drag-val="2" title="Lotura bikoitza (=)">
            <span class="token-bond-lines double"><span class="bond-stripe"></span><span class="bond-stripe"></span></span>
            <span class="token-desc">2 Bikoitza</span>
          </div>
          <div class="builder-token ${isSel('bond','3')}" ${disabled?'':'draggable="true"'} data-drag-type="bond" data-drag-val="3" title="Lotura hirukoitza (≡)">
            <span class="token-bond-lines triple"><span class="bond-stripe"></span><span class="bond-stripe"></span><span class="bond-stripe"></span></span>
            <span class="token-desc">3 Hirukoitza</span>
          </div>
        </div>
      </div>
    ` : ''}
  </div>`;
}

function builderPickerHTML(targetC, isCycle) {
  const prefix = isCycle ? 'cycle:' : '';
  const item = (grp, badge, name) => `
    <button type="button" class="picker-item" data-builder-assign-group="${prefix}${targetC}:${grp}">
      <span class="picker-chem chem">${badge}</span>
      <span class="picker-name">${name}</span>
    </button>
  `;
  return `<div class="builder-picker-overlay" data-builder-close-picker>
    <div class="builder-picker-dialog">
      <div class="builder-picker-head">
        <strong>Aukeratu taldea ${isCycle ? `(${targetC}. erpina)` : ''}:</strong>
        <button type="button" class="builder-picker-close" data-builder-close-picker title="Itxi">×</button>
      </div>
      <div class="builder-picker-scroll">
        <div class="picker-section-label">Oxigenodunak</div>
        <div class="builder-picker-grid">
          ${item('OH', '–OH', 'Alkohola (-ola)')}
          ${item('=O', '=O', 'Karboniloa (zetona)')}
          ${item('CHO', '–CHO', 'Aldehidoa (-ala)')}
          ${item('COOH', '–COOH', 'Azidoa (-oikoa)')}
        </div>
        <div class="picker-section-label">Halogenoak</div>
        <div class="builder-picker-grid">
          ${item('F', '–F', 'Fluoroa')}
          ${item('Cl', '–Cl', 'Kloroa')}
          ${item('Br', '–Br', 'Bromoa')}
          ${item('I', '–I', 'Iodoa')}
        </div>
        <div class="picker-section-label">Adarkadurak eta Nitrogenodunak</div>
        <div class="builder-picker-grid">
          ${item('CH3', '–CH₃', 'Metil adarra')}
          ${item('CH2CH3', '–CH₂CH₃', 'Etil adarra')}
          ${item('NH2', '–NH₂', 'Amina (-amina)')}
          ${item('CONH2', '–CONH₂', 'Amida (-amida)')}
          ${item('NO2', '–NO₂', 'Nitro taldea')}
          ${item('none', '∅', 'Hutsik / Kendu')}
        </div>
      </div>
    </div>
  </div>`;
}

function choose(state){
 const seen=new Set(state.saved.seen),unseen=practicePool.filter(q=>q.level===state.level&&!seen.has(`${state.direction}:${q.id}`));
 if(!unseen.length){state.current=null;state.result=null;state.showSteps=false;return;}
 state.current=unseen[Math.floor(Math.random()*unseen.length)];
 state.result=null;
 state.showSteps=false;
 state.inputMode = state.inputMode || 'draw';
 state.builder = {
   mode: 'linear',
   carbons: 3,
   bonds: [1, 1],
   groups: {},
   cycleType: 'hexane',
   cycleGroups: {},
   activePicker: null,
   selectedToken: null
 };
 if(state.direction === 'forward' && state.inputMode === 'draw'){
   state.answer = builderToFormula(state.builder);
 } else {
   state.answer = '';
 }
}

function feedbackHTML(state){const q=state.current;if(!q||!state.result)return '';
 return `<div class="practice-feedback ${state.result.correct?'yes':'no'}" role="status"><div class="practice-feedback-symbol">${state.result.correct?'✓':'!'}</div><div><h3>${state.result.correct?'Oso ondo!':'Azter dezagun.'}</h3><p>${state.result.correct?'Erantzuna zuzena da.':`Erantzun egokia: <strong class="chem">${state.direction==='forward'?chemHTML(q.formula):safe(q.name)}</strong>`}</p><p>${proseChemHTML(q.reason)}</p></div></div>
 <div class="practice-result-actions"><button type="button" class="secondary-action" data-practice-explain>${state.showSteps?'Ezkutatu azalpena':'Ikusi pausoz pauso'}</button><button type="button" class="main-action" data-practice-next>Beste ariketa bat →</button></div>
 ${state.showSteps?`<ol class="practice-steps">${q.steps.map((s,i)=>`<li><span>${i+1}</span><div>${proseChemHTML(s)}</div></li>`).join('')}</ol>`:''}`;
}

function render(host){let s=instances.get(host);if(!s)return;
 const remaining=practicePool.filter(q=>q.level===s.level&&!s.saved.seen.includes(`${s.direction}:${q.id}`)).length;
 const isForward = s.direction === 'forward';
 const computedFormula = isForward ? builderToFormula(s.builder) : '';

 host.innerHTML=`<header class="practice-header"><div><span class="overline">KIMIKA · ARIKETA DIDAKTIKOAK</span><h1>Ariketak</h1><p>Zure erritmoan. Aukeratu maila eta noranzkoa; ariketa desberdinak agertuko dira.</p></div><div class="practice-counter"><strong>${s.saved.total}</strong><span>egindako ariketa</span></div></header>
 <div class="practice-directions" role="group" aria-label="Ariketaren noranzkoa">${directions.map(d=>`<button type="button" data-practice-direction="${d.id}" aria-pressed="${s.direction===d.id}">${d.name}</button>`).join('')}</div>
 <div class="practice-levels">${practiceLevels.map(l=>`<button type="button" class="practice-level" data-practice-level="${l.id}" aria-pressed="${s.level===l.id}"><small>MAILA ${l.id}</small><strong>${safe(l.title)}</strong><span>${safe(l.desc)}</span><em>${practicePool.filter(q=>q.level===l.id&&!s.saved.seen.includes(`${s.direction}:${q.id}`)).length} egiteko</em></button>`).join('')}</div>
 <section class="practice-card" aria-live="polite">${s.current?`
  <div class="practice-item-head">
    <span class="practice-category">${isForward?'Izena → Formula':'Formula → Izena'}</span>
    <span class="practice-remaining">Maila honetako ${remaining} ariketa berri</span>
  </div>
  <div class="practice-prompt-label">${isForward?'FORMULA ERDI-GARATUA IDATZI EDO MARRAZTU':'KONPOSATUAREN IZENA IDATZI'}</div>
  <div class="practice-prompt"><span class="chem">${isForward?safe(s.current.name):chemHTML(s.current.formula)}</span></div>

  ${isForward ? `
    <div class="practice-mode-tabs" role="tablist" aria-label="Erantzuteko metodoa">
      <button type="button" class="practice-mode-tab ${s.inputMode==='draw'?'active':''}" data-practice-mode="draw">
        <span class="mode-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><line x1="9" y1="12" x2="15" y2="12"/></svg>
        </span>
        <span>Marraztu loturak</span>
      </button>
      <button type="button" class="practice-mode-tab ${s.inputMode==='write'?'active':''}" data-practice-mode="write">
        <span class="mode-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </span>
        <span>Idatzi testuz</span>
      </button>
    </div>
  ` : ''}

  ${(isForward && s.inputMode === 'draw') ? `
    <div class="builder-wrap">
      <div class="builder-top-bar">
        <div class="builder-structure-bar">
          <div class="builder-kind-tabs" role="tablist" aria-label="Egitura mota">
            <button type="button" class="builder-kind-tab ${s.builder.mode!=='cycle'?'active':''}" data-builder-set-mode="linear" ${s.result?'disabled':''}>Kate irekia</button>
            <button type="button" class="builder-kind-tab ${s.builder.mode==='cycle'?'active':''}" data-builder-set-mode="cycle" ${s.result?'disabled':''}>Zikloa / Bentzenoa</button>
          </div>

          ${s.builder.mode === 'cycle' ? `
            <div class="builder-cycle-chips">
              <button type="button" class="builder-c-chip ${s.builder.cycleType==='propane'?'active':''}" data-builder-cycle-set="propane" ${s.result?'disabled':''}>3C (Δ)</button>
              <button type="button" class="builder-c-chip ${s.builder.cycleType==='butane'?'active':''}" data-builder-cycle-set="butane" ${s.result?'disabled':''}>4C (□)</button>
              <button type="button" class="builder-c-chip ${s.builder.cycleType==='pentane'?'active':''}" data-builder-cycle-set="pentane" ${s.result?'disabled':''}>5C (⬠)</button>
              <button type="button" class="builder-c-chip ${s.builder.cycleType==='hexane'?'active':''}" data-builder-cycle-set="hexane" ${s.result?'disabled':''}>6C (⬡)</button>
              <button type="button" class="builder-c-chip ${s.builder.cycleType==='benzene'?'active':''}" data-builder-cycle-set="benzene" ${s.result?'disabled':''}>Bentzenoa (⌬)</button>
            </div>
          ` : `
            <div class="builder-chain-actions">
              <div class="builder-c-stepper">
                <button type="button" class="builder-stepper-btn" data-builder-c-delta="-1" ${s.builder.carbons<=1 || s.result?'disabled':''} title="Kendu karbono bat">– Kendu C</button>
                <span class="builder-stepper-count">${s.builder.carbons} C</span>
                <button type="button" class="builder-stepper-btn" data-builder-c-delta="1" ${s.builder.carbons>=8 || s.result?'disabled':''} title="Gehitu karbono bat">+ Gehitu C</button>
              </div>
              <div class="builder-c-chips">
                ${[1,2,3,4,5,6,7,8].map(n=>`<button type="button" class="builder-c-chip ${s.builder.carbons===n?'active':''}" data-builder-c-set="${n}" ${s.result?'disabled':''}>${n}C</button>`).join('')}
              </div>
            </div>
          `}
        </div>
      </div>

      ${builderTrayHTML(!!s.result, s.builder.selectedToken, s.builder.mode === 'cycle')}

      <div class="builder-board" tabindex="0" aria-label="Loturen marrazketa-mihisea">
        <div class="builder-chain-stage">
          ${s.builder.mode === 'cycle' ? builderCycleStageHTML(s.builder, !!s.result) : builderStageHTML(s.builder, !!s.result)}
        </div>
      </div>
      ${s.builder.activePicker && !s.result ? builderPickerHTML(s.builder.activePicker.cNum, s.builder.activePicker.isCycle) : ''}

      <div class="builder-formula-strip">
        <span class="builder-formula-kicker">Marraztutako formula:</span>
        <span class="builder-formula-val chem">${chemHTML(computedFormula || '—')}</span>
      </div>
    </div>
  ` : `
    <label class="practice-input-label" for="practiceAnswer">Zure erantzuna ${isForward ? '(formula idatzia)' : ''}</label>
    <input id="practiceAnswer" name="practiceAnswer" class="practice-input" type="text" autocomplete="off" spellcheck="false" placeholder="${isForward ? 'Adib.: CH3–CH2–CH3 edo C6H12' : 'Adib.: propanoa'}" value="${safe(s.answer)}" ${s.result?'disabled':''}/>
  `}

  <div class="practice-actions">
    ${!s.result ? `<button class="main-action" type="button" data-practice-check>Egiaztatu erantzuna →</button>` : ''}
  </div>
  ${feedbackHTML(s)}
 `: `<div class="practice-end"><h2>Maila honetako ariketa guztiak egin dituzu.</h2><p>Ez dira automatikoki errepikatuko. Beste maila/noranzko bat hauta dezakezu edo historiari berriro hasiera eman.</p><button type="button" class="secondary-action" data-practice-reset>Historia berrabiarazi</button></div>`}</section>
 <p class="practice-privacy">${s.saved.correct} zuzen / ${s.saved.total} eginda. Historikoa nabigatzaile honetan gordetzen da. Ariketak ez dira PAUko enuntziatu ofizialak. Egitura egiaztatuen bankutik hautatzen dira.</p>`;
}

function mountPractice(host){
 if(instances.has(host))return;
 const s={saved:read(),direction:'forward',level:1,current:null,answer:'',result:null,showSteps:false,inputMode:'draw',builder:{carbons:3,bonds:[1,1],groups:{},activePicker:null,selectedToken:null}};
 instances.set(host,s);
 choose(s);
 render(host);

 host.addEventListener('input',e=>{
   if(e.target.matches('.practice-input')) s.answer=e.target.value;
 });
 host.addEventListener('keydown',e=>{
   if(e.key==='Enter'&&e.target.matches('.practice-input')){
     e.preventDefault();
     evaluate();
   }
 });

 function evaluate(){
  if(!s.current||s.result)return;
  if(s.direction==='forward' && s.inputMode==='draw'){
    s.answer = builderToFormula(s.builder);
  }
  if(!s.answer.trim())return;

  const wanted=s.direction==='forward'?s.current.formula:s.current.name;
  let acceptable=[wanted];
  if(s.direction==='forward'){
    const reversed=wanted.split(/([–—−\-=≡])/).reverse().join('');
    acceptable.push(
      reversed,
      reversed.replace(/^HO/,'OH').replace(/HO$/,'OH').replace(/^OH/,'HO')
    );
    if(wanted.startsWith('HO–')||wanted.startsWith('HO-')){
      acceptable.push(wanted.replace(/^HO[–-]/,'')+'–OH');
    }
    if(wanted.endsWith('–COOH')||wanted.endsWith('-COOH')){
      acceptable.push('HOOC–'+wanted.replace(/[–-]COOH$/,'').split(/([–—−\-=≡])/).reverse().join(''));
    }
    if(wanted.endsWith('–CHO')||wanted.endsWith('-CHO')){
      acceptable.push('OHC–'+wanted.replace(/[–-]CHO$/,'').split(/([–—−\-=≡])/).reverse().join(''));
    }
    if(wanted.endsWith('–CONH2')||wanted.endsWith('-CONH2')){
      acceptable.push('H2NOC–'+wanted.replace(/[–-]CONH2$/,'').split(/([–—−\-=≡])/).reverse().join(''));
    }
    if(wanted.startsWith('H2N–')||wanted.startsWith('H2N-')){
      acceptable.push(wanted.replace(/^H2N[–-]/,'')+'–NH2');
    }
    if(wanted === 'C7H8' || wanted === 'C6H5–CH3') acceptable.push('C7H8', 'C6H5–CH3', 'C6H5CH3', 'C6H5(CH3)');
    if(wanted === 'C7H14' || wanted === 'C6H11–CH3') acceptable.push('C7H14', 'C6H11–CH3', 'C6H11CH3', 'C6H11(CH3)');
    if(wanted === 'C8H16' || wanted === 'C6H10(CH3)2') acceptable.push('C8H16', 'C6H10(CH3)2', 'C6H10–(CH3)2');
    if(wanted === 'C8H10' || wanted === 'C6H4(CH3)2') acceptable.push('C8H10', 'C6H4(CH3)2', 'C6H4–(CH3)2');
    if(wanted === 'C6H5–Cl') acceptable.push('C6H5Cl', 'C6H5–Cl');
    if(wanted === 'C6H5–Br') acceptable.push('C6H5Br', 'C6H5–Br');
    if(wanted === 'C6H5–F') acceptable.push('C6H5F', 'C6H5–F');
    if(wanted === 'C6H5–OH') acceptable.push('C6H5OH', 'C6H5–OH');
    if(wanted === 'C6H11–OH') acceptable.push('C6H11OH', 'C6H11–OH');
  } else {
    if(wanted === 'bentzenoa') acceptable.push('benceno');
    if(wanted === 'metilbentzenoa') acceptable.push('toluenoa', 'tolueno');
    if(wanted === 'fenola') acceptable.push('hidroxibentzenoa');
    if(wanted === '1,4-dimetilbentzenoa') acceptable.push('p-xilenoa', 'paraxilenoa');
  }

  const correct=acceptable.some(a=>s.direction==='forward'?cleanFormula(a)===cleanFormula(s.answer):clean(a)===clean(s.answer));
  s.result={correct};
  s.saved.seen.push(`${s.direction}:${s.current.id}`);
  s.saved.total++;
  if(correct)s.saved.correct++;
  write(s.saved);
  render(host);
 }

 // Drag and Drop functionality
 host.addEventListener('dragstart', e => {
  const token = e.target.closest('[data-drag-type]');
  if(!token) return;
  const type = token.dataset.dragType;
  const val = token.dataset.dragVal;
  const from = token.dataset.dragFrom || null;
  e.dataTransfer.setData('text/plain', JSON.stringify({ type, val, from }));
  e.dataTransfer.effectAllowed = 'copyMove';
  token.classList.add('is-dragging');
 });

 host.addEventListener('dragend', () => {
  host.querySelectorAll('.is-dragging').forEach(el => el.classList.remove('is-dragging'));
  host.querySelectorAll('.is-dragover').forEach(el => el.classList.remove('is-dragover'));
 });

 host.addEventListener('dragover', e => {
  const dropZone = e.target.closest('[data-drop-zone]');
  if(dropZone){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    if(!dropZone.classList.contains('is-dragover')){
      host.querySelectorAll('.is-dragover').forEach(el => el.classList.remove('is-dragover'));
      dropZone.classList.add('is-dragover');
    }
  }
 });

 host.addEventListener('dragleave', e => {
  const dropZone = e.target.closest('[data-drop-zone]');
  if(dropZone && !dropZone.contains(e.relatedTarget)){
    dropZone.classList.remove('is-dragover');
  }
 });

 host.addEventListener('drop', e => {
  const dropZone = e.target.closest('[data-drop-zone]');
  if(!dropZone) return;
  e.preventDefault();
  dropZone.classList.remove('is-dragover');

  let data = null;
  try {
    data = JSON.parse(e.dataTransfer.getData('text/plain'));
  } catch {}
  if(!data) return;

  const zoneType = dropZone.dataset.dropZone; // 'carbon', 'bond', or 'cycle-vertex'
  const zoneIdx = Number(dropZone.dataset.dropIdx);

  if(data.type === 'group' && zoneType === 'carbon'){
    if(data.from && s.builder.mode !== 'cycle') {
      delete s.builder.groups[Number(data.from)];
    }
    s.builder.groups[zoneIdx] = data.val;
    s.answer = builderToFormula(s.builder);
    render(host);
  } else if(data.type === 'group' && zoneType === 'cycle-vertex'){
    if(data.from && s.builder.mode === 'cycle') {
      delete s.builder.cycleGroups[Number(data.from)];
    }
    s.builder.cycleGroups[zoneIdx] = data.val;
    s.answer = builderToFormula(s.builder);
    render(host);
  } else if(data.type === 'bond' && zoneType === 'bond'){
    const order = Number(data.val);
    if(order >= 1 && order <= 3 && zoneIdx >= 1 && zoneIdx <= s.builder.bonds.length){
      s.builder.bonds[zoneIdx - 1] = order;
      s.answer = builderToFormula(s.builder);
      render(host);
    }
  }
 });

 // Touch Drag & Drop for Mobile & Tablet Devices
 let touchDrag = null;
 host.addEventListener('touchstart', e => {
  const token = e.target.closest('[data-drag-type]');
  if(!token || e.touches.length !== 1) return;
  const touch = e.touches[0];
  const type = token.dataset.dragType;
  const val = token.dataset.dragVal;
  const from = token.dataset.dragFrom || null;

  const avatar = token.cloneNode(true);
  avatar.classList.add('builder-touch-ghost');
  avatar.style.left = `${touch.clientX}px`;
  avatar.style.top = `${touch.clientY}px`;
  document.body.appendChild(avatar);

  touchDrag = { type, val, from, token, avatar, lastOver: null };
  token.classList.add('is-dragging');
 }, { passive: true });

 host.addEventListener('touchmove', e => {
  if(!touchDrag || e.touches.length !== 1) return;
  const touch = e.touches[0];
  touchDrag.avatar.style.left = `${touch.clientX}px`;
  touchDrag.avatar.style.top = `${touch.clientY}px`;

  touchDrag.avatar.style.display = 'none';
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  touchDrag.avatar.style.display = '';

  const dropZone = el?.closest('[data-drop-zone]');
  if(dropZone !== touchDrag.lastOver){
    if(touchDrag.lastOver) touchDrag.lastOver.classList.remove('is-dragover');
    if(dropZone) dropZone.classList.add('is-dragover');
    touchDrag.lastOver = dropZone;
  }
 }, { passive: true });

 host.addEventListener('touchend', () => {
  if(!touchDrag) return;
  const { type, val, from, token, avatar, lastOver } = touchDrag;
  avatar.remove();
  token.classList.remove('is-dragging');
  if(lastOver){
    lastOver.classList.remove('is-dragover');
    const zoneType = lastOver.dataset.dropZone;
    const zoneIdx = Number(lastOver.dataset.dropIdx);
    if(type === 'group' && zoneType === 'carbon'){
      if(from && s.builder.mode !== 'cycle') delete s.builder.groups[Number(from)];
      s.builder.groups[zoneIdx] = val;
      s.answer = builderToFormula(s.builder);
      render(host);
    } else if(type === 'group' && zoneType === 'cycle-vertex'){
      if(from && s.builder.mode === 'cycle') delete s.builder.cycleGroups[Number(from)];
      s.builder.cycleGroups[zoneIdx] = val;
      s.answer = builderToFormula(s.builder);
      render(host);
    } else if(type === 'bond' && zoneType === 'bond'){
      s.builder.bonds[zoneIdx - 1] = Number(val);
      s.answer = builderToFormula(s.builder);
      render(host);
    }
  }
  touchDrag = null;
 });

 host.addEventListener('touchcancel', () => {
  if(touchDrag){
    touchDrag.avatar.remove();
    touchDrag.token.classList.remove('is-dragging');
    if(touchDrag.lastOver) touchDrag.lastOver.classList.remove('is-dragover');
    touchDrag = null;
  }
 });

 host.addEventListener('click',e=>{
  // 1. Assign group from picker dialog (highest priority)
  const assignBtn = e.target.closest('[data-builder-assign-group]');
  if(assignBtn){
    const spec = assignBtn.dataset.builderAssignGroup;
    if(spec.startsWith('cycle:')){
      const parts = spec.split(':');
      const cNum = Number(parts[1]);
      const grp = parts[2];
      if(grp === 'none'){
        delete s.builder.cycleGroups[cNum];
      } else {
        s.builder.cycleGroups[cNum] = grp;
      }
    } else {
      const [cStr, grp] = spec.split(':');
      const cNum = Number(cStr);
      if(grp === 'none'){
        delete s.builder.groups[cNum];
      } else {
        s.builder.groups[cNum] = grp;
      }
    }
    s.builder.activePicker = null;
    s.answer = builderToFormula(s.builder);
    render(host);
    return;
  }

  // 2. Close picker if clicked close button or overlay backdrop
  const closeBtn = e.target.closest('.builder-picker-close, .builder-picker-overlay');
  if(closeBtn && (e.target === closeBtn || e.target.closest('.builder-picker-close'))){
    s.builder.activePicker=null;
    render(host);
    return;
  }

  // 3. Tap-to-select token in tray
  const tokenBtn = e.target.closest('.builder-token');
  if(tokenBtn){
    const type = tokenBtn.dataset.dragType;
    const val = tokenBtn.dataset.dragVal;
    if(s.builder.selectedToken && s.builder.selectedToken.val === val && s.builder.selectedToken.type === type){
      s.builder.selectedToken = null;
    } else {
      s.builder.selectedToken = { type, val };
    }
    render(host);
    return;
  }

  // 4. If a token is selected, clicking a carbon, bond, or cycle-vertex applies it
  if(s.builder.selectedToken){
    const carbonCol = e.target.closest('.builder-col');
    if(carbonCol && s.builder.selectedToken.type === 'group'){
      const cIdx = Number(carbonCol.dataset.dropIdx);
      s.builder.groups[cIdx] = s.builder.selectedToken.val;
      s.builder.selectedToken = null;
      s.answer = builderToFormula(s.builder);
      render(host);
      return;
    }
    const cycleVertex = e.target.closest('[data-drop-zone="cycle-vertex"]');
    if(cycleVertex && s.builder.selectedToken.type === 'group'){
      const cIdx = Number(cycleVertex.dataset.dropIdx);
      s.builder.cycleGroups[cIdx] = s.builder.selectedToken.val;
      s.builder.selectedToken = null;
      s.answer = builderToFormula(s.builder);
      render(host);
      return;
    }
    const bondCol = e.target.closest('.builder-bond-col');
    if(bondCol && s.builder.selectedToken.type === 'bond'){
      const bIdx = Number(bondCol.dataset.dropIdx);
      s.builder.bonds[bIdx - 1] = Number(s.builder.selectedToken.val);
      s.builder.selectedToken = null;
      s.answer = builderToFormula(s.builder);
      render(host);
      return;
    }
  }

  const btn=e.target.closest('button');
  if(!btn)return;

  if(btn.hasAttribute('data-builder-set-mode')){
    s.builder.mode = btn.dataset.builderSetMode;
    s.answer = builderToFormula(s.builder);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-cycle-set')){
    s.builder.cycleType = btn.dataset.builderCycleSet;
    s.answer = builderToFormula(s.builder);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-pick-cycle-group')){
    s.builder.activePicker = { isCycle: true, cNum: Number(btn.dataset.builderPickCycleGroup) };
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-del-cycle-group')){
    const cNum = Number(btn.dataset.builderDelCycleGroup);
    delete s.builder.cycleGroups[cNum];
    s.answer = builderToFormula(s.builder);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-pick-group')){
    s.builder.activePicker = { isCycle: false, cNum: Number(btn.dataset.builderPickGroup) };
    render(host);
    return;
  }

  if(btn.hasAttribute('data-practice-direction')){
    s.direction=btn.dataset.practiceDirection;
    choose(s);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-practice-level')){
    s.level=Number(btn.dataset.practiceLevel);
    choose(s);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-practice-mode')){
    const newMode=btn.dataset.practiceMode;
    if(newMode==='draw'&&s.inputMode==='write'){
      const parsed=parseFormulaToBuilder(s.answer);
      if(parsed)s.builder=parsed;
      s.answer=builderToFormula(s.builder);
    } else if(newMode==='write'&&s.inputMode==='draw'){
      s.answer=builderToFormula(s.builder);
    }
    s.inputMode=newMode;
    render(host);
    if(newMode==='write'){
      host.querySelector('#practiceAnswer')?.focus();
    }
    return;
  }
  if(btn.hasAttribute('data-builder-c-delta')){
    const delta=Number(btn.dataset.builderCDelta);
    const newC=Math.max(1,Math.min(8,s.builder.carbons+delta));
    if(newC!==s.builder.carbons){
      s.builder.carbons=newC;
      while(s.builder.bonds.length<newC-1)s.builder.bonds.push(1);
      s.builder.bonds.length=Math.max(0,newC-1);
      for(const k of Object.keys(s.builder.groups)){
        if(Number(k)>newC)delete s.builder.groups[k];
      }
      s.answer=builderToFormula(s.builder);
      render(host);
    }
    return;
  }
  if(btn.hasAttribute('data-builder-c-set')){
    const newC=Number(btn.dataset.builderCSet);
    if(newC!==s.builder.carbons){
      s.builder.carbons=newC;
      while(s.builder.bonds.length<newC-1)s.builder.bonds.push(1);
      s.builder.bonds.length=Math.max(0,newC-1);
      for(const k of Object.keys(s.builder.groups)){
        if(Number(k)>newC)delete s.builder.groups[k];
      }
      s.answer=builderToFormula(s.builder);
      render(host);
    }
    return;
  }
  if(btn.hasAttribute('data-builder-cycle-bond')){
    const idx=Number(btn.dataset.builderCycleBond)-1;
    if(idx>=0&&idx<s.builder.bonds.length){
      s.builder.bonds[idx]=(s.builder.bonds[idx]%3)+1;
      s.answer=builderToFormula(s.builder);
      render(host);
    }
    return;
  }
  if(btn.hasAttribute('data-builder-pick-group')){
    s.builder.activePicker=Number(btn.dataset.builderPickGroup);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-del-group')){
    const cNum=Number(btn.dataset.builderDelGroup);
    delete s.builder.groups[cNum];
    s.answer=builderToFormula(s.builder);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-builder-reset')){
    s.builder={carbons:3,bonds:[1,1],groups:{},activePicker:null,selectedToken:null};
    s.answer=builderToFormula(s.builder);
    render(host);
    return;
  }
  if(btn.hasAttribute('data-practice-check')){
    evaluate();
    return;
  }
  if(btn.hasAttribute('data-practice-explain')){
    s.showSteps=!s.showSteps;
    render(host);
    return;
  }
  if(btn.hasAttribute('data-practice-next')){
    choose(s);
    render(host);
    if(s.inputMode==='write'){
      host.querySelector('#practiceAnswer')?.focus();
    }
    return;
  }
  if(btn.hasAttribute('data-practice-reset')){
    if(confirm('Praktikaren historia ezabatu eta hasieratik hasi?')){
      s.saved={seen:[],total:0,correct:0};
      write(s.saved);
      choose(s);
      render(host);
    }
    return;
  }
 });
}

window.mountPractice=mountPractice;})();

const mountPractice=window.mountPractice;
const $=(s,root=document)=>root.querySelector(s);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='kimika2-learning-progress-v1';
const initial=()=>({completed:[],positions:{},passed:{},seen:{}});
let state=load();
let activeId=null;
let step=0;
let selections={};
let feedback={};
let explored={};
let bondCount=0;
let guideNotice=null;
let animationKey=0;
let motionPaused=false;
const teachingTypes=new Set(['intro','concept']);
const mascotSources={
 welcome:'assets/kora-welcome.png',
 remember:'assets/kora-explain.png',
 adi:'assets/kora-important.png',
 important:'assets/kora-important.png',
 error:'assets/kora-think.png',
 success:'assets/kora-success.png',
 finish:'assets/kora-success.png',
 help:'assets/kora-explain.png',
 default:'assets/kora-explain.png'
};
const STORY_KEY='kimika-kora-intro-v2-4';
const STORY_SCENES=[
 {kind:'welcome',eyebrow:'01 / AURKEZPENA',title:'Kaixo! Ni Kora naiz.',text:'Formulazio organikoaren munduan lagunduko dizut. Ez dugu ezer presaka egingo.'},
 {kind:'remember',eyebrow:'02 / GURE MISIOA',title:'Kimika zure inguruan dago.',text:'Azukrean, arropan eta eguneroko gauza askotan dago karbonoa. Ikusiko dugu zer duten berezi molekula horiek.'},
 {kind:'success',eyebrow:'03 / ELKARREKIN',title:'Pausoz pauso joango gara.',text:'Lehenik behatu. Gero ulertu. Azkenean probatu. Zalantzaren bat baduzu, hemen egongo naiz. Goazen!'}
];
let storyIndex=0;
let storyTimer=null;
let storyTyping=false;
let storyClosedThisSession=false;
function lessonKey(slide){return activeId+':'+slide.id}
function openGuide(kind,text){guideNotice={kind,text};animationKey++}
function momentFor(slide){return guideMoments[lessonKey(slide)]||null}
function enterSlide(slide){guideNotice=null;const moment=momentFor(slide);if(moment)openGuide(moment.kind,moment.text);else if(slide.type==='finish')openGuide('finish','Hau bai! Etapa osatu duzu. Hurrengora joateko prest zaude.');}
function guideAvatar(kind='help',size='default'){
 const src=mascotSources[kind]||mascotSources.default;
 return `<div class="kora-figure ${size}" data-kind="${kind}"><img src="${src}" alt="" class="kora-img" loading="lazy" decoding="async"></div>`;
}
function guideNoticeHTML(){if(!guideNotice)return '';
 return `<aside class="guide-visit" data-guide-kind="${guideNotice.kind}" key="${animationKey}" aria-live="polite"><div class="guide-avatar">${guideAvatar(guideNotice.kind)}</div><div class="guide-words"><div class="guide-eyebrow">${safe(guideTypes[guideNotice.kind]||guideTypes.help)}</div><p>${proseChemHTML(guideNotice.text)}</p></div><button type="button" class="guide-close" data-guideclose aria-label="Itxi oharra">×</button></aside>`;
}
function readIntroSeen(){try{return localStorage.getItem(STORY_KEY)==='1'}catch{return false}}
function saveIntroSeen(){try{localStorage.setItem(STORY_KEY,'1')}catch{}}
function introHTML(scene,index){
 return `<div class="kora-story-overlay" data-intro-overlay><section class="kora-story-dialog" role="dialog" aria-modal="true" aria-labelledby="storyTitle" aria-describedby="storyText"><div class="story-topline"><div class="comic-kicker">KIMIKA · AURKEZPENA</div><div class="story-top-actions"><button type="button" class="story-skip" data-intro-library>Familien gida</button><button type="button" class="story-skip" data-intro-close>Saltatu ✕</button></div></div><div class="story-stage"><div class="story-character">${guideAvatar(scene.kind,'story')}</div><div class="story-panel-dialog"><div class="story-chapter">${safe(scene.eyebrow)}</div><h2 id="storyTitle">${safe(scene.title)}</h2><p id="storyText" class="story-typewriter" aria-live="off" data-intro-text></p></div></div><div class="story-bottom"><div class="story-progress" aria-label="${index+1}. pausoa, ${STORY_SCENES.length} guztira">${STORY_SCENES.map((_,i)=>`<span class="${i<=index?'active':''}"></span>`).join('')}</div><button type="button" class="main-action story-next" data-intro-next>${index===STORY_SCENES.length-1?'Hasi ibilbidea':'Hurrengoa'} →</button></div></section></div>`;
}
function stopStoryTimer(){if(storyTimer!==null){clearInterval(storyTimer);storyTimer=null;}}
function closeIntro(){stopStoryTimer();const root=$('#introRoot');if(root)root.innerHTML='';document.body.classList.remove('story-open');storyClosedThisSession=true;saveIntroSeen();}
function renderIntro(){
 const root=$('#introRoot');if(!root)return;
 const scene=STORY_SCENES[storyIndex];
 stopStoryTimer();root.innerHTML=introHTML(scene,storyIndex);document.body.classList.add('story-open');
 const el=$('[data-intro-text]',root);let index=0;
 storyTyping=true;
 if(motionPaused||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){el.textContent=scene.text;storyTyping=false;}
 else {storyTimer=setInterval(()=>{if(index>=scene.text.length){storyTyping=false;stopStoryTimer();return;}el.textContent=scene.text.slice(0,++index);},33);}
 $('[data-intro-next]',root)?.focus();
}
function openIntro(){storyIndex=0;renderIntro();}
function nextIntro(){
 const el=$('[data-intro-text]');const scene=STORY_SCENES[storyIndex];
 if(storyTyping){stopStoryTimer();if(el)el.textContent=scene.text;storyTyping=false;return;}
 if(storyIndex===STORY_SCENES.length-1){closeIntro();return;}
 storyIndex++;renderIntro();
}
function maybeOpenIntro(){if(!storyClosedThisSession&&!readIntroSeen())openIntro();}
function showHint(slide){const moment=momentFor(slide);if(feedback[slide.id])openGuide('error',feedback[slide.id]);else if(passed(slide)&&slide.success)openGuide('success',slide.success);else openGuide('help',moment?.text||slide.note||'Begiratu marrazkiari: zein atomo eta lotura ikusten dituzu?');}

function load(){try{const v=JSON.parse(localStorage.getItem(KEY));if(v&&Array.isArray(v.completed))return {...initial(),...v}}catch{}return initial()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}}
function completed(id){return state.completed.includes(id)}
function unlocked(index){return index===0 || completed(units[index-1].id)}
function passed(slide){return !!state.passed[activeId+':'+slide.id]}
function pass(slide){state.passed[activeId+':'+slide.id]=true;save()}
function viewed(slide){return !!state.seen[activeId+':'+slide.id]}
function seen(slide){state.seen[activeId+':'+slide.id]=true;save()}
function orbitSVG(){return `<svg viewBox="0 0 410 340" role="img" aria-label="Orbita-formetan inspiratutako irudi abstraktua"><defs><linearGradient id="obg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e7d7fc"/><stop offset="1" stop-color="#c9f1e2"/></linearGradient></defs><circle cx="205" cy="168" r="119" fill="url(#obg)" opacity=".9"/><circle cx="205" cy="168" r="47" fill="#ff9895"/><circle cx="205" cy="168" r="27" fill="#fff0e8" opacity=".85"/><ellipse cx="205" cy="168" rx="170" ry="65" transform="rotate(38 205 168)" fill="none" stroke="#7642c7" stroke-width="10"/><ellipse cx="205" cy="168" rx="169" ry="66" transform="rotate(-37 205 168)" fill="none" stroke="#68b59e" stroke-width="10"/><ellipse cx="205" cy="168" rx="171" ry="68" transform="rotate(89 205 168)" fill="none" stroke="#d9c0fe" stroke-width="8"/><circle cx="334" cy="234" r="17" fill="#ff888f" stroke="#fff" stroke-width="5"/><circle cx="63" cy="219" r="12" fill="#7342c5"/><circle cx="210" cy="9" r="12" fill="#78c6aa"/><circle cx="62" cy="49" r="6" fill="#ffb7ae"/><circle cx="365" cy="77" r="6" fill="#8958d6"/></svg>`}
function chemsSVG(kind,opts={}){
 if(kind==='methane'){
   return `<svg viewBox="0 0 450 280" role="img" aria-label="Metanoaren marrazki laua: karbono bat eta lau hidrogeno lotura bakunez"><g stroke="#6a5387" stroke-width="5" stroke-linecap="round"><path d="M225 112V57 M225 168V224 M194 140H127 M257 140H325"/></g><g fill="#f0e3ff" stroke="#9d7dd0" stroke-width="2"><circle cx="225" cy="140" r="38"/></g><g fill="#f9d9de" stroke="#e9949d" stroke-width="2"><circle cx="225" cy="35" r="28"/><circle cx="225" cy="246" r="28"/><circle cx="100" cy="140" r="28"/><circle cx="353" cy="140" r="28"/></g><g text-anchor="middle" font-family="system-ui" font-weight="800" fill="#4b3274"><text x="225" y="151" font-size="31">C</text><text x="225" y="44" font-size="23">H</text><text x="225" y="255" font-size="23">H</text><text x="100" y="149" font-size="23">H</text><text x="353" y="149" font-size="23">H</text></g></svg>`;
 }
 if(kind==='co2')return `<svg viewBox="0 0 450 280" role="img" aria-label="Karbono dioxidoa: O=C=O, bi lotura bikoitz"><g stroke="#6f5e8c" stroke-width="5" stroke-linecap="round"><path d="M134 128H192 M134 143H192 M257 128H315 M257 143H315"/></g><g fill="#f0e3ff" stroke="#9d7dd0" stroke-width="2"><circle cx="225" cy="135" r="33"/></g><g fill="#d9f3e7" stroke="#8ccdb0" stroke-width="2"><circle cx="101" cy="135" r="33"/><circle cx="348" cy="135" r="33"/></g><g text-anchor="middle" font-family="system-ui" font-weight="850" fill="#4d3773" font-size="28"><text x="101" y="145">O</text><text x="225" y="145">C</text><text x="348" y="145">O</text></g><text x="225" y="222" fill="#7b6c8e" text-anchor="middle" font-size="16" font-family="system-ui">O = C = O</text></svg>`;
 if(kind==='chain'){
   const n=opts.n||3, width=480,space=Math.min(82,410/Math.max(1,n-1)), start=(width-(n-1)*space)/2;let s='';for(let i=0;i<n-1;i++){let x=start+i*space;s+=`<line x1="${x+21}" y1="120" x2="${x+space-21}" y2="120" stroke="#4a9b7d" stroke-width="5" stroke-linecap="round"/>`}
   for(let i=0;i<n;i++){const x=start+i*space;s+=`<circle cx="${x}" cy="120" r="23" fill="#daf4e7" stroke="#65b796" stroke-width="2"/><text x="${x}" y="127" text-anchor="middle" font-size="22" font-family="system-ui" font-weight="900" fill="#277658">C</text>`}
   return `<svg viewBox="0 0 480 240" role="img" aria-label="${n} karbonoko kate irekia">${s}<text x="240" y="200" text-anchor="middle" font-size="14" fill="#8a7a96" font-family="system-ui">${n} karbono · lotura bakunak</text></svg>`
 }
 return '';
}
function atomSVG(which){const carbon=which==='C',n=carbon?4:1;let parts='';const cx=215,cy=139;
 if(carbon){parts+=`<circle cx="${cx}" cy="${cy}" r="54" fill="none" stroke="#cabee0" stroke-width="2.5" stroke-dasharray="6 6"/>`;for(const a of [0,Math.PI])parts+=`<circle cx="${cx+54*Math.cos(a)}" cy="${cy+54*Math.sin(a)}" r="9" fill="#77c3a4"/>`}
 parts+=`<circle cx="${cx}" cy="${cy}" r="95" fill="none" stroke="#d6c9e8" stroke-width="3"/>`;
 for(let i=0;i<n;i++){const a=-Math.PI/2+2*Math.PI*i/n;parts+=`<circle cx="${cx+95*Math.cos(a)}" cy="${cy+95*Math.sin(a)}" r="10" fill="${carbon?'#fa8888':'#6c9bcf'}" stroke="white" stroke-width="2"/>`}
 return `<svg viewBox="0 0 430 290" role="img" aria-label="${carbon?'Karbonoa: lehenengo geruzan bi elektroi eta kanpoko geruzan lau':'Hidrogenoa: elektroi bat lehenengo geruzan'}"><circle cx="215" cy="139" r="33" fill="#fff0e8" stroke="#e5b5a3" stroke-width="3"/>${parts}<text x="215" y="148" text-anchor="middle" font-size="29" font-family="system-ui" font-weight="900" fill="#5e3e8d">${which}</text><text x="215" y="273" text-anchor="middle" font-size="15" font-family="system-ui" font-weight="800" fill="#766589">${carbon?'2 e<tspan dy="-5" font-size="11">−</tspan><tspan dy="5"> + 4 e</tspan><tspan dy="-5" font-size="11">−</tspan>':'1 e<tspan dy="-5" font-size="11">−</tspan>'}</text></svg>`}
function bondSVG(count){const positions=[[220,35],[365,145],[220,252],[75,145]];let s='';positions.forEach(([x,y],i)=>{if(i<count){const dx=x-220,dy=y-145,len=Math.hypot(dx,dy),unitX=dx/len,unitY=dy/len;s+=`<line x1="${220+32*unitX}" y1="${145+32*unitY}" x2="${x-29*unitX}" y2="${y-29*unitY}" stroke="#694993" stroke-width="5" stroke-linecap="round"/>`;s+=`<circle cx="${x}" cy="${y}" r="28" fill="#ffe5e4" stroke="#f5a8a4" stroke-width="2"/><text x="${x}" y="${y+9}" font-size="24" text-anchor="middle" fill="#8b5272" font-weight="900" font-family="system-ui">H</text>`}});return `<svg viewBox="0 0 440 290" role="img" aria-label="Karbonoa eta ${count} hidrogeno lotuta"><circle cx="220" cy="145" r="34" fill="#e5d6fa" stroke="#a989d9" stroke-width="2"/>${s}<text x="220" y="155" font-size="30" text-anchor="middle" fill="#603d98" font-weight="900" font-family="system-ui">C</text></svg>`}
function lewisSVG(){return `<svg viewBox="0 0 440 265" role="img" aria-label="Lotura kobalentean C eta H artean elektroi-bikote bat partekatzen da"><circle cx="161" cy="115" r="49" fill="#eedcff" stroke="#b49bdd" stroke-width="3"/><circle cx="292" cy="115" r="37" fill="#e2f3fa" stroke="#a4cfe4" stroke-width="3"/><text x="161" y="124" font-family="system-ui" font-size="30" font-weight="850" fill="#69449f" text-anchor="middle">C</text><text x="292" y="124" font-family="system-ui" font-size="27" font-weight="850" fill="#47759e" text-anchor="middle">H</text><line x1="210" x2="255" y1="115" y2="115" stroke="#7654aa" stroke-width="5" stroke-linecap="round"/><circle cx="224" cy="96" r="7" fill="#f28e85"/><circle cx="243" cy="96" r="7" fill="#739fcb"/><text x="235" y="184" font-family="system-ui" font-size="15" font-weight="750" fill="#786a88" text-anchor="middle">Elektroi-bikote partekatua</text></svg>`}
function everydaySVG(){return `<svg viewBox="0 0 480 255" role="img" aria-label="Eguneroko objektuen marrazki estilizatua: azukrea, kamiseta eta plastikozko botila"><rect x="27" y="82" width="115" height="105" rx="17" fill="#ecdafe" stroke="#c8acef" stroke-width="3"/><rect x="50" y="55" width="115" height="107" rx="17" fill="#f4e8ff" stroke="#c8acef" stroke-width="3"/><path d="M214 65l-45 25 15 45 28-10v77h115v-77l28 10 15-45-45-25-37 18h-36z" fill="#f9bcb4" stroke="#e78e89" stroke-width="3"/><path d="M398 66v24l-19 20v99h68v-99l-19-20V66" fill="#b4e1d6" stroke="#67b7a7" stroke-width="3"/><rect x="393" y="49" width="40" height="17" rx="4" fill="#6546a8"/><text x="240" y="236" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#8a7898">Elikagaiak · jantziak · materialak</text></svg>`}
function everydayIcon(type){return type==='shirt'?`<svg viewBox="0 0 56 50" aria-hidden="true"><path d="M15 6L4 14l6 16 9-4v18h27V26l9 4 6-16-11-8-10 5H25z" fill="#ffc4c5" transform="translate(-3)"/></svg>`:type==='bottle'?`<svg viewBox="0 0 56 50" aria-hidden="true"><rect x="21" y="2" width="14" height="9" rx="2" fill="#8e6bd4"/><path d="M22 12h12l9 12v20H13V24z" fill="#a6e4cc"/></svg>`:`<svg viewBox="0 0 56 50" aria-hidden="true"><rect x="11" y="6" width="27" height="27" rx="5" fill="#d8baf6"/><rect x="19" y="16" width="27" height="27" rx="5" fill="#ead7fa"/></svg>`}
function decorationFor(slide){if(slide.type==='intro'){if(slide.visual==='atom')return atomSVG('C');if(slide.visual==='chain')return chemsSVG('chain',{n:3});return everydaySVG()}
 if(slide.type==='everyday'){const selected=explored[slide.id]||'sugar',item=slide.items.find(x=>x.id===selected)||slide.items[0];return `<div><div class="big-chem">${proseChemHTML(item.detail)}</div><div class="diagram-sub">${proseChemHTML(item.why)}</div></div>`}
 if(slide.type==='contrast'){const v=explored[slide.id]||'CH4';return `<div style="width:100%"><div class="state-bubble">${v==='CH4'?'ORGANIKOA':'EZ-ORGANIKOA'}</div>${chemsSVG(v==='CH4'?'methane':'co2')}<div class="visual-title">${v==='CH4'?`Metanoa · ${chemHTML('CH4')}`:`Karbono dioxidoa · ${chemHTML('CO2')}`}</div></div>`}
 if(slide.type==='atom')return `<div style="width:100%">${atomSVG(explored[slide.id]||'C')}<div class="visual-title">${explored[slide.id]==='H'?'Hidrogenoa · Z = 1':'Karbonoa · Z = 6'}</div></div>`;
 if(slide.type==='bond')return `<div style="width:100%">${bondSVG(bondCount)}<div class="bond-count">${bondCount} / 4 C–H lotura</div></div>`;
 if(slide.type==='roots'){const n=Number(explored[slide.id]||3);return `<div class="root-figure">${chemsSVG('chain',{n})}</div>`}
 if(slide.type==='hydrogen'){return `<div style="width:100%">${passed(slide)?`<div class="big-chem">${chemHTML('CH3–CH2–CH3')}</div>`:chemsSVG('chain',{n:3})}<div class="visual-title">${passed(slide)?`${chemHTML('C3H8')} · propanoa`:'C–C–C: hidrogenoak osatu gabe'}</div></div>`}
 if(slide.type==='concept'){if(slide.visual==='lewis')return lewisSVG();if(slide.visual==='propane')return `<div><div class="big-chem">${chemHTML('CH3–CH2–CH3')}</div><div class="visual-title">3 H + 2 H + 3 H = 8 H</div>${chemsSVG('chain',{n:3})}</div>`;return chemsSVG('methane')}
 if(slide.type==='finish')return `<div>${orbitSVG()}<div class="visual-title">Etapa osatuta!</div></div>`;
 if(slide.type==='choice')return `<div><div class="big-chem">${activeId==='loturak'?chemHTML('CH2=CH2'):activeId==='kateak'?'met- · et- · prop- · but-':slide.id==='galdera1'?proseChemHTML('CH₃CH₂OH · CO₂ · NaCl'):'C ≠ beti organikoa'}</div><div class="diagram-sub">Pentsatu; ondoren, aukeratu erantzuna.</div></div>`;
 return ''}
function stageIcon(unit){return unit.symbol==='atom'?'C':unit.symbol==='chain'?'C–C':'✧'}

let currentLang = 'eu';
try {
  const saved = localStorage.getItem('kimika_lang');
  if (saved === 'es' || saved === 'eu') currentLang = saved;
} catch(e){}

let periodicInstance = null;

function setLang(newLang){
  if (newLang !== 'eu' && newLang !== 'es') newLang = 'eu';
  currentLang = newLang;
  try { localStorage.setItem('kimika_lang', newLang); } catch(e){}
  document.documentElement.lang = currentLang;
  updateGlobalI18n();
  const h = decodeURIComponent(location.hash.slice(1));
  if (h === 'periodikoak' || h === 'propiedades' || !h) {
    renderPeriodic();
  } else if (h === 'kontsultatu' || h === 'teoria') {
    renderConsult();
  } else if (h === 'praktikatu' || h === 'ariketak') {
    renderPractice();
  }
}

function updateGlobalI18n(){
  const isEs = currentLang === 'es';
  const brandTitle = $('#brandTitle');
  if(brandTitle){
    brandTitle.innerHTML = isEs
      ? 'QUÍMICA<small id="brandSub">2.º BACHILLERATO</small>'
      : 'KIMIKA<small id="brandSub">2. BATXILERGOA</small>';
  }
  const navPer = $('#navPeriodic');
  if(navPer) navPer.textContent = isEs ? 'Propiedades' : 'Propietateak';
  const navLib = $('#navLibrary');
  if(navLib) navLib.textContent = isEs ? 'Química Orgánica' : 'Kimika Organikoa';
  const navPrac = $('#navPractice');
  if(navPrac) navPrac.textContent = isEs ? 'Ejercicios' : 'Ariketak';
  const searchBtnText = $('#searchBtnText');
  if(searchBtnText){
    searchBtnText.innerHTML = isEs
      ? 'Buscar<span class="search-label-long"> / Chuletario</span>'
      : 'Bilatu<span class="search-label-long"> / Txuletarioa</span>';
  }
  const footL = $('#footerLeft');
  if(footL) footL.textContent = isEs ? '2.º BACHILLERATO · PAU EUSKADI' : '2. BATXILERGOA · PAU EUSKADI';
  const footR = $('#footerRight');
  if(footR) footR.textContent = isEs ? 'Primero comprender. Luego practicar.' : 'Lehenengo ulertu. Gero praktikatu.';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function selectNav(mode='periodic'){
 for(const [sel,name] of [['#navPeriodic','periodic'],['#navLibrary','consult'],['#navPractice','practice'],['#navLearn','learn']]){
   const link=$(sel);if(!link)continue;
   const active=mode===name;link.classList.toggle('nav-current',active);
   if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
 }
}
function renderPeriodic(){
 activeId=null;
 if($('#mapPage')) $('#mapPage').hidden=true;
 if($('#lessonPage')) $('#lessonPage').hidden=true;
 if($('#consultPage')) $('#consultPage').hidden=true;
 if($('#practicePage')) $('#practicePage').hidden=true;
 const p=$('#periodicPage');
 if(p) p.hidden=false;
 selectNav('periodic');
 updateGlobalI18n();
 periodicInstance = mountPeriodicProperties(p, currentLang, setLang);
 document.title = (currentLang === 'es' ? 'Propiedades periódicas' : 'Propietate periodikoak') + ' · ' + (currentLang === 'es' ? 'QUÍMICA 2.º BACH' : 'KIMIKA 2. BATX');
}
function renderConsult(){
 activeId=null;
 if($('#mapPage')) $('#mapPage').hidden=true;
 if($('#lessonPage')) $('#lessonPage').hidden=true;
 if($('#practicePage')) $('#practicePage').hidden=true;
 if($('#periodicPage')) $('#periodicPage').hidden=true;
 const c=$('#consultPage');
 if(c) c.hidden=false;
 selectNav('consult');
 updateGlobalI18n();
 mountConsult(c);
 document.title = (currentLang === 'es' ? 'Química Orgánica' : 'Kimika Organikoa') + ' · ' + (currentLang === 'es' ? 'QUÍMICA 2.º BACH' : 'KIMIKA 2. BATX');
}
function renderPractice(){
 activeId=null;
 if($('#mapPage')) $('#mapPage').hidden=true;
 if($('#lessonPage')) $('#lessonPage').hidden=true;
 if($('#consultPage')) $('#consultPage').hidden=true;
 if($('#periodicPage')) $('#periodicPage').hidden=true;
 const pr=$('#practicePage');
 if(pr) pr.hidden=false;
 selectNav('practice');
 updateGlobalI18n();
 mountPractice(pr);
 document.title = (currentLang === 'es' ? 'Ejercicios' : 'Ariketak') + ' · ' + (currentLang === 'es' ? 'QUÍMICA 2.º BACH' : 'KIMIKA 2. BATX');
}
function openCatalogDrawer(){
 const root=$('#catalogDrawerRoot');if(!root)return;
 openQuickConsultDrawer(root);
}
function closeCatalogDrawer(){
 const root=$('#catalogDrawerRoot');if(!root)return;
 closeQuickConsultDrawer(root);
}
function jumpToCatalog(){
 openCatalogDrawer();
}
function renderMap(){activeId=null;if($('#periodicPage'))$('#periodicPage').hidden=true;$('#lessonPage').hidden=true;$('#consultPage').hidden=true;$('#practicePage').hidden=true;$('#mapPage').hidden=false;selectNav('learn');
 const total=units.filter(u=>completed(u.id)).length, next=units.findIndex((u,i)=>unlocked(i)&&!completed(u.id));let resume=next<0?units[0]:units[next];
 $('#progressBadge').textContent=`${total} / ${units.length}`;
 const percent=Math.round(total/units.length*100);
 const recent=units.map((u,i)=>({u,i})).filter(({i})=>unlocked(i)).slice(0,4);
 $('#mapPage').innerHTML=`<section class="adult-hero" aria-labelledby="heroTitle">
   <div class="adult-hero-copy">
     <div class="hero-kicker">KIMIKA · FORMULAZIO ORGANIKOA</div>
     <h1 id="heroTitle" class="editorial-title">Kaixo! <span>Ni Kora naiz.</span></h1>
     <p class="hero-lead">Kimika organikoa pausoz pauso ikasteko ibilbide bisual eta argia. Lehenengo ulertu, gero praktikatu eta azkenik sendotu.</p>
     <div class="hero-actions"><button type="button" class="main-action" data-open="${safe(resume.id)}">${total===units.length?'Berriro hasi ibilbidea':'Jarraitu ikasten'} <span aria-hidden="true">→</span></button><button type="button" class="secondary-action subtle" data-intro-open>Ezagutu Kora</button><a href="#teoria" class="secondary-action subtle">Teoria</a><a href="#ariketak" class="secondary-action subtle">Ariketak</a></div>
   </div>
   <div class="adult-hero-art"><div class="art-card"><div class="art-badge">MOLEKULEK IDEIA HANDIAK ERAIKITZEN DITUZTE.</div><div class="art-kora">${guideAvatar('welcome','hero-banner')}</div><div class="art-orbit">${orbitSVG()}</div><div class="art-molecule art-molecule-a">${chemsSVG('methane')}</div><div class="art-molecule art-molecule-b">${chemsSVG('chain',{n:2})}</div></div></div>
 </section>
 <section class="dashboard-grid" aria-label="Zure ikaskuntza panela">
   <article class="panel progress-panel"><div><div class="overline">NIRE IKASKUNTZA IBILBIDEA</div><h2 class="section-title">Kapituluz kapitulu, kimika organikoa menderatzera.</h2></div><div class="stat-group"><div class="stat-ring"><span>${percent}%</span></div><div class="stat-meta"><strong>${total} / ${units.length}</strong><span>etapa osatuta</span></div></div><div class="stage-track">${units.map((u,i)=>{const done=completed(u.id),can=unlocked(i);return `<button type="button" class="stage-pill ${done?'done':can?'open':'locked'}" ${can?`data-open="${safe(u.id)}"`:'disabled'}><span class="stage-pill-icon">${stageIcon(u)}</span><span class="stage-pill-copy"><strong>${safe(u.number)}. ${safe(u.title)}</strong><small>${done?'100% egina':can?(state.positions[u.id]>0?'Jarraitzeko prest':'Hasteko prest'):'Blokeatuta'}</small></span></button>`}).join('')}</div></article>
   <article class="panel remember-panel"><div class="mini-head">Gogoratu</div><div class="remember-body"><div class="remember-copy"><h3>Karbonoak lau lotura egin ditzake.</h3><p>Horregatik da kimika organikoa hain berezia: kateak, adarkadurak eta egitura asko osa daitezke.</p></div><div class="remember-visual">${chemsSVG('methane')}</div></div></article>
   <article class="panel exercises-panel"><div class="mini-head">Azken ariketak</div><ul class="clean-list">${recent.map(({u})=>`<li><span>${safe(u.number)} · ${safe(u.title)}</span><button type="button" data-open="${safe(u.id)}">${completed(u.id)?'Berrikusi':'Ireki'}</button></li>`).join('')}</ul></article>
   <article class="panel achievements-panel"><div class="mini-head">Nire lorpenak</div><div class="badge-row"><div class="badge-card ${total>=1?'earned':''}"><span>⚗</span><strong>Lehen urratsak</strong><small>1. etapa osatua</small></div><div class="badge-card ${total>=2?'earned':''}"><span>⬡</span><strong>Loturen aditua</strong><small>2. etapa osatua</small></div><div class="badge-card ${total>=3?'earned':''}"><span>★</span><strong>Kateen maisua</strong><small>Ibilbidea osatua</small></div></div></article>
 </section>
 `;

 document.title='KIMIKA · Ibilbidea';maybeOpenIntro();}
function openUnit(id){if($('#periodicPage'))$('#periodicPage').hidden=true;$('#consultPage').hidden=true;$('#practicePage').hidden=true;selectNav('learn');const index=units.findIndex(u=>u.id===id);if(index<0||!unlocked(index)){location.hash='#mapa';return;}activeId=id;step=completed(id)?0:Math.max(0,Math.min(state.positions[id]||0,units[index].slides.length-1));bondCount=0;selections={};feedback={};explored={};$('#mapPage').hidden=true;$('#lessonPage').hidden=false;enterSlide(units[index].slides[step]);renderLesson();}
function canContinue(slide){if(slide.type==='choice'||slide.type==='hydrogen'||slide.type==='bond')return passed(slide);if(slide.type==='everyday'||slide.type==='contrast'||slide.type==='atom'||slide.type==='roots'||teachingTypes.has(slide.type))return viewed(slide);return true}
function activityFor(slide){let html='';const isQuestion=slide.type==='choice'||slide.type==='hydrogen';
 if(isQuestion){html+=`<div class="lesson-instruction">AUKERATU ERANTZUNA</div><div class="lesson-activity">${slide.options.map((option,i)=>`<button type="button" class="option ${selections[slide.id]===i?'selected':''} ${passed(slide)&&i===slide.correct?'correct':''}" ${passed(slide)?'disabled':''} data-answer="${i}" aria-pressed="${selections[slide.id]===i}"><span class="letter">${'ABC'[i]}</span><span>${proseChemHTML(option)}</span></button>`).join('')}</div>`;
  if(passed(slide)&&guideNotice?.kind!=='success')html+=`<div class="answer-state success-state" role="status">✓ Erantzun zuzena</div>`;else if(feedback[slide.id]&&guideNotice?.kind!=='error')html+=`<div class="answer-state retry-state" role="status">Berriro saiatu. Sakatu «Pista» laguntza ikusteko.</div>`;
 }
 if(slide.type==='everyday'){const v=explored[slide.id]||'sugar';const item=slide.items.find(x=>x.id===v)||slide.items[0];html+=`<div class="lesson-instruction">OBJEKTU BAT AUKERATU</div><div class="everyday-grid">${slide.items.map(it=>`<button type="button" class="everyday-btn ${v===it.id?'active':''}" data-everyday="${safe(it.id)}" aria-pressed="${v===it.id}">${everydayIcon(it.icon)}${safe(it.title)}</button>`).join('')}</div><div class="everyday-details" aria-live="polite"><strong>${proseChemHTML(item.detail)}</strong>${proseChemHTML(item.why)}</div><p class="activity-ready">${viewed(slide)?'✓ Objektu bat aztertu duzu. Jarrai dezakezu.':'Hautatu objektu bat jarraitzeko.'}</p>`}
 if(slide.type==='contrast'){const v=explored[slide.id]||'CH4';html+=`<div class="lesson-instruction">ALDERATU BI EGITURAK</div><div class="contrast-choices"><button type="button" class="switch-chip ${v==='CH4'?'active':''}" data-contrast="CH4" aria-pressed="${v==='CH4'}">${chemHTML('CH4')} · Organikoa</button><button type="button" class="switch-chip ${v==='CO2'?'active':''}" data-contrast="CO2" aria-pressed="${v==='CO2'}">${chemHTML('CO2')} · Ez-organikoa</button></div><p class="atom-text">${v==='CH4'?'Metanoa: karbonoa hidrogenoarekin lotuta dago.':'Karbono dioxidoa: oxido ez-organikoa da, karbonoa izan arren.'}</p><p class="activity-ready">${viewed(slide)?'✓ Bi familiak alderatu dituzu.':`Sakatu ${chemHTML('CO2')} konposatua jarraitu aurretik.`}</p>`}
 if(slide.type==='atom'){const v=explored[slide.id]||'C';html+=`<div class="lesson-instruction">BI ATOMOAK IKUSI</div><div class="atom-switch"><button type="button" class="switch-chip ${v==='C'?'active':''}" data-atom="C" aria-pressed="${v==='C'}">C · Karbonoa</button><button type="button" class="switch-chip ${v==='H'?'active':''}" data-atom="H" aria-pressed="${v==='H'}">H · Hidrogenoa</button></div><div class="atom-text">${v==='C'?'C-k 4 elektroi ditu kanpoko geruzan. Ohiko lotura kobalenteetan 4 lotura-unitate osatzen ditu.':'H-k elektroi 1 du eta beste atomo batekin partekatuta lehen geruzako bi elektroi lor ditzake.'}</div><p class="activity-ready">${viewed(slide)?'✓ Bi atomoak aztertu dituzu.':'Sakatu H elementua ere ikusteko.'}</p>`}
 if(slide.type==='bond')html+=`<div class="lesson-instruction">ERANTSI 4 HIDROGENO</div><button type="button" class="main-action" data-bondadd ${bondCount>=4?'disabled':''}>+ Erantsi H <span aria-hidden="true">→</span></button> <button type="button" class="secondary-action" data-bondreset>Berriro hasi</button><p class="activity-ready">${bondCount>=4?`✓ Lau C–H loturak osatu dituzu: ${chemHTML('CH4')}.`:'H bakoitzak lotura bakarra osatzen du. Gehitu banan-banan.'}</p>`;
 if(slide.type==='roots'){const n=Number(explored[slide.id]||3);const names=['','met','et','prop','but','pent','hex'];html+=`<div class="lesson-instruction">HAUTATU AURRIZKIA</div><div class="root-buttons">${names.slice(1).map((name,i)=>`<button type="button" class="switch-chip ${n===i+1?'active':''}" data-root="${i+1}" aria-pressed="${n===i+1}">${name}-</button>`).join('')}</div><div class="everyday-details"><strong>${safe(names[n])}- → ${n} C</strong>Adibidea: ${safe(['','metanoa','etanoa','propanoa','butanoa','pentanoa','hexanoa'][n])}.</div><p class="activity-ready">${viewed(slide)?'✓ Katearen luzera aldatu duzu.':'Sakatu aurrizkietako bat ikusteko.'}</p>`}
 if(slide.type==='finish'){html+=`<div class="lesson-instruction">GOGORATU IKASITAKOA</div><ul class="finish-list">${slide.points.map(p=>`<li>${proseChemHTML(p)}</li>`).join('')}</ul><div class="feedback">Prest zaude hurrengo etapara joateko!</div>`}
 if(!html&&slide.note)html+=`<div class="hint-copy">${proseChemHTML(slide.note)}</div>`;
 return html;
}
function renderLesson(){
 if(!activeId)return;
 const unit=units.find(u=>u.id===activeId),slide=unit.slides[step],isFinal=step===unit.slides.length-1;
 const can=canContinue(slide),isQuestion=slide.type==='choice'||slide.type==='hydrogen';
 const teaching=teachingTypes.has(slide.type),hasExplained=viewed(slide),activity=activityFor(slide);
 const mainText=(teaching&&!hasExplained)
   ? '<p class="focal-prompt">Begiratu irudiari. Zer antzematen duzu?</p>'
   : `<p class="lesson-explainer ${teaching?'explanation-appears':''}">${proseChemHTML(slide.body)}</p>`;
 const showActivity=(!teaching||hasExplained);
 $('#lessonPage').innerHTML=`<div class="lesson-top"><button type="button" class="lesson-exit" data-exit>← Ibilbidea</button><div class="lesson-progress" aria-label="Etaparen aurrerapena">${unit.slides.map((s,i)=>`<span class="progress-dot ${i<step?'done':i===step?'current':''}" title="${i+1}. pantaila"></span>`).join('')}</div><div class="lesson-count">${step+1} / ${unit.slides.length}</div><button type="button" data-motion class="motion-control" aria-pressed="${motionPaused}">${motionPaused?'Animazioak aktibatu':'Gelditu animazioak'}</button></div>
 <article class="focus-lesson"><header class="focus-header"><div class="overline">${safe(unit.number)} · ${safe(unit.title)} <span class="focus-tag">/ ${safe(slide.tag)}</span></div><h1 class="serif">${safe(slide.title)}</h1></header>
 <div class="focal-area ${teaching&&!hasExplained?'observe-mode':''}"><div class="lesson-art">${decorationFor(slide)}</div></div>
 <div class="focus-content">${mainText}
 ${showActivity?`<div class="focus-activity">${activity}</div>`:''}
 ${guideNoticeHTML()}
 <div class="focus-actions"><button type="button" class="secondary-action" data-prev ${step===0?'disabled':''}>← Aurrekoa</button><button type="button" class="lesson-catalog-button" data-catalog-open>Familien gida ↗</button><button type="button" class="guide-ask" data-guidehelp aria-label="Pista ikusi">${guideAvatar('help','mini')}<span>Pista</span></button>
 ${teaching&&!hasExplained?`<button type="button" class="main-action" data-explain>Ikusi azalpena →</button>`:isQuestion&&!passed(slide)?`<button type="button" class="main-action" data-check ${selections[slide.id]===undefined?'disabled':''}>Egiaztatu ✓</button>`:`<button type="button" class="main-action" data-next ${!can?'disabled':''}>${isFinal?'Etapa amaitu ✓':'Hurrengoa →'}</button>`}</div></div>
 <p class="lesson-citation">KIMIKA · Adibide didaktikoak, ez PAUko enuntziatu ofizialak.</p></article>`;
 document.title=`${unit.title} · KIMIKA`;
}
function changeStep(n){const unit=units.find(u=>u.id===activeId);step=Math.max(0,Math.min(n,unit.slides.length-1));state.positions[activeId]=Math.max(step,state.positions[activeId]||0);save();enterSlide(unit.slides[step]);renderLesson();window.scrollTo({top:0,behavior:'instant'})}
function next(){const unit=units.find(u=>u.id===activeId),slide=unit.slides[step];if(!canContinue(slide))return;if(step===unit.slides.length-1){if(!completed(unit.id))state.completed.push(unit.id);delete state.positions[unit.id];save();location.hash='#mapa';renderMap();window.scrollTo({top:0,behavior:'instant'});return;}changeStep(step+1)}
function route(){
 const h=decodeURIComponent(location.hash.slice(1));
 if(h==='periodikoak'||h==='propiedades'||h==='propietateak'){renderPeriodic();return}
 if(h==='kontsultatu'||h==='teoria'||h==='organikoa'||h==='organica'){renderConsult();return}
 if(h==='praktikatu'||h==='ariketak'||h==='ejercicios'){renderPractice();return}
 if(h.startsWith('ikasgaia/')){
   const id=h.split('/')[1];if(activeId===id&&!$('#lessonPage').hidden)return;openUnit(id);return;
 }
 if(h==='mapa'||h==='ikasi'){
   renderMap();return;
 }
 renderPeriodic();
}
window.addEventListener('hashchange',()=>{route();window.scrollTo({top:0,behavior:'instant'})});
document.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){
   e.preventDefault();
   if(document.body.classList.contains('catalog-drawer-open'))closeCatalogDrawer();
   else openCatalogDrawer();
   return;
 }
 if(e.key==='Escape'&&document.body.classList.contains('story-open'))closeIntro();
 else if(e.key==='Escape'&&document.body.classList.contains('catalog-drawer-open'))closeCatalogDrawer();
});
document.addEventListener('click',e=>{
 const t=e.target.closest('button');if(!t)return;
 if(t.classList.contains('lang-btn')&&t.dataset.lang){setLang(t.dataset.lang);return}
 if(t.hasAttribute('data-guide-jump')){jumpToCatalog();return}
 if(t.hasAttribute('data-catalog-close')){closeCatalogDrawer();return}
 if(t.hasAttribute('data-intro-open')){openIntro();return}
 if(t.hasAttribute('data-intro-library')){closeIntro();location.hash='#teoria';route();return}
 if(t.hasAttribute('data-intro-close')){closeIntro();return}
 if(t.hasAttribute('data-intro-next')){nextIntro();return}
 if(t.dataset.open){const id=t.dataset.open;location.hash='#ikasgaia/'+id;openUnit(id);return}
 if(t.hasAttribute('data-reset')){if(confirm('Gailu honetako aurrerapena ezabatu eta berriro hasi?')){state=initial();save();renderMap()}return}
 if(t.hasAttribute('data-exit')){location.hash='#mapa';route();return}
 if(t.hasAttribute('data-catalog-open')){openCatalogDrawer();return}
 if(!activeId)return;
 const slide=units.find(u=>u.id===activeId).slides[step];
 if(t.hasAttribute('data-motion')){motionPaused=!motionPaused;document.body.classList.toggle('motion-paused',motionPaused);renderLesson();return}
 if(t.hasAttribute('data-guideclose')){guideNotice=null;renderLesson();return}
 if(t.hasAttribute('data-guidehelp')){showHint(slide);renderLesson();return}
 if(t.hasAttribute('data-explain')){seen(slide);const moment=momentFor(slide);if(moment)openGuide('remember',moment.text);renderLesson();return}
 if(t.hasAttribute('data-prev')){changeStep(step-1);return}
 if(t.hasAttribute('data-next')){next();return}
 if(t.hasAttribute('data-answer')){if(passed(slide))return;selections[slide.id]=Number(t.dataset.answer);delete feedback[slide.id];if(guideNotice?.kind==='error')guideNotice=null;renderLesson();return}
 if(t.hasAttribute('data-check')){const ans=selections[slide.id];if(ans===undefined)return;if(ans===slide.correct){pass(slide);delete feedback[slide.id];openGuide('success',slide.success)}else{feedback[slide.id]=slide.retry;openGuide('error',slide.retry)}renderLesson();return}
 if(t.hasAttribute('data-everyday')){explored[slide.id]=t.dataset.everyday;seen(slide);renderLesson();return}
 if(t.hasAttribute('data-contrast')){explored[slide.id]=t.dataset.contrast;if(t.dataset.contrast==='CO2')seen(slide);renderLesson();return}
 if(t.hasAttribute('data-atom')){explored[slide.id]=t.dataset.atom;if(t.dataset.atom==='H')seen(slide);renderLesson();return}
 if(t.hasAttribute('data-root')){explored[slide.id]=t.dataset.root;seen(slide);renderLesson();return}
 if(t.hasAttribute('data-bondadd')){bondCount=Math.min(4,bondCount+1);if(bondCount===4){pass(slide);openGuide('success','Lau C–H loturak osatuta! Karbonoaren lau lotura-unitateak bete dituzu.')}renderLesson();return}
 if(t.hasAttribute('data-bondreset')){bondCount=0;guideNotice=null;renderLesson();return}
});
route();
