import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },

      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "ecom-delight",
        title: "Yummy Delight",
        file: "https://raw.githubusercontent.com/Chrisfoehser2/ecom-delights/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A ecommerce webite for coffee and yummy delights",
        link: "https://github.com/Chrisfoehser2/ecom-delights"
      },
      {
        id: "fetchAPI-TypeScript",
        title: "Fetch A Friend",
        file: "https://raw.githubusercontent.com/Chrisfoehser2/fetchAPI-TypeScript/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A ecommerce webite for adopting your new furry friend",
        link: "https://github.com/Chrisfoehser2/fetchAPI-TypeScript"
      }
    ]
  }
];

export default bear;
