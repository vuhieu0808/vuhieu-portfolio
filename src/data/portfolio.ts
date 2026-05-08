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
  detailIntro: string;
  detailHighlights: string[];
  detailOutcomes: string[];
};

export type BlogPost = {
  date: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  detailSummary: string;
  detailPoints: string[];
};

export type Skill = {
  icon: string;
  label: string;
};

export type Milestone = {
  period: string;
  title: string;
  description: string;
  highlightLabel: string;
  highlightText: string;
  align?: "left" | "right";
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
    detailIntro:
      "A fault-tolerant queue platform designed for high-throughput background workloads with strict delivery guarantees.",
    detailHighlights: [
      "Sharded queue partitions with adaptive worker balancing based on queue lag.",
      "Idempotency keys and outbox pattern to guarantee exactly-once processing semantics.",
      "Pluggable retry and dead-letter workflow with per-job policy overrides.",
    ],
    detailOutcomes: [
      "Sustained 10k+ jobs/sec during peak reconciliation windows.",
      "Reduced failed-job recovery time from 40 minutes to under 8 minutes.",
      "Dropped duplicate execution incidents to near-zero in production.",
    ],
  },
  {
    title: "Service Mesh Orchestrator",
    description:
      "A custom control plane for microservices visibility, security, and traffic management using eBPF for low-overhead telemetry.",
    tags: ["GOLANG", "KUBERNETES", "GRPC"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVj-xkaINHsafed-9EjgRzmu22ebC46cZxeukJMYo_2BMBzn_2kl8UUvguPbR8OLyw7CWyhB9YSb2Q-0g4VjozqYepTEyR566017SerdRANnhJmvuCYUSlG6hCh722KPYjf90kV60Lr-Dj2TCVXxL4NaharYDKhjKBNtqBYc60kOO1eWo3UZxhU8W2NF0ycKaXoHHPAnrlkWwyGHcfN5dJsTXXxz6-7vqfXvpw56x7TaLHT40P8lI0TxDbrnNd2sDpQJsL-0dsLzo",
    alt: "Neural network style microservices architecture visualization",
    detailIntro:
      "A lightweight control plane for service-to-service security, observability, and traffic shaping in Kubernetes clusters.",
    detailHighlights: [
      "Centralized policy engine for mTLS, RBAC, and dynamic rate limiting.",
      "eBPF-based telemetry collectors to minimize sidecar overhead.",
      "Progressive delivery strategy with weighted routing and automatic rollback hooks.",
    ],
    detailOutcomes: [
      "Reduced p95 service-to-service latency overhead by 23%.",
      "Cut incident diagnosis time by exposing request-path traces in real time.",
      "Standardized security policies across 40+ internal services.",
    ],
  },
  {
    title: "Real-time Analytics Engine",
    description:
      "Sub-second query engine for streaming data processing, leveraging partitioned storage and vectorized execution.",
    tags: ["C++", "APACHE KAFKA", "AWS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJFeA-hFGZEknWkXr5lwBN_psk2fegRehWf95xrYnQ2OkDqJi0vJzXxxrJwa1c0WDFdJucidgmpJXAC0PTYBf34V3cc6tFX0lA-f9egQ3gygCqW4YvAkyFFrJlNE8y410WV36YIiISnCwwr7kvAnDRaPqQT2op8u_TfR80BFCHfhUG04wHvZOjzzGWg3YEZna4MamSCBWoeKJk1-RYEs4XGA4bDKQs6dJovvCfHAPJZ9w88lUukSBF2TzM4AFOkAXVA6CLhHkiiRI",
    alt: "High-contrast 3D abstract data blocks in an obsidian space",
    detailIntro:
      "A streaming-first analytics stack built for low-latency dashboards and operational intelligence on event-heavy systems.",
    detailHighlights: [
      "Vectorized query execution over partitioned columnar storage.",
      "Windowed aggregation pipeline optimized for sub-second materialized views.",
      "Incremental indexing strategy for fast filters on high-cardinality dimensions.",
    ],
    detailOutcomes: [
      "Delivered median query time below 600ms for dashboard workloads.",
      "Handled multi-source ingestion of 2.3B events/day without downtime.",
      "Lowered cloud compute cost by 18% through adaptive compaction policies.",
    ],
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
    detailSummary:
      "This article breaks down practical tuning levers for gRPC in high-volume production systems where latency and tail behavior matter.",
    detailPoints: [
      "Selecting protobuf field layouts for lower payload size and allocation cost.",
      "Connection pooling and keepalive tuning for long-lived service meshes.",
      "Load-test methodology to compare unary and streaming transport behavior.",
    ],
  },
  {
    date: "SEP 12, 2023",
    title: "The Cost of Exactly-Once Delivery in Kafka",
    description:
      "Benchmarking transactional producers and idempotent consumers in mission-critical pipelines.",
    category: "Data Infrastructure",
    readTime: "10 min read",
    detailSummary:
      "A deep dive into where exactly-once semantics help, where they hurt, and how to quantify the reliability/performance tradeoff.",
    detailPoints: [
      "Throughput impact of transactional batches under varied partition counts.",
      "Coordinator bottlenecks and retry amplification under broker pressure.",
      "Decision matrix for EOS vs at-least-once based on business domain risk.",
    ],
  },
  {
    date: "AUG 05, 2023",
    title: "Advanced Cache Invalidation Patterns",
    description:
      "Moving beyond TTL: Implementing event-driven cache consistency in global-scale architectures.",
    category: "Performance",
    readTime: "7 min read",
    detailSummary:
      "An implementation-focused guide to maintaining cache consistency across regions without over-invalidation or stale reads.",
    detailPoints: [
      "Event-sourced invalidation channels with version-aware cache keys.",
      "Stale-while-revalidate strategy for latency-sensitive read paths.",
      "Operational guardrails to detect consistency drift before user impact.",
    ],
  },
];

export const skills: Skill[] = [
  { icon: "hub", label: "Distributed Systems" },
  { icon: "cloud", label: "Cloud Infrastructure (AWS/GCP)" },
  { icon: "speed", label: "C++ / Performance Tuning" },
  { icon: "psychology", label: "Python / AI Pipelines" },
  { icon: "database", label: "PostgreSQL / NoSQL Optimization" },
  { icon: "terminal", label: "Kubernetes / DevOps" },
];

export const milestones: Milestone[] = [
  {
    period: "2022 — PRESENT",
    title: "Senior Backend Architect",
    description:
      "Leading the transition from monolith to event-driven microservices for a fintech scale-up. Improved system availability from 99.9% to 99.995%.",
    highlightLabel: "Key Result",
    highlightText:
      "Reduced API latency by 60% through custom caching and protocol buffers.",
  },
  {
    period: "2020 — 2022",
    title: "Systems Engineer",
    description:
      "Designed and maintained high-throughput ingestion pipelines for real-time telemetry data. Managed a 50-node Kubernetes cluster.",
    highlightLabel: "Recognition",
    highlightText:
      "Awarded 'Engineer of the Year' for infrastructure cost optimization project (-30% YoY).",
  },
  {
    period: "2019",
    title: "Hackathon Winner: Global Scalability",
    description:
      "Built a serverless, geo-distributed file sharing system in 48 hours using edge computing and WebRTC for direct peering.",
    highlightLabel: "Achievement",
    highlightText: "1st Place out of 200+ global engineering teams.",
  },
];
