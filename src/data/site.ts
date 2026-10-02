export type Locale = 'en' | 'zh';
export type Localized = Record<Locale, string>;

export const profile = {
  name: 'Lianting Wang',
  // Optional: null or an empty string shows only the English name in both languages.
  // A non-empty Chinese name restores the bilingual primary/secondary name layout.
  chineseName: null as string | null,
  email: 'contact@lianting.wang',
  github: 'https://github.com/Lianting-Wang',
  linkedin: 'https://www.linkedin.com/in/lianting-wang/',
  // Set this to the public PDF path only after adding the reviewed public CV.
  cv: null as string | null,
};

export const projects = [
  {
    name: 'Nginxxx',
    category: { en: 'Systems programming', zh: '系统编程' },
    description: {
      en: 'A C web server built around POSIX sockets and a process-per-connection design. Implements HTTP request parsing, static-file responses, and configuration-based virtual hosting.',
      zh: '使用 C 与 POSIX Socket 实现的 Web 服务器，采用每连接独立进程的处理方式，实现 HTTP 请求解析、静态文件响应和基于配置的虚拟主机。',
    },
    tags: ['C', 'POSIX', 'HTTP'],
    url: 'https://github.com/Lianting-Wang/Nginxxx',
    release: null,
  },
  {
    name: 'Captive Portal Education',
    category: { en: 'Networking & education', zh: '计算机网络与教学' },
    description: {
      en: 'A modular, hands-on network-infrastructure teaching project built around captive portal technology. Provides a learning-path guide and modules covering TCP clients and servers, switching, DNS, web services, and Mininet.',
      zh: '以 Captive Portal 技术为载体的模块化网络基础设施实践教学项目。提供学习路径指引，以及涵盖 TCP 客户端与服务器、交换机、DNS、Web 服务和 Mininet 的实践模块。',
    },
    tags: ['Python', 'Networking', 'Mininet'],
    url: 'https://github.com/Lianting-Wang/Captive-Portal-Education',
    release: null,
  },
] satisfies Array<{
  name: string;
  category: Localized;
  description: Localized;
  tags: string[];
  url: string;
  release: string | null;
}>;

export const publications = [{
  title: 'Integrating Captive Portal Technology into Computer Science Education: A Modular, Hands-On Approach to Infrastructure',
  authors: ['Lianting Wang', 'Marcelo Ponce'],
  year: 2025,
  venue: 'The Journal of Computational Science Education',
  citation: '16(1), 35–42',
  doi: '10.22369/issn.2153-4136/16/1/8',
  article: 'https://jocse.org/articles/16/1/8/',
  pdf: 'https://jocse.org/downloads/jocse-16-1-8.pdf',
  code: 'https://github.com/Lianting-Wang/Captive-Portal-Education',
  description: {
    en: 'A modular, hands-on approach to teaching network infrastructure through captive portal technology.',
    zh: '以 Captive Portal 技术为载体，通过模块化实践项目讲解计算机网络基础设施。',
  },
}];

export const education = [
  {
    years: { en: '2024 — present', zh: '2024 — 至今' },
    institution: { en: 'Rensselaer Polytechnic Institute', zh: '伦斯勒理工学院' },
    role: { en: 'PhD student · Computer Science', zh: '计算机科学博士在读' },
    note: { en: '', zh: '' },
  },
  {
    years: { en: '2020 — 2024', zh: '2020 — 2024' },
    institution: { en: 'University of Toronto', zh: '多伦多大学' },
    role: { en: 'Honours BSc · Computer Science', zh: '计算机科学荣誉理学学士' },
    note: { en: 'Graduated with High Distinction', zh: '以 High Distinction 毕业' },
  },
];

export const experience = [
  {
    years: { en: '2024 — present', zh: '2024 — 至今' },
    institution: { en: 'Rensselaer Polytechnic Institute', zh: '伦斯勒理工学院' },
    role: { en: 'Graduate Teaching Assistant', zh: '研究生助教' },
    description: {
      en: 'Recitations, office hours, and assessment for Foundations of Computer Science, Principles of Software, and Computer Architecture & Operating Systems.',
      zh: '承担计算机科学基础、软件原理、计算机体系结构与操作系统课程的习题课、答疑和评阅工作。',
    },
  },
  {
    years: { en: 'Sep 2023 — Apr 2024', zh: '2023.09 — 2024.04' },
    institution: { en: 'University of Toronto', zh: '多伦多大学' },
    role: { en: 'Undergraduate Teaching Assistant', zh: '本科生助教' },
    description: {
      en: 'Tutorials, office hours, and assessment for systems programming, network security, number theory, and computer networks.',
      zh: '支持系统编程、网络安全、数论与计算机网络课程，承担习题课、答疑及评阅工作。',
    },
  },
  {
    years: { en: 'May — Sep 2023', zh: '2023.05 — 2023.09' },
    institution: { en: 'Mobile Innovations Corporation', zh: 'Mobile Innovations Corporation' },
    role: { en: 'Software Engineering Intern', zh: '软件工程实习生' },
    description: {
      en: 'Worked on Android and web applications, reusable React components, a Blazor-to-React frontend migration, and an existing C# codebase.',
      zh: '参与 Android 与 Web 应用开发，构建可复用 React 组件，完成 Blazor 到 React 的前端迁移，并参与现有 C# 代码库开发。',
    },
  },
];

export const copy = {
  en: {
    title: `${profile.name} · Computer Science`,
    description: `${profile.name} is a Computer Science PhD student at RPI, working on large-scale network simulation, parallel computing, and infrastructure resilience.`,
    skip: 'Skip to content',
    discipline: 'Computer Science',
    role: 'PhD student',
    affiliation: 'Rensselaer Polytechnic Institute',
    language: 'Language',
    navigation: 'Sections',
    about: 'About me',
    research: 'Research',
    publications: 'Publications',
    projects: 'Selected projects',
    experience: 'Education & experience',
    intro: 'I’m a PhD student in Computer Science at Rensselaer Polytechnic Institute.',
    aboutBody: 'My research focuses on large-scale network simulation, parallel computing, and infrastructure resilience. I develop computational methods to study how infrastructure and mobility networks behave under disruption.',
    aboutMore: 'Before RPI, I studied Computer Science at the University of Toronto, graduating with High Distinction. Alongside research and teaching, I build systems and developer tools.',
    contact: 'Get in touch',
    email: 'Email',
    researchTitle: 'Large-scale network simulation & infrastructure resilience',
    researchIntro: 'My current work connects network modelling with high-performance computing, with an emphasis on infrastructure and transportation systems.',
    gridTitle: 'Power-grid resilience',
    gridBody: 'Modelling hurricane-induced disruption in power networks, studying cascading failures, and analysing infrastructure resilience.',
    mobilityTitle: 'Multi-GPU mobility simulation',
    mobilityBody: 'Developing distributed, agent-based transportation simulations with CUDA and MPI, and evaluating performance on high-performance computing systems.',
    methods: 'Network modelling / Parallel algorithms / CUDA / MPI',
    article: 'Article',
    pdf: 'PDF',
    code: 'Code',
    source: 'Source code',
    extension: 'Install extension',
    allProjects: 'More on GitHub',
    education: 'Education',
    teaching: 'Teaching & engineering',
    cv: 'Download CV',
    top: 'Back to top',
  },
  zh: {
    title: `${profile.chineseName?.trim() || profile.name} · 计算机科学`,
    description: `${profile.chineseName?.trim() || profile.name}，伦斯勒理工学院计算机科学博士生，研究大规模网络模拟、并行计算与基础设施韧性。`,
    skip: '跳转到正文',
    discipline: '计算机科学',
    role: '博士在读',
    affiliation: '伦斯勒理工学院',
    language: '语言',
    navigation: '页面导航',
    about: '关于我',
    research: '研究方向',
    publications: '论文发表',
    projects: '精选项目',
    experience: '教育与经历',
    intro: '我是伦斯勒理工学院（RPI）计算机科学博士生。',
    aboutBody: '我的研究聚焦大规模网络模拟、并行计算与基础设施韧性。我通过计算方法研究基础设施和交通网络在受到扰动时的运行机制。',
    aboutMore: '此前，我在多伦多大学学习计算机科学，并以 High Distinction 毕业。在研究与教学之外，我也开发系统软件和开发者工具。',
    contact: '联系我',
    email: '邮件',
    researchTitle: '大规模网络模拟与基础设施韧性',
    researchIntro: '我目前的工作结合网络建模与高性能计算，重点研究基础设施和交通系统。',
    gridTitle: '电网韧性',
    gridBody: '模拟飓风对电力网络的影响，分析级联故障与基础设施韧性。',
    mobilityTitle: '多 GPU 交通模拟',
    mobilityBody: '使用 CUDA 与 MPI 开发分布式、基于主体的交通模拟，并在高性能计算系统上评估运行性能。',
    methods: '网络建模 / 并行算法 / CUDA / MPI',
    article: '期刊页面',
    pdf: '论文 PDF',
    code: '代码',
    source: '源代码',
    extension: '安装扩展',
    allProjects: '更多 GitHub 项目',
    education: '教育背景',
    teaching: '教学与工程',
    cv: '下载简历',
    top: '回到顶部',
  },
};
