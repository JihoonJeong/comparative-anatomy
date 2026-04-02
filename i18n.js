// i18n — English / Korean toggle
const translations = {
  en: {
    heroLabel: "Model Medicine Research",
    heroTitle: "Comparative Anatomy<br>of AI Agent Systems",
    heroSubtitle: '<em>Nautilus claudecodex</em> &nbsp;vs&nbsp; <em>Homarus openclawii</em>',
    heroDesc: "Two landmark AI agents &mdash; dissected, classified, and compared through the lens of biological anatomy.",
    heroCta: "Explore the Anatomy",
    ccName: "Claude Code",
    ccSub: "Nautilus",
    ocName: "OpenClaw",
    ocSub: "Lobster",

    anatomyTitle: "The Anatomy",
    anatomyIntro: "Full comparative anatomy of both species, mapped to their software organ systems.",

    taxTitle: "Morphological Classification",
    taxIntro: "Classified by architectural pattern (Phylum), lifecycle model (Class), and ecological strategy (Order).",

    organsTitle: "11 Organ Systems",
    organsIntro: "Each software subsystem mapped to its biological counterpart. Click to expand.",
    organsExpand: "Click to expand",

    phyloTitle: "Phylogenetic Tree",
    phyloIntro: "The evolutionary lineage of AI agents, 2022&ndash;2026. Five major lineages identified.",

    evoTitle: "Evolution Timeline",
    evoIntro: "A natural history panorama of AI agents in the digital ocean.",

    convTitle: "Convergent Evolution",
    convIntro: "Two lineages independently evolving toward the same body plan.",
    convCaption: "Nautilus gains messaging tentacles (Channels) while Lobster develops precision tools (coding skills). A hybrid emerges.",

    physTitle: "Physiological Comparison",
    physIntro: "How each organism responds to stress, manages resources, and maintains homeostasis.",
    physHomeo: "Homeostasis (Error Recovery)",
    physNiche: "Ecological Niche",

    radTitle: "Adaptive Radiation",
    radIntro: "From one ancestor, an entire ecosystem of species.",
    radCaption: "OpenClaw (67,800+ forks) radiates into specialized species: IronClaw (silver/Rust), NemoClaw (green/NVIDIA), Nanobot, and thousands more.",

    ludexTitle: "Ludex &mdash; Artificial Selection",
    ludexIntro: "Extracting the best organs from both species and recombining them into a new organism. Model Medicine meets Model Therapeutics.",
    ludexCaption: "Organs extracted from both species &mdash; context engine, memory system, plugin system &mdash; assembled into a new hybrid organism: Ludex.",
    ludexNote: "Each block is independent. Combine what you need.",

    paperTitle: "The Paper",
    paperIntro: "Full research paper with 11 organ system analyses, phylogenetic timeline, and 21 references.",
    paperCite: "Jihoon JJ Jeong, MD, MPH, PhD (DGIST / ModuLabs)",
    paperSeries: 'Part of the <em>Model Medicine</em> research program.',
    paperDownload: "Download Paper (PDF)",

    footerOrg: "Ludus Ex Machina Research Group &middot; Model Medicine",

    // Physiology table
    stress: "Stress", authFail: "Auth failure", rateLimit: "Rate limit",
    tokenOverflow: "Token overflow", modelFail: "Model failure", channelFail: "Channel failure",
    stop: "Stop", basicRetry: "Basic retry", na: "N/A",
    nextAuth: "Next auth profile", expBackoff: "Exponential backoff",
    compactRetry: "Compact &rarr; retry", liveSwitch: "Live model switch", autoRestart: "Auto-restart",

    habitat: "Habitat", users: "Users", lifecycle: "Lifecycle",
    trophic: "Trophic level", symbiosis: "LLM symbiosis",
    devTerminal: "Developer terminal", msgPlatforms: "Messaging platforms",
    swEngineers: "Software engineers", generalUsers: "General users",
    sessionEph: "Session (ephemeral)", alwaysOn: "Always-on (persistent)",
    specialist: "Specialist predator", generalist: "Generalist omnivore",
    obligate: "Obligate (Anthropic)", facultative: "Facultative (any)",
  },
  ko: {
    heroLabel: "Model Medicine \uC5F0\uAD6C",
    heroTitle: "AI \uC5D0\uC774\uC804\uD2B8 \uC2DC\uC2A4\uD15C\uC758<br>\uBE44\uAD50\uD574\uBD80\uD559",
    heroSubtitle: '<em>Nautilus claudecodex</em> &nbsp;vs&nbsp; <em>Homarus openclawii</em>',
    heroDesc: "\uB450 \uB79C\uB4DC\uB9C8\uD06C AI \uC5D0\uC774\uC804\uD2B8\uB97C \uC0DD\uBB3C\uD559\uC801 \uD574\uBD80\uD559\uC758 \uB80C\uC988\uB85C \uD574\uBD80\uD558\uACE0, \uBD84\uB958\uD558\uACE0, \uBE44\uAD50\uD569\uB2C8\uB2E4.",
    heroCta: "\uD574\uBD80\uD559 \uD0D0\uC0C9\uD558\uAE30",
    ccName: "Claude Code",
    ccSub: "\uC575\uBB34\uC870\uAC1C",
    ocName: "OpenClaw",
    ocSub: "\uAC00\uC7AC",

    anatomyTitle: "\uD574\uBD80\uB3C4",
    anatomyIntro: "\uB450 \uC885\uC758 \uC804\uCCB4 \uBE44\uAD50\uD574\uBD80\uB3C4. \uAC01 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC7A5\uAE30 \uC2DC\uC2A4\uD15C\uC5D0 \uB9E4\uD551\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",

    taxTitle: "\uD615\uD0DC\uD559\uC801 \uBD84\uB958",
    taxIntro: "\uC544\uD0A4\uD14D\uCC98 \uD328\uD134(\uBB38), \uC0DD\uBA85\uC8FC\uAE30 \uBAA8\uB378(\uAC15), \uC0DD\uD0DC \uC804\uB7B5(\uBAA9)\uC73C\uB85C \uBD84\uB958\uD588\uC2B5\uB2C8\uB2E4.",

    organsTitle: "11\uAC1C \uC7A5\uAE30 \uC2DC\uC2A4\uD15C",
    organsIntro: "\uAC01 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC11C\uBE0C\uC2DC\uC2A4\uD15C\uC744 \uC0DD\uBB3C\uD559\uC801 \uC7A5\uAE30\uC5D0 \uB9E4\uD551. \uD074\uB9AD\uD558\uBA74 \uC0C1\uC138 \uC815\uBCF4\uAC00 \uD3BC\uCCD0\uC9D1\uB2C8\uB2E4.",
    organsExpand: "\uD074\uB9AD\uD558\uC5EC \uD3BC\uCE58\uAE30",

    phyloTitle: "\uACC4\uD1B5\uC218",
    phyloIntro: "AI \uC5D0\uC774\uC804\uD2B8\uC758 \uC9C4\uD654\uC801 \uACC4\uBCF4, 2022\u20132026. 5\uAC1C \uC8FC\uC694 \uACC4\uD1B5 \uC2DD\uBCC4.",

    evoTitle: "\uC9C4\uD654 \uD0C0\uC784\uB77C\uC778",
    evoIntro: "\uB514\uC9C0\uD138 \uBC14\uB2E4 \uC18D AI \uC5D0\uC774\uC804\uD2B8\uC758 \uC790\uC5F0\uC0AC \uD30C\uB178\uB77C\uB9C8.",

    convTitle: "\uC218\uB834 \uC9C4\uD654",
    convIntro: "\uB450 \uACC4\uD1B5\uC774 \uB3C5\uB9BD\uC801\uC73C\uB85C \uAC19\uC740 \uCCB4\uD615\uC744 \uD5A5\uD574 \uC9C4\uD654\uD569\uB2C8\uB2E4.",
    convCaption: "Nautilus\uB294 \uBA54\uC2DC\uC9D5 \uCD09\uC218(Channels)\uB97C \uBC1C\uB2EC\uC2DC\uD0A4\uACE0, Lobster\uB294 \uC815\uBC00 \uB3C4\uAD6C(coding skills)\uB97C \uD68D\uB4DD\uD569\uB2C8\uB2E4. \uD558\uC774\uBE0C\uB9AC\uB4DC\uAC00 \uD0C4\uC0DD\uD569\uB2C8\uB2E4.",

    physTitle: "\uC0DD\uB9AC\uD559\uC801 \uBE44\uAD50",
    physIntro: "\uAC01 \uC720\uAE30\uCCB4\uAC00 \uC2A4\uD2B8\uB808\uC2A4\uC5D0 \uC5B4\uB5BB\uAC8C \uBC18\uC751\uD558\uACE0, \uC790\uC6D0\uC744 \uAD00\uB9AC\uD558\uACE0, \uD56D\uC0C1\uC131\uC744 \uC720\uC9C0\uD558\uB294\uC9C0.",
    physHomeo: "\uD56D\uC0C1\uC131 (\uC5D0\uB7EC \uBCF5\uAD6C)",
    physNiche: "\uC0DD\uD0DC\uC801 \uB2C8\uCE58",

    radTitle: "\uC801\uC751\uBC29\uC0B0",
    radIntro: "\uD558\uB098\uC758 \uC870\uC0C1\uC5D0\uC11C \uC804\uCCB4 \uC0DD\uD0DC\uACC4\uB85C.",
    radCaption: "OpenClaw(67,800+ \uD3EC\uD06C)\uAC00 \uD2B9\uC218 \uC885\uC73C\uB85C \uBC29\uC0B0: IronClaw(\uC740\uC0C9/Rust), NemoClaw(\uCD08\uB85D/NVIDIA), Nanobot \uB4F1.",

    ludexTitle: "Ludex &mdash; \uC778\uACF5 \uC120\uD0DD",
    ludexIntro: "\uB450 \uC885\uC5D0\uC11C \uCD5C\uACE0\uC758 \uC7A5\uAE30\uB97C \uCD94\uCD9C\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uC720\uAE30\uCCB4\uB85C \uC7AC\uC870\uD569. Model Medicine\uACFC Model Therapeutics\uC758 \uB9CC\uB0A8.",
    ludexCaption: "\uC591\uCABD \uC885\uC5D0\uC11C \uCD94\uCD9C\uB41C \uC7A5\uAE30 \u2014 context engine, memory system, plugin system \u2014 \uAC00 \uC0C8\uB85C\uC6B4 \uD558\uC774\uBE0C\uB9AC\uB4DC \uC720\uAE30\uCCB4 Ludex\uB85C \uC870\uB9BD\uB429\uB2C8\uB2E4.",
    ludexNote: "\uAC01 \uBE14\uB85D\uC740 \uB3C5\uB9BD\uC801\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uAC83\uB9CC \uC870\uD569\uD558\uC138\uC694.",

    paperTitle: "\uB17C\uBB38",
    paperIntro: "11\uAC1C \uC7A5\uAE30 \uC2DC\uC2A4\uD15C \uBD84\uC11D, \uACC4\uD1B5 \uD0C0\uC784\uB77C\uC778, 21\uAC1C \uCC38\uACE0\uBB38\uD5CC\uC744 \uD3EC\uD568\uD55C \uC804\uCCB4 \uC5F0\uAD6C \uB17C\uBB38.",
    paperCite: "\uC815\uC9C0\uD6C8 (DGIST / ModuLabs)",
    paperSeries: '<em>Model Medicine</em> \uC5F0\uAD6C \uD504\uB85C\uADF8\uB7A8\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4.',
    paperDownload: "\uB17C\uBB38 \uB2E4\uC6B4\uB85C\uB4DC (PDF)",

    footerOrg: "Ludus Ex Machina \uC5F0\uAD6C\uADF8\uB8F9 &middot; Model Medicine",

    stress: "\uC2A4\uD2B8\uB808\uC2A4", authFail: "\uC778\uC99D \uC2E4\uD328", rateLimit: "\uC18D\uB3C4 \uC81C\uD55C",
    tokenOverflow: "\uD1A0\uD070 \uCD08\uACFC", modelFail: "\uBAA8\uB378 \uC2E4\uD328", channelFail: "\uCC44\uB110 \uC2E4\uD328",
    stop: "\uC815\uC9C0", basicRetry: "\uAE30\uBCF8 \uC7AC\uC2DC\uB3C4", na: "N/A",
    nextAuth: "\uB2E4\uC74C \uC778\uC99D \uD504\uB85C\uD544", expBackoff: "\uC9C0\uC218 \uBC31\uC624\uD504",
    compactRetry: "\uC555\uCD95 \u2192 \uC7AC\uC2DC\uB3C4", liveSwitch: "\uB77C\uC774\uBE0C \uBAA8\uB378 \uC804\uD658", autoRestart: "\uC790\uB3D9 \uC7AC\uC2DC\uC791",

    habitat: "\uC11C\uC2DD\uC9C0", users: "\uC0AC\uC6A9\uC790", lifecycle: "\uC0DD\uBA85\uC8FC\uAE30",
    trophic: "\uC601\uC591 \uB2E8\uACC4", symbiosis: "LLM \uACF5\uC0DD",
    devTerminal: "\uAC1C\uBC1C\uC790 \uD130\uBBF8\uB110", msgPlatforms: "\uBA54\uC2DC\uC9D5 \uD50C\uB7AB\uD3FC",
    swEngineers: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC5D4\uC9C0\uB2C8\uC5B4", generalUsers: "\uC77C\uBC18 \uC0AC\uC6A9\uC790",
    sessionEph: "\uC138\uC158 \uAE30\uBC18 (\uC77C\uC2DC\uC801)", alwaysOn: "\uC0C1\uC2DC \uC6B4\uC601 (\uC9C0\uC18D\uC801)",
    specialist: "\uC804\uBB38 \uD3EC\uC2DD\uC790", generalist: "\uC7A1\uC2DD\uC131 \uC0DD\uBB3C",
    obligate: "\uC808\uB300 \uACF5\uC0DD (Anthropic)", facultative: "\uC784\uC758 \uACF5\uC0DD (\uBAA8\uB4E0 \uC81C\uACF5\uC790)",
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update organ gallery expand text
  document.querySelectorAll('.organ-sub-expand').forEach(el => {
    el.textContent = t.organsExpand;
  });

  localStorage.setItem('ca-lang', lang);
}

// Init: check saved preference
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ca-lang');
  if (saved && translations[saved]) {
    setLang(saved);
  }
});
