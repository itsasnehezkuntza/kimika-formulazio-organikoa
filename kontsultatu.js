// KIMIKA · FORMULAZIO ORGANIKOA — Kontsultatu (Biblioteka Didaktikoa) eta Txuletario Azkarra
// Vanilla ES Module · %100 euskaraz · GitHub Pages-ekin bateragarria.

import {
  CHEM_COLOR_LEGEND,
  CARBON_ROOTS,
  ALKYL_RADICALS,
  EVERYDAY_EXAMPLES,
  CLASSIFICATION_EXAMPLES,
  FAMILIES,
  FAMILY_CATEGORIES,
  CYCLE_STAGES,
  GUIDED_CYCLE,
  MOLECULES,
  BRANCH_LESSONS,
  CHOSEN_HIERARCHY,
  COMPLEMENTARY_HIERARCHY,
  PRIORITY_LESSONS,
  NAME_TO_FORMULA,
  FORMULA_TO_NAME,
  COMMON_MISTAKES,
  KORA_ASSETS
} from './kimika-data.js';

/* --------------------------------------------------------------------------
   1. HTML & Chemical Formatting Utilities
   -------------------------------------------------------------------------- */
const SUB_MAP = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₙ': 'n', '₊': '+', '₋': '−'
};
const SUP_MAP = { '⁺': '+', '⁻': '−' };

export function esc(val) {
  return String(val ?? '').replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}

export function norm(str) {
  return String(str ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function formatEscapedChem(escaped) {
  return escaped
    // 1. Explicit Unicode subscript / superscript sequences (e.g. C₁₂H₂₂O₁₁, (C₆H₁₀O₅)ₙ, [–CH₂–CH₂–]ₙ, CₙH₂ₙ₊₂, Na⁺, Cl⁻)
    .replace(/[₀-₉ₙ₊₋]+/g, run => `<sub>${Array.from(run, ch => SUB_MAP[ch] || ch).join('')}</sub>`)
    .replace(/[⁺⁻]+/g, run => `<sup>${Array.from(run, ch => SUP_MAP[ch] || ch).join('')}</sup>`)
    // 2. ASCII chemical subscripts on non-C element symbols (H2O, CH3, CH2Cl, NH2, CO2, O2, Br2, etc.)
    .replace(/(Cl|Br|Na|Mg|Ca|Fe|Al|Si|[HONFPSIBK])(\d+)/g, '$1<sub>$2</sub>')
    // 3. ASCII subscripts on Carbon in molecular formulas (C4H10, C3H6, C12H22O11, C4H9BrO, CaC2)
    //    without touching carbon position labels like C1, C2, C3, C4 in explanations!
    .replace(/C(\d+)(?=[A-Z]|<sub>)/g, 'C<sub>$1</sub>')
    .replace(/(?<=(?:Ca|Al|Mg|Na|Li|Fe|Si))C(\d+)/g, 'C<sub>$1</sub>')
    // 4. Repeat counts or polymer n after closing parenthesis or bracket: (CH2)3, (C6H10O5)n, [–CH2–CH2–]n
    .replace(/([\)\]])(\d+|n)(?![A-Za-z])/g, '$1<sub>$2</sub>');
}

/**
 * Formats chemical formulas cleanly with real <sub>/<sup> tags without turning
 * IUPAC locators (e.g. "2-metil", "butan-2-ola", "1,2-") or carbon numbers (C1, C2) into subscripts.
 */
export function chemHTML(raw) {
  return formatEscapedChem(esc(raw));
}

/**
 * Safely escapes didactic prose while converting embedded chemical formulas and
 * Unicode subscripts/superscripts (CH₃, CₙH₂ₙ₊₂, C₄H₁₀, CO₂, Na⁺) into real <sub>/<sup> tags.
 */
export function proseChemHTML(raw) {
  return formatEscapedChem(esc(raw));
}

/**
 * Highlights a semi-developed formula using the 5 functional chemical colors
 * while preserving 100% of characters and subscripts.
 */
export function highlightFormulaHTML(formula, familyId = '') {
  const str = String(formula ?? '');
  if (!str) return '';

  // Special clean 2-side parsing for esters: Acyl–C(=O)–O–Alkyl
  if (familyId === 'ester' && str.includes('–O–')) {
    const idx = str.indexOf('–O–');
    const left = str.slice(0, idx + 3); // includes –O–
    const right = str.slice(idx + 3);
    const leftParts = left.split(/(–)/);
    const leftHTML = leftParts.map(tok => {
      if (tok === '–') return '<span class="chem-bond-sep">–</span>';
      if (!tok) return '';
      const isFunc = tok.includes('C(=O)') || tok === 'O' || tok.includes('COO');
      return `<span class="chem-tok" data-role="${isFunc ? 'function' : 'chain'}">${chemHTML(tok)}</span>`;
    }).join('');
    const rightHTML = `<span class="chem-tok" data-role="esterAlcohol">${chemHTML(right)}</span>`;
    return leftHTML + rightHTML;
  }

  // Split by main-chain bond connectors (–, =, ≡), keeping connectors
  const tokens = str.split(/(–|=|≡)/);
  return tokens.map((tok, i) => {
    if (!tok) return '';
    if (tok === '=') return '<span class="chem-tok" data-role="multiple">=</span>';
    if (tok === '≡') return '<span class="chem-tok" data-role="multiple">≡</span>';
    if (tok === '–') return '<span class="chem-bond-sep">–</span>';

    const prevSep = tokens[i - 1] || '';
    const nextSep = tokens[i + 1] || '';
    const touchesMultiple = prevSep === '=' || nextSep === '=' || prevSep === '≡' || nextSep === '≡';

    // Pure functional group tokens
    if (/^(COOH|CHO|CONH2|CONH₂|OH|HO|NH2|NH₂|C\(=O\)|CO)$/.test(tok)) {
      return `<span class="chem-tok" data-role="function">${chemHTML(tok)}</span>`;
    }
    if (tok === 'O' && familyId === 'ether') {
      return `<span class="chem-tok" data-role="function">O</span>`;
    }
    // Pure halogen substituent token at end/start
    if (/^(F|Cl|Br|I)$/.test(tok)) {
      return `<span class="chem-tok" data-role="branch">${chemHTML(tok)}</span>`;
    }

    // Segment with parenthesized group/branch, e.g. CH(OH), CH(CH3), CH(Br), C(=O), CH(NH2)
    if (tok.includes('(') && tok.includes(')')) {
      const m = tok.match(/^([A-Za-z0-9₀-₉]+)(\([^)]+\))([A-Za-z0-9₀-₉]*)$/);
      if (m) {
        const [, base, paren, tail] = m;
        const baseRole = touchesMultiple ? 'multiple' : (paren === '(=O)' ? 'function' : 'chain');
        const isFuncParen = /^\((OH|NH2|NH₂|=O|CHO|COOH)\)$/.test(paren);
        const parenRole = isFuncParen ? 'function' : 'branch';
        return `<span class="chem-tok" data-role="${baseRole}">${chemHTML(base)}</span>` +
               `<span class="chem-tok" data-role="${parenRole}">${chemHTML(paren)}</span>` +
               (tail ? `<span class="chem-tok" data-role="${baseRole}">${chemHTML(tail)}</span>` : '');
      }
    }

    // Attached halogen without dash (e.g. ClCH2 or CH2Cl in 1,2-dikloroetanoa)
    const leadHal = tok.match(/^(F|Cl|Br|I)(C.*)$/);
    if (leadHal) {
      const stemRole = touchesMultiple ? 'multiple' : 'chain';
      return `<span class="chem-tok" data-role="branch">${chemHTML(leadHal[1])}</span><span class="chem-tok" data-role="${stemRole}">${chemHTML(leadHal[2])}</span>`;
    }
    const tailHal = tok.match(/^(.*C[H0-9₀-₉]*)(F|Cl|Br|I)$/);
    if (tailHal) {
      const stemRole = touchesMultiple ? 'multiple' : 'chain';
      return `<span class="chem-tok" data-role="${stemRole}">${chemHTML(tailHal[1])}</span><span class="chem-tok" data-role="branch">${chemHTML(tailHal[2])}</span>`;
    }

    // Trailing attached functional group without dash (e.g. CH2OH)
    if (/OH$/.test(tok) && tok.length > 2) {
      const stem = tok.slice(0, -2);
      return `<span class="chem-tok" data-role="chain">${chemHTML(stem)}</span><span class="chem-tok" data-role="function">OH</span>`;
    }

    const defaultRole = touchesMultiple ? 'multiple' : (tok === 'H' ? 'neutral' : 'chain');
    return `<span class="chem-tok" data-role="${defaultRole}">${chemHTML(tok)}</span>`;
  }).join('');
}

/* --------------------------------------------------------------------------
   2. Mathematical & Chemical Valence Verification
   -------------------------------------------------------------------------- */
const ATOM_VALENCE = { C: 4, O: 2, F: 1, Cl: 1, Br: 1, I: 1 };

function hiddenHydrogen(molecule) {
  return Object.fromEntries(
    molecule.atoms.map(at => {
      const used = molecule.bonds
        .filter(bo => bo.from === at.id || bo.to === at.id)
        .reduce((sum, bo) => sum + bo.order, 0);
      return [at.id, ATOM_VALENCE[at.el] - used];
    })
  );
}

function buildMolecularFormula(mol) {
  const counts = {};
  const hMap = hiddenHydrogen(mol);
  for (const at of mol.atoms) {
    counts[at.el] = (counts[at.el] || 0) + 1;
    counts.H = (counts.H || 0) + hMap[at.id];
  }
  return ['C', 'H', 'Br', 'Cl', 'F', 'I', 'N', 'O']
    .filter(k => counts[k] > 0)
    .map(k => k + (counts[k] === 1 ? '' : counts[k]))
    .join('');
}

export function verifyChemistry() {
  for (const [key, mol] of Object.entries(MOLECULES)) {
    const ids = new Set(mol.atoms.map(at => at.id));
    if (ids.size !== mol.atoms.length) throw new Error(`${key}: atomo errepikatuak`);
    for (const bo of mol.bonds) {
      if (!ids.has(bo.from) || !ids.has(bo.to) || ![1, 2, 3].includes(bo.order)) {
        throw new Error(`${key}: lotura baliogabea`);
      }
    }
    const hMap = hiddenHydrogen(mol);
    for (const [id, n] of Object.entries(hMap)) {
      if (!Number.isInteger(n) || n < 0) {
        throw new Error(`${key}: balentzia baliogabea (${id} = ${n})`);
      }
    }
    const built = buildMolecularFormula(mol);
    if (built !== mol.molecular) {
      throw new Error(`${key}: espero zen ${mol.molecular}, lortu da ${built}`);
    }
  }
  return true;
}

verifyChemistry();

/* --------------------------------------------------------------------------
   3. Kora Margin Note Component
   -------------------------------------------------------------------------- */
const KORA_LABELS = {
  adi: { tag: 'Adi!', img: KORA_ASSETS.important },
  important: { tag: 'Garrantzitsua!', img: KORA_ASSETS.important },
  remember: { tag: 'Gogoratu!', img: KORA_ASSETS.remember },
  think: { tag: 'Pista', img: KORA_ASSETS.think },
  success: { tag: 'Primeran!', img: KORA_ASSETS.success },
  welcome: { tag: 'Ongi etorri!', img: KORA_ASSETS.welcome }
};

function koraNoteHTML(kind, htmlText) {
  const cfg = KORA_LABELS[kind] || KORA_LABELS.remember;
  return `<aside class="kora-note" data-kind="${esc(kind)}" aria-label="${esc(cfg.tag)}">
    <div class="kora-note-avatar">
      <img src="${esc(cfg.img)}" alt="" width="58" height="58" loading="lazy" decoding="async">
    </div>
    <div class="kora-note-body">
      <span class="kora-note-tag">${esc(cfg.tag)}</span>
      <p>${htmlText}</p>
    </div>
  </aside>`;
}

/* --------------------------------------------------------------------------
   4. Scientific SVG Generators (Semantic Accessible Palette)
   -------------------------------------------------------------------------- */
const SVG_THEME = {
  chain: '#2D8662',
  multiple: '#7B4EC2',
  branch: '#D96831',
  secondary: '#D96831',
  group: '#C98A0E',
  esterAlcohol: '#D96831',
  locator: '#2B6CB0',
  neutral: '#646D82'
};

export function moleculeSvg(mol, {
  visible = ['chain', 'multiple', 'branch', 'group', 'esterAlcohol', 'hydrogens'],
  numbering = false,
  numberingBoth = false,
  focusNodes = [],
  validate = false,
  accessibleText = 'Egitura kimikoa'
} = {}) {
  const all = new Map(mol.atoms.map(at => [at.id, at]));
  const showAll = visible.includes('all');
  const visibleAtom = at => showAll || at.role === 'chain' || visible.includes(at.role);
  const nodes = mol.atoms.filter(at => visibleAtom(at) && (showAll || visible.includes('chain') || at.role !== 'chain'));
  const allowed = new Set(nodes.map(at => at.id));
  const bonds = mol.bonds.filter(bo => allowed.has(bo.from) && allowed.has(bo.to));
  const hydrogen = hiddenHydrogen(mol);
  const showHydrogens = showAll || visible.includes('hydrogens');
  const highlighted = new Set(focusNodes);
  const focus = highlighted.size > 0;

  const drawBond = (x1, y1, x2, y2, order, color, opacity) => {
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len, perpx = -uy, perpy = ux;
    const sx = x1 + ux * 28, sy = y1 + uy * 28, ex = x2 - ux * 28, ey = y2 - uy * 28;
    if (order === 1) {
      return `<line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${color}" stroke-width="3.6" stroke-linecap="round" opacity="${opacity}"/>`;
    }
    return Array.from({ length: order }, (_, i) => {
      const off = (i - (order - 1) / 2) * 7;
      return `<line x1="${(sx + perpx * off).toFixed(1)}" y1="${(sy + perpy * off).toFixed(1)}" x2="${(ex + perpx * off).toFixed(1)}" y2="${(ey + perpy * off).toFixed(1)}" stroke="${color}" stroke-width="3.1" stroke-linecap="round" opacity="${opacity}"/>`;
    }).join('');
  };

  const bondSVG = bonds.map(bo => {
    const fr = all.get(bo.from), to = all.get(bo.to);
    const actualOrder = (bo.role === 'multiple' && !showAll && !visible.includes('multiple')) ? 1 : bo.order;
    const role = actualOrder > 1 && bo.role === 'multiple' ? 'multiple' : (bo.role === 'group' ? 'group' : bo.role);
    const selected = !focus || (highlighted.has(bo.from) && highlighted.has(bo.to));
    return drawBond(fr.x, fr.y, to.x, to.y, actualOrder, SVG_THEME[role] || SVG_THEME.chain, selected ? 1 : 0.22);
  }).join('');

  const atSVG = nodes.map(at => {
    let color = SVG_THEME[at.role] || SVG_THEME.chain;
    if (at.el === 'O') color = at.role === 'secondary' ? SVG_THEME.secondary : SVG_THEME.group;
    if (focus && !highlighted.has(at.id)) color = '#9FA6B8';
    const alpha = focus && !highlighted.has(at.id) ? '0.52' : '1';
    const h = showHydrogens ? hydrogen[at.id] : 0;

    // Element in its semantic color; attached H in calm neutral slate so H never mimics a branch or group
    const hColor = focus && !highlighted.has(at.id) ? '#9FA6B8' : SVG_THEME.neutral;
    const label = h > 0
      ? `<tspan fill="${color}">${esc(at.el)}</tspan><tspan fill="${hColor}">H</tspan>${h > 1 ? `<tspan fill="${hColor}" dy="5" font-size="14">${h}</tspan>` : ''}`
      : `<tspan fill="${color}">${esc(at.el)}</tspan>`;

    const check = validate
      ? `<circle cx="${at.x + 36}" cy="${at.y - 31}" r="10" fill="#E7F6EF" stroke="#2D8662" stroke-width="1.3"/><text x="${at.x + 36}" y="${at.y - 27}" fill="#196144" font-size="12" font-weight="800" text-anchor="middle">✓</text>`
      : '';

    return `<g opacity="${alpha}">
      <circle cx="${at.x}" cy="${at.y}" r="25" fill="#FFFFFF" opacity="0.96"/>
      <text text-anchor="middle" x="${at.x}" y="${at.y + 7}" font-family="Segoe UI, Poppins, sans-serif" font-size="21" font-weight="700">${label}</text>
      ${check}
    </g>`;
  }).join('');

  const labels = numbering
    ? mol.main.filter(id => allowed.has(id)).map((id, index) => {
        const at = all.get(id);
        const alt = numberingBoth
          ? `<circle cx="${at.x}" cy="${at.y - 56}" r="13.5" fill="#FFF0E6" stroke="#E5A985" stroke-width="1.2"/><text x="${at.x}" y="${at.y - 52}" fill="#9E4012" font-size="12.5" font-weight="700" text-anchor="middle">${mol.main.length - index}</text>`
          : '';
        return `<g>
          <circle cx="${at.x}" cy="${at.y + 58}" r="14" fill="#EAF2FB" stroke="#8FB8E3" stroke-width="1.3"/>
          <text x="${at.x}" y="${at.y + 62}" fill="#1B518A" font-size="13" font-weight="700" text-anchor="middle">${index + 1}</text>
          ${alt}
        </g>`;
      }).join('')
    : '';

  const placeholder = nodes.length === 0
    ? '<text x="320" y="205" text-anchor="middle" font-family="Poppins, sans-serif" font-size="16" font-weight="600" fill="#6C738A">1. urratsa: izenaren osagaiak banatu eta aztertu</text>'
    : '';

  const cleanAria = String(accessibleText).replace(/[₀-₉ₙ₊₋]/g, ch => SUB_MAP[ch] || ch);
  return `<svg viewBox="0 0 640 390" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(cleanAria)}">${bondSVG}${atSVG}${labels}${placeholder}</svg>`;
}

export function branchingDiagram(ex, step, compare) {
  const byId = new Map(ex.atoms.map(a => [a.id, a]));
  const selectedPath = compare ? ex.alternative : ex.main;
  const inPath = new Set(selectedPath);

  const allBonds = ex.bonds.map(b => {
    const p = byId.get(b.from), q = byId.get(b.to);
    const dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len, px = -uy, py = ux;
    const sx = p.x + ux * 33, sy = p.y + uy * 33, exx = q.x - ux * 33, ey = q.y - uy * 33;
    const active = inPath.has(b.from) && inPath.has(b.to);
    const isFuncBond = p.element === 'O' || q.element === 'O';
    const color = b.order > 1 ? SVG_THEME.multiple : isFuncBond ? SVG_THEME.group : active ? SVG_THEME.chain : SVG_THEME.branch;
    const opacity = step.mode === 'all' ? 1 : (active || step.mode === 'branch' ? 0.98 : 0.25);
    return Array.from({ length: b.order }, (_, i) => {
      const offset = (i - (b.order - 1) / 2) * 7;
      return `<line x1="${(sx + px * offset).toFixed(1)}" y1="${(sy + py * offset).toFixed(1)}" x2="${(exx + px * offset).toFixed(1)}" y2="${(ey + py * offset).toFixed(1)}" stroke="${color}" stroke-width="3.8" stroke-linecap="round" opacity="${opacity}"/>`;
    }).join('');
  }).join('');

  const atoms = ex.atoms.map(a => {
    const order = ex.bonds.filter(b => b.from === a.id || b.to === a.id).reduce((n, b) => n + b.order, 0);
    const hydrogen = (a.element === 'O' ? 2 : 4) - order;
    const active = inPath.has(a.id);
    const functional = a.element === 'O';
    const stroke = functional ? SVG_THEME.group : active ? SVG_THEME.chain : SVG_THEME.branch;
    const bg = functional ? '#FEF4D6' : active ? '#E7F6EF' : '#FFF0E6';
    const textCol = functional ? '#7D5200' : active ? '#196144' : '#9E4012';
    const dim = step.mode === 'main' && !active ? 0.28 : 1;

    const label = a.element === 'O'
      ? (hydrogen === 1 ? 'OH' : 'O')
      : (hydrogen === 0 ? 'C' : `CH${hydrogen > 1 ? `<tspan dy="4.5" font-size="13.5">${hydrogen}</tspan>` : ''}`);

    return `<g opacity="${dim}">
      <rect x="${a.x - 30}" y="${a.y - 22}" width="60" height="44" rx="10" fill="${bg}" stroke="${stroke}" stroke-width="1.5"/>
      <text x="${a.x}" y="${a.y + 6}" fill="${textCol}" text-anchor="middle" font-size="19" font-weight="700" font-family="Segoe UI, Poppins, sans-serif">${label}</text>
    </g>`;
  }).join('');

  const nums = step.numbered
    ? ex.numbers.map((id, i) => {
        const node = byId.get(id);
        const no = compare ? ex.numbers.length - i : i + 1;
        const fill = compare ? '#FFF0E6' : '#EAF2FB';
        const stroke = compare ? '#E5A985' : '#8FB8E3';
        const ink = compare ? '#9E4012' : '#1B518A';
        return `<g>
          <circle cx="${node.x}" cy="${node.y - 58}" r="15.5" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
          <text x="${node.x}" y="${node.y - 53}" fill="${ink}" font-size="15" font-weight="700" text-anchor="middle" font-family="Poppins, sans-serif">${no}</text>
        </g>`;
      }).join('')
    : '';

  return `<svg viewBox="0 0 680 315" role="img" aria-label="${esc(ex.name)}: kate nagusia, adarrak eta zenbaketa">${allBonds}${atoms}${nums}</svg>`;
}

function svgChemTspans(raw, subDy = 4, subSize = 12) {
  const plain = String(raw || '').replace(/[₀-₉ₙ]/g, m => SUB_MAP[m] || m);
  const parts = plain.split(/((?:Cl|Br|[A-Za-z])\d+)/g).filter(Boolean);
  let shifted = false;
  return parts.map(part => {
    const m = part.match(/^(Cl|Br|[A-Za-z])(\d+)$/);
    if (m) {
      const prefix = shifted ? `<tspan dy="${-subDy}">${esc(m[1])}</tspan>` : esc(m[1]);
      shifted = true;
      return `${prefix}<tspan dy="${subDy}" font-size="${subSize}">${m[2]}</tspan>`;
    }
    if (shifted) {
      shifted = false;
      return `<tspan dy="${-subDy}">${esc(part)}</tspan>`;
    }
    return esc(part);
  }).join('');
}

/**
 * Ring / Cycle SVG generator.
 * Fixes the v1.9 bug where branch labels were hardcoded to "CH₃" instead of reading br.label.
 */
export function cycleSVG(config, { numbers = false, branches = true, highlight = [] } = {}) {
  const { n, bonds = [], aromatic = false } = config;
  const cx = 230, cy = 162, r = n <= 4 ? 68 : 78;
  const points = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), ux: Math.cos(a), uy: Math.sin(a) };
  });
  const keys = new Set(highlight);

  const lines = points.map((p, i) => {
    const q = points[(i + 1) % n];
    const multi = bonds.includes(i);
    const base = `<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}" stroke="${multi ? SVG_THEME.multiple : SVG_THEME.chain}" stroke-width="4.4" stroke-linecap="round"/>`;
    if (!multi) return base;
    const dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy);
    const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
    const inward = (cx - mx) * (-dy) + (cy - my) * dx >= 0 ? 1 : -1;
    const ox = (-dy / len) * 9.5 * inward, oy = (dx / len) * 9.5 * inward;
    return base + `<line x1="${(p.x + ox + dx * 0.17).toFixed(1)}" y1="${(p.y + oy + dy * 0.17).toFixed(1)}" x2="${(q.x + ox - dx * 0.17).toFixed(1)}" y2="${(q.y + oy - dy * 0.17).toFixed(1)}" stroke="${SVG_THEME.multiple}" stroke-width="3.1" stroke-linecap="round"/>`;
  }).join('');

  const labels = numbers
    ? points.map((p, i) => {
        const lx = p.x - p.ux * 22, ly = p.y - p.uy * 22;
        return `<g>
          <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="11" fill="${keys.has(i) ? '#FEF4D6' : '#EAF2FB'}" stroke="${keys.has(i) ? '#D19110' : '#8FB8E3'}" stroke-width="1.1"/>
          <text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" font-size="11.5" font-weight="700" fill="${keys.has(i) ? '#7D5200' : '#1B518A'}" text-anchor="middle">${i + 1}</text>
        </g>`;
      }).join('')
    : '';

  const add = branches
    ? (config.branches || []).map(br => {
        const p = points[br.at];
        const qx = p.x + p.ux * 48, qy = p.y + p.uy * 48;
        const tx = qx + p.ux * 22, ty = qy + p.uy * 17;
        const plainLabel = String(br.label || 'CH3').replace(/[₀-₉ₙ]/g, m => SUB_MAP[m] || m);
        const svgLabel = svgChemTspans(plainLabel, 4, 12);
        const boxW = Math.max(52, plainLabel.length * 13);
        return `<g>
          <line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${qx.toFixed(1)}" y2="${qy.toFixed(1)}" stroke="${SVG_THEME.branch}" stroke-width="4.2" stroke-linecap="round"/>
          <rect x="${(tx - boxW / 2).toFixed(1)}" y="${(ty - 15).toFixed(1)}" width="${boxW}" height="30" rx="7" fill="#FFF0E6" stroke="#F2BE9C" stroke-width="1.2"/>
          <text x="${tx.toFixed(1)}" y="${(ty + 5).toFixed(1)}" fill="#9E4012" font-size="16.5" text-anchor="middle" font-weight="700" font-family="Segoe UI, Poppins, sans-serif">${svgLabel}</text>
        </g>`;
      }).join('')
    : '';

  const branchCount = (config.branches || []).length;
  const aria = `${aromatic ? 'Eraztun aromatikoa' : 'Karbono-eraztun itxia'}: ${n} karbono${branchCount ? `, ${branchCount} adar` : ''}`;
  return `<svg viewBox="0 0 460 310" role="img" aria-label="${esc(aria)}">${lines}${labels}${add}</svg>`;
}

/* Additional preserved didactic SVGs (with neutral H colors so they don't collide with locators/branches) */
function methaneContrastSVG() {
  return `<svg viewBox="0 0 300 148" role="img" aria-label="Metanoa: karbono atomo bat lau hidrogenori lotuta">
    <g fill="none" stroke="${SVG_THEME.chain}" stroke-linecap="round" stroke-width="3.2">
      <path d="M150 53V25M150 87v29M129 70H88M171 70h41"/>
    </g>
    <g font-family="Segoe UI, Poppins, sans-serif" font-weight="700" text-anchor="middle">
      <text fill="#196144" font-size="25" x="150" y="79">C</text>
      <text fill="${SVG_THEME.neutral}" font-size="20" x="150" y="20">H</text>
      <text fill="${SVG_THEME.neutral}" font-size="20" x="150" y="138">H</text>
      <text fill="${SVG_THEME.neutral}" font-size="20" x="72" y="77">H</text>
      <text fill="${SVG_THEME.neutral}" font-size="20" x="228" y="77">H</text>
    </g>
  </svg>`;
}

function co2ContrastSVG() {
  return `<svg viewBox="0 0 300 148" role="img" aria-label="Karbono dioxidoa: O=C=O oxido ez-organikoa">
    <g fill="none" stroke="${SVG_THEME.neutral}" stroke-linecap="round" stroke-width="3">
      <path d="M90 65h38M90 75h38M172 65h38M172 75h38"/>
    </g>
    <g font-family="Segoe UI, Poppins, sans-serif" font-weight="700" text-anchor="middle">
      <text fill="#4A5266" font-size="24" x="70" y="78">O</text>
      <text fill="#1C2237" font-size="25" x="150" y="79">C</text>
      <text fill="#4A5266" font-size="24" x="230" y="78">O</text>
    </g>
  </svg>`;
}

function bohrAtomSVG(which) {
  const isC = which === 'C';
  const cx = 160, cy = 115;
  let shells = '';
  if (isC) {
    shells += `<circle cx="${cx}" cy="${cy}" r="42" fill="none" stroke="#CFC8B8" stroke-width="1.8" stroke-dasharray="5 5"/>`;
    shells += `<circle cx="${cx - 42}" cy="${cy}" r="6" fill="#646D82"/><circle cx="${cx + 42}" cy="${cy}" r="6" fill="#646D82"/>`;
  }
  shells += `<circle cx="${cx}" cy="${cy}" r="76" fill="none" stroke="#9EA6B8" stroke-width="2.2"/>`;
  const outer = isC ? 4 : 1;
  for (let i = 0; i < outer; i++) {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / outer;
    shells += `<circle cx="${(cx + 76 * Math.cos(a)).toFixed(1)}" cy="${(cy + 76 * Math.sin(a)).toFixed(1)}" r="7.5" fill="${isC ? SVG_THEME.chain : SVG_THEME.locator}" stroke="#FFFFFF" stroke-width="1.8"/>`;
  }
  return `<svg viewBox="0 0 320 235" role="img" aria-label="${isC ? 'Karbonoa (Z=6): 2 barne-elektroi eta 4 balentzia-elektroi' : 'Hidrogenoa (Z=1): balentzia-elektroi 1'}">
    <circle cx="${cx}" cy="${cy}" r="24" fill="${isC ? '#E7F6EF' : '#F2F3F7'}" stroke="${isC ? SVG_THEME.chain : SVG_THEME.neutral}" stroke-width="2"/>
    ${shells}
    <text x="${cx}" y="${cy + 7}" text-anchor="middle" font-size="21" font-weight="700" fill="#1C2237" font-family="Segoe UI, Poppins, sans-serif">${which}</text>
    <text x="${cx}" y="220" text-anchor="middle" font-size="12.5" font-weight="600" fill="#434B63" font-family="Poppins, sans-serif">${isC ? 'Karbonoa (Z = 6) · 4 balentzia-elektroi' : 'Hidrogenoa (Z = 1) · elektroi 1'}</text>
  </svg>`;
}

function covalentMethaneSVG(bonded) {
  if (!bonded) {
    return `<svg viewBox="0 0 420 220" role="img" aria-label="C atomoa eta 4 H atomo bananduta, lotura egin aurretik">
      <circle cx="210" cy="110" r="30" fill="#E7F6EF" stroke="${SVG_THEME.chain}" stroke-width="2"/>
      <text x="210" y="117" text-anchor="middle" font-size="22" font-weight="700" fill="#196144">C</text>
      <circle cx="210" cy="73" r="5" fill="${SVG_THEME.chain}"/><circle cx="210" cy="147" r="5" fill="${SVG_THEME.chain}"/>
      <circle cx="173" cy="110" r="5" fill="${SVG_THEME.chain}"/><circle cx="247" cy="110" r="5" fill="${SVG_THEME.chain}"/>
      ${[[210, 28, 210, 52], [210, 192, 210, 168], [105, 110, 134, 110], [315, 110, 286, 110]].map(([hx, hy, ex, ey]) => `
        <circle cx="${hx}" cy="${hy}" r="20" fill="#F2F3F7" stroke="${SVG_THEME.neutral}" stroke-width="1.8"/>
        <text x="${hx}" y="${hy + 6}" text-anchor="middle" font-size="17" font-weight="700" fill="#4A5266">H</text>
        <circle cx="${ex}" cy="${ey}" r="4.8" fill="${SVG_THEME.locator}"/>
      `).join('')}
    </svg>`;
  }
  return `<svg viewBox="0 0 420 220" role="img" aria-label="CH4 lotura kobalenteak: 4 elektroi-bikote partekatu">
    <g stroke="${SVG_THEME.chain}" stroke-width="3.5" stroke-linecap="round">
      <line x1="210" y1="80" x2="210" y2="52"/><line x1="210" y1="140" x2="210" y2="168"/>
      <line x1="180" y1="110" x2="142" y2="110"/><line x1="240" y1="110" x2="278" y2="110"/>
    </g>
    <circle cx="210" cy="110" r="30" fill="#E7F6EF" stroke="${SVG_THEME.chain}" stroke-width="2.2"/>
    <text x="210" y="117" text-anchor="middle" font-size="22" font-weight="700" fill="#196144">C</text>
    ${[[210, 32], [210, 188], [122, 110], [298, 110]].map(([hx, hy]) => `
      <circle cx="${hx}" cy="${hy}" r="20" fill="#F2F3F7" stroke="${SVG_THEME.neutral}" stroke-width="1.8"/>
      <text x="${hx}" y="${hy + 6}" text-anchor="middle" font-size="17" font-weight="700" fill="#4A5266">H</text>
    `).join('')}
    ${[[204, 66, 216, 66], [204, 154, 216, 154], [161, 104, 161, 116], [259, 104, 259, 116]].map(([x1, y1, x2, y2]) => `
      <circle cx="${x1}" cy="${y1}" r="4.2" fill="${SVG_THEME.chain}"/><circle cx="${x2}" cy="${y2}" r="4.2" fill="${SVG_THEME.locator}"/>
    `).join('')}
  </svg>`;
}

function developedButaneSVG() {
  const xs = [95, 210, 325, 440], cy = 96;
  const ln = (x1, y1, x2, y2, col = '#8A92A6') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2.4" stroke-linecap="round"/>`;
  let bonds = '';
  for (let i = 0; i < 3; i++) bonds += ln(xs[i] + 15, cy, xs[i + 1] - 15, cy, SVG_THEME.chain);
  const txt = (x, y, s, col) => `<text x="${x}" y="${y}" fill="${col}" text-anchor="middle" dominant-baseline="middle" font-size="18" font-weight="700" font-family="Segoe UI, Poppins, sans-serif">${s}</text>`;
  let atoms = '';
  xs.forEach(x => {
    atoms += txt(x, cy, 'C', '#196144');
    bonds += ln(x, cy - 15, x, cy - 38) + ln(x, cy + 15, x, cy + 38);
    atoms += txt(x, cy - 52, 'H', SVG_THEME.neutral) + txt(x, cy + 52, 'H', SVG_THEME.neutral);
  });
  bonds += ln(80, cy, 48, cy) + ln(455, cy, 487, cy);
  atoms += txt(33, cy, 'H', SVG_THEME.neutral) + txt(502, cy, 'H', SVG_THEME.neutral);
  return `<svg viewBox="0 0 535 192" role="img" aria-label="Butanoaren formula garatua: 4 C eta 10 H lotura guztiak agerian">${bonds}${atoms}</svg>`;
}

function skeletalButaneSVG() {
  return `<svg viewBox="0 0 380 124" role="img" aria-label="Butanoaren formula eskeletikoa: hiru segmentuko sigi-saga">
    <polyline points="50,92 140,34 235,92 325,34" stroke="${SVG_THEME.chain}" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="50" cy="92" r="4" fill="#196144"/><circle cx="140" cy="34" r="4" fill="#196144"/>
    <circle cx="235" cy="92" r="4" fill="#196144"/><circle cx="325" cy="34" r="4" fill="#196144"/>
    <text x="188" y="116" font-size="11" fill="#6C738A" text-anchor="middle" font-family="Poppins, sans-serif">Mutur eta erpin bakoitza = C atomo bat</text>
  </svg>`;
}

function linearChainSVG(count) {
  const w = 540;
  const step = Math.min(54, 450 / Math.max(1, count - 1));
  const start = (w - (count - 1) * step) / 2;
  const r = count > 9 ? 15 : 18;
  let lines = '', nodes = '';
  for (let i = 0; i < count - 1; i++) {
    const x1 = start + i * step + r, x2 = start + (i + 1) * step - r;
    lines += `<line x1="${x1.toFixed(1)}" y1="54" x2="${x2.toFixed(1)}" y2="54" stroke="${SVG_THEME.chain}" stroke-width="3.6" stroke-linecap="round"/>`;
  }
  for (let i = 0; i < count; i++) {
    const x = start + i * step;
    nodes += `<circle cx="${x.toFixed(1)}" cy="54" r="${r}" fill="#E7F6EF" stroke="${SVG_THEME.chain}" stroke-width="1.8"/>
      <text x="${x.toFixed(1)}" y="59" text-anchor="middle" font-size="${count > 9 ? 13 : 15}" font-weight="700" fill="#196144" font-family="Segoe UI, Poppins, sans-serif">C</text>
      <text x="${x.toFixed(1)}" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1B518A">${i + 1}</text>`;
  }
  return `<svg viewBox="0 0 ${w} 106" role="img" aria-label="${count} karbonoko kate jarraitua">${lines}${nodes}</svg>`;
}

/* --------------------------------------------------------------------------
   5. Editorial Navigation Spine (6 Chapters + Focused Sub-sections)
   -------------------------------------------------------------------------- */
const NAV_TREE = [
  { id: 'hasiera', num: '01', title: 'Hasiera', subs: [] },
  {
    id: 'oinarriak', num: '02', title: 'Oinarriak',
    subs: [
      { id: 'loturak', label: '2.1 · 4 loturak eta H-ak' },
      { id: 'formulak', label: '2.2 · Formula motak' },
      { id: 'kateak', label: '2.3 · Kateak eta zikloak' },
      { id: 'adarrak', label: '2.4 · Kate nagusia eta zenbaketa' }
    ]
  },
  {
    id: 'familiak', num: '03', title: 'Familiak eta lehentasunak',
    subs: [
      { id: 'atlasa', label: '3.1 · 14 Familien Atlasa' },
      { id: 'lehentasunak', label: '3.2 · Taldeen lehentasuna' }
    ]
  },
  { id: 'izenetik', num: '04', title: 'Izenetik formulara', subs: [] },
  { id: 'formulatik', num: '05', title: 'Formulatik izenera', subs: [] },
  { id: 'laburpena', num: '06', title: 'Laburpena', subs: [] }
];

// Flattened linear reading order for smooth [← Aurreko atala | Hurrengo atala →]
const LINEAR_VIEWS = [];
for (const chap of NAV_TREE) {
  if (chap.subs.length === 0) {
    LINEAR_VIEWS.push({ chapter: chap.id, sub: null, label: `${chap.num} · ${chap.title}` });
  } else {
    for (const s of chap.subs) {
      LINEAR_VIEWS.push({ chapter: chap.id, sub: s.id, label: s.label });
    }
  }
}

/* --------------------------------------------------------------------------
   6. State & Deep-Linking Controller for Kontsultatu
   -------------------------------------------------------------------------- */
let consultInstance = null;

function createInitialState() {
  return {
    chapter: 'hasiera',
    sub: null,
    // 01 Hasiera
    classIdx: 0,
    everydayIdx: 0,
    // 02.1 Loturak
    propaneStep: 3,
    propaneWhy: false,
    bohrOpen: false,
    bohrAtom: 'C',
    methaneBonded: true,
    // 02.3 Kateak
    rootCount: 4,
    // 02.4 Adarrak
    branchIdx: 0,
    branchStep: 0,
    branchCompare: false,
    branchWhy: false,
    // 03.1 Familien Atlasa
    famQuery: '',
    famCat: 'Guztiak',
    famId: 'alkano',
    famExIdx: 0,
    ringNumbers: false,
    cycleWalkStep: 0,
    cycleWalkWhy: false,
    // 03.2 Lehentasunak
    prioIdx: 0,
    prioStep: 0,
    prioWhy: false,
    // 04 Izenetik formulara
    fwdTier: 1,
    fwdMolId: 'methylbutane2',
    fwdStep: 0,
    fwdWhy: true,
    // 05 Formulatik izenera
    revTier: 1,
    revMolId: 'methylbutane2',
    revStep: 0,
    revWhy: true
  };
}

/* --------------------------------------------------------------------------
   7. View Renderers (01 Hasiera → 06 Laburpena)
   -------------------------------------------------------------------------- */

function renderPager(state) {
  const idx = LINEAR_VIEWS.findIndex(v => v.chapter === state.chapter && v.sub === state.sub);
  const prev = idx > 0 ? LINEAR_VIEWS[idx - 1] : null;
  const next = idx >= 0 && idx < LINEAR_VIEWS.length - 1 ? LINEAR_VIEWS[idx + 1] : null;
  return `<nav class="ks-chapter-pager" aria-label="Atalen arteko jarraipena">
    <div>
      ${prev ? `<button type="button" class="ks-btn" data-nav-chapter="${esc(prev.chapter)}" data-nav-sub="${esc(prev.sub || '')}">← ${esc(prev.label)}</button>` : ''}
    </div>
    <div>
      ${next
        ? `<button type="button" class="ks-btn ks-btn-primary" data-nav-chapter="${esc(next.chapter)}" data-nav-sub="${esc(next.sub || '')}">${esc(next.label)} →</button>`
        : `<a href="#ariketak" class="ks-btn ks-btn-primary">Joan Ariketetara →</a>`}
    </div>
  </nav>`;
}

/* --- 01 · HASIERA (Continuous Single-Page Editorial View) --- */
const CONTRAST_EXAMPLES = CLASSIFICATION_EXAMPLES.filter(
  x => x.id !== 'methane' && x.id !== 'carbonDioxide'
);
const ORGANIC_EVERYDAY = EVERYDAY_EXAMPLES.filter(x => x.carbon);

function renderHasiera(s) {
  const cls = CONTRAST_EXAMPLES[s.classIdx] || CONTRAST_EXAMPLES[0];

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">01. KAPITULUA · ABIAPUNTUA</span>
      </div>
      <h1 class="ks-chapter-title">Zer da <em>formulazio organikoa</em>?</h1>
      <p class="ks-chapter-lead">Kimika organikoak karbonoan oinarritutako konposatu gehienak aztertzen ditu. <strong>Formulatzea</strong> izenetik egitura kimikoa eraikitzea da; <strong>izendatzea</strong>, egitura horretatik izen zehatza ateratzea.</p>
    </header>

    <section class="ks-section" aria-labelledby="hs-contrast-title">
      <div class="ks-section-head">
        <span class="ks-section-num">1.1 · ORGANIKOA ALA INORGANIKOA?</span>
        <h2 class="ks-section-title" id="hs-contrast-title">Karbonoa edukitzea <em>ez da nahikoa</em>: familia kimikoari begiratu</h2>
      </div>

      <div class="ks-two-col">
        <article class="ks-compare-panel is-organic">
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:8px">
            <span class="ks-tag-pill">Organikoa · Hidrokarburoa</span>
            <span class="chem" style="font-size:16px">${chemHTML('CH4')} · metanoa</span>
          </div>
          <div class="chem-board" style="margin-bottom:10px;padding:10px">
            ${methaneContrastSVG()}
          </div>
          <p style="margin:0;font-size:13.5px;color:var(--ks-ink-soft)">Karbonoak lau lotura kobalente (<span class="chem">4 C–H</span>) eratzen ditu. Hidrokarburoak eta haien eratorriak kimika organikoaren ardatza dira.</p>
        </article>

        <article class="ks-compare-panel is-inorganic">
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:8px">
            <span class="ks-tag-pill">Inorganikoa · Oxidoa</span>
            <span class="chem" style="font-size:16px">${chemHTML('CO2')} · karbono dioxidoa</span>
          </div>
          <div class="chem-board" style="margin-bottom:10px;padding:10px">
            ${co2ContrastSVG()}
          </div>
          <p style="margin:0;font-size:13.5px;color:var(--ks-ink-soft)">Karbonoa izan arren (<span class="chem">O=C=O</span>), oxido ez-organikoen familian sailkatzen da, karbonatoekin batera.</p>
        </article>
      </div>

      <div style="margin-top:16px">
        <span class="ks-section-num">ALDERATU BESTE LAU SUBSTANTZIA</span>
        <div class="ks-chip-row" role="group" aria-label="Substantzien sailkapena">
          ${CONTRAST_EXAMPLES.map((item, i) => `
            <button type="button" class="ks-chip" data-cls-idx="${i}" aria-pressed="${i === s.classIdx}">
              ${esc(item.name)} · <span class="chem">${chemHTML(item.formula)}</span>
            </button>
          `).join('')}
        </div>
        <div class="ks-inspector-strip" aria-live="polite">
          <div>
            <span class="ks-tag-pill" style="${cls.kind === 'organic' ? 'background:var(--chem-chain-bg);color:var(--chem-chain-ink)' : ''}">
              ${cls.kind === 'organic' ? 'ORGANIKOA' : 'INORGANIKOA'} · ${esc(cls.eyebrow)}
            </span>
            <div class="chem-formula-lg" style="margin:6px 0 0">${chemHTML(cls.formula)}</div>
          </div>
          <p style="margin:0;font-size:14px;line-height:1.6;color:var(--ks-ink-soft)">${proseChemHTML(cls.explanation)}</p>
        </div>
      </div>

      ${koraNoteHTML('adi', 'Konposatu organiko gehienek <span class="chem">C–H</span> loturak dituzte, baina ez guztiek —adibidez, <strong>urea</strong> (<span class="chem">NH<sub>2</sub>–C(=O)–NH<sub>2</sub></span>) organikoa da—; eta karbonoaren oxidoak (<span class="chem">CO, CO<sub>2</sub></span>) nahiz karbonatoak inorganikoak dira.')}
    </section>

    <section class="ks-section" aria-labelledby="hs-everyday-title">
      <div class="ks-section-head">
        <span class="ks-section-num">1.2 · KIMIKA GURE INGURUAN</span>
        <h2 class="ks-section-title" id="hs-everyday-title">Eguneroko <em>molekula organikoak</em> begirada batean</h2>
      </div>

      <div class="ks-formula-quad" role="region" aria-label="Eguneroko objektuetako molekula organikoak">
        ${ORGANIC_EVERYDAY.map(item => `
          <article class="ks-quad-cell">
            <div>
              <span class="ks-section-num">${esc(item.object)}</span>
              <h4>${esc(item.substance)}</h4>
            </div>
            <div class="ks-quad-visual">
              <span class="chem" style="font-size:17px;font-weight:700;color:var(--chem-chain-ink)">${chemHTML(item.formula)}</span>
            </div>
            <p class="ks-quad-note">${proseChemHTML(item.explanation)}</p>
          </article>
        `).join('')}
      </div>
    </section>

    ${renderPager(s)}
  `;
}

/* --- 02.1 · OINARRIAK: KARBONOAREN 4 LOTURAK ETA HIDROGENOAK --- */
function renderOinarriakLoturak(s) {
  const propaneSteps = [
    { title: 'Lehenengo karbonoa (C)', desc: 'Karbono atomo bakar batetik abiatuko gara: ohiko egitura organikoetan 4 lotura-unitate bete behar ditu.', why: 'Kanpoko geruzako 4 elektroiek beste 4 elektroi partekatuz osatzen dute zortzikotea.' },
    { title: 'Bigarren karbonoa lotu (C–C)', desc: 'Lotura bakun batek bi karbonoak elkartzen ditu eta bakoitzaren lotura-unitate 1 erabiltzen du.', why: 'Orain karbono bakoitzari 3 lotura-unitate geratzen zaizkio libre.' },
    { title: 'Hiru karbonoko katea (C–C–C)', desc: '«prop-» (3 C) hezurdura irekia dugu: muturretako C bakoitzak lotura 1 egina du; erdikoak, 2.', why: 'Erdiko karbonoa bi auzokiderekin lotuta dagoenez, muturrek baino H gutxiago hartuko du.' },
    { title: 'Hidrogenoak bete: CH₃–CH₂–CH₃', desc: 'Muturrek 3 H hartzen dituzte (1 + 3 = 4) eta erdiko C-ak 2 H (2 + 2 = 4): propanoa (C₃H₈).', why: 'Karbono guztiek 4 lotura-unitate dituzte orain, soberan edo faltan bat ere gabe.' }
  ];
  const st = propaneSteps[s.propaneStep];
  const mol = MOLECULES.propane;
  const allowedIds = mol.atoms.slice(0, Math.min(3, s.propaneStep + 1)).map(a => a.id);
  const subMol = {
    ...mol,
    atoms: mol.atoms.filter(a => allowedIds.includes(a.id)),
    bonds: mol.bonds.filter(b => allowedIds.includes(b.from) && allowedIds.includes(b.to)),
    main: allowedIds
  };
  const svg = moleculeSvg(s.propaneStep === 3 ? mol : subMol, {
    visible: s.propaneStep === 3 ? ['all'] : ['chain'],
    numbering: s.propaneStep >= 2,
    validate: s.propaneStep === 3,
    accessibleText: s.propaneStep === 3 ? 'Propanoa: CH3–CH2–CH3' : 'Karbono-katearen eraikuntza'
  });

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">02. KAPITULUA · OINARRIAK · 2.1</span>
      </div>
      <h1 class="ks-chapter-title">Karbonoaren <em>4 lotura-unitateak</em> eta hidrogenoak</h1>
      <p class="ks-chapter-lead">Hidrogenoak ez dira buruz ikasten: karbonoaren hezurdura marraztu ondoren, karbono bakoitzari <strong>4ra iristeko falta zaizkion loturak</strong> hidrogenoz osatzen ditugu.</p>
    </header>

    <div class="ks-workbench">
      <div class="ks-workbench-panel">
        <div class="ks-prose">
          <p>
            <span class="chem-tok" data-role="chain">Bakuna (C–C) = 1</span> ·
            <span class="chem-tok" data-role="multiple">Bikoitza (C=C) = 2</span> ·
            <span class="chem-tok" data-role="multiple">Hirukoitza (C≡C) = 3</span>
          </p>
        </div>

        <div class="ks-step-card" aria-live="polite" style="margin-top:12px">
          <span class="ks-step-kicker">PROPANOAREN ERAIKUNTZA · ${s.propaneStep + 1} / 4 URRATSA</span>
          <h2 class="ks-step-heading">${proseChemHTML(st.title)}</h2>
          <p class="ks-step-explain">${proseChemHTML(st.desc)}</p>
          <div class="ks-reason"><span class="ks-reason-arrow">↳</span> ${proseChemHTML(st.why)}</div>
        </div>

        ${koraNoteHTML('remember', '<strong>Kalkulu azkarra edozein karbonotan:</strong> <span class="chem">4 − inguruko marra kopurua = jarri beharreko H kopurua</span> (bakuna 1, bikoitza 2, hirukoitza 3).')}

        <details class="ks-details" ${s.bohrOpen ? 'open' : ''} data-bohr-details>
          <summary><span>Zergatik 4 lotura? Ikusi geruza elektronikoak eta ${chemHTML('CH4')} lotura kobalentea</span></summary>
          <div class="ks-details-body">
            <p style="font-size:13.5px;color:var(--ks-ink-soft);margin:0 0 12px">Karbonoak (<span class="chem">Z = 6</span>) <strong>4 balentzia-elektroi</strong> ditu kanpoko geruzan eta 4 elektroi partekatzen ditu zortzikotea osatzeko; hidrogenoak (<span class="chem">Z = 1</span>), elektroi bakarra.</p>
            <div class="ks-two-col" style="align-items:center">
              <div class="chem-board" style="padding:10px">
                <div class="chem-board-top">
                  <span class="chem-fig-label">GERUZAK</span>
                  <div style="display:flex;gap:4px">
                    <button type="button" class="ks-btn" style="padding:3px 9px;font-size:11.5px" data-bohr-atom="C" aria-pressed="${s.bohrAtom === 'C'}">C (Z=6)</button>
                    <button type="button" class="ks-btn" style="padding:3px 9px;font-size:11.5px" data-bohr-atom="H" aria-pressed="${s.bohrAtom === 'H'}">H (Z=1)</button>
                  </div>
                </div>
                ${bohrAtomSVG(s.bohrAtom)}
              </div>
              <div class="chem-board" style="padding:10px">
                <div class="chem-board-top">
                  <span class="chem-fig-label">ELEKTROI PARTEKATUAK</span>
                  <button type="button" class="ks-btn" style="padding:3px 9px;font-size:11.5px" data-methane-toggle>
                    <span>${s.methaneBonded ? 'Banandu (C + 4H)' : `Lotu (${chemHTML('CH4')})`}</span>
                  </button>
                </div>
                ${covalentMethaneSVG(s.methaneBonded)}
              </div>
            </div>
          </div>
        </details>
      </div>

      <div class="ks-workbench-canvas">
        <figure class="chem-board" style="margin:0">
          <div class="chem-board-top">
            <span class="chem-fig-label">IRUDIA 2.1 · PROPANOAREN HEZURDURA</span>
            <span class="chem-formula-badge">${s.propaneStep === 3 ? chemHTML('CH3–CH2–CH3 · C3H8') : s.propaneStep === 2 ? 'C–C–C' : s.propaneStep === 1 ? 'C–C' : 'C'}</span>
          </div>
          <div class="chem-svg-stage">${svg}</div>
          <div class="chem-board-controls">
            <button type="button" class="ks-btn" data-prop-step="${s.propaneStep - 1}" ${s.propaneStep === 0 ? 'disabled' : ''}>← Aurrekoa</button>
            <div class="ks-step-dots" role="group" aria-label="Eraikuntzaren urratsak">
              ${propaneSteps.map((_, i) => `<button type="button" class="ks-step-dot ${i < s.propaneStep ? 'is-done' : i === s.propaneStep ? 'is-current' : ''}" data-prop-step="${i}" aria-label="${i + 1}. urratsa">${i + 1}</button>`).join('')}
            </div>
            <button type="button" class="ks-btn ks-btn-primary" data-prop-step="${s.propaneStep + 1}" ${s.propaneStep === 3 ? 'disabled' : ''}>Hurrengoa →</button>
          </div>
        </figure>
      </div>
    </div>

    ${renderPager(s)}
  `;
}

/* --- 02.2 · OINARRIAK: FORMULA MOTAK --- */
function renderOinarriakFormulak(s) {
  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">02. KAPITULUA · OINARRIAK · 2.2</span>
      </div>
      <h1 class="ks-chapter-title">Molekula bera adierazteko <em>lau formula motak</em></h1>
      <p class="ks-chapter-lead">Konposatu bera xehetasun-maila desberdinekin idatz dezakegu. Ikusi <strong>butanoa</strong> lau formatuetan.</p>
    </header>

    <section class="ks-section">
      <div class="ks-formula-quad" role="region" aria-label="Butanoaren lau formula motak">
        <article class="ks-quad-cell">
          <div>
            <span class="ks-section-num">01 · LABURRENA</span>
            <h4>Molekularra</h4>
          </div>
          <div class="ks-quad-visual">
            <span class="chem-formula-lg">${chemHTML('C4H10')}</span>
          </div>
          <p class="ks-quad-note">Atomo kopuru osoa soilik adierazten du; ez du erakusten nola dauden lotuta.</p>
        </article>

        <article class="ks-quad-cell" style="background:#FAFDFB">
          <div>
            <span class="ks-section-num" style="color:var(--chem-chain-ink)">02 · OHIKOENA ARIKETETAN ★</span>
            <h4>Erdi-garatua</h4>
          </div>
          <div class="ks-quad-visual" style="background:var(--chem-chain-bg)">
            <span class="chem" style="font-size:17px;font-weight:700;color:var(--chem-chain-ink)">${chemHTML('CH3–CH2–CH2–CH3')}</span>
          </div>
          <p class="ks-quad-note">Karbonoen arteko loturak eta C bakoitzaren H kopurua erakusten ditu. <strong>2. Batxilergoan gehien erabiliko duguna.</strong></p>
        </article>

        <article class="ks-quad-cell">
          <div>
            <span class="ks-section-num">03 · ZEHATZENA</span>
            <h4>Garatua</h4>
          </div>
          <div class="ks-quad-visual">
            ${developedButaneSVG()}
          </div>
          <p class="ks-quad-note"><span class="chem">C–H</span> lotura guztiak marrazten ditu; balentziak ulertzeko erabilgarria.</p>
        </article>

        <article class="ks-quad-cell">
          <div>
            <span class="ks-section-num">04 · ZIKLO ETA EGITURETAN</span>
            <h4>Eskeletikoa</h4>
          </div>
          <div class="ks-quad-visual">
            ${skeletalButaneSVG()}
          </div>
          <p class="ks-quad-note">Erpin eta mutur bakoitza <span class="chem">C</span> bat da (<span class="chem">H</span>-ak inplizituak); oso erosoa eraztunetan.</p>
        </article>
      </div>

      ${koraNoteHTML('important', '<strong>Parentesien esanahia formula erdi-garatuetan:</strong> <span class="chem">CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub></span> formulan, <span class="chem">(CH<sub>3</sub>)</span> aurreko <span class="chem">CH</span> karbonotik zintzilik dagoen <strong>adarra</strong> da. Aldiz, azpindizea badarama —adibidez <span class="chem">–(CH<sub>2</sub>)<sub>4</sub>–</span>—, kate jarraituan errepikatzen diren <span class="chem">CH<sub>2</sub></span> unitateak dira.')}
    </section>

    ${renderPager(s)}
  `;
}

/* --- 02.3 · OINARRIAK: KATEAK, AURRIZKIAK (1-12 C), LOTURA MOTAK ETA ZIKLOAK --- */
function renderOinarriakKateak(s) {
  const activeRoot = CARBON_ROOTS.find(r => r.count === s.rootCount) || CARBON_ROOTS[3];

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">02. KAPITULUA · OINARRIAK · 2.3</span>
      </div>
      <h1 class="ks-chapter-title">Karbono-aurrizkiak, <em>lotura anizkoitzak</em> eta zikloak</h1>
      <p class="ks-chapter-lead">Erroak kate nagusiko karbono kopurua adierazten du (<span class="chem">met-, et-, prop-, but-…</span>); tarteko artizkiak, berriz, loturak bakunak (<span class="chem">-an-</span>), bikoitzak (<span class="chem">-en-</span>) edo hirukoitzak (<span class="chem">-in-</span>) diren.</p>
    </header>

    <section class="ks-section" aria-labelledby="ks-roots-title">
      <div class="ks-section-head">
        <span class="ks-section-num">A · KATEAREN LUZERA ETA ALKIL ADARRAK (1–12 C)</span>
        <h2 class="ks-section-title" id="ks-roots-title">Sakatu edozein errenkada <em>katea</em> ikusteko</h2>
      </div>

      <div class="ks-workbench">
        <div class="ks-table-wrap">
          <table class="ks-table" aria-label="Karbono-aurrizkien eta alkil adarren taula (1-12)">
            <thead><tr><th>C</th><th>Aurrizkia</th><th>Alkanoa</th><th>Alkil adarra</th></tr></thead>
            <tbody>
              ${CARBON_ROOTS.map((r, idx) => {
                const rad = ALKYL_RADICALS[idx];
                const isSel = r.count === s.rootCount;
                return `
                  <tr class="${isSel ? 'is-highlighted' : ''}" data-root-n="${r.count}">
                    <td><strong>${r.count}</strong></td>
                    <td>
                      <button type="button" class="ks-root-row-btn" data-root-n="${r.count}" aria-pressed="${isSel}">
                        <span class="chem-tok" data-role="chain">${esc(r.prefix)}</span>
                      </button>
                    </td>
                    <td>${esc(r.alkane)}</td>
                    <td class="chem">${rad ? `<span class="chem-tok" data-role="branch">${esc(rad.name)}</span> <small style="color:var(--ks-muted)">(${chemHTML(rad.formula)})</small>` : '—'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="ks-workbench-canvas">
          <div class="chem-board" style="margin-bottom:14px">
            <div class="chem-board-top">
              <span class="chem-fig-label">HEZURDURA LINEALA · ${activeRoot.count} KARBONO</span>
              <span class="chem-formula-badge">${esc(activeRoot.alkane)} · ${chemHTML(activeRoot.formula)}</span>
            </div>
            ${linearChainSVG(activeRoot.count)}
          </div>
          <div class="ks-callout" data-tone="branch" style="margin:0">
            <strong>Erroa vs. adarra:</strong> <span class="chem">prop-</span> kate nagusiko 3 karbonori dagokie (<span class="chem">propanoa</span>); <span class="chem">propil-</span>, aldiz, kate nagusitik zintzilik dagoen 3 karbonoko adarrari (<span class="chem">–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub></span>).
          </div>
        </div>
      </div>
    </section>

    <section class="ks-section" aria-labelledby="ks-unsat-title">
      <div class="ks-section-head">
        <span class="ks-section-num">B · KOKAPENA ETA ERAZTUNAK</span>
        <h2 class="ks-section-title" id="ks-unsat-title">Lokatzailea lotura anizkoitzetan eta <em>ziklo-</em> aurrizkia</h2>
      </div>

      <div class="ks-two-col">
        <div class="ks-compare-panel">
          <span class="ks-tag-pill" style="background:var(--chem-multiple-bg);color:var(--chem-multiple-ink)">Posizio-isomeroak (4 C-tik gora lokatzailea behar da)</span>
          <div style="margin:10px 0">
            <div style="font-weight:700;color:var(--ks-ink)">but-<span class="chem-tok" data-role="locator">1</span>-<span class="chem-tok" data-role="multiple">eno</span>a → <span class="chem" style="font-size:16px">${highlightFormulaHTML('CH2=CH–CH2–CH3', 'alkene')}</span></div>
            <div style="font-weight:700;color:var(--ks-ink);margin-top:8px">but-<span class="chem-tok" data-role="locator">2</span>-<span class="chem-tok" data-role="multiple">eno</span>a → <span class="chem" style="font-size:16px">${highlightFormulaHTML('CH3–CH=CH–CH3', 'alkene')}</span></div>
          </div>
          <p style="margin:0;font-size:13px;color:var(--ks-muted)">Zenbakiak lotura bikoitza edo hirukoitza hasten den lehen karbonoa adierazten du.</p>
        </div>

        <div class="ks-compare-panel">
          <span class="ks-tag-pill" style="background:var(--chem-chain-bg);color:var(--chem-chain-ink)">Kate irekia vs. Eraztun itxia</span>
          <div style="margin:10px 0">
            <div style="font-weight:700;color:var(--ks-ink)">butanoa (<span class="chem">${chemHTML('C4H10')}</span>) · <span class="chem" style="font-weight:600">${chemHTML('CH3–CH2–CH2–CH3')}</span></div>
            <div style="font-weight:700;color:var(--ks-ink);margin-top:8px"><span class="chem-tok" data-role="chain">ziklo</span>butanoa (<span class="chem">${chemHTML('C4H8')}</span>) · eraztun itxia (<span class="chem">2 H</span> gutxiago)</div>
          </div>
          <button type="button" class="ks-btn ks-btn-ghost" data-jump-family="cycle" style="padding-left:0">Ikusi zikloalkanoak 03. kapituluan →</button>
        </div>
      </div>
    </section>

    ${renderPager(s)}
  `;
}

/* --- 02.4 · OINARRIAK: KATE NAGUSIA, ZENBAKETA ETA ADARRAK (Split Sticky Workbench) --- */
function renderOinarriakAdarrak(s) {
  const ex = BRANCH_LESSONS[s.branchIdx] || BRANCH_LESSONS[0];
  const step = ex.steps[s.branchStep] || ex.steps[0];
  const last = s.branchStep === ex.steps.length - 1;

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">02. KAPITULUA · OINARRIAK · 2.4</span>
      </div>
      <h1 class="ks-chapter-title">Kate nagusia aukeratu, <em>zenbakitu</em> eta adarrak ordenatu</h1>
      <p class="ks-chapter-lead">Hiru erabaki ordena honetan: <strong>1)</strong> kate nagusia aukeratu, <strong>2)</strong> lokatzaile txikienak ematen dituen muturretik zenbakitu, eta <strong>3)</strong> adarrak alfabetikoki idatzi.</p>
    </header>

    <div class="ks-mol-strip" role="group" aria-label="Kate nagusiaren eta zenbaketaren 4 kasuak">
      ${BRANCH_LESSONS.map((item, i) => `
        <button type="button" class="ks-mol-pill" data-branch-idx="${i}" aria-pressed="${i === s.branchIdx}">
          ${esc(item.tab)} · <span>${esc(item.name)}</span>
        </button>
      `).join('')}
    </div>

    <div class="ks-workbench">
      <div class="ks-workbench-panel">
        <div class="ks-step-card" aria-live="polite">
          <span class="ks-step-kicker">${esc(ex.tag)} · ${s.branchStep + 1} / ${ex.steps.length} URRATSA</span>
          <h2 class="ks-step-heading">${proseChemHTML(step.title)}</h2>
          <p class="ks-step-explain">${proseChemHTML(step.text)}</p>
          <div class="ks-reason"><span class="ks-reason-arrow">↳</span> ${proseChemHTML(step.why)}</div>
        </div>

        ${koraNoteHTML('adi', '<strong>Alfabetoa vs. zenbakia:</strong> adarrak <strong>alfabetikoki</strong> idazten dira (<span class="chem">3-etil-2-metil…</span>, <em>e</em> lehenago <em>m</em> baino), ez zenbakiaren arabera; eta <span class="chem">di-, tri-, tetra-</span> aurrizkiek ez dute ordena alfabetikoa aldatzen.')}
      </div>

      <div class="ks-workbench-canvas">
        <figure class="chem-board" style="margin:0">
          <div class="chem-board-top">
            <span class="chem-fig-label">IRUDIA 2.4 · ${esc(ex.name.toUpperCase())}</span>
            <span class="chem-formula-badge">${chemHTML(ex.formula)} · ${chemHTML(ex.molecular)}</span>
          </div>

          <div class="chem-svg-stage">
            ${branchingDiagram(ex, step, s.branchCompare)}
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:8px 10px;border-radius:6px;background:${s.branchCompare ? '#FFF0E6' : '#E7F6EF'};margin-top:6px">
            <span style="font-size:12.5px;font-weight:700;color:${s.branchCompare ? '#9E4012' : '#196144'}">
              ${s.branchCompare ? `✕ ${esc(ex.altResult)}` : `✓ ${esc(ex.correctResult)}`}
            </span>
            <button type="button" class="ks-btn" style="padding:4px 10px;font-size:11.5px" data-branch-compare aria-pressed="${s.branchCompare}">
              ${s.branchCompare ? '↶ Itzuli aukera zuzenera' : `⇄ ${esc(ex.altLabel)}`}
            </button>
          </div>

          <div class="chem-board-controls">
            <button type="button" class="ks-btn" data-branch-step="${s.branchStep - 1}" ${s.branchStep === 0 ? 'disabled' : ''}>← Aurrekoa</button>
            <div class="ks-step-dots">
              ${ex.steps.map((_, i) => `<button type="button" class="ks-step-dot ${i < s.branchStep ? 'is-done' : i === s.branchStep ? 'is-current' : ''}" data-branch-step="${i}" aria-label="${i + 1}. urratsa">${i + 1}</button>`).join('')}
            </div>
            <button type="button" class="ks-btn ks-btn-primary" data-branch-step="${s.branchStep + 1}" ${last ? 'disabled' : ''}>Hurrengoa →</button>
          </div>
        </figure>
      </div>
    </div>

    ${renderPager(s)}
  `;
}

/* --- 03.1 · 14 FAMILIEN ATLASA (Unified Single-Source Master-Detail Datasheet) --- */
function renderFamiliakAtlasa(s) {
  const q = norm(s.famQuery);
  const matches = FAMILIES.filter(f => {
    const catOk = s.famCat === 'Guztiak' || f.family === s.famCat;
    if (!catOk) return false;
    if (!q) return true;
    const hay = norm([f.title, f.family, f.general, f.suffix, f.prefix, ...f.examples.flatMap(e => [e.name, e.formula])].join(' '));
    return hay.includes(q);
  });

  const activeFam = matches.find(f => f.id === s.famId) || matches[0] || null;
  const exIdx = activeFam ? Math.min(s.famExIdx, activeFam.examples.length - 1) : 0;
  const activeEx = activeFam ? activeFam.examples[exIdx] : null;
  const rankIdx = activeFam ? CHOSEN_HIERARCHY.findIndex(h => h.family === activeFam.title) : -1;

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">03. KAPITULUA · KONPOSATUEN FAMILIAK · 3.1</span>
      </div>
      <h1 class="ks-chapter-title">Konposatu organikoen <em>14 familien atlasa</em></h1>
      <p class="ks-chapter-lead">Kontsultatu familia bakoitzaren <strong>talde bereizgarria</strong>, <strong>atzizkia</strong> (talde nagusia denean), <strong>aurrizkia</strong> (bigarren mailakoa denean) eta adibide koloreztatuak.</p>
    </header>

    <div class="ks-atlas-toolbar">
      <input
        type="search"
        class="ks-search-input"
        data-fam-search
        value="${esc(s.famQuery)}"
        placeholder="Bilatu familia, taldea edo adibidea (adib.: aldehido, -oatoa, butanona, OH…)"
        aria-label="Bilatu konposatuen familia edo adibidea"
      >
      <div class="ks-cat-pills" role="group" aria-label="Familien multzoak">
        ${FAMILY_CATEGORIES.map(cat => `
          <button type="button" class="ks-chip" style="padding:5px 10px;font-size:12px" data-fam-cat="${esc(cat)}" aria-pressed="${s.famCat === cat}">${esc(cat)}</button>
        `).join('')}
      </div>
    </div>

    <div class="ks-atlas-grid">
      <nav class="ks-family-list" aria-label="14 familien zerrenda">
        ${matches.length ? matches.map(f => `
          <button type="button" class="ks-family-item" data-fam-id="${esc(f.id)}" aria-pressed="${activeFam && f.id === activeFam.id}">
            <span class="ks-family-symbol">${chemHTML(f.badge)}</span>
            <span>
              <strong>${esc(f.title)}</strong>
              <small>${esc(f.suffix)}</small>
            </span>
          </button>
        `).join('') : '<p style="font-size:13px;color:var(--ks-muted);padding:8px">Ez dago bilaketa horrekin bat datorren familiarik.</p>'}
      </nav>

      ${activeFam ? `
        <article class="ks-datasheet" aria-live="polite">
          <div class="ks-ds-head">
            <div>
              <span class="ks-tag-pill">${esc(activeFam.family)}${rankIdx >= 0 ? ` · Lehentasuna #${rankIdx + 1}` : ''}</span>
              <h2 class="ks-ds-title">${esc(activeFam.title)}</h2>
            </div>
            <div class="ks-ds-general" title="Taldea eta egitura orokorra">
              <span class="chem-tok" data-role="${esc(activeFam.badgeRole || 'function')}">${chemHTML(activeFam.badge)}</span>
              <span style="color:var(--ks-muted);font-weight:500;margin-left:6px;font-size:12.5px">${chemHTML(activeFam.general)}</span>
            </div>
          </div>

          <div class="ks-ds-specs">
            <div class="ks-ds-spec">
              <span>Atzizkia (talde nagusia)</span>
              <strong>${esc(activeFam.suffix)}</strong>
            </div>
            <div class="ks-ds-spec">
              <span>Aurrizkia (ordezkatzailea)</span>
              <strong style="font-size:13.5px">${esc(activeFam.prefix)}</strong>
            </div>
          </div>

          <div class="ks-prose">
            <p>${proseChemHTML(activeFam.explanation)}</p>
          </div>

          <div class="ks-ds-rule">
            <strong>Prozedura:</strong> ${proseChemHTML(activeFam.rule)}
          </div>

          <div class="ks-ds-examples-bar">
            <span class="ks-section-num" style="margin:0">ADIBIDEAK (${activeFam.examples.length})</span>
            <div style="display:flex;flex-wrap:wrap;gap:5px" role="group" aria-label="${esc(activeFam.title)} familiako adibideak">
              ${activeFam.examples.map((ex, i) => `
                <button type="button" class="ks-mol-pill" style="padding:4px 10px;font-size:12px" data-fam-ex="${i}" aria-pressed="${i === exIdx}">
                  ${esc(ex.name)}
                </button>
              `).join('')}
            </div>
          </div>

          ${activeEx ? `
            <div class="chem-board">
              ${activeEx.ring ? `
                <div class="chem-board-top">
                  <span class="chem-fig-label">${esc(activeEx.name.toUpperCase())} · ${chemHTML(activeEx.formula)}</span>
                  <button type="button" class="ks-btn" style="padding:3px 9px;font-size:11.5px" data-ring-toggle aria-pressed="${s.ringNumbers}">
                    ${s.ringNumbers ? 'Ezkutatu zenbakiak' : 'Erakutsi zenbakiak (1…n)'}
                  </button>
                </div>
                <div class="chem-svg-stage" style="min-height:190px">
                  ${cycleSVG(activeEx.ring, { numbers: s.ringNumbers })}
                </div>
              ` : `
                <div style="padding:14px 10px 10px;text-align:center">
                  <div class="chem-formula-lg">${highlightFormulaHTML(activeEx.formula, activeFam.id)}</div>
                </div>
              `}

              ${activeFam.id === 'ester' ? `
                <div class="ks-ester-split">
                  <div class="ks-ester-part is-acid">
                    <strong>1. Azidoaren aldea (karboniloa barne):</strong><br>
                    <span class="chem">R–C(=O)–O–</span> → amaiera (<strong>…-oatoa</strong>).
                  </div>
                  <div class="ks-ester-part is-alcohol">
                    <strong>2. Alkoholaren aldea (O-ri lotuta):</strong><br>
                    <span class="chem">–R′</span> → lehen hitza (<strong>metil, etil…</strong>).
                  </div>
                </div>
              ` : ''}

              <div class="ks-reason" style="margin-top:8px">
                <span class="ks-reason-arrow">↳</span> ${proseChemHTML(activeEx.why)}
              </div>
            </div>
          ` : ''}

          ${activeFam.id === 'cycle' ? `
            <details class="ks-details" style="margin-top:16px">
              <summary><span>Pausoz pauso: Nola zenbakitu bi adarreko eraztun bat? (1,2-dimetilziklohexanoa)</span></summary>
              <div class="ks-details-body">
                <div class="ks-two-col" style="align-items:center">
                  <div class="chem-board" style="padding:10px">
                    ${cycleSVG(GUIDED_CYCLE, {
                      numbers: CYCLE_STAGES[s.cycleWalkStep].showNumbers,
                      branches: CYCLE_STAGES[s.cycleWalkStep].showBranches,
                      highlight: [0, 1]
                    })}
                  </div>
                  <div>
                    <span class="ks-step-kicker">${s.cycleWalkStep + 1} / ${CYCLE_STAGES.length} URRATSA</span>
                    <h3 class="ks-step-heading">${proseChemHTML(CYCLE_STAGES[s.cycleWalkStep].heading)}</h3>
                    <p class="ks-step-explain">${proseChemHTML(CYCLE_STAGES[s.cycleWalkStep].text)}</p>
                    <div class="ks-reason"><span class="ks-reason-arrow">↳</span> ${proseChemHTML(CYCLE_STAGES[s.cycleWalkStep].why)}</div>
                    <div style="display:flex;gap:6px;margin-top:10px">
                      <button type="button" class="ks-btn" data-cyc-step="${s.cycleWalkStep - 1}" ${s.cycleWalkStep === 0 ? 'disabled' : ''}>← Aurrekoa</button>
                      <button type="button" class="ks-btn ks-btn-primary" data-cyc-step="${s.cycleWalkStep + 1}" ${s.cycleWalkStep === CYCLE_STAGES.length - 1 ? 'disabled' : ''}>Hurrengoa →</button>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ` : ''}

          ${koraNoteHTML('remember', proseChemHTML(activeFam.tip))}
        </article>
      ` : '<div class="ks-datasheet"><p>Hautatu beste iragazki edo bilaketa-hitz bat.</p></div>'}
    </div>

    ${renderPager(s)}
  `;
}

/* --- 03.2 · TALDEEN LEHENTASUNA (7-Group Ladder + Instant 5-Molecule Comparison) --- */
function renderFamiliakLehentasunak(s) {
  const ex = PRIORITY_LESSONS[s.prioIdx] || PRIORITY_LESSONS[0];
  const mol = MOLECULES[ex.id];
  const numberingStep = ex.steps[3] || ex.steps[ex.steps.length - 1];
  const hasFwd = NAME_TO_FORMULA.some(m => m.id === ex.id);
  const hasRev = FORMULA_TO_NAME.some(m => m.id === ex.id);
  const svg = moleculeSvg(mol, {
    visible: ['all'],
    numbering: true,
    accessibleText: `${ex.name}: ${ex.condensed}`
  });

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">03. KAPITULUA · KONPOSATUEN FAMILIAK · 3.2</span>
      </div>
      <h1 class="ks-chapter-title">Funtzio-taldeen <em>lehentasun-eskala</em></h1>
      <p class="ks-chapter-lead">Molekula berean bi talde edo gehiago daudenean, <strong>lehentasun handieneko talde bakarrak</strong> ezartzen ditu atzizkia eta zenbaketaren hasiera; gainerakoak <strong>aurrizki</strong> bihurtzen dira.</p>
    </header>

    <section class="ks-section" aria-labelledby="ks-prio-table-title">
      <div class="ks-section-head">
        <span class="ks-section-num">A · LEHENTASUN-TAULA (GOITIK BEHERA)</span>
        <h2 class="ks-section-title" id="ks-prio-table-title">Nagusia (<em>atzizkia</em>) vs. bigarrena (<em>aurrizkia</em>)</h2>
      </div>

      <div class="ks-two-col">
        <div class="ks-table-wrap">
          <table class="ks-table" aria-label="Funtzio-taldeen lehentasun-ordena">
            <thead><tr><th>#</th><th>Familia</th><th>Taldea</th><th>Nagusia (Atzizkia)</th><th>Bigarrena (Aurrizkia)</th></tr></thead>
            <tbody>
              ${CHOSEN_HIERARCHY.map((h, i) => `
                <tr>
                  <td><strong>${i + 1}</strong></td>
                  <td><strong>${esc(h.family)}</strong></td>
                  <td class="chem"><span class="chem-tok" data-role="function">${chemHTML(h.group)}</span></td>
                  <td class="chem">${esc(h.suffix)}</td>
                  <td class="chem" style="color:var(--chem-branch-ink)">${esc(h.prefix)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display:grid;gap:12px;align-content:start">
          ${COMPLEMENTARY_HIERARCHY.map((c, idx) => `
            <div class="ks-compare-panel" style="border-top-color:${idx === 0 ? 'var(--chem-multiple-stroke)' : 'var(--chem-branch-stroke)'}">
              <span class="ks-tag-pill" style="${idx === 0 ? 'background:var(--chem-multiple-bg);color:var(--chem-multiple-ink)' : 'background:var(--chem-branch-bg);color:var(--chem-branch-ink)'}">${esc(c.kind)}</span>
              <div class="chem" style="font-size:14.5px;margin:8px 0 6px">${esc(c.items)}</div>
              <p style="margin:0;font-size:13px;color:var(--ks-ink-soft)">${esc(c.note)}</p>
            </div>
          `).join('')}
          <p style="margin:0;font-size:11.5px;color:var(--ks-muted)">2. Batxilergorako hautatutako familien eskala didaktikoa (IUPAC 2020 irizpideetan oinarritua).</p>
        </div>
      </div>
    </section>

    <section class="ks-section" aria-labelledby="ks-prio-cases-title">
      <div class="ks-section-head">
        <span class="ks-section-num">B · FUNTZIO ANITZEKO 5 ADIBIDE ARGI</span>
        <h2 class="ks-section-title" id="ks-prio-cases-title">Ikusi begirada batean <em>nork agintzen duen</em> molekula bakoitzean</h2>
      </div>

      <div class="ks-mol-strip" role="group" aria-label="Lehentasunen 5 adibideak">
        ${PRIORITY_LESSONS.map((item, i) => `
          <button type="button" class="ks-mol-pill" data-prio-idx="${i}" aria-pressed="${i === s.prioIdx}">
            ${esc(item.tab)} · <span>${esc(item.name)}</span>
          </button>
        `).join('')}
      </div>

      <div class="ks-workbench">
        <div class="ks-workbench-panel">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
            <div style="padding:9px 11px;border-radius:7px;background:var(--chem-function-bg);border:1px solid var(--chem-function-border)">
              <span style="display:block;font-size:10px;font-weight:700;letter-spacing:.09em;color:var(--chem-function-ink)">NAGUSIA · ATZIZKIA</span>
              <strong class="chem" style="font-size:14px;color:var(--chem-function-ink)">${proseChemHTML(ex.transformed)}</strong>
            </div>
            <div style="padding:9px 11px;border-radius:7px;background:var(--chem-branch-bg);border:1px solid var(--chem-branch-border)">
              <span style="display:block;font-size:10px;font-weight:700;letter-spacing:.09em;color:var(--chem-branch-ink)">BIGARRENA · AURRIZKIA</span>
              <strong class="chem" style="font-size:14px;color:var(--chem-branch-ink)">${proseChemHTML(ex.otherAsPrefix)}</strong>
            </div>
          </div>

          <div class="ks-step-card" aria-live="polite">
            <span class="ks-step-kicker">${esc(ex.tag)}</span>
            <h3 class="ks-step-heading">${esc(ex.name)}</h3>
            <p class="ks-step-explain">${proseChemHTML(numberingStep.text)}</p>
            <div class="ks-reason"><span class="ks-reason-arrow">↳</span> ${proseChemHTML(numberingStep.why)}</div>
            <div class="ks-callout" data-tone="branch" style="margin:10px 0 0;font-size:13px">
              <strong>Saihestu akats hau:</strong> ${proseChemHTML(ex.comparison)}
            </div>
            ${(hasFwd || hasRev) ? `
              <div style="margin-top:12px">
                <button type="button" class="ks-btn" data-mirror-dir="${hasRev ? 'reverse' : 'forward'}" data-mirror-mol="${esc(ex.id)}">
                  Ikusi prozedura urratsez urrats (${hasRev ? '05' : '04'}. kapituluan) →
                </button>
              </div>
            ` : ''}
          </div>

          ${koraNoteHTML('adi', '<strong>Bi karbonilo daudenean:</strong> muturreko <span class="chem">–CHO</span> (aldehidoa) kate barruko <span class="chem">&gt;C=O</span> (zetona) baino lehenago doa; zetonaren oxigenoa <strong>oxo-</strong> aurrizkiarekin adierazten da (<span class="chem">3-oxobutanala</span>).')}
        </div>

        <div class="ks-workbench-canvas">
          <figure class="chem-board" style="margin:0">
            <div class="chem-board-top">
              <span class="chem-fig-label">ZENBAKETA ZUZENA · <span class="chem">${chemHTML(mol.molecular)}</span></span>
              <span class="chem-formula-badge">${chemHTML(mol.condensed)}</span>
            </div>
            <div class="chem-svg-stage">${svg}</div>
          </figure>
        </div>
      </div>
    </section>

    ${renderPager(s)}
  `;
}

/* --- 04 & 05 · PROZEDURA TAILERRAK (Izenetik formulara & Formulatik izenera) --- */
const TIER_LABELS = [
  { id: 1, label: '1. maila · Hidrokarburoak' },
  { id: 2, label: '2. maila · Funtzio-talde bat / Esterrak' },
  { id: 3, label: '3. maila · Funtzio anitzak' }
];

function renderProcedureWorkshop(s, direction) {
  const isReverse = direction === 'reverse';
  const dataset = isReverse ? FORMULA_TO_NAME : NAME_TO_FORMULA;
  const mirrorSet = isReverse ? NAME_TO_FORMULA : FORMULA_TO_NAME;
  const tier = isReverse ? s.revTier : s.fwdTier;
  const activeId = isReverse ? s.revMolId : s.fwdMolId;
  const stepIdxRaw = isReverse ? s.revStep : s.fwdStep;

  const tierItems = dataset.filter(d => d.tier === tier);
  const ex = dataset.find(d => d.id === activeId && d.tier === tier) || tierItems[0] || dataset[0];
  const stepIdx = Math.min(stepIdxRaw, ex.steps.length - 1);
  const step = ex.steps[stepIdx];
  const last = stepIdx === ex.steps.length - 1;
  const mol = MOLECULES[ex.id];
  const hasMirror = mirrorSet.some(m => m.id === ex.id);

  const visibleRoles = isReverse ? ['all'] : step.show;
  const shownResult = isReverse ? (Boolean(step.assemble) || last) : visibleRoles.includes('hydrogens');

  const svg = moleculeSvg(mol, {
    visible: visibleRoles,
    numbering: isReverse ? Boolean(step.numbering) : visibleRoles.includes('numbers'),
    numberingBoth: isReverse ? Boolean(step.numberingBoth) : false,
    focusNodes: isReverse ? (step.focusNodes || []) : [],
    validate: !isReverse && visibleRoles.includes('validation'),
    accessibleText: isReverse
      ? `Egitura osoa: ${mol.condensed}`
      : (shownResult ? `Formula osatua: ${mol.condensed}` : `${ex.title} eraikitzen (${stepIdx + 1}. urratsa)`)
  });

  const tokenPills = ex.parts.map(p => `<span class="chem-tok" data-role="${esc(p.role)}">${esc(p.text)}</span>`).join('');

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">${isReverse ? '05. KAPITULUA · PROZEDURA II' : '04. KAPITULUA · PROZEDURA I'}</span>
      </div>
      <h1 class="ks-chapter-title">${isReverse
        ? 'Formulatik izenera: egitura <em>irakurri eta izendatu</em>'
        : 'Izenetik formulara: molekula <em>urratsez urrats eraiki</em>'}</h1>
      <p class="ks-chapter-lead">${isReverse
        ? 'Bilatu lehenik talde nagusia, aukeratu kate nagusia, alderatu bi muturretako zenbaketak eta mihiztatu izena.'
        : 'Deskodetu izena: erroak kate nagusia ematen du, atzizkiak funtzio nagusia, aurrizkiek adarrak, eta amaieran hidrogenoak betetzen ditugu.'}</p>
    </header>

    <div class="ks-tier-bar" role="group" aria-label="Zailtasun-mailak">
      ${TIER_LABELS.map(t => `
        <button type="button" class="ks-tier-tab" data-proc-dir="${direction}" data-proc-tier="${t.id}" aria-pressed="${t.id === ex.tier}">
          ${esc(t.label)}
        </button>
      `).join('')}
    </div>

    <div class="ks-mol-strip" role="group" aria-label="Maila honetako adibideak">
      ${tierItems.map(item => `
        <button type="button" class="ks-mol-pill" data-proc-dir="${direction}" data-proc-mol="${esc(item.id)}" aria-pressed="${item.id === ex.id}">
          ${isReverse ? chemHTML(item.title) : esc(item.title)}
        </button>
      `).join('')}
    </div>

    <div class="ks-workbench">
      <div class="ks-workbench-panel">
        <div class="ks-name-tokens" aria-label="Izenaren zati koloreztatuak">
          <span class="ks-name-tokens-label">${isReverse ? (shownResult ? 'IZEN OSOA:' : 'ABIAPUNTUA:') : 'IZENAREN ZATIAK:'}</span>
          ${(!isReverse || shownResult)
            ? tokenPills
            : `<span class="chem" style="font-size:14px">${chemHTML(mol.condensed)}</span>`}
        </div>

        <div class="ks-step-card" aria-live="polite">
          <span class="ks-step-kicker">${esc(ex.level)} · ${stepIdx + 1} / ${ex.steps.length} URRATSA</span>
          <h2 class="ks-step-heading">${proseChemHTML(step.title)}</h2>
          <p class="ks-step-explain">${proseChemHTML(step.explain)}</p>
          <div class="ks-reason"><span class="ks-reason-arrow">↳</span> ${proseChemHTML(step.why)}</div>
        </div>

        <div class="ks-bridge-row">
          ${hasMirror ? `
            <button type="button" class="ks-btn" data-mirror-dir="${isReverse ? 'forward' : 'reverse'}" data-mirror-mol="${esc(ex.id)}">
              ↔ Ikusi ${isReverse ? 'izenetik formulara' : 'formulatik izenera'}
            </button>
          ` : ''}
          <a href="#ariketak" class="ks-btn ks-btn-ghost">Praktikatu ariketekin →</a>
        </div>

        ${isReverse
          ? koraNoteHTML('think', 'Begiratu bi zenbaki-lerroei: <strong>urdina</strong> zenbaketa zuzena da (talde nagusiari zenbaki txikiena ematen diona), eta <strong>laranja</strong> baztertutako noranzkoa.')
          : koraNoteHTML('remember', '<strong>Ez jarri hidrogenoak hasieran!</strong> Marraztu lehenik <span class="chem">C</span> katea, lotura anizkoitzak, funtzio-taldea eta adarrak; hidrogenoak <strong>beti amaieran</strong> gehitzen dira.')}
      </div>

      <div class="ks-workbench-canvas">
        <figure class="chem-board" style="margin:0">
          <div class="chem-board-top">
            <span class="chem-fig-label">${isReverse ? 'FORMULATIK IZENERA' : 'IZENETIK FORMULARA'} · ${chemHTML(mol.molecular)}</span>
            <span class="chem-formula-badge">${isReverse ? chemHTML(mol.condensed) : esc(ex.title)}</span>
          </div>

          <div class="chem-svg-stage">${svg}</div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;padding:7px 10px;border-radius:6px;background:var(--ks-tint-soft);margin-top:6px">
            <span style="font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--ks-muted)">
              ${isReverse ? 'EMAITZAKO IZENA' : 'FORMULA ERDI-GARATUA'}
            </span>
            <strong class="${isReverse ? '' : 'chem'}" style="font-size:15px;color:${shownResult ? 'var(--chem-chain-ink)' : 'var(--ks-muted)'}">
              ${shownResult ? (isReverse ? esc(mol.name) : highlightFormulaHTML(mol.condensed)) : 'Urratsak osatzen…'}
            </strong>
          </div>

          <div class="chem-board-controls">
            <button type="button" class="ks-btn" data-proc-dir="${direction}" data-proc-step="${stepIdx - 1}" ${stepIdx === 0 ? 'disabled' : ''}>← Aurrekoa</button>
            <div class="ks-step-dots">
              ${ex.steps.map((_, i) => `
                <button type="button" class="ks-step-dot ${i < stepIdx ? 'is-done' : i === stepIdx ? 'is-current' : ''}" data-proc-dir="${direction}" data-proc-step="${i}" aria-label="${i + 1}. urratsa">${i + 1}</button>
              `).join('')}
            </div>
            <button type="button" class="ks-btn ks-btn-primary" data-proc-dir="${direction}" data-proc-step="${stepIdx + 1}" ${last ? 'disabled' : ''}>Hurrengoa →</button>
            <button type="button" class="ks-btn ks-btn-ghost" data-proc-dir="${direction}" data-proc-step="${ex.steps.length - 1}" ${last ? 'disabled' : ''}>Osoa</button>
          </div>
        </figure>
      </div>
    </div>

    ${renderPager(s)}
  `;
}

/* --- 06 · LABURPENA (Mirror 6-Step Algorithms + 9 Akats Ohikoak) --- */
function renderLaburpena(s) {
  const fwdAlgo = [
    'Irakurri izenaren amaiera (atzizkia) eta erroa: identifikatu funtzio-talde nagusia eta kate nagusiaren karbono kopurua.',
    'Marraztu kate nagusiko karbonoak jarraian eta zenbakitu mutur batetik bestera (1…n).',
    'Kokatu funtzio-talde nagusia eta lotura bikoitz edo hirukoitzak (-en-, -in-) dagozkien lokatzaileetan.',
    'Lotu aurrizkiek adierazitako adarrak eta ordezkatzaileak (metil-, etil-, bromo-, hidroxi-, oxo-…).',
    'Bete karbono bakoitzari 4 lotura-unitateetara iristeko falta zaizkion hidrogenoak (4 − lotura-ordenak).',
    'Azken egiaztapena: C bakoitzak 4 lotura, O bakoitzak 2, N neutroak 3 eta halogenoek 1.'
  ];
  const revAlgo = [
    'Behatu egitura osoa eta aurkitu lehentasun handieneko funtzio-talde nagusia (hark ezarriko du atzizkia).',
    'Aukeratu talde nagusia (eta ahalik eta lotura anizkoitz gehien) barne hartzen duen karbono-kate jarraitu luzeena.',
    'Zenbakitu katea talde nagusiari lokatzaile txikiena ematen dion muturretik (berdinketan: lotura anizkoitzak → adarrak → alfabetoa).',
    'Identifikatu kate nagusitik kanpoko adarrak eta bigarren mailako taldeak (aurrizki gisa, bakoitza bere zenbakiarekin).',
    'Ordenatu aurrizki guztiak alfabetikoki (di-, tri- biderkatzaileak kontuan hartu gabe).',
    'Mihiztatu izen osoa: [Aurrizkiak alfabetikoki] + [Katearen erroa] + [Lotura anizkoitzak] + [Atzizki nagusia].'
  ];

  return `
    <header class="ks-chapter-opener">
      <div class="ks-opener-meta">
        <span class="ks-rubric">06. KAPITULUA · SINTESIA ETA KONTROLA</span>
      </div>
      <h1 class="ks-chapter-title">Bi prozeduren <em>ispilu-eskema</em> eta akats ohikoak</h1>
      <p class="ks-chapter-lead">Jarraitu beti urrats-ordena berari. Hemen dituzu bi noranzkoen algoritmoak eta azterketan gehien errepikatzen diren 9 tranpak.</p>
    </header>

    <section class="ks-section" aria-labelledby="ks-mirror-title">
      <div class="ks-section-head">
        <span class="ks-section-num">6.1 · BI NORANZKOEN ALGORITMOAK</span>
        <h2 class="ks-section-title" id="ks-mirror-title">Urratsez urratseko <em>kontrol-zerrenda</em></h2>
      </div>

      <div class="ks-two-col">
        <article class="ks-compare-panel" style="border-top-color:var(--chem-chain-stroke)">
          <span class="ks-tag-pill" style="background:var(--chem-chain-bg);color:var(--chem-chain-ink)">Izenetik formulara (Eraiki)</span>
          <ol class="ks-algo-list">
            ${fwdAlgo.map((txt, i) => `<li><span class="ks-algo-num">${i + 1}</span><span>${esc(txt)}</span></li>`).join('')}
          </ol>
        </article>

        <article class="ks-compare-panel" style="border-top-color:var(--ks-accent)">
          <span class="ks-tag-pill" style="background:var(--ks-accent-soft);color:var(--ks-accent)">Formulatik izenera (Irakurri)</span>
          <ol class="ks-algo-list">
            ${revAlgo.map((txt, i) => `<li><span class="ks-algo-num">${i + 1}</span><span>${esc(txt)}</span></li>`).join('')}
          </ol>
        </article>
      </div>
    </section>

    <section class="ks-section" aria-labelledby="ks-mistakes-title">
      <div class="ks-section-head">
        <span class="ks-section-num">6.2 · 9 AKATS OHIKOAK (✕ GAIZKI / ✓ ZUZEN)</span>
        <h2 class="ks-section-title" id="ks-mistakes-title">Azterketan zaindu beharreko <em>tranpa klasikoak</em></h2>
      </div>

      <div class="ks-mistakes-grid">
        ${COMMON_MISTAKES.map(m => `
          <article class="ks-mistake-row">
            <div class="ks-mistake-wrong">
              <strong style="display:block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:2px">✕ Gaizki · ${esc(m.title)}</strong>
              <span class="chem">${chemHTML(m.bad)}</span>
            </div>
            <div class="ks-mistake-right">
              <strong style="display:block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:2px">✓ Zuzen</strong>
              <span class="chem">${chemHTML(m.good)}</span>
            </div>
            <div class="ks-mistake-why">
              <strong>Zergatik?</strong> ${proseChemHTML(m.why)}
            </div>
          </article>
        `).join('')}
      </div>

      ${koraNoteHTML('success', '<strong>Prest zaude praktikatzeko!</strong> Edozein unetan goiko <strong>⌕ Bilatu / Txuletarioa</strong> botoia (<kbd>Ctrl+K</kbd>) saka dezakezu ariketatik atera gabe familiak, aurrizkiak edo lehentasunak ikusteko.')}
    </section>

    ${renderPager(s)}
  `;
}

/* --------------------------------------------------------------------------
   8. Shell Assembly & Interactive Event Delegation
   -------------------------------------------------------------------------- */
function renderSidebar(s) {
  return `
    <aside class="ks-sidebar" aria-label="Kontsultatu aurkibidea">
      <div class="ks-sidebar-head">
        <span class="ks-kicker">BIBLIOTEKA DIDAKTIKOA</span>
        <h2 class="ks-sidebar-title">Kontsultatu</h2>
      </div>

      <ul class="ks-index-list">
        ${NAV_TREE.map(chap => {
          const isCurrentChap = s.chapter === chap.id;
          return `
            <li>
              <button
                type="button"
                class="ks-index-btn"
                data-nav-chapter="${esc(chap.id)}"
                data-nav-sub="${esc(chap.subs[0]?.id || '')}"
                aria-current="${isCurrentChap}"
              >
                <span class="ks-index-num">${esc(chap.num)}</span>
                <span>${esc(chap.title)}</span>
              </button>
              ${isCurrentChap && chap.subs.length ? `
                <ul class="ks-subindex">
                  ${chap.subs.map(sub => `
                    <li>
                      <button
                        type="button"
                        class="ks-subindex-btn ${s.sub === sub.id ? 'is-active' : ''}"
                        data-nav-chapter="${esc(chap.id)}"
                        data-nav-sub="${esc(sub.id)}"
                      >${esc(sub.label)}</button>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </li>
          `;
        }).join('')}
      </ul>

      <div class="ks-legend-box" aria-label="Kolore kimikoen kodea">
        <div class="ks-legend-title">Kolore-kode kimikoa</div>
        <ul class="ks-legend-items">
          ${CHEM_COLOR_LEGEND.map(item => `
            <li class="ks-legend-item">
              <span class="ks-swatch" data-role="${esc(item.role)}" aria-hidden="true"></span>
              <span>${esc(item.label)}</span>
            </li>
          `).join('')}
        </ul>
        <button type="button" class="ks-quick-btn" data-open-quick-drawer>
          <span>⌕ Txuletario azkarra</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </aside>
  `;
}

function renderMobileBar(s) {
  return `
    <div class="ks-mobile-bar" aria-label="Atal-hautatzailea">
      <select class="ks-mobile-select" data-mobile-nav aria-label="Aukeratu Kontsultatu atala">
        ${LINEAR_VIEWS.map(v => {
          const val = `${v.chapter}:${v.sub || ''}`;
          const selected = v.chapter === s.chapter && (v.sub || null) === (s.sub || null);
          return `<option value="${esc(val)}" ${selected ? 'selected' : ''}>${esc(v.label)}</option>`;
        }).join('')}
      </select>
      <button type="button" class="ks-btn" data-open-quick-drawer>⌕ Txuletarioa</button>
    </div>
  `;
}

function renderActiveStage(s) {
  if (s.chapter === 'hasiera') return renderHasiera(s);
  if (s.chapter === 'oinarriak') {
    if (s.sub === 'formulak') return renderOinarriakFormulak(s);
    if (s.sub === 'kateak') return renderOinarriakKateak(s);
    if (s.sub === 'adarrak') return renderOinarriakAdarrak(s);
    return renderOinarriakLoturak(s);
  }
  if (s.chapter === 'familiak') {
    if (s.sub === 'lehentasunak') return renderFamiliakLehentasunak(s);
    return renderFamiliakAtlasa(s);
  }
  if (s.chapter === 'izenetik') return renderProcedureWorkshop(s, 'forward');
  if (s.chapter === 'formulatik') return renderProcedureWorkshop(s, 'reverse');
  return renderLaburpena(s);
}

function normalizeChapterSub(state, chapter, sub) {
  const chapObj = NAV_TREE.find(c => c.id === chapter) || NAV_TREE[0];
  state.chapter = chapObj.id;
  if (chapObj.subs.length === 0) {
    state.sub = null;
  } else {
    const validSub = chapObj.subs.find(x => x.id === sub) || chapObj.subs[0];
    state.sub = validSub.id;
  }
}

export function mountConsult(host) {
  if (!host) return null;
  if (consultInstance && consultInstance.host === host) {
    return consultInstance;
  }

  const state = createInitialState();

  function render({ preserveSearchFocus = false, cursorOffset = null } = {}) {
    host.innerHTML = `
      <div class="ks-shell">
        ${renderSidebar(state)}
        <div class="ks-stage">
          ${renderMobileBar(state)}
          ${renderActiveStage(state)}
          <p class="ks-footnote">KIMIKA · 2. Batxilergoa (PAU Euskadi). Eduki eta adibide guztiak didaktikoak dira; ez dira PAUko enuntziatu ofizialak.</p>
        </div>
      </div>
    `;
    if (preserveSearchFocus) {
      const input = host.querySelector('[data-fam-search]');
      if (input) {
        input.focus();
        if (typeof cursorOffset === 'number') {
          try { input.setSelectionRange(cursorOffset, cursorOffset); } catch {}
        }
      }
    }
  }

  host.addEventListener('click', e => {
    const rootHit = e.target.closest('[data-root-n]');
    if (rootHit) {
      state.rootCount = Number(rootHit.dataset.rootN);
      render();
      return;
    }

    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.hasAttribute('data-open-quick-drawer')) {
      const drawerRoot = document.getElementById('catalogDrawerRoot');
      if (drawerRoot) openQuickConsultDrawer(drawerRoot);
      return;
    }

    if (btn.hasAttribute('data-nav-chapter')) {
      normalizeChapterSub(state, btn.dataset.navChapter, btn.dataset.navSub || null);
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (btn.hasAttribute('data-jump-family')) {
      state.chapter = 'familiak';
      state.sub = 'atlasa';
      state.famCat = 'Guztiak';
      state.famQuery = '';
      state.famId = btn.dataset.jumpFamily;
      state.famExIdx = 0;
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // 01 Hasiera
    if (btn.hasAttribute('data-cls-idx')) { state.classIdx = Number(btn.dataset.clsIdx); render(); return; }
    if (btn.hasAttribute('data-ev-idx')) { state.everydayIdx = Number(btn.dataset.evIdx); render(); return; }

    // 02.1 Loturak
    if (btn.hasAttribute('data-prop-step')) {
      state.propaneStep = Math.max(0, Math.min(3, Number(btn.dataset.propStep)));
      render();
      return;
    }
    if (btn.hasAttribute('data-prop-why')) { state.propaneWhy = !state.propaneWhy; render(); return; }
    if (btn.hasAttribute('data-bohr-atom')) { state.bohrOpen = true; state.bohrAtom = btn.dataset.bohrAtom; render(); return; }
    if (btn.hasAttribute('data-methane-toggle')) { state.bohrOpen = true; state.methaneBonded = !state.methaneBonded; render(); return; }

    // 02.3 Kateak
    if (btn.hasAttribute('data-root-n')) { state.rootCount = Number(btn.dataset.rootN); render(); return; }

    // 02.4 Adarrak
    if (btn.hasAttribute('data-branch-idx')) {
      state.branchIdx = Number(btn.dataset.branchIdx);
      state.branchStep = 0;
      state.branchCompare = false;
      render();
      return;
    }
    if (btn.hasAttribute('data-branch-step')) {
      const max = BRANCH_LESSONS[state.branchIdx].steps.length - 1;
      state.branchStep = Math.max(0, Math.min(max, Number(btn.dataset.branchStep)));
      render();
      return;
    }
    if (btn.hasAttribute('data-branch-compare')) { state.branchCompare = !state.branchCompare; render(); return; }

    // 03.1 Familien Atlasa
    if (btn.hasAttribute('data-fam-cat')) {
      state.famCat = btn.dataset.famCat;
      state.famExIdx = 0;
      state.ringNumbers = false;
      render();
      return;
    }
    if (btn.hasAttribute('data-fam-id')) {
      state.famId = btn.dataset.famId;
      state.famExIdx = 0;
      state.ringNumbers = false;
      render();
      return;
    }
    if (btn.hasAttribute('data-fam-ex')) {
      state.famExIdx = Number(btn.dataset.famEx);
      state.ringNumbers = false;
      render();
      return;
    }
    if (btn.hasAttribute('data-ring-toggle')) { state.ringNumbers = !state.ringNumbers; render(); return; }
    if (btn.hasAttribute('data-cyc-step')) {
      state.cycleWalkStep = Math.max(0, Math.min(CYCLE_STAGES.length - 1, Number(btn.dataset.cycStep)));
      render();
      // Re-open the cycle details element after re-render
      host.querySelector('.ks-datasheet .ks-details')?.setAttribute('open', '');
      return;
    }

    // 03.2 Lehentasunak
    if (btn.hasAttribute('data-prio-idx')) {
      state.prioIdx = Number(btn.dataset.prioIdx);
      state.prioStep = 0;
      render();
      return;
    }
    if (btn.hasAttribute('data-prio-step')) {
      const max = PRIORITY_LESSONS[state.prioIdx].steps.length - 1;
      state.prioStep = Math.max(0, Math.min(max, Number(btn.dataset.prioStep)));
      render();
      return;
    }

    // 04 & 05 Procedure Workshops
    if (btn.hasAttribute('data-proc-tier')) {
      const dir = btn.dataset.procDir;
      const t = Number(btn.dataset.procTier);
      if (dir === 'reverse') {
        state.revTier = t;
        state.revMolId = (FORMULA_TO_NAME.find(x => x.tier === t) || FORMULA_TO_NAME[0]).id;
        state.revStep = 0;
      } else {
        state.fwdTier = t;
        state.fwdMolId = (NAME_TO_FORMULA.find(x => x.tier === t) || NAME_TO_FORMULA[0]).id;
        state.fwdStep = 0;
      }
      render();
      return;
    }
    if (btn.hasAttribute('data-proc-mol')) {
      const dir = btn.dataset.procDir;
      if (dir === 'reverse') { state.revMolId = btn.dataset.procMol; state.revStep = 0; }
      else { state.fwdMolId = btn.dataset.procMol; state.fwdStep = 0; }
      render();
      return;
    }
    if (btn.hasAttribute('data-proc-step')) {
      const dir = btn.dataset.procDir;
      const set = dir === 'reverse' ? FORMULA_TO_NAME : NAME_TO_FORMULA;
      const molId = dir === 'reverse' ? state.revMolId : state.fwdMolId;
      const item = set.find(x => x.id === molId) || set[0];
      const nextStep = Math.max(0, Math.min(item.steps.length - 1, Number(btn.dataset.procStep)));
      if (dir === 'reverse') state.revStep = nextStep;
      else state.fwdStep = nextStep;
      render();
      return;
    }
    if (btn.hasAttribute('data-proc-why')) {
      if (btn.dataset.procWhy === 'reverse') state.revWhy = !state.revWhy;
      else state.fwdWhy = !state.fwdWhy;
      render();
      return;
    }
    if (btn.hasAttribute('data-mirror-dir')) {
      const targetDir = btn.dataset.mirrorDir;
      const molId = btn.dataset.mirrorMol;
      if (targetDir === 'reverse') {
        const hit = FORMULA_TO_NAME.find(x => x.id === molId);
        if (hit) { state.chapter = 'formulatik'; state.sub = null; state.revTier = hit.tier; state.revMolId = hit.id; state.revStep = 0; }
      } else {
        const hit = NAME_TO_FORMULA.find(x => x.id === molId);
        if (hit) { state.chapter = 'izenetik'; state.sub = null; state.fwdTier = hit.tier; state.fwdMolId = hit.id; state.fwdStep = 0; }
      }
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  });

  host.addEventListener('input', e => {
    if (e.target.matches('[data-fam-search]')) {
      state.famQuery = e.target.value;
      state.famExIdx = 0;
      render({ preserveSearchFocus: true, cursorOffset: e.target.selectionStart });
    }
  });

  host.addEventListener('change', e => {
    if (e.target.matches('[data-mobile-nav]')) {
      const [chap, sub] = e.target.value.split(':');
      normalizeChapterSub(state, chap, sub || null);
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  });

  host.addEventListener('toggle', e => {
    if (e.target.matches('[data-bohr-details]')) {
      state.bohrOpen = e.target.open;
    }
  }, true);

  // Keyboard ← / → support for active step-by-step figures when Kontsultatu is visible
  document.addEventListener('keydown', e => {
    if (host.hidden) return;
    if (document.body.classList.contains('catalog-drawer-open') || document.body.classList.contains('story-open')) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    const delta = e.key === 'ArrowRight' ? 1 : -1;
    if (state.chapter === 'oinarriak' && state.sub === 'loturak') {
      state.propaneStep = Math.max(0, Math.min(3, state.propaneStep + delta));
      render();
    } else if (state.chapter === 'oinarriak' && state.sub === 'adarrak') {
      const max = BRANCH_LESSONS[state.branchIdx].steps.length - 1;
      state.branchStep = Math.max(0, Math.min(max, state.branchStep + delta));
      render();
    } else if (state.chapter === 'familiak' && state.sub === 'lehentasunak') {
      const max = PRIORITY_LESSONS.length - 1;
      state.prioIdx = Math.max(0, Math.min(max, state.prioIdx + delta));
      render();
    } else if (state.chapter === 'izenetik') {
      const item = NAME_TO_FORMULA.find(x => x.id === state.fwdMolId) || NAME_TO_FORMULA[0];
      state.fwdStep = Math.max(0, Math.min(item.steps.length - 1, state.fwdStep + delta));
      render();
    } else if (state.chapter === 'formulatik') {
      const item = FORMULA_TO_NAME.find(x => x.id === state.revMolId) || FORMULA_TO_NAME[0];
      state.revStep = Math.max(0, Math.min(item.steps.length - 1, state.revStep + delta));
      render();
    }
  });

  render();

  consultInstance = {
    host,
    state,
    navigate({ chapter, sub = null, familyId = null, molId = null } = {}) {
      if (chapter) normalizeChapterSub(state, chapter, sub);
      if (familyId) {
        state.chapter = 'familiak';
        state.sub = 'atlasa';
        state.famCat = 'Guztiak';
        state.famQuery = '';
        state.famId = familyId;
        state.famExIdx = 0;
      }
      if (molId && state.chapter === 'izenetik') {
        const hit = NAME_TO_FORMULA.find(x => x.id === molId);
        if (hit) { state.fwdTier = hit.tier; state.fwdMolId = hit.id; state.fwdStep = 0; }
      }
      if (molId && state.chapter === 'formulatik') {
        const hit = FORMULA_TO_NAME.find(x => x.id === molId);
        if (hit) { state.revTier = hit.tier; state.revMolId = hit.id; state.revStep = 0; }
      }
      render();
    }
  };
  return consultInstance;
}

export function openConsultAt(opts = {}) {
  const host = document.getElementById('consultPage');
  const inst = mountConsult(host);
  inst?.navigate(opts);
}

/* --------------------------------------------------------------------------
   9. Global Quick-Consult Drawer (⌕ Bilatu / Txuletarioa · Ctrl+K)
   -------------------------------------------------------------------------- */
let drawerReturnFocus = null;
const drawerState = { tab: 'familiak', query: '' };

function renderDrawerContent() {
  if (drawerState.tab === 'lehentasunak') {
    return `
      <p style="font-size:13px;color:var(--ks-ink-soft);margin:0 0 12px">Goitik behera: lehentasun handieneko taldeak <strong>atzizkia</strong> jartzen du; gainerakoek, <strong>aurrizkia</strong>.</p>
      <div class="ks-table-wrap" style="margin-bottom:14px">
        <table class="ks-table">
          <thead><tr><th>#</th><th>Familia</th><th>Taldea</th><th>Atzizkia</th><th>Aurrizkia</th></tr></thead>
          <tbody>
            ${CHOSEN_HIERARCHY.map((h, i) => `
              <tr>
                <td><strong>${i + 1}</strong></td>
                <td><strong>${esc(h.family)}</strong></td>
                <td class="chem">${chemHTML(h.group)}</td>
                <td class="chem">${esc(h.suffix)}</td>
                <td class="chem">${esc(h.prefix)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${COMPLEMENTARY_HIERARCHY.map(c => `
        <div class="ks-drawer-hit">
          <strong style="font-size:12.5px;display:block;color:var(--ks-ink)">${esc(c.kind)}</strong>
          <div class="chem" style="font-size:13px;margin:4px 0">${esc(c.items)}</div>
          <p style="margin:0;font-size:12px;color:var(--ks-muted)">${esc(c.note)}</p>
        </div>
      `).join('')}
      <button type="button" class="ks-btn ks-btn-primary" style="width:100%;margin-top:8px" data-drawer-jump-prio>
        Ikusi 5 adibide gidatuak Kontsultatu-n ↗
      </button>
    `;
  }

  if (drawerState.tab === 'aurrizkiak') {
    return `
      <div class="ks-table-wrap" style="margin-bottom:14px">
        <table class="ks-table">
          <thead><tr><th>C kop.</th><th>Aurrizkia</th><th>Alkanoa</th><th>Alkil adarra</th></tr></thead>
          <tbody>
            ${CARBON_ROOTS.map((r, idx) => `
              <tr>
                <td><strong>${r.count}</strong></td>
                <td><span class="chem-tok" data-role="chain">${esc(r.prefix)}</span></td>
                <td>${esc(r.alkane)}</td>
                <td class="chem">${ALKYL_RADICALS[idx] ? `<span class="chem-tok" data-role="branch">${esc(ALKYL_RADICALS[idx].name)}</span> (${chemHTML(ALKYL_RADICALS[idx].formula)})` : '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="ks-drawer-hit">
        <strong style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--ks-muted);display:block;margin-bottom:8px">Kolore-kode pedagogikoa</strong>
        <ul class="ks-legend-items">
          ${CHEM_COLOR_LEGEND.map(c => `
            <li class="ks-legend-item"><span class="ks-swatch" data-role="${esc(c.role)}"></span><strong>${esc(c.label)}:</strong> <span>${esc(c.short)}</span></li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Default tab: 14 Familiak live search
  const q = norm(drawerState.query);
  const hits = FAMILIES.filter(f => {
    if (!q) return true;
    return norm([f.title, f.family, f.general, f.suffix, f.prefix, ...f.examples.flatMap(e => [e.name, e.formula])].join(' ')).includes(q);
  });

  return `
    <input
      type="search"
      class="ks-search-input"
      style="width:100%;margin-bottom:12px"
      data-drawer-search
      value="${esc(drawerState.query)}"
      placeholder="Bilatu familia, atzizkia edo formula (adib.: zetona, -oikoa, ester, NH2…)"
      aria-label="Bilatu txuletarioan"
    >
    ${hits.length ? hits.map(f => {
      const sample = f.examples[0];
      return `
        <article class="ks-drawer-hit">
          <div class="ks-drawer-hit-top">
            <strong style="font-size:15px;color:var(--ks-ink)">${esc(f.title)}</strong>
            <span class="chem" style="font-size:12.5px;color:var(--ks-muted)">${chemHTML(f.general)}</span>
          </div>
          <div style="font-size:12.5px;color:var(--ks-ink-soft);margin-bottom:6px">
            <strong>Atzizkia:</strong> <span class="chem">${esc(f.suffix)}</span> ·
            <strong>Aurrizkia:</strong> <span class="chem">${esc(f.prefix)}</span>
          </div>
          <div style="padding:6px 9px;background:var(--ks-tint-soft);border-radius:6px;font-size:13px;display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="chem">${highlightFormulaHTML(sample.formula, f.id)}</span>
            <span style="font-weight:600;color:var(--ks-ink)">${esc(sample.name)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;gap:8px">
            <span style="font-size:11.5px;color:var(--ks-muted)">${esc(f.family)} · ${f.examples.length} adibide</span>
            <button type="button" class="ks-btn ks-btn-ghost" style="font-size:11.5px;padding:3px 8px" data-drawer-open-fam="${esc(f.id)}">
              Ireki fitxa osoa ↗
            </button>
          </div>
        </article>
      `;
    }).join('') : '<p style="font-size:13px;color:var(--ks-muted)">Ez da bat datorren familiarik aurkitu.</p>'}
  `;
}

export function openQuickConsultDrawer(root, { tab = null, query = null } = {}) {
  if (!root) return;
  if (!document.body.classList.contains('catalog-drawer-open')) {
    drawerReturnFocus = document.activeElement;
  }
  if (tab) drawerState.tab = tab;
  if (typeof query === 'string') drawerState.query = query;

  function draw({ focusSearch = false, cursor = null } = {}) {
    root.innerHTML = `
      <div class="ks-drawer-backdrop" data-drawer-backdrop>
        <section class="ks-drawer" role="dialog" aria-modal="true" aria-label="Kontsulta azkarra eta txuletarioa">
          <header class="ks-drawer-head">
            <div>
              <span class="ks-kicker">KONTSULTA AZKARRA · EDONONDIK</span>
              <strong style="font-size:16px;color:var(--ks-ink)">Bilatu eta Txuletarioa</strong>
            </div>
            <button type="button" class="ks-btn" data-catalog-close aria-label="Itxi kontsulta azkarra">Itxi ✕</button>
          </header>
          <div class="ks-drawer-tabs" role="tablist" aria-label="Txuletarioaren atalak">
            <button type="button" role="tab" class="ks-drawer-tab" data-drawer-tab="familiak" aria-selected="${drawerState.tab === 'familiak'}">14 Familiak</button>
            <button type="button" role="tab" class="ks-drawer-tab" data-drawer-tab="lehentasunak" aria-selected="${drawerState.tab === 'lehentasunak'}">Lehentasunak</button>
            <button type="button" role="tab" class="ks-drawer-tab" data-drawer-tab="aurrizkiak" aria-selected="${drawerState.tab === 'aurrizkiak'}">Aurrizkiak (1–12 C)</button>
          </div>
          <div class="ks-drawer-body">
            ${renderDrawerContent()}
          </div>
        </section>
      </div>
    `;
    if (focusSearch) {
      const inp = root.querySelector('[data-drawer-search]');
      if (inp) {
        inp.focus();
        if (typeof cursor === 'number') {
          try { inp.setSelectionRange(cursor, cursor); } catch {}
        }
        return;
      }
    }
    root.querySelector('[data-drawer-search], [data-catalog-close]')?.focus();
  }

  if (!root.dataset.boundDrawer) {
    root.dataset.boundDrawer = '1';
    root.addEventListener('click', e => {
      if (e.target.hasAttribute('data-drawer-backdrop')) {
        closeQuickConsultDrawer(root);
        return;
      }
      const btn = e.target.closest('button');
      if (!btn) return;
      if (btn.hasAttribute('data-catalog-close')) {
        closeQuickConsultDrawer(root);
        return;
      }
      if (btn.hasAttribute('data-drawer-tab')) {
        drawerState.tab = btn.dataset.drawerTab;
        draw();
        return;
      }
      if (btn.hasAttribute('data-drawer-open-fam')) {
        const famId = btn.dataset.drawerOpenFam;
        closeQuickConsultDrawer(root, { restoreFocus: false });
        location.hash = '#teoria';
        openConsultAt({ chapter: 'familiak', sub: 'atlasa', familyId: famId });
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      if (btn.hasAttribute('data-drawer-jump-prio')) {
        closeQuickConsultDrawer(root, { restoreFocus: false });
        location.hash = '#teoria';
        openConsultAt({ chapter: 'familiak', sub: 'lehentasunak' });
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });

    root.addEventListener('input', e => {
      if (e.target.matches('[data-drawer-search]')) {
        drawerState.query = e.target.value;
        draw({ focusSearch: true, cursor: e.target.selectionStart });
      }
    });
  }

  document.body.classList.add('catalog-drawer-open');
  draw({ focusSearch: drawerState.tab === 'familiak' });
}

export function closeQuickConsultDrawer(root, { restoreFocus = true } = {}) {
  if (!root || !root.innerHTML) return;
  root.innerHTML = '';
  document.body.classList.remove('catalog-drawer-open');
  if (restoreFocus) drawerReturnFocus?.focus?.();
}

