// Organ system data — drives the interactive comparison gallery
const organs = [
  {
    name: "Nervous System",
    bio: "Stimulus routing",
    agent: "Message Routing",
    color: "#F4D03F",
    image: "assets/card-01-nervous.png",
    nautilus: {
      title: "Nerve Net",
      desc: "Token-based fuzzy scoring. Diffuse, returns top-5 potential matches. Simple but functional.",
      file: "runtime.py"
    },
    lobster: {
      title: "Central Nervous System",
      desc: "7-tier hierarchical binding resolution. Deterministic, single authoritative route. Thread inheritance. 2000-4000 entry cache.",
      file: "routing/resolve-route.ts"
    }
  },
  {
    name: "Respiratory System",
    bio: "Gas exchange",
    agent: "LLM API Communication",
    color: "#5DADE2",
    image: "assets/card-02-respiratory.png",
    nautilus: {
      title: "Single Gill (Rust)",
      desc: "Native Rust HTTP client for Anthropic API only. Highly efficient \u2014 2 retries, 200ms-2s backoff. SSE streaming parser.",
      file: "rust/crates/api/client.rs"
    },
    lobster: {
      title: "Multi-Gill (23+ providers)",
      desc: "Plugin-based provider abstraction: OpenAI, Anthropic, Google, Ollama, and 19 more. Multi-profile auth. Provider-specific failover chains.",
      file: "extensions/anthropic/, extensions/openai/"
    }
  },
  {
    name: "Skeletal System",
    bio: "Structural support",
    agent: "Data Structures",
    color: "#FDEBD0",
    image: "assets/card-03-skeletal.png",
    nautilus: {
      title: "Exoskeleton",
      desc: "Frozen dataclasses \u2014 rigid, immutable, protective. ~5 core types. Safety through constraint.",
      file: "models.py"
    },
    lobster: {
      title: "Jointed Endoskeleton",
      desc: "35+ modular TypeScript interfaces. Mutable with controlled mutation. Flexible and composable.",
      file: "config/types/"
    }
  },
  {
    name: "Endocrine System",
    bio: "Hormonal regulation",
    agent: "Configuration & Global State",
    color: "#F0B27A",
    image: "assets/card-04-endocrine.png",
    nautilus: {
      title: "Minimal Hormones",
      desc: "Simple configuration, fixed at startup. Few hormonal pathways. Settings rarely change during a session.",
      file: "context.py, constants"
    },
    lobster: {
      title: "Complex HPA Axis",
      desc: "5-layer override chain: explicit \u2192 session \u2192 agent \u2192 provider \u2192 default. Dynamic model switching, per-session params.",
      file: "config/types/, sessions/model-overrides.ts"
    }
  },
  {
    name: "Digestive System",
    bio: "Nutrient extraction",
    agent: "Context/Token Management",
    color: "#58D68D",
    image: "assets/card-05-digestive.png",
    nautilus: {
      title: "Tube Gut",
      desc: "Fixed 2000 token budget. Turn-count compaction (every 12 turns). Linear processing, single built-in engine.",
      file: "query_engine.py"
    },
    lobster: {
      title: "Ruminant Multi-Chamber",
      desc: "Dynamic per-model token budget. Pluggable context engines. Transcript rewriting (\"chewing cud\"). Subagent scope tracking.",
      file: "context-engine/"
    }
  },
  {
    name: "Immune System",
    bio: "Pathogen defense",
    agent: "Security & Permissions",
    color: "#AF7AC5",
    image: "assets/card-06-immune.png",
    nautilus: {
      title: "Innate Only",
      desc: "Tool name blocklist with prefix matching. ~20 lines. Checks at execution time. Simple barrier.",
      file: "permissions.py"
    },
    lobster: {
      title: "Innate + Adaptive",
      desc: "Multi-layer audit framework (2000+ lines). Channel + user + role + credential checks. SSRF protection, DNS pinning, secret management.",
      file: "security/"
    }
  },
  {
    name: "Circulatory System",
    bio: "Transport",
    agent: "Session/State Management",
    color: "#E74C3C",
    image: "assets/card-07-circulatory.png",
    nautilus: {
      title: "Open Circulation",
      desc: "File-based JSON storage. UUID session IDs. Minimal state (id, messages, tokens). 36 lines total.",
      file: "session_store.py"
    },
    lobster: {
      title: "Semi-Closed Circulation",
      desc: "Composite session keys (agent:channel:scope:peer). Rich state with model overrides, auth profiles, send policies. 1000+ lines.",
      file: "sessions/"
    }
  },
  {
    name: "Muscular System",
    bio: "Movement/action",
    agent: "Tool Execution",
    color: "#F1948A",
    image: "assets/card-08-muscular.png",
    nautilus: {
      title: "Tentacle Array",
      desc: "Static JSON snapshot registry with fuzzy search. Original has full execution; port has mirrored/mock. Coordinated but simpler.",
      file: "tools.py, execution_registry.py"
    },
    lobster: {
      title: "Specialized Claws + Legs",
      desc: "Dynamic plugin-based registration via registerTool() API. Real execution with structured results. MCP fully integrated.",
      file: "plugins/api-builder.ts"
    }
  },
  {
    name: "HGT System",
    bio: "Horizontal gene transfer",
    agent: "Plugin/Extension Architecture",
    color: "#48C9B0",
    image: "assets/card-09-hgt.png",
    nautilus: {
      title: "Limited Symbiosis",
      desc: "MCP servers + Skills system in original. Limited extension capacity. 11.6K forks (true reproduction).",
      file: "plugins/ (archived in port)"
    },
    lobster: {
      title: "Prolific HGT",
      desc: "Manifest-based 4-stage loading. 17+ registration APIs. 50+ extensions. 67.8K forks. Bacteria-like plasmid acquisition.",
      file: "extensions/, plugins/"
    }
  },
  {
    name: "Sensory System",
    bio: "Environmental perception",
    agent: "Input Processing",
    color: "#F5B041",
    image: "assets/card-10-sensory.png",
    nautilus: {
      title: "Pinhole Eye (Expanding)",
      desc: "Originally CLI-only. Now expanding: Channels, Chrome extension, IDE integrations. Cave organism re-colonizing the surface.",
      file: "CLI + Channels"
    },
    lobster: {
      title: "Compound Eyes + Antennae",
      desc: "23+ channel adapters (Discord, Telegram, WhatsApp, etc.). Text, voice, images, files, reactions. Unified ChatType normalization.",
      file: "channels/"
    }
  },
  {
    name: "Mnemonic System",
    bio: "Long-term storage (nervous subsystem)",
    agent: "Persistent Memory",
    color: "#85C1E9",
    image: "assets/card-11-mnemonic.png",
    nautilus: {
      title: "Working Memory Only",
      desc: "Session-scoped, no cross-session persistence. Like an insect with no hippocampus. Lives entirely in the present.",
      file: "(session-only)"
    },
    lobster: {
      title: "Hippocampal System",
      desc: "LanceDB vector DB + SQLite FTS. BM25 + vector hybrid search. Auto-capture/recall. Categories: preference, fact, decision, entity.",
      file: "memory-core/, memory-lancedb/"
    }
  }
];

// Render organ gallery with images
function renderOrgans() {
  const gallery = document.querySelector('.organ-gallery');
  if (!gallery) return;

  gallery.innerHTML = organs.map((organ, i) => `
    <div class="organ-gallery-item" onclick="toggleOrgan(${i})" style="--organ-color: ${organ.color}">
      <img src="${organ.image}" alt="${organ.name}" loading="lazy">
      <div class="organ-gallery-info">
        <div>
          <div class="organ-title" style="color: ${organ.color}">${organ.name}</div>
          <div class="organ-sub">${organ.bio} &mdash; ${organ.agent}</div>
        </div>
        <div class="organ-sub">Click to expand</div>
      </div>
      <div class="organ-gallery-detail" id="organ-detail-${i}">
        <div class="detail-grid">
          <div>
            <h4 style="color: var(--nautilus)">🦑 ${organ.nautilus.title}</h4>
            <p>${organ.nautilus.desc}</p>
            <div class="file">${organ.nautilus.file}</div>
          </div>
          <div>
            <h4 style="color: var(--lobster)">🦞 ${organ.lobster.title}</h4>
            <p>${organ.lobster.desc}</p>
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

document.addEventListener('DOMContentLoaded', renderOrgans);
