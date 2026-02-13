import cv from "../public/MUJEEB_RAHMAN_CV.pdf";

export const profile = {
  name: "MUJEEB RAHMAN P",
  title: "MERN Stack Developer",
  summary:
    "Full-stack MERN developer experienced in building end-to-end web applications with authentication, payments, real-time features, and scalable backend architecture.",
  email: "mujibrehman8846@gmail.com",
  github: "https://github.com/mujeeb07",
  linkedin: "https://www.linkedin.com/in/mujibrehman",
  resumeLink: cv,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutPoints = [
  "Started in Commerce and transitioned into software development through disciplined, project-based learning.",
  "Focused on solving real-world problems by building complete products from architecture to deployment.",
  "Strong understanding of MVC architecture, API design, backend modularization, and scalable server structure.",
  "Continuously improving through iterative project delivery, code reviews, and production-focused learning.",
];

export const skillCategories = [
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "AWS EC2",
      "Nginx",
      "Git & GitHub",
      "Postman",
      "Cloudinary",
      "Razorpay",
      "Nodemailer",
    ],
  },
  {
    title: "Fundamentals",
    skills: ["Data Structures & Algorithms"],
  },
];

export const projects = [
  {
    title: "EssenceAura - E-commerce Platform for Perfumes",
    description: "Full-featured e-commerce platform with production-style workflows.",
    highlights: [
      "Secure session-based authentication with OTP login",
      "Integrated Razorpay payment gateway and Cash on Delivery",
      "Wallet system with cashback and referral credits",
      "Admin panel with product management, coupons, offers, soft delete, and return handling",
      "Deployed on AWS and later migrated to Render",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Razorpay",
      "Cloudinary",
      "AWS",
      "Render",
    ],
    actions: [
      { label: "GitHub", href: "https://github.com/mujeeb07/essenceaura" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "User Management System",
    description:
      "Role-based application with user and admin access control using scalable architecture.",
    highlights: [
      "Role-based authentication and authorization for User/Admin workflows",
      "React frontend powered by Redux Toolkit state management",
      "Scalable and maintainable project structure",
    ],
    techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    actions: [
      { label: "Frontend GitHub", href: "https://github.com/mujeeb07/ums_frontend_react" },
      { label: "Backend GitHub", href: "https://github.com/mujeeb07/ums_backend" },
    ],
  },
];

export const educationItems = [
  {
    title: "MERN Stack Developer Program",
    organization: "Brototype",
    detail:
      "Intensive full-stack training focused on real-world product development, deployment, and clean architecture practices.",
  },
  {
    title: "Bachelor of Commerce",
    organization: "Calicut University",
    detail:
      "Academic background in commerce that strengthened analytical thinking before transitioning to engineering.",
  },
];
