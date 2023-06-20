import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Chrisfoehser2"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/christopher-foehser-a1695a148/"
      },

      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:chrisfoehser@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },

      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },

      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },

      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "crunchy-roll",
        title: "Crunchy Roll",
        img: "img/sites/crunchyroll.svg",
        link: "https://www.crunchyroll.com"
      },
      {
        id: "rei",
        title: "REI",
        img: "img/sites/rei.png",
        link: "https://www.rei.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "oh-my-cv",
        title: "OhMyCV",
        img: "https://ohmycv.app/apple-touch-icon.png",
        link: "https://ohmycv.app/"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
