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
  tripguide,
  wizard,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
      "Developing and maintaining 2D and 3D web applications using React.js, Three.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality experiences.",
      "Implementing responsive web design and ensuring cross-browser compatibility.",
      "Participating in design reviews and providing constructive feedback to other team designers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "100 Devs",
    icon: devs,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2024",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to build modern and responsive web applications using best practices.",
      "Building semantically structured front-end and full stack web applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Creative Media Director",
    company_name: "Paton/BrandStar",
    icon: brandstar,
    iconBg: "#E6DEDD",
    date: "May 2017 - Feb 2023",
    points: [
      "Create 2D & 3D animations, assets and effects for targeted video advertisements.",
      "Provide creative input and direction for all visual media projects and video production.",
      "Edit or Co-edit individual segments for television broadcast and final show assembly.",
      ],
  },
  {
    title: "Motion Graphics Editor",
    company_name: "JM Family Enterprises",
    icon: jmfam,
    iconBg: "#383E56",
    date: "Dec 2016 - May 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Audio Visual Tech",
    company_name: "Miami Dade College",
    icon: miami,
    iconBg: "#E6DEDD",
    date: "March 2015 - Dec 2016",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Threads",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vehicle Configurator",
    description:
      "Modern ecommerce platform fully equipped with search, sort and filtering logic, as well as customized Stripe shopping cart checkout functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: configurator,
    source_code_link: "https://github.com/",
  },
  {
    name: "Script Wizard",
    description:
      "Metaverse style gaming app that allows users to traverse a 3D world and learn the principles of Javascript through lesson-based interactions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wizard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Hub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/",
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
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: flair,
    source_code_link: "https://github.com/",
  },
  {
    name: "KRYPT",
    description:
      "Web 3.0 Cryptocurrency platform that allows you to connect your metamask wallet and conduct a secure purchase on the blockchain using Solidity technology.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: krypt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
