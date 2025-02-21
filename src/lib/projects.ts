type ProjectsArr = {
    name: string;
    description: string;
    image: string;
    link: {
      github: string;
      live: string;
    };
  };

export const projects: ProjectsArr[] = [
  {
    name: "DOQUE",
    description:
      "Comprehensive project management system featuring streamlined capabilities for organizing their projects and tracking tasks and project status within customizable spaces, enhancing user workflow efficiency by significant margins.",
    image: "/projects/doque.png",
    link: {
      github: "https://github.com/sinan-bh/doque-frontend",
      live: "https://doque.vercel.app/",
    },
  },
  {
    name: "Twitter-Clone",
    description:
      "A Twitter clone built with Next.js, and Tailwind CSS, offering a user-friendly platform for sharing and engaging with content from around the world.",
    image: "/projects/twitter.png",
    link: {
      github: "https://github.com/sinan-bh/x-clone-client",
      live: "https://x-gules-one.vercel.app/",
    },
  },
  {
    name: "PlushParadise",
    description:
      "An e-commerce website offering a wide range of products with easy navigation, secure payment processing, and secure checkout for a seamless shopping experience.",
    image: "/projects/plushParadise.png",
    link: {
      github: "https://github.com/sinan-bh/Furnicture-E-commerce",
      live: "https://plushpardise.vercel.app/",
    },
  },
  {
    name: "PLR GLOBAL FX",
    description:
      "PLR GLOBAL FX is dedicated to fostering disciplined trading practices, offering proven strategies and effective risk management solutions.",
    image: "/projects/plrglobalfx.png",
    link: {
      github: "https://github.com/sinan-bh/PLR-GLOBAL_FX",
      live: "https://plrglobalfx.vercel.app/",
    },
  },
];