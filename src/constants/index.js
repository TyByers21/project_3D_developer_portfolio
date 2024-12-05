import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  live,
  figma,
  docker,
  meta,
  starbucks,
  wraphx,
  miami,
  brandstar,
  jmfam,
  devs,
  tesla,
  shopify,
  carrent,
  configurator,
  flair,
  krypt,
  threads,
  carhub,
  jobit,
  wizard,
  threejs,
  gram,
  solidity,
  vite,
  nextjs,
  blender,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    path: "#about"
  },
  {
    id: "work",
    title: "Experience",
    path: "#experience"
  },
  {
    id: "projects",
    title: "Projects",
    path: "#projects"
  },
  {
    id: "contact",
    title: "Contact",
    path: "#contact"
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Motion Graphics Designer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "React.js/Three.js Developer",
    company_name: "Wraphx",
    icon: wraphx,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developed and maintained 2D and 3D web applications using React.js, Three.js and other related technologies, delivering optimized user experiences.",
      "Collaborated with cross-functional teams including designers, and product managers to create high-quality experiences.",
      "Developed mobile-first, responsive apps to ensure seamless performance across multiple devices.",
      "Integrated third-party APIs and tools for analytics, payment processing, and product delivery, streamlining client operations and enhancing user engagement.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "100 Devs",
    icon: devs,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2024",
    points: [
      "Designed and implemented scalable web applications using modern technologies such as React, Node.js, and MongoDB, delivering optimized user experiences.",
      "Worked closely with cross-functional teams, including designers, marketers, and project managers, to deliver projects on time and exceed client expectations.",
      "Integrated third-party APIs and tools for analytics, payment processing, and customer relationship management, streamlining client operations and enhancing user engagement.",
    ],
  },
  {
    title: "Creative Media Director",
    company_name: "Paton/BrandStar",
    icon: brandstar,
    iconBg: "#E6DEDD",
    date: "May 2017 - Feb 2023",
    points: [
      "Led the development and execution of comprehensive visual media strategies.",
      "Directed high-quality visual content for television programs, commercials, and promotional materials, ensuring alignment with brand identity and audience expectations.",
      "Supervised post-production processes, including color grading, visual effects, and sound design, utilizing industry-standard tools such as Adobe Creative Suite.",
      ],
  },
  {
    title: "Motion Graphics Editor",
    company_name: "JM Family Enterprises",
    icon: jmfam,
    iconBg: "#383E56",
    date: "Dec 2016 - May 2017",
    points: [
      "Created sophisticated motion graphics for corporate presentations, promotional videos, and digital campaigns, enhancing brand messaging and visual appeal.",
      "Mastered industry-leading tools such as Adobe After Effects, Cinema 4D, and Premiere Pro to deliver high-quality animations and visual effects.",
      "Partnered with creative directors, designers, and marketing teams to produce seamless graphics aligned with corporate branding and strategic objectives.",
     'Delivered visually compelling content for global events, product launches, and executive communications, elevating brand perception and audience engagement.',
    ],
  },
  {
    title: "Audio Visual Tech",
    company_name: "Miami Dade College",
    icon: miami,
    iconBg: "#E6DEDD",
    date: "March 2015 - Dec 2016",
    points: [
      "Created targeted animations for recruitment and advertisement purposes.",
      "Audio/Visual assistant responsible for setup, filming and recording of live events.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our products are, but Ty proved me wrong.",
    name: "Desiree Lee",
    designation: "CFO",
    company: "HollaGlass",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' project like Ty does.",
    name: "Musa Coutain",
    designation: "CEO",
    company: "KNOW Logic",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ty revamped our website, we saw traffic and engagement increase by 46%. I can't thank him enough!",
    name: "Aurora Wang",
    designation: "CTO",
    company: "REJUVENATRIX",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SocialGram",
    description:
      "A web-based social platform with secure login and authentication, designed for sharing photos and videos while staying connected with your social circle in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: gram,
    live_link: 'https://social-gram-eight.vercel.app/',
    source_code_link: "https://github.com/TyByers21/social-gram",
  },
  {
    name: "Vehicle Configurator",
    description:
      "A cutting-edge 3D vehicle configurator that lets users select their specific vehicle, explore customizable wrap designs, adjust colors, and seamlessly purchase their chosen wrap through an integrated e-commerce platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: configurator,
    live_link: 'https://dark-horse.vercel.app/',
    source_code_link: "https://github.com/TyByers21/hummer-customizer",
  },
  {
    name: "Script Wizard",
    description:
      "Metaverse style gaming app that allows users to traverse a 3D world and learn the principles of Javascript through lesson-based interactions.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "blockly",
        color: "orange-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: wizard,
    live_link: 'https://script-wizard.vercel.app/',
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Hub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "orange-text-gradient",
      },
    ],
    image: carhub,
    live_link: 'https://carhub-bice.vercel.app/',
    source_code_link: "https://github.com/TyByers21/carhub",
  },
  {
    name: "Flair",
    description:
      "Modern ecommerce platform fully equipped with search, sort and filtering logic, as well as customized Stripe shopping cart checkout functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "ecommerce",
        color: "orange-text-gradient",
      },
    ],
    image: flair,
    live_link: 'https://flair-app.vercel.app/',
    source_code_link: "https://github.com/TyByers21/flair-app",
  },
  {
    name: "KRYPT",
    description:
      "Web 3.0 Cryptocurrency platform that allows you to connect your metamask wallet and conduct a secure purchase on the blockchain using Solidity technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: krypt,
    live_link: 'https://krypt-orcin.vercel.app/',
    source_code_link: "https://github.com/TyByers21/krypt",
  },
];

export { services, technologies, experiences, testimonials, projects };
