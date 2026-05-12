import type {
  NavItem,
  Project,
  BlogPost,
  Skill,
  Milestone,
  Certification,
  ContactInfo,
} from "../types/portfolio-types";
import backgroundProjectImage from "../../common/assets/background-project.webp";

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
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // { label: "Blog", href: "#blog" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
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
          "Primarily responsible for backend engineering, including REST API development, real-time communication infrastructure, Firebase integration, authentication middleware, intelligent matching services, AI-assisted messaging pipeline integration, and cloud-based image handling workflows.",
        ]
      },

      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A work-oriented social platform designed to connect users based on professional compatibility, work style alignment, availability overlap, and conversational engagement. The system integrates intelligent matching algorithms, Socket.IO-powered real-time messaging, Firestore-based chat persistence, AI-generated conversation suggestions, and cloud-backed media synchronization.",
        ]
      },

      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          "[INTERACTIVE_SCHEMA: React client, Express API server, Socket.IO realtime gateway, Firebase Authentication, Firestore chat persistence, Gemini AI pipeline, Google Drive image storage, matching engine, and recommendation services]",
        ],
      },

      architectureNote:
        "Event-driven backend architecture combining REST APIs with Socket.IO real-time channels, Firestore persistence, and AI-assisted conversational processing.",

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
      ],

      actionButtons: [
        {
          label: "Access Source Code",
          link: "YOUR_GITHUB_LINK",
        },

        {
          label: "Project Report",
          link: "YOUR_REPORT_LINK",
        },
      ],

      footerLabel: "BACKEND_SYS // REALTIME_ARCH_V1",

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
  {
    title: "Service Mesh Orchestrator",
    description:
      "A custom control plane for microservices visibility, security, and traffic management using eBPF for low-overhead telemetry.",
    tags: ["GOLANG", "KUBERNETES", "GRPC"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVj-xkaINHsafed-9EjgRzmu22ebC46cZxeukJMYo_2BMBzn_2kl8UUvguPbR8OLyw7CWyhB9YSb2Q-0g4VjozqYepTEyR566017SerdRANnhJmvuCYUSlG6hCh722KPYjf90kV60Lr-Dj2TCVXxL4NaharYDKhjKBNtqBYc60kOO1eWo3UZxhU8W2NF0ycKaXoHHPAnrlkWwyGHcfN5dJsTXXxz6-7vqfXvpw56x7TaLHT40P8lI0TxDbrnNd2sDpQJsL-0dsLzo",
    alt: "Neural network style microservices architecture visualization",
    detail: {
      heroTitle: "Project: Service Mesh Orchestrator",
      projectType: "Personal Project",
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A lightweight control plane for service-to-service security, observability, and traffic shaping in Kubernetes clusters.",
        ],
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
        ],
      },
      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },
      architectureNote:
        "Centralized policy engine for mTLS, RBAC, and dynamic rate limiting.",
      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Centralized policy engine for mTLS, RBAC, and dynamic rate limiting.",
          solution: "Reduced p95 service-to-service latency overhead by 23%.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "eBPF-based telemetry collectors to minimize sidecar overhead.",
          solution:
            "Cut incident diagnosis time by exposing request-path traces in real time.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Progressive delivery strategy with weighted routing and automatic rollback hooks.",
          solution:
            "Standardized security policies across 40+ internal services.",
        },
      ],
      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Architected and led the control plane implementation, establishing security policies, telemetry collection standards, and progressive delivery workflows for microservices infrastructure.",
        ],
      },
      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Low-overhead instrumentation (eBPF) proves critical for high-scale deployments where sidecar overhead compounds",
          "Centralized policy management must balance flexibility with auditability for compliance",
          "Progressive delivery strategies reduce incident blast radius when coordinated across security and network layers",
        ],
      },
      coreStackTitle: "Core_Stack",
      vitalsTitle: "Vitals_Dashboard",
      metrics: [
        { label: "THROUGHPUT", value: "98% OPTIMIZED", width: "98%" },
        { label: "UPTIME", value: "99.999%", width: "99.9%" },
        { label: "DATA_RELIABILITY", value: "SECURE", width: "85%" },
      ],
      actionButtons: [
        { label: "Access Source Code", link: "#source-code" },
        { label: "Technical Docs", link: "#technical-docs" },
      ],
      footerLabel: "SYS_ARCH // ARCH_STABLE_V2",
      footerButtons: [
        { label: "Documentation", link: "#documentation" },
        { label: "API Reference", link: "#api" },
        { label: "Contact Engineering", link: "#contact" },
      ],
    },
  },
  {
    title: "Real-time Analytics Engine",
    description:
      "Sub-second query engine for streaming data processing, leveraging partitioned storage and vectorized execution.",
    tags: ["C++", "APACHE KAFKA", "AWS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJFeA-hFGZEknWkXr5lwBN_psk2fegRehWf95xrYnQ2OkDqJi0vJzXxxrJwa1c0WDFdJucidgmpJXAC0PTYBf34V3cc6tFX0lA-f9egQ3gygCqW4YvAkyFFrJlNE8y410WV36YIiISnCwwr7kvAnDRaPqQT2op8u_TfR80BFCHfhUG04wHvZOjzzGWg3YEZna4MamSCBWoeKJk1-RYEs4XGA4bDKQs6dJovvCfHAPJZ9w88lUukSBF2TzM4AFOkAXVA6CLhHkiiRI",
    alt: "High-contrast 3D abstract data blocks in an obsidian space",
    detail: {
      heroTitle: "Project: Real-time Analytics Engine",
      projectType: "Personal Project",
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A streaming-first analytics stack built for low-latency dashboards and operational intelligence on event-heavy systems.",
        ],
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
        ],
      },
      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },
      architectureNote:
        "Vectorized query execution over partitioned columnar storage.",
      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Vectorized query execution over partitioned columnar storage.",
          solution:
            "Delivered median query time below 600ms for dashboard workloads.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "Windowed aggregation pipeline optimized for sub-second materialized views.",
          solution:
            "Handled multi-source ingestion of 2.3B events/day without downtime.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Incremental indexing strategy for fast filters on high-cardinality dimensions.",
          solution:
            "Lowered cloud compute cost by 18% through adaptive compaction policies.",
        },
      ],
      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Designed and optimized the query engine and storage layer, establishing partitioning strategies and incremental indexing to achieve real-time analytics at petabyte scale.",
        ],
      },
      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Columnar storage with vectorized execution provides exponential latency improvements over row-based stores for analytical workloads",
          "Adaptive compaction policies must account for both query patterns and ingestion velocity to minimize cost",
          "Materialized views reduce operational burden but require careful staleness SLAs and cache invalidation logic",
        ],
      },
      coreStackTitle: "Core_Stack",
      vitalsTitle: "Vitals_Dashboard",
      metrics: [
        { label: "THROUGHPUT", value: "98% OPTIMIZED", width: "98%" },
        { label: "UPTIME", value: "99.999%", width: "99.9%" },
        { label: "DATA_RELIABILITY", value: "SECURE", width: "85%" },
      ],
      actionButtons: [
        { label: "Access Source Code", link: "#source-code" },
        { label: "Technical Docs", link: "#technical-docs" },
      ],
      footerLabel: "SYS_ARCH // ARCH_STABLE_V2",
      footerButtons: [
        { label: "Documentation", link: "#documentation" },
        { label: "API Reference", link: "#api" },
        { label: "Contact Engineering", link: "#contact" },
      ],
    },
  },
  {
    title: "Real-time Analytics Engine",
    description:
      "Sub-second query engine for streaming data processing, leveraging partitioned storage and vectorized execution.",
    tags: ["C++", "APACHE KAFKA", "AWS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJFeA-hFGZEknWkXr5lwBN_psk2fegRehWf95xrYnQ2OkDqJi0vJzXxxrJwa1c0WDFdJucidgmpJXAC0PTYBf34V3cc6tFX0lA-f9egQ3gygCqW4YvAkyFFrJlNE8y410WV36YIiISnCwwr7kvAnDRaPqQT2op8u_TfR80BFCHfhUG04wHvZOjzzGWg3YEZna4MamSCBWoeKJk1-RYEs4XGA4bDKQs6dJovvCfHAPJZ9w88lUukSBF2TzM4AFOkAXVA6CLhHkiiRI",
    alt: "High-contrast 3D abstract data blocks in an obsidian space",
    detail: {
      heroTitle: "Project: Real-time Analytics Engine",
      projectType: "Personal Project",
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description: [
          "A streaming-first analytics stack built for low-latency dashboards and operational intelligence on event-heavy systems.",
        ],
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description: [
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
        ],
      },
      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },
      architectureNote:
        "Vectorized query execution over partitioned columnar storage.",
      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Vectorized query execution over partitioned columnar storage.",
          solution:
            "Delivered median query time below 600ms for dashboard workloads.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "Windowed aggregation pipeline optimized for sub-second materialized views.",
          solution:
            "Handled multi-source ingestion of 2.3B events/day without downtime.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Incremental indexing strategy for fast filters on high-cardinality dimensions.",
          solution:
            "Lowered cloud compute cost by 18% through adaptive compaction policies.",
        },
      ],
      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description: [
          "Designed and optimized the query engine and storage layer, establishing partitioning strategies and incremental indexing to achieve real-time analytics at petabyte scale.",
        ],
      },
      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Columnar storage with vectorized execution provides exponential latency improvements over row-based stores for analytical workloads",
          "Adaptive compaction policies must account for both query patterns and ingestion velocity to minimize cost",
          "Materialized views reduce operational burden but require careful staleness SLAs and cache invalidation logic",
        ],
      },
      coreStackTitle: "Core_Stack",
      vitalsTitle: "Vitals_Dashboard",
      metrics: [
        { label: "THROUGHPUT", value: "98% OPTIMIZED", width: "98%" },
        { label: "UPTIME", value: "99.999%", width: "99.9%" },
        { label: "DATA_RELIABILITY", value: "SECURE", width: "85%" },
      ],
      actionButtons: [
        { label: "Access Source Code", link: "#source-code" },
        { label: "Technical Docs", link: "#technical-docs" },
      ],
      footerLabel: "SYS_ARCH // ARCH_STABLE_V2",
      footerButtons: [
        { label: "Documentation", link: "#documentation" },
        { label: "API Reference", link: "#api" },
        { label: "Contact Engineering", link: "#contact" },
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
