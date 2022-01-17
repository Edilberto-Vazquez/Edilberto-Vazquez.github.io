import scientific from "../assets/images/scientific.png";
import deavocado from "../assets/images/de-avocado-shop.png";
import streamingVScinema from "../assets/images/streaming-vs-cinema.png";
import mobilefirst from "../assets/images/mobile-first.png";

const Projects = [
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
];

export default Projects;
