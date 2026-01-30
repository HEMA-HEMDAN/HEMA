const navLinks = [
  {
    name: "HOME",
    link: "#hero",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    name: "company-logo-1",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    name: "company-logo-2",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    name: "company-logo-3",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    name: "company-logo-4",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    name: "company-logo-5",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    name: "company-logo-6",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    name: "company-logo-7",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    name: "company-logo-8",
  },

  {
    imgPath: "/images/logos/company-logo-10.png",
    name: "company-logo-10",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    name: "company-logo-11",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results with rigorous reviews, testing, and UI polish.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step with async stand-ups and clear next actions.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Planning realistic sprints so milestones land on schedule without compromising quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "JavaScript Developer",
    imgPath: "/images/logos/js.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    path: "https://www.instagram.com/ahmadreda20185?igsh=MXNra2tnMDd5Z2RnbA==",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    path: "https://www.facebook.com/share/1CCZvwcqTo/",
  },
  {
    name: "x",
    imgPath: "/images/github.png",
    path: "https://github.com/HEMA-HEMDAN",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    path: "https://www.linkedin.com/in/ibrahim-hemdan-8b1159365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];


const projects = [
  {
    title: "Athar Masr - Egyptian Heritage App",
    desc: "React Native, Expo, and TailwindCSS power an accessible heritage guide with multilingual stories, offline support, and smooth performance on mid-range devices.",
    subdesc: "",
    href: "https://masr.pages.dev/",
    texture: "/images/projects/masr.png",
    logo: "/images/projects/masr-logo.png", // Placeholder if needed
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
  },
  {
    title: "Overdose Math - React Learning Platform",
    desc: "A dedicated platform for learning mathematics, built with React to provide an interactive and engaging user experience.",
    subdesc: "",
    href: "https://overdosemath.com",
    texture: "/images/projects/mo.png",
    logo: "/images/projects/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
  },
  {
    title: "Dr Ahmed Gad - Medical Clinic Website",
    desc: "A professional medical clinic website featuring appointment booking, service listings, and patient information.",
    subdesc: "",
    href: "https://dr-ahmed-gad.com/",
    texture: "/images/projects/ahmed.png",
    logo: "/images/projects/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
  },
  
];

const heroContent = {
  title: ["Shaping", "Ideas", "into Real Projects", "that Deliver Results"],
  description:
    "Hi, I’m Ibrahim, a developer based in Egypt with a passion for code.",
  buttonText: "See My Work",
};

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  heroContent,
};
