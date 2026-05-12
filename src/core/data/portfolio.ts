import type {
  NavItem,
  Project,
  BlogPost,
  Skill,
  Milestone,
  Certification,
  ContactInfo,
  Profile,
  footerLinksType,
} from "../types/portfolio-types";
import backgroundProjectImage from "../../common/assets/background-project.webp";
import vuhieu from "../../common/assets/vuhieu.webp";

export const profile: Profile = {
  name: "Vũ Trần Minh Hiếu",
  location: "Ho Chi Minh City, VietNam",
  summary:
    "I'm a second-year IT student focused on backend development and systems programming. I enjoy building with Node.js and C/C++, solving technical problems, and learning through personal projects.",
  avatar: vuhieu,
  resumeLink:
    "https://drive.google.com/file/d/1z8n4YbY9YxkYu9JOEMTA0TuUihD6mlZf/view?usp=drive_link",
};

export const footerLinks: footerLinksType[] = [
  { label: "Source Code", href: "https://github.com/vuhieu0808/vuhieu-portfolio" },
  { label: "Personal Website", href: "https://vuhieu-portfolio.vercel.app/" },
];

export const contactInfo: ContactInfo = {
  email: {
    icon: "email",
    label: "Email",
    href: "mailto:minhhieuvutran046@gmail.com",
  },
  linkedinUrl: {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vuhieu886/",
  },
  githubUrl: {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/vuhieu0808",
  },
  facebookUrl: {
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/VuTranMinhHieu64",
  },
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  // { label: "Blog", href: "/#blog" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export const projects: Project[] = [
  // Project TDTT: The Right Type
  {
    title: "The Right Type",
    description:
      "Backend-focused work-date platform combining intelligent user matching, real-time messaging, and AI-assisted conversation support through a scalable client-server architecture.",
    tags: [
      "NODEJS",
      "EXPRESS",
      "SOCKET.IO",
      "FIREBASE",
      "FIRESTORE",
      "JWT",
      "REACT",
      "GEMINI",
    ],
    image: backgroundProjectImage,
    alt: "Real-time work-oriented social platform with intelligent matching and messaging",
    detail: {
      heroTitle: "Project: The Right Type",
      projectType: "Academic Group Project",

      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Designed and implemented backend APIs",
          "Built Socket.IO real-time messaging workflows",
          "Integrated Firebase authentication and middleware protection",
          "Developed intelligent matching services",
          "Implemented AI-assisted conversation suggestion pipeline",
          "Engineered Google Drive + Cloudflare media delivery system",
        ],
      },

      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A backend-driven work-oriented social platform",
          "Matches users through multi-factor compatibility scoring",
          "Supports low-latency real-time messaging via Socket.IO",
          "Persists conversations using Firestore",
          "Generates AI-powered contextual conversation suggestions",
          "Optimizes media delivery through cloud-based asset proxying",
        ],
      },

      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          {
            title: "CLIENT_LAYER",
            description: ["React client interface layer"],
          },
          {
            title: "API_&_AUTH",
            description: [
              "Express REST API gateway",
              "Firebase authentication service",
            ],
          },
          {
            title: "REALTIME_&_DATA",
            description: [
              "Socket.IO real-time transport",
              "Firestore message persistence",
            ],
          },
          {
            title: "INTELLIGENCE_&_MEDIA",
            description: [
              "Gemini conversational reasoning pipeline",
              "Weighted compatibility matching engine",
              "Recommendation orchestration services",
              "Google Drive media storage layer",
            ],
          },
        ],
      },

      architectureNote: [
        "Hybrid event-driven backend architecture combining REST orchestration with persistent WebSocket channels.",
        "Conversation state is synchronized through Firestore while Socket.IO handles low-latency message delivery.",
        "Cloudflare Worker proxying optimizes media retrieval from Google Drive under infrastructure constraints.",
      ],

      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },

      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Designed a hybrid real-time messaging system using Socket.IO for low-latency communication while persisting chat history through Firestore synchronization.",
          solution:
            "Achieved responsive bidirectional messaging with persistent cross-session conversation recovery and scalable event handling.",
        },

        {
          title: "CHALLENGE_02",
          description:
            "Implemented a multi-factor compatibility engine combining geographical distance, work-vibe alignment, schedule overlap, occupation similarity, and semantic interest matching.",
          solution:
            "Developed a weighted scoring pipeline using Haversine distance, Gaussian decay, Jaccard similarity, and embedding-based cosine similarity for ranked user recommendations.",
        },

        {
          title: "CHALLENGE_03",
          description:
            "Integrated an AI-assisted conversation suggestion pipeline capable of analyzing conversational context, emotional appraisal, and interaction flow before generating reply recommendations.",
          solution:
            "Built a multi-stage ECR-Chain workflow leveraging LLM inference, emotional reasoning, and contextual prompt engineering to generate adaptive conversation suggestions.",
        },

        {
          title: "CHALLENGE_04",
          description:
            "Managed authentication, protected API access, and cloud-backed media uploads using Firebase services and middleware validation.",
          solution:
            "Implemented JWT/Firebase authentication middleware with secure image synchronization workflows through Google Drive integration.",
        },

        {
          title: "CHALLENGE_05",
          description:
            "Firestore storage limitations and infrastructure access constraints prevented direct large-scale media persistence for user-uploaded assets.",
          solution:
            "Engineered a custom asset pipeline leveraging Google Drive for decentralized storage and Cloudflare Workers for request proxying, caching, and rate-limit mitigation, enabling efficient image delivery without dedicated cloud storage provisioning.",
        },
      ],

      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Combining RESTful APIs with WebSocket-based communication significantly improves responsiveness for interactive social platforms",
          "Real-world compatibility modeling is substantially more complex than theoretical scoring systems due to human behavioral variability",
          "Semantic embeddings provide more meaningful similarity matching than traditional keyword-based approaches",
          "AI-generated conversational assistance requires careful prompt engineering and contextual reasoning to maintain natural interaction quality",
          "Separating real-time transport from persistence layers improves scalability and maintainability of messaging systems",
        ],
      },

      coreStackTitle: "Core_Stack",

      vitalsTitle: "Vitals_Dashboard",

      metrics: [
        {
          label: "REALTIME_MESSAGING",
          value: "SOCKET.IO",
          width: "92%",
        },

        {
          label: "MATCHING_ENGINE",
          value: "MULTI-FACTOR",
          width: "88%",
        },

        {
          label: "AUTHENTICATION",
          value: "FIREBASE_SECURED",
          width: "90%",
        },

        {
          label: "AI_PIPELINE",
          value: "ECR_CHAIN",
          width: "85%",
        },

        {
          label: "STORAGE",
          value: "GOOGLE DRIVE + CLOUDFLARE WORKER",
          width: "85%",
        },
      ],

      actionButtons: [
        {
          label: "Access Source Code",
          link: "https://github.com/vuhieu0808/TDTT",
        },
      ],

      footerLabel: "BACKEND_SYS // THE_RIGHT_TYPE_V1",

      footerButtons: [
        // {
        //   label: "Documentation",
        //   link: "YOUR_DOC_LINK",
        // },
        // {
        //   label: "API Reference",
        //   link: "YOUR_API_DOC_LINK",
        // },
        // {
        //   label: "System Overview",
        //   link: "YOUR_SYSTEM_LINK",
        // },
      ],
    },
  },

  // Project OOP-Game: Object-Oriented Programming Game
  {
    title: "Object-Oriented Programming Game",
    description:
      "A Jump King-inspired 2D platformer built in C++ with SFML, emphasizing OOP principles and software design patterns across physics, rendering, and UI systems.",
    tags: ["C++", "SFML", "OOP", "DESIGN PATTERNS", "TINYXML2", "TILED"],
    image: backgroundProjectImage,
    alt: "2D platformer game with charge-based jump mechanics, tile map rendering, and state-driven menu system",
    detail: {
      heroTitle: "Project: Object-Oriented Programming Game",
      projectType: "Academic Project",

      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Designed and implemented the entire game architecture from scratch",
          "Built charge-based jump physics and axis-separated collision detection",
          "Developed TMX tile map loader using TinyXML2 with multi-layer support",
          "Applied OOP principles: Encapsulation, Inheritance, Polymorphism, Abstraction",
          "Implemented State, Observer, Command, and Singleton design patterns",
          "Engineered a screen-based vertical camera system following the player",
          "Built a fully navigable menu system with Start, Settings, Pause, and Win states",
        ],
      },

      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A single-player 2D platformer inspired by Jump King, built in C++ using SFML",
          "Charge-based jump mechanic: hold Space to accumulate force, release to launch",
          "Collision detection resolves X and Y axes independently to prevent tunneling",
          "Map loaded from .tmx files with separate solid, background, and object layers",
          "Vertical screen-based camera transitions as the player climbs upward",
          "Design patterns applied across physics, animation, input, and menu subsystems",
        ],
      },

      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          {
            title: "GAME_CORE",
            description: [
              "Game loop orchestrator (game.cpp)",
              "GameObject base class with virtual update/draw interface",
            ],
          },
          {
            title: "PLAYER_&_PHYSICS",
            description: [
              "Player inherits from GameObject and Subject (Observer pattern)",
              "Charge jump system with configurable base and max jump strength",
              "Axis-separated AABB collision detection against solid tiles",
            ],
          },
          {
            title: "MAP_&_CAMERA",
            description: [
              "TMX map loader using TinyXML2 (background_back, map, background_front, object layers)",
              "Nearby tile lookup for optimized collision queries",
              "Screen-based vertical camera with world-bound clamping",
            ],
          },
          {
            title: "INPUT_&_COMMANDS",
            description: [
              "Singleton InputHandler dispatches key events",
              "Command pattern: MoveLeftCommand, MoveRightCommand, JumpCommand",
              "MenuCommand hierarchy: NavigateCommand, SelectCommand",
            ],
          },
          {
            title: "MENU_&_STATES",
            description: [
              "State pattern: StartState, SettingsState, PauseState, WinState",
              "MenuItem struct with action callbacks and highlight color logic",
              "Map selection via MapInfo struct (file path + display name)",
            ],
          },
          {
            title: "ANIMATION_&_OBSERVER",
            description: [
              "AnimationSystem implements IGameObserver interface",
              "Player notifies AnimationSystem on state change (idle, running, jumping, falling)",
              "Sprite sheet frame sequencing driven by player velocity and grounded state",
            ],
          },
        ],
      },

      architectureNote: [
        "The game loop delegates all per-frame logic to a currentState object, keeping Game::run() minimal and extensible.",
        "Collision detection resolves horizontal and vertical movement in separate passes to eliminate corner-clipping and tunneling artifacts.",
        "The Observer pattern decouples Player state from AnimationSystem, allowing visual feedback to react to gameplay events without tight coupling.",
      ],

      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },

      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Implementing a charge-based jump where the player holds Space to accumulate force and releases to jump - with a hard cap at maxJumpStrength when held too long.",
          solution:
            "Tracked jumpCharge per frame with a configurable chargeRate and maxCharge cap. Jump velocity is interpolated between baseJumpStrength and maxJumpStrength based on normalized charge ratio, triggered only on key release.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "Players could tunnel through platforms when moving fast or jumping at platform edges, as collision was checked after position update in a single pass.",
          solution:
            "Separated movement into two sequential passes: X-axis collision first (blocking horizontal penetration), then Y-axis collision (landing on top / bouncing off the ceiling). Each pass uses predicted bounding boxes rather than post-move positions.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Loading tile maps from .tmx files while distinguishing collidable tiles (map layer), visual-only tiles (background layers), and spawn/goal positions (object layer).",
          solution:
            "Parsed .tmx XML using TinyXML2, routing each named layer to its dedicated grid. Only the map layer populates the solids vector for collision queries; the object layer extracts player_start and player_end coordinates.",
        },
        {
          title: "CHALLENGE_04",
          description:
            "The menu had grown to a deeply nested chain of if-else checks against a MenuState enum inside Game::run(), making it hard to extend and maintain.",
          solution:
            "Refactored using the State pattern: each menu screen (StartState, SettingsState, PauseState, WinState) encapsulates its own handleInput, update, and render logic. Game::run() delegates entirely to currentState, reducing the loop to under 10 lines.",
        },
        {
          title: "CHALLENGE_05",
          description:
            "Circular #include dependencies between menu, input handler, and state headers caused incomplete-type compilation errors.",
          solution:
            "Resolved by replacing problematic #include directives in headers with forward declarations and converting member objects to std::unique_ptr, deferring full header inclusion to .cpp files where the complete type is required.",
        },
      ],

      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Separating collision resolution into independent X and Y passes eliminates most tunneling and corner-clipping bugs without complex swept-AABB math",
          "The State pattern dramatically simplifies game loop logic when the application has distinct, mutually exclusive modes (menu, playing, paused, win)",
          "Forward declarations combined with smart pointers are the cleanest way to break circular header dependencies in C++ without restructuring class hierarchies",
          "Hitbox and texture dimensions must be synchronized - mismatches create invisible asymmetric collision behavior that is difficult to diagnose",
          "Using the Observer pattern to decouple AnimationSystem from Player keeps physics logic clean and makes it trivial to add new visual effects without touching gameplay code",
        ],
      },

      coreStackTitle: "Core_Stack",

      vitalsTitle: "Vitals_Dashboard",

      metrics: [
        {
          label: "LANGUAGE_&_RENDERER",
          value: "C++ / SFML 2",
          width: "95%",
        },
        {
          label: "JUMP_PHYSICS",
          value: "CHARGE-BASED",
          width: "90%",
        },
        {
          label: "COLLISION_SYSTEM",
          value: "AXIS-SEPARATED AABB",
          width: "88%",
        },
        {
          label: "MAP_FORMAT",
          value: "TMX + TINYXML2",
          width: "85%",
        },
        {
          label: "DESIGN_PATTERNS",
          value: "STATE, OBSERVER, COMMAND, SINGLETON",
          width: "92%",
        },
      ],

      actionButtons: [
        {
          label: "Access Source Code",
          link: "https://github.com/vuhieu0808/OOP-Game",
        },
        {
          label: "UML Diagrams",
          link: "https://raw.githubusercontent.com/vuhieu0808/OOP-Game/refs/heads/main/OOP_Game_UML.png",
        },
      ],

      footerLabel: "GAME_SYS // VU_HIEU_KING_V1",

      footerButtons: [],
    },
  },

  // Project 03: career search
  {
    title: "careersearch",
    description:
      "A skill-to-career matching tool that maps user-provided skills to ESCO-standard taxonomies, scores job compatibility, and generates personalized learning roadmaps using graph algorithms.",
    tags: [
      "PYTHON",
      "FLET",
      "DART",
      "SENTENCE-TRANSFORMERS",
      "TARJAN",
      "TOPOLOGICAL SORT",
      "GOOGLE GEMINI",
      "DOCKER",
      "ESCO API",
    ],
    image: backgroundProjectImage,
    alt: "Career search tool with semantic skill matching, job scoring, and AI-powered learning roadmap generation",
    detail: {
      heroTitle: "Project: careersearch",
      projectType: "Academic Group Project",

      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Designed and implemented the graph-based learning roadmap engine",
          "Applied Tarjan's Algorithm to detect strongly connected components (SCCs) in the knowledge prerequisite graph",
          "Built the condensation graph and DFS-style topological sort for ordered learning stages",
          "Developed the job compatibility scoring system with weighted required/optional matching",
          "Implemented the score fusion pipeline merging skill-based and semantic job matching results",
          "Integrated the roadmap generator with the knowledge detail map for estimated learning time calculation",
        ],
      },

      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A desktop/web app that translates free-form user skills into ESCO-standard taxonomy terms via semantic embeddings",
          "Matches translated skills and knowledge against a dataset of 400+ ESCO job profiles with a weighted scoring formula",
          "Fuses skill-based match scores with semantic job description similarity for ranked job recommendations",
          "Generates a personalized learning roadmap for any selected job by resolving prerequisite dependencies as a directed graph",
          "Detects cyclic knowledge dependencies using Tarjan's SCC algorithm and schedules them as parallel learning stages",
          "Knowledge details and prerequisites enriched via Google Gemini API and stored in a structured JSON knowledge base",
        ],
      },

      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          {
            title: "DATA_LAYER",
            description: [
              "Dart CLI fetches job, skill, and knowledge data from the ESCO REST API",
              "Google Gemini enriches raw knowledge nodes with level and prerequisite metadata",
              "Structured JSON assets (job.json, skill.json, knowledge.json, knowledge2.json) loaded at startup via DataLoader",
            ],
          },
          {
            title: "TRANSLATION_LAYER",
            description: [
              "TaxonomyMapper: encodes user inputs and ESCO corpus with nomic-embed-text-v1.5, maps via cosine similarity threshold",
              "JobMapper: embeds full job profiles (title + description) and matches against a free-text job description input",
              "Both mappers pre-compute corpus embeddings at init for fast inference",
            ],
          },
          {
            title: "MATCHING_LAYER",
            description: [
              "calculate_match_score: scores jobs using 70/30 weighted split of essential vs optional coverage",
              "Bonus scoring for total matched items, capped at 100",
              "merge_job_list: fuses taxonomy-based scores (70%) with semantic job description scores (30%) into a single ranked list",
            ],
          },
          {
            title: "ROADMAP_LAYER",
            description: [
              "GraphUtils builds a prerequisite dependency graph for all missing knowledge items recursively",
              "Tarjan's Algorithm identifies SCCs - cyclic dependencies scheduled as parallel learning stages",
              "Condensation graph construction collapses SCCs into single nodes for topological ordering",
              "DFS-style topological sort produces sequential and parallel learning stages with estimated hours",
            ],
          },
          {
            title: "PRESENTATION_LAYER",
            description: [
              "Flet-based reactive GUI with CupertinoAppBar, chip-based skill input, and adaptive two-column layout",
              "Job list view with match percentage, navigating to a detail view with roadmap rendering",
              "Light/dark theme toggle; runs as desktop app or web server (Docker-compatible on port 8000)",
            ],
          },
        ],
      },

      architectureNote: [
        "The translation layer normalizes arbitrary user vocabulary into ESCO taxonomy terms before any matching occurs, making the scoring deterministic and comparable across users.",
        "The roadmap engine treats knowledge prerequisites as a directed graph and applies Tarjan's SCC algorithm to gracefully handle cyclic dependencies rather than failing or ignoring them.",
        "Score fusion combines two independent signals - structured skill coverage and unstructured semantic similarity - to reduce false positives from either method alone.",
      ],

      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },

      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "User-provided skills are free-form text and do not match ESCO taxonomy labels directly, making set-intersection scoring unreliable.",
          solution:
            "Encoded both user inputs and the full ESCO skill/knowledge corpus using nomic-embed-text-v1.5 sentence embeddings. Cosine similarity with a tuned threshold (0.65) maps each user term to the closest canonical ESCO label before any scoring occurs.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "Knowledge prerequisites can form cycles (e.g., A requires B and B requires A), which breaks standard topological sort and causes infinite recursion during graph traversal.",
          solution:
            "Applied Tarjan's SCC algorithm to detect all strongly connected components. Cyclic groups are condensed into single nodes in the condensation graph and scheduled as parallel learning stages, while the remaining acyclic structure is sorted topologically.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Matching jobs purely on structured skill overlap misses cases where the user describes their intent in natural language rather than listing discrete skills.",
          solution:
            "Added a second matching signal via JobMapper: encodes full job profiles (title + description + alt names) and computes semantic similarity against a free-text job description field. The two scores are fused at 70/30 into a final ranked list.",
        },
        {
          title: "CHALLENGE_04",
          description:
            "ESCO knowledge nodes lack structured prerequisite data and difficulty levels, which are required for generating a meaningful learning roadmap.",
          solution:
            "Wrote a batch prompting pipeline (knowledge_prompt.py) using Google Gemini API to infer level (1-5) and prerequisite lists for each knowledge node, persisting the enriched data as knowledge2.json.",
        },
        {
          title: "CHALLENGE_05",
          description:
            "The prerequisite graph for a job's missing knowledge can be very deep, including nodes the user has already learned, inflating the roadmap with unnecessary steps.",
          solution:
            "The graph builder accepts a learned_items set and prunes already-learned nodes and their prerequisite edges during recursive graph construction, keeping the roadmap focused only on what remains to be learned.",
        },
      ],

      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Semantic embeddings are far more robust than keyword matching for bridging the gap between user vocabulary and formal taxonomies",
          "Tarjan's SCC algorithm is the right tool for prerequisite graphs - it handles cycles gracefully instead of requiring a strictly acyclic input",
          "Score fusion from independent signals (structured coverage + semantic similarity) consistently outperforms either signal alone in ranking relevance",
          "Pre-computing corpus embeddings at initialization is essential - on-demand encoding makes the app unusably slow for real-time interaction",
          "Enriching raw taxonomy data with an LLM (Gemini) offline, rather than at query time, keeps inference fast and results reproducible",
        ],
      },

      coreStackTitle: "Core_Stack",

      vitalsTitle: "Vitals_Dashboard",

      metrics: [
        {
          label: "SKILL_TRANSLATION",
          value: "NOMIC-EMBED-TEXT-V1.5",
          width: "90%",
        },
        {
          label: "GRAPH_ALGORITHM",
          value: "TARJAN SCC + TOPO SORT",
          width: "95%",
        },
        {
          label: "JOB_MATCHING",
          value: "WEIGHTED SCORE FUSION",
          width: "88%",
        },
        {
          label: "KNOWLEDGE_ENRICHMENT",
          value: "GOOGLE GEMINI API",
          width: "85%",
        },
        {
          label: "DATA_SOURCE",
          value: "ESCO API (DART FETCHER)",
          width: "87%",
        },
        {
          label: "DEPLOYMENT",
          value: "DOCKER / FLET WEB",
          width: "82%",
        },
      ],

      actionButtons: [
        {
          label: "Source Code",
          link: "https://github.com/zeeptobean/careersearch",
        },
        {
          label: "Presentation Video",
          link: "https://drive.google.com/file/d/1h_IQd9IKw67JuKoP1ilmf2Ve0UAlqNv5/view?usp=sharing",
        },
      ],

      footerLabel: "CAREER_SYS // CAREERSEARCH_V1",

      footerButtons: [
        {
          label: "ESCO Reference",
          link: "https://esco.ec.europa.eu/en",
        },
      ],
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    date: "OCT 24, 2023",
    title: "Optimizing gRPC for High-Throughput Microservices",
    description:
      "Exploring binary serialization and multiplexing strategies to reduce overhead in distributed environments.",
    category: "Microservices",
    readTime: "8 min read",
    detail: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5o-GgqCL8mgsiQLU6KaW1ELy1DESTyhq68oIhTy515Hm9QyNstzTPs7noB8YaLdrtP8ZrE31uL19X51X9BXi_3hidOh3yQrR1_ydxGEmxbismJXXhfciCywYmthi6trzi8y1SKgkcWSltU4-6NrvGvwkY1NTeBdjJVOLkx2QLv37mgaOldkYGAxFPh802psU1RLKFY38c5fEzQ7xLda_7gmeGlrQxv-EP04Xuap2a80rYKhX3laV--mxUpQvRR4CjFmxjTNLcqzY",
      heroAlt: "Cinematic server room with emerald indicators",
      kickerLabel: "Engineering Deep Dive",
      overviewTitle: "Implementation Highlights",
      overviewText:
        "Managing concurrency and consistency in distributed systems requires more than generic defaults. The article focuses on operational choices that hold under real production load.",
      implementationTitle: "distributed_lock.go",
      implementationText:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      codeFileName: "distributed_lock.go",
      codeSnippet:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      pointsTitle: "Key Points",
      points: [
        "Selecting protobuf field layouts for lower payload size and allocation cost.",
        "Connection pooling and keepalive tuning for long-lived service meshes.",
        "Load-test methodology to compare unary and streaming transport behavior.",
      ],
      relatedTitle: "Related Technical Briefs",
      footerStats: [
        { label: "128 APPLAUDS", icon: "thumb_up" },
        { label: "EXPORT ARCHIVE", icon: "share" },
      ],
      footerButtons: [
        { label: "Dismiss", link: "#" },
        { label: "Subscribe to Updates", link: "#" },
      ],
    },
  },
  {
    date: "SEP 12, 2023",
    title: "The Cost of Exactly-Once Delivery in Kafka",
    description:
      "Benchmarking transactional producers and idempotent consumers in mission-critical pipelines.",
    category: "Data Infrastructure",
    readTime: "10 min read",
    detail: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5o-GgqCL8mgsiQLU6KaW1ELy1DESTyhq68oIhTy515Hm9QyNstzTPs7noB8YaLdrtP8ZrE31uL19X51X9BXi_3hidOh3yQrR1_ydxGEmxbismJXXhfciCywYmthi6trzi8y1SKgkcWSltU4-6NrvGvwkY1NTeBdjJVOLkx2QLv37mgaOldkYGAxFPh802psU1RLKFY38c5fEzQ7xLda_7gmeGlrQxv-EP04Xuap2a80rYKhX3laV--mxUpQvRR4CjFmxjTNLcqzY",
      heroAlt: "Cinematic server room with emerald indicators",
      kickerLabel: "Engineering Deep Dive",
      overviewTitle: "Implementation Highlights",
      overviewText:
        "A deep dive into where exactly-once semantics help, where they hurt, and how to quantify the reliability/performance tradeoff.",
      implementationTitle: "distributed_lock.go",
      implementationText:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      codeFileName: "distributed_lock.go",
      codeSnippet:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      pointsTitle: "Key Points",
      points: [
        "Throughput impact of transactional batches under varied partition counts.",
        "Coordinator bottlenecks and retry amplification under broker pressure.",
        "Decision matrix for EOS vs at-least-once based on business domain risk.",
      ],
      relatedTitle: "Related Technical Briefs",
      footerStats: [
        { label: "128 APPLAUDS", icon: "thumb_up" },
        { label: "EXPORT ARCHIVE", icon: "share" },
      ],
      footerButtons: [
        { label: "Dismiss", link: "#" },
        { label: "Subscribe to Updates", link: "#" },
      ],
    },
  },
  {
    date: "AUG 05, 2023",
    title: "Advanced Cache Invalidation Patterns",
    description:
      "Moving beyond TTL: Implementing event-driven cache consistency in global-scale architectures.",
    category: "Performance",
    readTime: "7 min read",
    detail: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5o-GgqCL8mgsiQLU6KaW1ELy1DESTyhq68oIhTy515Hm9QyNstzTPs7noB8YaLdrtP8ZrE31uL19X51X9BXi_3hidOh3yQrR1_ydxGEmxbismJXXhfciCywYmthi6trzi8y1SKgkcWSltU4-6NrvGvwkY1NTeBdjJVOLkx2QLv37mgaOldkYGAxFPh802psU1RLKFY38c5fEzQ7xLda_7gmeGlrQxv-EP04Xuap2a80rYKhX3laV--mxUpQvRR4CjFmxjTNLcqzY",
      heroAlt: "Cinematic server room with emerald indicators",
      kickerLabel: "Engineering Deep Dive",
      overviewTitle: "Implementation Highlights",
      overviewText:
        "An implementation-focused guide to maintaining cache consistency across regions without over-invalidation or stale reads.",
      implementationTitle: "distributed_lock.go",
      implementationText:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      codeFileName: "distributed_lock.go",
      codeSnippet:
        "func AcquireLock(ctx context.Context, key string) bool {\n  val := uuid.New().String()\n  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()\n  return err == nil && ok\n}",
      pointsTitle: "Key Points",
      points: [
        "Event-sourced invalidation channels with version-aware cache keys.",
        "Stale-while-revalidate strategy for latency-sensitive read paths.",
        "Operational guardrails to detect consistency drift before user impact.",
      ],
      relatedTitle: "Related Technical Briefs",
      footerStats: [
        { label: "128 APPLAUDS", icon: "thumb_up" },
        { label: "EXPORT ARCHIVE", icon: "share" },
      ],
      footerButtons: [
        { label: "Dismiss", link: "#" },
        { label: "Subscribe to Updates", link: "#" },
      ],
    },
  },
];

export const skills: Skill[] = [
  {
    tag: "programming language",
    label: ["C/C++", "Python", "JS/TS", "HTML/CSS"],
  },
  { tag: "storage", label: ["PostgreSQL", "MongoDB", "Firebase"] },
  { tag: "framework", label: ["Node.js", "React", "Tailwind CSS"] },
  { tag: "settings", label: ["Linux/WSL", "Git", "VSCode"] },
  { tag: "tools", label: ["Postman", "Burp Suite"] },
];

export const milestones: Milestone[] = [
  {
    period: "2024 - PRESENT",
    title: "HCM University of Science",
    description: [
      "Bachelor of Science in Information Technology.",
      "Current Year: Second-year student",
      "GPA: 3.9/4.0",
    ],
    highlightLabel: "Achievements",
    highlightText: [
      "Dean's List - Academic Year 2024-2025.",
      'Semifinalist - "Thach Thuc" Academic Competition 2024.',
    ],
  },
  {
    period: "2021 - 2024",
    title: "Gia Dinh High School",
    description: ["Studied in Informatics Gifted Class."],
    highlightLabel: "Achievements",
    highlightText: [
      "Third Prize - National Academic Competition for Gifted Students in Informatics.",
      "Third Prize - National Youth Informatics Competition.",
      "First Prize -  City-level Excellent Student Competition in Informatics.",
      "Silver Medal - April 30th Olympic Traditional Competition in Informatics.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/C1HPXCLBSSA8",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/verify/4HSWZWD8PJQY",
  },
];
