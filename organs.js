// Organ system data — drives the interactive comparison gallery
const organs = [
  {
    name: { en: "Nervous System", ko: "\uC2E0\uACBD\uACC4" },
    bio: { en: "Stimulus routing", ko: "\uC790\uADF9 \uB77C\uC6B0\uD305" },
    agent: { en: "Message Routing", ko: "\uBA54\uC2DC\uC9C0 \uB77C\uC6B0\uD305" },
    color: "#F4D03F",
    image: "assets/card-01-nervous.png",
    nautilus: {
      title: { en: "Nerve Net", ko: "\uC2E0\uACBD\uB9DD" },
      desc: { en: "Token-based fuzzy scoring. Diffuse, returns top-5 potential matches. Simple but functional.", ko: "\uD1A0\uD070 \uAE30\uBC18 \uD37C\uC9C0 \uC2A4\uCF54\uC5B4\uB9C1. \uD655\uC0B0\uD615\uC73C\uB85C \uC0C1\uC704 5\uAC1C \uB9E4\uCE58 \uBC18\uD658. \uB2E8\uC21C\uD558\uC9C0\uB9CC \uAE30\uB2A5\uC801." },
      file: "runtime.py"
    },
    lobster: {
      title: { en: "Central Nervous System", ko: "\uC911\uCD94\uC2E0\uACBD\uACC4" },
      desc: { en: "7-tier hierarchical binding resolution. Deterministic, single authoritative route. Thread inheritance. 2000-4000 entry cache.", ko: "7\uB2E8\uACC4 \uACC4\uCE35\uC801 \uBC14\uC778\uB529 \uD574\uC11D. \uACB0\uC815\uB860\uC801, \uB2E8\uC77C \uAD8C\uC704 \uACBD\uB85C. \uC2A4\uB808\uB4DC \uC0C1\uC18D. 2000-4000 \uD56D\uBAA9 \uCE90\uC2DC." },
      file: "routing/resolve-route.ts"
    }
  },
  {
    name: { en: "Respiratory System", ko: "\uD638\uD761\uAE30\uACC4" },
    bio: { en: "Gas exchange", ko: "\uAC00\uC2A4 \uAD50\uD658" },
    agent: { en: "LLM API Communication", ko: "LLM API \uD1B5\uC2E0" },
    color: "#5DADE2",
    image: "assets/card-02-respiratory.png",
    nautilus: {
      title: { en: "Single Gill (Rust)", ko: "\uB2E8\uC77C \uC544\uAC00\uBBF8 (Rust)" },
      desc: { en: "Native Rust HTTP client for Anthropic API only. Highly efficient \u2014 2 retries, 200ms-2s backoff. SSE streaming parser.", ko: "Anthropic API \uC804\uC6A9 \uB124\uC774\uD2F0\uBE0C Rust HTTP \uD074\uB77C\uC774\uC5B8\uD2B8. \uACE0\uD6A8\uC728 \u2014 2\uD68C \uC7AC\uC2DC\uB3C4, 200ms-2s \uBC31\uC624\uD504. SSE \uC2A4\uD2B8\uB9AC\uBC0D \uD30C\uC11C." },
      file: "rust/crates/api/client.rs"
    },
    lobster: {
      title: { en: "Multi-Gill (23+ providers)", ko: "\uB2E4\uC911 \uC544\uAC00\uBBF8 (23\uAC1C+ \uD504\uB85C\uBC14\uC774\uB354)" },
      desc: { en: "Plugin-based provider abstraction: OpenAI, Anthropic, Google, Ollama, and 19 more. Multi-profile auth. Provider-specific failover chains.", ko: "\uD50C\uB7EC\uADF8\uC778 \uAE30\uBC18 \uD504\uB85C\uBC14\uC774\uB354 \uCD94\uC0C1\uD654: OpenAI, Anthropic, Google, Ollama \uB4F1 23\uAC1C+. \uBA40\uD2F0 \uD504\uB85C\uD544 \uC778\uC99D. \uD504\uB85C\uBC14\uC774\uB354\uBCC4 \uD3B4\uC624\uBC84 \uCCB4\uC778." },
      file: "extensions/anthropic/, extensions/openai/"
    }
  },
  {
    name: { en: "Skeletal System", ko: "\uACE8\uACA9\uACC4" },
    bio: { en: "Structural support", ko: "\uAD6C\uC870\uC801 \uC9C0\uC9C0" },
    agent: { en: "Data Structures", ko: "\uB370\uC774\uD130 \uAD6C\uC870" },
    color: "#FDEBD0",
    image: "assets/card-03-skeletal.png",
    nautilus: {
      title: { en: "Exoskeleton", ko: "\uC678\uACE8\uACA9" },
      desc: { en: "Frozen dataclasses \u2014 rigid, immutable, protective. ~5 core types. Safety through constraint.", ko: "Frozen dataclass \u2014 \uACBD\uC9C1\uB418\uACE0, \uBD88\uBCC0\uC774\uBA70, \uBCF4\uD638\uC801. ~5\uAC1C \uD575\uC2EC \uD0C0\uC785. \uC81C\uC57D\uC744 \uD1B5\uD55C \uC548\uC804\uC131." },
      file: "models.py"
    },
    lobster: {
      title: { en: "Jointed Endoskeleton", ko: "\uAD00\uC808\uD615 \uB0B4\uACE8\uACA9" },
      desc: { en: "35+ modular TypeScript interfaces. Mutable with controlled mutation. Flexible and composable.", ko: "35\uAC1C+ \uBAA8\uB4C8\uC2DD TypeScript \uC778\uD130\uD398\uC774\uC2A4. \uC81C\uC5B4\uB41C \uBCC0\uACBD \uAC00\uB2A5. \uC720\uC5F0\uD558\uACE0 \uC870\uD569 \uAC00\uB2A5." },
      file: "config/types/"
    }
  },
  {
    name: { en: "Endocrine System", ko: "\uB0B4\uBD84\uBE44\uACC4" },
    bio: { en: "Hormonal regulation", ko: "\uD638\uB974\uBAAC \uC870\uC808" },
    agent: { en: "Configuration & Global State", ko: "\uC124\uC815 \uBC0F \uC804\uC5ED \uC0C1\uD0DC" },
    color: "#F0B27A",
    image: "assets/card-04-endocrine.png",
    nautilus: {
      title: { en: "Minimal Hormones", ko: "\uCD5C\uC18C \uD638\uB974\uBAAC" },
      desc: { en: "Simple configuration, fixed at startup. Few hormonal pathways. Settings rarely change during a session.", ko: "\uB2E8\uC21C\uD55C \uC124\uC815, \uC2DC\uC791 \uC2DC \uACE0\uC815. \uC801\uC740 \uD638\uB974\uBAAC \uACBD\uB85C. \uC138\uC158 \uC911 \uC124\uC815 \uBCC0\uACBD \uAC70\uC758 \uC5C6\uC74C." },
      file: "context.py, constants"
    },
    lobster: {
      title: { en: "Complex HPA Axis", ko: "\uBCF5\uC7A1\uD55C HPA \uCD95" },
      desc: { en: "5-layer override chain: explicit \u2192 session \u2192 agent \u2192 provider \u2192 default. Dynamic model switching, per-session params.", ko: "5\uB2E8\uACC4 \uC624\uBC84\uB77C\uC774\uB4DC \uCCB4\uC778: \uBA85\uC2DC\uC801 \u2192 \uC138\uC158 \u2192 \uC5D0\uC774\uC804\uD2B8 \u2192 \uD504\uB85C\uBC14\uC774\uB354 \u2192 \uAE30\uBCF8\uAC12. \uB3D9\uC801 \uBAA8\uB378 \uC804\uD658, \uC138\uC158\uBCC4 \uD30C\uB77C\uBBF8\uD130." },
      file: "config/types/, sessions/model-overrides.ts"
    }
  },
  {
    name: { en: "Digestive System", ko: "\uC18C\uD654\uACC4" },
    bio: { en: "Nutrient extraction", ko: "\uC601\uC591\uC18C \uCD94\uCD9C" },
    agent: { en: "Context/Token Management", ko: "\uCEE8\uD14D\uC2A4\uD2B8/\uD1A0\uD070 \uAD00\uB9AC" },
    color: "#58D68D",
    image: "assets/card-05-digestive.png",
    nautilus: {
      title: { en: "Tube Gut", ko: "\uAD00\uD615 \uC18C\uD654\uAD00" },
      desc: { en: "Fixed 2000 token budget. Turn-count compaction (every 12 turns). Linear processing, single built-in engine.", ko: "\uACE0\uC815 2000 \uD1A0\uD070 \uC608\uC0B0. \uD134 \uC218 \uAE30\uBC18 \uC555\uCD95 (12\uD134\uB9C8\uB2E4). \uC120\uD615 \uCC98\uB9AC, \uB2E8\uC77C \uB0B4\uC7A5 \uC5D4\uC9C4." },
      file: "query_engine.py"
    },
    lobster: {
      title: { en: "Ruminant Multi-Chamber", ko: "\uBC18\uCD94\uC704 \uB2E4\uC911 \uCC54\uBC84" },
      desc: { en: "Dynamic per-model token budget. Pluggable context engines. Transcript rewriting (\"chewing cud\"). Subagent scope tracking.", ko: "\uBAA8\uB378\uBCC4 \uB3D9\uC801 \uD1A0\uD070 \uC608\uC0B0. \uAD50\uCCB4 \uAC00\uB2A5\uD55C \uCEE8\uD14D\uC2A4\uD2B8 \uC5D4\uC9C4. \uD2B8\uB79C\uC2A4\uD06C\uB9BD\uD2B8 \uC7AC\uC791\uC131(\"\uB418\uC0C8\uAE40\uC9C8\"). \uC11C\uBE0C\uC5D0\uC774\uC804\uD2B8 \uBC94\uC704 \uCD94\uC801." },
      file: "context-engine/"
    }
  },
  {
    name: { en: "Immune System", ko: "\uBA74\uC5ED\uACC4" },
    bio: { en: "Pathogen defense", ko: "\uBCD1\uC6D0\uCCB4 \uBC29\uC5B4" },
    agent: { en: "Security & Permissions", ko: "\uBCF4\uC548 \uBC0F \uAD8C\uD55C" },
    color: "#AF7AC5",
    image: "assets/card-06-immune.png",
    nautilus: {
      title: { en: "Innate Only", ko: "\uC120\uCC9C \uBA74\uC5ED\uB9CC" },
      desc: { en: "Tool name blocklist with prefix matching. ~20 lines. Checks at execution time. Simple barrier.", ko: "\uB3C4\uAD6C\uBA85 \uCC28\uB2E8 \uBAA9\uB85D + \uC811\uB450\uC0AC \uB9E4\uCE6D. ~20\uC904. \uC2E4\uD589 \uC2DC\uC810\uC5D0 \uAC80\uC0AC. \uB2E8\uC21C\uD55C \uBC29\uBCBD." },
      file: "permissions.py"
    },
    lobster: {
      title: { en: "Innate + Adaptive", ko: "\uC120\uCC9C + \uC801\uC751 \uBA74\uC5ED" },
      desc: { en: "Multi-layer audit framework (2000+ lines). Channel + user + role + credential checks. SSRF protection, DNS pinning, secret management.", ko: "\uB2E4\uCE35 \uAC10\uC0AC \uD504\uB808\uC784\uC6CC\uD06C (2000\uC904+). \uCC44\uB110+\uC0AC\uC6A9\uC790+\uC5ED\uD560+\uC790\uACA9\uC99D\uBA85 \uAC80\uC0AC. SSRF \uBCF4\uD638, DNS \uD540\uB2DD, \uC2DC\uD06C\uB9BF \uAD00\uB9AC." },
      file: "security/"
    }
  },
  {
    name: { en: "Circulatory System", ko: "\uC21C\uD658\uACC4" },
    bio: { en: "Transport", ko: "\uC218\uC1A1" },
    agent: { en: "Session/State Management", ko: "\uC138\uC158/\uC0C1\uD0DC \uAD00\uB9AC" },
    color: "#E74C3C",
    image: "assets/card-07-circulatory.png",
    nautilus: {
      title: { en: "Open Circulation", ko: "\uAC1C\uBC29 \uC21C\uD658" },
      desc: { en: "File-based JSON storage. UUID session IDs. Minimal state (id, messages, tokens). 36 lines total.", ko: "\uD30C\uC77C \uAE30\uBC18 JSON \uC800\uC7A5. UUID \uC138\uC158 ID. \uCD5C\uC18C \uC0C1\uD0DC (id, \uBA54\uC2DC\uC9C0, \uD1A0\uD070). \uCD1D 36\uC904." },
      file: "session_store.py"
    },
    lobster: {
      title: { en: "Semi-Closed Circulation", ko: "\uBC18\uD3D0\uC1C4 \uC21C\uD658" },
      desc: { en: "Composite session keys (agent:channel:scope:peer). Rich state with model overrides, auth profiles, send policies. 1000+ lines.", ko: "\uBCF5\uD569 \uC138\uC158 \uD0A4 (agent:channel:scope:peer). \uBAA8\uB378 \uC624\uBC84\uB77C\uC774\uB4DC, \uC778\uC99D \uD504\uB85C\uD544, \uC804\uC1A1 \uC815\uCC45 \uD3EC\uD568. 1000\uC904+." },
      file: "sessions/"
    }
  },
  {
    name: { en: "Muscular System", ko: "\uADFC\uC721\uACC4" },
    bio: { en: "Movement/action", ko: "\uC6B4\uB3D9/\uD589\uB3D9" },
    agent: { en: "Tool Execution", ko: "\uB3C4\uAD6C \uC2E4\uD589" },
    color: "#F1948A",
    image: "assets/card-08-muscular.png",
    nautilus: {
      title: { en: "Tentacle Array", ko: "\uCD09\uC218 \uBC30\uC5F4" },
      desc: { en: "Static JSON snapshot registry with fuzzy search. Original has full execution; port has mirrored/mock. Coordinated but simpler.", ko: "\uC815\uC801 JSON \uC2A4\uB0C5\uC0F7 \uB808\uC9C0\uC2A4\uD2B8\uB9AC + \uD37C\uC9C0 \uAC80\uC0C9. \uC6D0\uBCF8\uC740 \uC644\uC804 \uC2E4\uD589; \uD3EC\uD2B8\uB294 \uBBF8\uB7EC/\uBAA8\uD0B9. \uC870\uC728\uB418\uC9C0\uB9CC \uB2E8\uC21C." },
      file: "tools.py, execution_registry.py"
    },
    lobster: {
      title: { en: "Specialized Claws + Legs", ko: "\uD2B9\uC218 \uC9D1\uAC8C\uBC1C + \uBCF4\uD589\uB2E4\uB9AC" },
      desc: { en: "Dynamic plugin-based registration via registerTool() API. Real execution with structured results. MCP fully integrated.", ko: "registerTool() API\uB97C \uD1B5\uD55C \uB3D9\uC801 \uD50C\uB7EC\uADF8\uC778 \uB4F1\uB85D. \uAD6C\uC870\uD654\uB41C \uACB0\uACFC\uB85C \uC2E4\uC81C \uC2E4\uD589. MCP \uC644\uC804 \uD1B5\uD569." },
      file: "plugins/api-builder.ts"
    }
  },
  {
    name: { en: "HGT System", ko: "\uC218\uD3C9\uC720\uC804\uC790\uC804\uB2EC\uACC4" },
    bio: { en: "Horizontal gene transfer", ko: "\uC218\uD3C9 \uC720\uC804\uC790 \uC804\uB2EC" },
    agent: { en: "Plugin/Extension Architecture", ko: "\uD50C\uB7EC\uADF8\uC778/\uD655\uC7A5 \uC544\uD0A4\uD14D\uCC98" },
    color: "#48C9B0",
    image: "assets/card-09-hgt.png",
    nautilus: {
      title: { en: "Limited Symbiosis", ko: "\uC81C\uD55C\uC801 \uACF5\uC0DD" },
      desc: { en: "MCP servers + Skills system in original. Limited extension capacity. 11.6K forks (true reproduction).", ko: "\uC6D0\uBCF8\uC5D0 MCP \uC11C\uBC84 + Skills \uC2DC\uC2A4\uD15C. \uC81C\uD55C\uC801 \uD655\uC7A5 \uB2A5\uB825. 11.6K \uD3EC\uD06C (\uC9C4\uC815\uD55C \uBC88\uC2DD)." },
      file: "plugins/ (archived in port)"
    },
    lobster: {
      title: { en: "Prolific HGT", ko: "\uB2E4\uC0B0\uC801 HGT" },
      desc: { en: "Manifest-based 4-stage loading. 17+ registration APIs. 50+ extensions. 67.8K forks. Bacteria-like plasmid acquisition.", ko: "\uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uAE30\uBC18 4\uB2E8\uACC4 \uB85C\uB529. 17\uAC1C+ \uB4F1\uB85D API. 50\uAC1C+ \uD655\uC7A5. 67.8K \uD3EC\uD06C. \uBC15\uD14C\uB9AC\uC544 \uD50C\uB77C\uC2A4\uBBF8\uB4DC \uD68D\uB4DD \uBC29\uC2DD." },
      file: "extensions/, plugins/"
    }
  },
  {
    name: { en: "Sensory System", ko: "\uAC10\uAC01\uACC4" },
    bio: { en: "Environmental perception", ko: "\uD658\uACBD \uC778\uC9C0" },
    agent: { en: "Input Processing", ko: "\uC785\uB825 \uCC98\uB9AC" },
    color: "#F5B041",
    image: "assets/card-10-sensory.png",
    nautilus: {
      title: { en: "Pinhole Eye (Expanding)", ko: "\uD540\uD640 \uB208 (\uD655\uC7A5 \uC911)" },
      desc: { en: "Originally CLI-only. Now expanding: Channels, Chrome extension, IDE integrations. Cave organism re-colonizing the surface.", ko: "\uC6D0\uB798 CLI \uC804\uC6A9. \uD604\uC7AC \uD655\uC7A5 \uC911: Channels, Chrome \uD655\uC7A5, IDE \uD1B5\uD569. \uB3D9\uAD74 \uC0DD\uBB3C\uC774 \uC9C0\uD45C\uB85C \uC7AC\uC9C4\uCD9C." },
      file: "CLI + Channels"
    },
    lobster: {
      title: { en: "Compound Eyes + Antennae", ko: "\uAC89\uB208 + \uB354\uB4EC\uC774" },
      desc: { en: "23+ channel adapters (Discord, Telegram, WhatsApp, etc.). Text, voice, images, files, reactions. Unified ChatType normalization.", ko: "23\uAC1C+ \uCC44\uB110 \uC5B4\uB311\uD130 (Discord, Telegram, WhatsApp \uB4F1). \uD14D\uC2A4\uD2B8, \uC74C\uC131, \uC774\uBBF8\uC9C0, \uD30C\uC77C, \uB9AC\uC561\uC158. \uD1B5\uD569 ChatType \uC815\uADDC\uD654." },
      file: "channels/"
    }
  },
  {
    name: { en: "Mnemonic System", ko: "\uAE30\uC5B5\uACC4" },
    bio: { en: "Long-term storage (nervous subsystem)", ko: "\uC7A5\uAE30 \uC800\uC7A5 (\uC2E0\uACBD\uACC4 \uD558\uC704)" },
    agent: { en: "Persistent Memory", ko: "\uC601\uC18D \uBA54\uBAA8\uB9AC" },
    color: "#85C1E9",
    image: "assets/card-11-mnemonic.png",
    nautilus: {
      title: { en: "Working Memory Only", ko: "\uC791\uC5C5 \uAE30\uC5B5\uB9CC" },
      desc: { en: "Session-scoped, no cross-session persistence. Like an insect with no hippocampus. Lives entirely in the present.", ko: "\uC138\uC158 \uBC94\uC704, \uC138\uC158 \uAC04 \uC9C0\uC18D\uC131 \uC5C6\uC74C. \uD574\uB9C8\uAC00 \uC5C6\uB294 \uACE4\uCDA9\uCC98\uB7FC. \uC644\uC804\uD788 \uD604\uC7AC\uC5D0\uB9CC \uC0B4\uC544\uAC10." },
      file: "(session-only)"
    },
    lobster: {
      title: { en: "Hippocampal System", ko: "\uD574\uB9C8 \uC2DC\uC2A4\uD15C" },
      desc: { en: "LanceDB vector DB + SQLite FTS. BM25 + vector hybrid search. Auto-capture/recall. Categories: preference, fact, decision, entity.", ko: "LanceDB \uBCA1\uD130 DB + SQLite FTS. BM25 + \uBCA1\uD130 \uD558\uC774\uBE0C\uB9AC\uB4DC \uAC80\uC0C9. \uC790\uB3D9 \uCEA1\uCC98/\uB9AC\uCF5C. \uCE74\uD14C\uACE0\uB9AC: \uC120\uD638, \uC0AC\uC2E4, \uACB0\uC815, \uC5D4\uD2F0\uD2F0." },
      file: "memory-core/, memory-lancedb/"
    }
  }
];

// Get current language from i18n
function getLang() {
  return (typeof currentLang !== 'undefined') ? currentLang : 'en';
}

// Helper to get translated text
function t(obj) {
  if (typeof obj === 'string') return obj;
  const lang = getLang();
  return obj[lang] || obj['en'] || '';
}

// Render organ gallery with images
function renderOrgans() {
  const gallery = document.querySelector('.organ-gallery');
  if (!gallery) return;

  gallery.innerHTML = organs.map((organ, i) => `
    <div class="organ-gallery-item" onclick="toggleOrgan(${i})" style="--organ-color: ${organ.color}">
      <img src="${organ.image}" alt="${t(organ.name)}" loading="lazy">
      <div class="organ-gallery-info">
        <div>
          <div class="organ-title" style="color: ${organ.color}">${t(organ.name)}</div>
          <div class="organ-sub">${t(organ.bio)} &mdash; ${t(organ.agent)}</div>
        </div>
        <div class="organ-sub organ-sub-expand">${getLang() === 'ko' ? '\uD074\uB9AD\uD558\uC5EC \uD3BC\uCE58\uAE30' : 'Click to expand'}</div>
      </div>
      <div class="organ-gallery-detail" id="organ-detail-${i}">
        <div class="detail-grid">
          <div>
            <h4 style="color: var(--nautilus)">\uD83E\uDD91 ${t(organ.nautilus.title)}</h4>
            <p>${t(organ.nautilus.desc)}</p>
            <div class="file">${organ.nautilus.file}</div>
          </div>
          <div>
            <h4 style="color: var(--lobster)">\uD83E\uDD9E ${t(organ.lobster.title)}</h4>
            <p>${t(organ.lobster.desc)}</p>
            <div class="file">${organ.lobster.file}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleOrgan(index) {
  const detail = document.getElementById(`organ-detail-${index}`);
  if (detail) {
    detail.classList.toggle('open');
  }
}

// Re-render organs when language changes
const origSetLang = typeof setLang === 'function' ? setLang : null;
document.addEventListener('DOMContentLoaded', () => {
  renderOrgans();
  // Patch setLang to also re-render organs
  if (typeof window.setLang === 'function') {
    const _orig = window.setLang;
    window.setLang = function(lang) {
      _orig(lang);
      renderOrgans();
    };
  }
});
