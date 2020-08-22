export interface ProjectsType {
  id: number;
  title: string;
  details: string;
  url?: string;
  links?: Links[];
  stack: string;
  hosted?: string;
}

export interface Links {
  title: string;
  link: string;
  download?: boolean;
}

const gopoll: ProjectsType = {
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
};

const nsa: ProjectsType = {
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
};

const tf: ProjectsType = {
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
};
const hc: ProjectsType = {
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
};

const td: ProjectsType = {
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
};

const typer: ProjectsType = {
  id: 69,
  title: "Arcade Type Racer",
  details:
    "An arcady type racing game that features both a single and multi player game mode. Practice your skills in single player than challenge other opponents in mulit-player.",
  url: "https://i.imgur.com/kwt6Ej0.png",
  links: [
    { title: "Live Demo", link: "https://typer.marcdwyer.dev/" },
    {
      title: "Repository",
      link: "https://github.com/MarcDwyer/arcade-typeracer",
    },
  ],
  stack: "React, TypeScript and Deno",
  hosted: "DigitalOcean",
};
const TMI: ProjectsType = {
  id: 10001,
  title: "tmi.ts",
  details:
    "Twitch Messaging Interface, tmi.ts allows users to join twitch channels to automate certain tasks. This is very similar to Node's package tmi.js.",
  url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
  links: [
    { title: "deno.land", link: "https://deno.land/x/tmi@v0.0.2" },
  ],
  stack: "TypeScript",
  hosted: "deno.land",
};
const ProjectData: ProjectsType[] = [TMI, gopoll, typer, nsa, tf, hc, td];

export default ProjectData;
