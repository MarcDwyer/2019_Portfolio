export interface ProjectsType {
  id: number;
  title: string;
  details: string;
  url?: string;
  links?: Links[];
  stack: string;
  hosted?: string;
}

interface Links {
  title: string;
  link: string;
  download?: boolean;
}

export const projectsData: ProjectsType[] = [
  {
    id: 1,
    title: "GoPoll.me",
    details:
      "This app was inspired by Strawpoll.me. In my opinion a good web app is one that has a simple UI and an interactive experience. With the use of WebSockets and the power of Go, I created websocket rooms using Gorilla's incredible websocket package. With Websocket rooms, I can efficiently broadcast to users viewing specific types of content. In this case, I broadcast only to users viewing the same poll. This application allows the client to create and monitor poll results in real-time!",
    url: "https://i.imgur.com/0SGMtnu.png",
    links: [
      { title: "Live Demo", link: "https://gopoll.marcdwyer.dev/" },
      { title: "Repository", link: "https://github.com/MarcDwyer/GoPoll" },
    ],
    stack: "React, Go and MongoDB",
    hosted: "DigitalOcean",
  },
  {
    id: 3,
    title: "Netflix-Stop-Autoplay",
    details:
      "This is a chrome extension that prevents Netflix from autoplaying videos in desktop enviroments. It was developed using TypeScript.",
    url:
      "https://lh3.googleusercontent.com/NBuD6tD6HwVSVhIQT7bxffIHLEoLpwz898ufCR2H901Y9plbFLqr0SJrsmcHrMnrLuJak7w7=w640-h400-e365",
    links: [
      {
        title: "Store Link",
        link:
          "https://chrome.google.com/webstore/detail/netflix-stop-autoplay/fbcmkdogjehincilpicohipinoobijem",
      },
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/netflix-stop-autoplay",
      },
    ],
    stack: "TypeScript",
  },
  {
    id: 69,
    title: "Twitch Followers",
    details:
      "An application that allows the client to lookup who users are following on TwitchTV. Also includes a pretty unique implementation oh recent search history",
    url: "https://i.imgur.com/Gedd4uj.png",
    links: [
      {
        title: "Live Demo",
        link: "https://twitch-followers.marcdwyer.dev/",
      },
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/twitch-followers",
      },
    ],
    stack: "React and Deno",
  },
  {
    id: 0,
    title: "Hue Desktop Controller",
    details:
      "Hue Controller, built using the Electron Framework, allows the client to modify lights connected to their Philips Hue Bridge. It accomplishes this by sending http requests with the modified data to the bridge's own API. The app allows the client to modify the selected lights color values, brightness, power status and much more.",
    url: "https://i.imgur.com/neWi2nd.png",
    links: [
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/electron-hue-controller",
      },
      { title: "View Website", link: "https://hue-controller.netlify.com/" },
    ],
    stack: "React and Electron",
  },

  {
    id: 2,
    title: "Twitch-Discovery",
    details:
      "Twitch Discovery! The purpose of this experimental project is to grant more exposure to streams that have a lower viewership. From my experience, there is an average total of 40,000 livestreams on Twitch at any given time. However, only the top 50 have above 1,000 viewers. The large majority have around 1 - 50 viewers. Twitch, at the current moment sort the streamers by viewership, so it is quite difficult to find content creators with lower viewership. The backend (NodeJS) randomly pulls an array of streamers every 2 hours and then updates the current list of streamers every 6 minutes (to check if they are still live). The frontend (React) allows the client to view the streamers status, viewership and stream details. Oh, and it also lets you interact with the streamer using the embedded twitch chat! The app is still experimental and gets updates on daily basis",
    url: "https://imgur.com/PNX97H4.png",
    links: [
      { title: "Live Demo", link: "https://discover.marcdwyer.dev" },
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/twitch-discovery",
      },
    ],
    stack: "React and NodeJS",
    hosted: "DigitalOcean",
  },
  {
    id: 4,
    title: "GraphQL Reddit",
    details:
      "The aim for this project was to create something similar to reddit. The backend uses NodeJS with GraphQL and the front-end uses Apollo-Client to handle state as well as graphQL queries. With this application I succeeded in creating very efficient api calls, only sending the client essential data. For example, there is no need to serve the client a post's comments on the homepage, efficient.",
    url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/forum.jpg",
    links: [
      { title: "Live Demo", link: "https://forumsite1234.herokuapp.com/" },
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/New-Graphql-repo",
      },
    ],
    stack: "React, NodeJS & GraphQL",
    hosted: "Heroku",
  },
  {
    id: 5,
    title: "This Portfolio!",
    details:
      "The goal of this portfolio was to make a clean and fluid UI using physics based animations with React Spring. Everybody likes animations!",
    links: [
      {
        title: "Repository",
        link: "https://github.com/MarcDwyer/2019_Portfolio",
      },
    ],
    stack: "React",
    hosted: "Netlify",
  },
];
interface WorkExperience {
  companyName: string;
  duration?: string;
  title: string;
  descriptionRole: string[];
  currentJob?: boolean;
}
export const WorkExp: WorkExperience[] = [
  {
    companyName: "Freelance Developer",
    title: "Full-Stack Developer",
    descriptionRole: [
      "Consult with local businesses",
      "Volunteer work with non-profit organizations",
      "Deploy multiple Web Apps using modern technologies",
      "Create fast, fluid, and interactive web applications",
    ],
    currentJob: true,
  },
  {
    companyName: "Institute of Human and Machine Cognition",
    duration: "1 Month",
    title: "Full-Stack Developer",
    descriptionRole: [
      "Worked on Full-Stack administrative tool that was used to manage IHMC's projects",
      "Introduced new deployment methods such as Docker",
      "Communicated with Project Manager and Lead Developer on UI designs, tech stack and best possible solutions to create tool",
      "Created front-end and back-end using modern technologies such as TypeScript, NodeJS and ReactJS",
    ],
  },
  {
    companyName: "Whole Foods Co",
    title: "Cashier",
    descriptionRole: [
      "Assist customers in-person as well as over the phone",
      "Occasionally work as a team lead",
      "Assist other departments in their duties",
    ],
    currentJob: true,
  },
];
