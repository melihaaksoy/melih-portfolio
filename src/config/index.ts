import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Melih Aksoy — Electrical & Electronics Engineer",
  author: "Melih Aksoy",
  description:
    "Electrical and Electronics Engineer based in Essen, Germany with experience in software development, embedded systems and machine learning.",
  lang: "en",
  siteLogo: "/green_card_photo_no_shadow.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/melih-aksoy-b85776194/",
    },
    {
      text: "Github",
      href: "https://github.com/melihaaksoy",
    },
    {
      text: "Email",
      href: "mailto:melih.aksoy.obpe12@gmail.com",
    },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://melih-portfolio-sooty.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Melih Aksoy",
    specialty: "Electrical & Electronics Engineer",
    summary:
      "Engineer based in Essen, Germany with experience in software development, embedded systems, automation and machine learning.",
    email: "melih.aksoy.obpe12@gmail.com",
  },
  experience: [
    {
      company: "Yorulmaz GmbH",
      position: "Software Developer",
      startDate: "Feb 2024",
      endDate: "Mar 2025",
      summary: [
        "Developed Python-based application components and internal tools.",
        "Worked with Flet for desktop application development.",
        "Supported workflow automation and remote access related processes.",
      ],
    },
    {
      company: "Microsonic GmbH",
      position: "Embedded Programmer",
      startDate: "Jul 2024",
      endDate: "Oct 2024",
      summary: [
        "Worked on embedded systems, microcontroller programming and sensor-related development tasks.",
        "Used Texas Instruments platforms and Code Composer Studio for embedded development.",
        "Performed firmware testing, debugging and validation for ultrasonic sensor systems.",
      ],
    },
    {
      company: "TELUS International",
      position: "Community Safety Representative",
      startDate: "Apr 2025",
      endDate: "Dec 2025",
      summary: [
        "Worked on Trust & Safety operations related to Meta AI and social media platforms.",
        "Reviewed content and supported platform safety workflows.",
      ],
    },
  ],
  projects: [
    {
      name: "Embedded Systems Internship",
      summary:
        "Documentation of embedded systems internship focused on microcontrollers, ultrasonic sensors and firmware development.",
      linkPreview:
        "https://github.com/melihaaksoy/embedded-systems-internship-microsonic",
      linkSource:
        "https://github.com/melihaaksoy/embedded-systems-internship-microsonic",
      image: "/board.png",
    },
    {
      name: "Stock Market Price Prediction",
      summary:
        "Machine learning project for stock market forecasting using historical Tesla stock data and LSTM neural networks.",
      linkPreview:
        "https://github.com/melihaaksoy/stock-market-price-prediction",
      linkSource:
        "https://github.com/melihaaksoy/stock-market-price-prediction",
      image: "/graph.png",
    },
    {
      name: "JWST Flask Gallery",
      summary:
        "Flask-based web application for exploring and visualizing James Webb Space Telescope imagery.",
      linkPreview: "https://github.com/melihaaksoy/jwst-flask-gallery",
      linkSource: "https://github.com/melihaaksoy/jwst-flask-gallery",
      image: "/james.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Melih Aksoy, an Electrical and Electronics Engineer based in Essen, Germany.

      I have experience in software development, embedded systems and machine learning. My background combines engineering fundamentals with practical software projects, including Python applications, embedded systems work and web development.

      I am interested in software engineering, automation, IoT and embedded technologies, and I am open to remote and hybrid opportunities.
    `,
    image: "/green_card_photo_no_shadow.jpeg",
  },
};
