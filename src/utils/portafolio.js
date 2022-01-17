import myWebsite from "../assets/images/my-website.png";
import scientific from "../assets/images/scientific.png";
import deavocado from "../assets/images/de-avocado-shop.png";
import streamingVScinema from "../assets/images/streaming-vs-cinema.png";
import mobilefirst from "../assets/images/mobile-first.png";
import inaoe from "../assets/images/INAOE-weather-data-API.png";
import myStore from "../assets/images/my-store.png";
import ferreyans from "../assets/images/ferreyarns.png";

const Projects = [
  {
    projectName: "My Website",
    information: {
      description:
        "This website was development to show some projects I have been working on such as websites with ReactJS, HTML, CSS and JavaScript Vailla and some REST APIS using Express and Golang",
      image: myWebsite,
      repository:
        "https://github.com/Edilberto-Vazquez/Edilberto-Vazquez.github.io",
      pageOrAPI: "https://edilberto-vazquez.github.io/",
      technologiesUsed: [
        "JavaScript",
        "HTML",
        "SASS",
        "webpack",
        "Babel",
        "NodeJS",
        "ReactJS",
      ],
    },
  },
  {
    projectName: "Scientific",
    information: {
      description:
        "Using the rick and morty REST API through the web site built with TypeScript and using WebComponents and displaying the first 10 characters",
      image: scientific,
      repository: "https://github.com/Edilberto-Vazquez/scientific",
      pageOrAPI: "https://edilberto-vazquez.github.io/scientific/",
      technologiesUsed: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "WebComponents",
        "webpack",
        "Babel",
        "NodeJS",
      ],
    },
  },
  {
    projectName: "De Avocado Shop",
    information: {
      description:
        "page created to consume data from an avocado API using TypeScript and WebComponents",
      image: deavocado,
      repository: "https://github.com/Edilberto-Vazquez/de-avocado-shop",
      pageOrAPI: "https://edilberto-vazquez.github.io/de-avocado-shop/",
      technologiesUsed: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "WebComponents",
        "webpack",
        "Babel",
        "NodeJS",
      ],
    },
  },
  // {
  //   projectName: {mobilefirst},
  //   information: {
  //     description:
  //       "this page was created to practice with react using redux and react-router-dom",
  //     image: streamingVScinema,
  //     repository: "https://github.com/Edilberto-Vazquez/Video-Page",
  //     pageOrAPI: "https://github.com/Edilberto-Vazquez/Video-Page",
  //     technologiesUsed: [
  //       "JavaScript",
  //       "HTML",
  //       "CSS",
  //       "webpack",
  //       "Babel",
  //       "NodeJS",
  //       "SASS",
  //     ],
  //   },
  // },
  {
    projectName: "Mobile First",
    information: {
      description: "Aplication development with mobile-first philosophy",
      image: mobilefirst,
      repository: "https://github.com/Edilberto-Vazquez/mobileFirst",
      pageOrAPI: "https://edilberto-vazquez.github.io/mobileFirst/",
      technologiesUsed: ["HTML", "CSS"],
    },
  },
  {
    projectName: "Streaming vs Cinema",
    information: {
      description:
        "Page to comparate the price between the Cinema and Streaming platforms",
      image: streamingVScinema,
      repository: "https://github.com/Edilberto-Vazquez/streaming-vs-cinema",
      pageOrAPI: "https://edilberto-vazquez.github.io/streaming-vs-cinema/",
      technologiesUsed: [
        "JavaScript",
        "HTML",
        "CSS",
        "WebComponents",
        "webpack",
        "Babel",
        "NodeJS",
      ],
    },
  },
  {
    projectName: "Ferreyans website",
    information: {
      description:
        "Convert ferreyarns website from WordPress to React, all assets and designs as well as the brand belong to ferreyarns",
      image: streamingVScinema,
      repository: "https://github.com/Edilberto-Vazquez/ferreyarns-clone-page",
      pageOrAPI: "https://github.com/Edilberto-Vazquez/ferreyarns-clone-page",
      technologiesUsed: [
        "JavaScript",
        "HTML",
        "CSS",
        "WebComponents",
        "webpack",
        "Babel",
        "NodeJS",
        "ReactJS",
      ],
    },
  },
  {
    projectName: "My-Store",
    information: {
      description:
        "REST API that simulates a store This page was development with NodeJS and ExpressJS with Sequelize as ORM",
      image: myStore,
      repository: "https://github.com/Edilberto-Vazquez/my-store",
      pageOrAPI: "https://github.com/Edilberto-Vazquez/my-store",
      technologiesUsed: ["NodeJS", "JavaScript", "ExpressJS", "Sequelize"],
    },
  },
  {
    projectName: "INAOE weather data API",
    information: {
      description:
        "Weather data REST API for INAOE weather stations. This page was development with Golang 1.17, Gin Web Framework and Gorm as ORM. The deploy was made to heroku with a Database in AWS.",
      image: inaoe,
      repository: "https://github.com/Edilberto-Vazquez/inaoe-weather-data-API",
      pageOrAPI: "https://github.com/Edilberto-Vazquez/inaoe-weather-data-API",
      technologiesUsed: ["Golang", "Gin Web Framework", "Gorm"],
    },
  },
];

export default Projects;
