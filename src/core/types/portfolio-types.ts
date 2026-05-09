export type ContactCardProps = {
  icon: string;
  label: string;
  href: string;
};

export type ContactInfo = {
  email: ContactCardProps;
  linkedinUrl: ContactCardProps;
  githubUrl: ContactCardProps;
  facebookUrl: ContactCardProps;
};

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