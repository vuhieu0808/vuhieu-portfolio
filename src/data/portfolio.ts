export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  detail: ProjectDetail;
};

export type ProjectDetailSection = {
  title: string;
  icon: string;
};

export type ProjectDetailChallenge = {
  title: string;
  description: string;
  solution: string;
};

export type ProjectDetailMetric = {
  label: string;
  value: string;
  width: string;
};

export type ProjectRole = {
  title: string;
  icon: string;
  description: string;
};

export type ProjectLesson = {
  title: string;
  icon: string;
  items: string[];
};

export type ProjectDetail = {
  heroTitle: string;
  summarySection: ProjectDetailSection & {
    description: string;
  };
  architectureSection: ProjectDetailSection & {
    description: string;
  };
  challengesSection: ProjectDetailSection;
  architectureNote: string;
  challenges: ProjectDetailChallenge[];
  roleSection: ProjectRole;
  lessonsSection: ProjectLesson;
  coreStackTitle: string;
  vitalsTitle: string;
  metrics: ProjectDetailMetric[];
  actionButtons: string[];
  footerLabel: string;
  footerButtons: { label: string; link: string }[];
};

export type BlogPost = {
  date: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  detail: BlogDetail;
};

export type BlogDetailAction = {
  label: string;
  icon: string;
};

export type BlogDetail = {
  heroImage: string;
  heroAlt: string;
  kickerLabel: string;
  overviewTitle: string;
  overviewText: string;
  implementationTitle: string;
  implementationText: string;
  codeFileName: string;
  codeSnippet: string;
  pointsTitle: string;
  points: string[];
  relatedTitle: string;
  footerStats: BlogDetailAction[];
  footerButtons: { label: string; link: string }[];
};

export type Skill = {
  tag: string;
  label: string[];
};

export type Milestone = {
  period: string;
  title: string;
  description: string[];
  highlightLabel: string;
  highlightText: string[];
  align?: "left" | "right";
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
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
    title: "Distributed Task Queue",
    description:
      "High-performance asynchronous task processing system capable of handling 10k+ jobs/sec with exactly-once delivery guarantees.",
    tags: ["PYTHON", "REDIS", "DOCKER"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMy6JRXO7ZZ2q7EXYS7J5zEKeno_0WC1wMlHZk3DT46pG8JbbcTt6tYiZH1HrjgoZTEv9QbYhgmIoKZArsR5SAzWXQAD2IK5-4qa9kk6aZabHVwfO5U9OhCam1o88EMH5EWpdw4Efi1Kf6SrZcTYZ-lPUSr43KayIMSqJk024O0YfILqD4m9ftBtJf0Cs7rh8pwk5gaHqXeGhKUAmwN55JGB5P63y9dqx5cIKzU8otoHLRJ8q5XfUVNXtUSSDMm1scej1-4HMcgtM",
    alt: "Server rack with emerald indicators in a dark data center",
    detail: {
      heroTitle: "Project: Distributed Task Queue",
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description:
          "A fault-tolerant queue platform designed for high-throughput background workloads with strict delivery guarantees.",
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description:
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
      },
      challengesSection: {
        title: "CHALLENGES_&_RESOLUTIONS",
        icon: "bolt",
      },
      architectureNote:
        "Sharded queue partitions with adaptive worker balancing based on queue lag.",
      challenges: [
        {
          title: "CHALLENGE_01",
          description:
            "Sharded queue partitions with adaptive worker balancing based on queue lag.",
          solution:
            "Sustained 10k+ jobs/sec during peak reconciliation windows.",
        },
        {
          title: "CHALLENGE_02",
          description:
            "Idempotency keys and outbox pattern to guarantee exactly-once processing semantics.",
          solution:
            "Reduced failed-job recovery time from 40 minutes to under 8 minutes.",
        },
        {
          title: "CHALLENGE_03",
          description:
            "Pluggable retry and dead-letter workflow with per-job policy overrides.",
          solution:
            "Dropped duplicate execution incidents to near-zero in production.",
        },
      ],
      roleSection: {
        title: "MY_ROLE",
        icon: "person",
        description:
          "Led the design and implementation of the queue platform, establishing idempotency patterns and failure recovery strategies for mission-critical workloads at scale.",
      },
      lessonsSection: {
        title: "LESSONS_LEARNED",
        icon: "lightbulb",
        items: [
          "Exactly-once semantics require careful coordination between producer state and consumer acknowledgment",
          "Monitoring backpressure and worker lag is as important as throughput metrics for operational health",
          "Flexible retry policies must account for transient vs. permanent failure modes",
        ],
      },
      coreStackTitle: "Core_Stack",
      vitalsTitle: "Vitals_Dashboard",
      metrics: [
        { label: "THROUGHPUT", value: "98% OPTIMIZED", width: "98%" },
        { label: "UPTIME", value: "99.999%", width: "99.9%" },
        { label: "DATA_RELIABILITY", value: "SECURE", width: "85%" },
      ],
      actionButtons: ["Access Source Code", "Technical Docs"],
      footerLabel: "SYS_ARCH // ARCH_STABLE_V2",
      footerButtons: [
        { label: "Documentation", link: "#documentation" },
        { label: "API Reference", link: "#api" },
        { label: "Contact Engineering", link: "#contact" },
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
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description:
          "A lightweight control plane for service-to-service security, observability, and traffic shaping in Kubernetes clusters.",
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description:
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
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
        description:
          "Architected and led the control plane implementation, establishing security policies, telemetry collection standards, and progressive delivery workflows for microservices infrastructure.",
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
      actionButtons: ["Access Source Code", "Technical Docs"],
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
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description:
          "A streaming-first analytics stack built for low-latency dashboards and operational intelligence on event-heavy systems.",
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description:
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
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
        description:
          "Designed and optimized the query engine and storage layer, establishing partitioning strategies and incremental indexing to achieve real-time analytics at petabyte scale.",
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
      actionButtons: ["Access Source Code", "Technical Docs"],
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
      summarySection: {
        title: "TECHNICAL_SUMMARY",
        icon: "description",
        description:
          "A streaming-first analytics stack built for low-latency dashboards and operational intelligence on event-heavy systems.",
      },
      architectureSection: {
        title: "SYSTEM_ARCHITECTURE",
        icon: "account_tree",
        description:
          "[INTERACTIVE_SCHEMA: services topology, message broker, and cache layer]",
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
        description:
          "Designed and optimized the query engine and storage layer, establishing partitioning strategies and incremental indexing to achieve real-time analytics at petabyte scale.",
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
      actionButtons: ["Access Source Code", "Technical Docs"],
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
    name: "Advanced Systems Design",
    issuer: "Linux Foundation",
    date: "2024",
    url: "https://www.credly.com/badges",
  },
  {
    name: "Kubernetes Application Developer",
    issuer: "CNCF",
    date: "2024",
    url: "https://www.credly.com/badges",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://www.credly.com/badges",
  },
  {
    name: "Security+ Certified",
    issuer: "CompTIA",
    date: "2023",
    url: "https://www.credly.com/badges",
  },
];
