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
}

export const projectsData: ProjectsType[] = [
    {
        id: 0,
        title: 'Hue Controller',
        details: "Hue Controller, built using the Electron Framework, allows the client to modify lights connected to their Philips Hue Bridge. It accomplishes this by sending http requests with the modified data to the bridge's own API. The app allows the client to modify the selected lights color values, brightness, power status and much more.",
        url: 'https://fetchappbucket.s3.us-east-2.amazonaws.com/port/hue1.png',
        links: [{ title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/electron-hue-controller" }],
        stack: "React"
    },
    {
        id: 1,
        title: 'GoPoll.me',
        details: "This app was inspired by Strawpoll.me. In my opinion a good web app is one that has a simple UI and an interactive experience. With the use of WebSockets and the power of Go, I created websocket rooms using Gorilla's incredible websocket package. With Websocket rooms, I can efficiently broadcast to users viewing specific types of content. In this case, I broadcast only to users viewing the same poll. This application allows the client to create and monitor poll results in real-time!",
        url: 'https://fetchappbucket.s3.us-east-2.amazonaws.com/port/poller.jpg',
        links: [{ title: "Live Demo", link: "https://gopoll.me/" }, { title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/GoPoll" }],
        stack: "React, Go and MongoDB",
        hosted: "DigitalOcean"
    },
    {
        id: 2,
        title: "Fetcherapp.net v2",
        details: "This application pulls steamer's status from both the Twitch API as well as the Youtube API. Both APIs have different data structures and the biggest difficulty was merging both data types into one type and serving it to the client. The backend uses Go and makes use of Go's channels, polymorphism and GoRoutines making the application incredibly fast. The Front-end makes use of React, and keeps the client updated using WebSockets and only updates the client when the server has updated the object of streamers. The frontend is equipped with its own notification system, streamer statistics and images of the stream. This application is extremely convenient when tracking streamers from two different platforms",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/twitchu.jpg",
        links: [{ title: "Live Demo", link: "https://www.fetcherapp.net/" }, { title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/theNetwork-react-hooks-typescript" }],
        stack: "React and Go",
        hosted: "DigitalOcean"
    },
    {
        id: 3,
        title: "GraphQL Reddit",
        details: "The aim for this project was to create something similar to reddit. The backend uses NodeJS with GraphQL and the front-end uses Apollo-Client to handle state as well as graphQL queries. With this application I succeeded in creating very efficient api calls, only sending the client essential data. For example, there is no need to serve the client a post's comments on the homepage, efficient.",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/forum.jpg",
        links: [{ title: "Live Demo", link: "https://forumsite1234.herokuapp.com/" }, { title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/New-Graphql-repo" }],
        stack: "React, NodeJS & GraphQL",
        hosted: "Heroku"
    },
    {
        id: 4,
        title: "Do Not Press!",
        details: "The goal of this project was to put smiles on people's faces. A fun troll application. Enjoy!",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/rick.jpg",
        links: [{ title: "Live Demo", link: "https://donotpress.herokuapp.com/" }, { title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/rickastley" }],
        stack: "Html, CSS and JavaScript",
        hosted: "Heroku"
    },
    {
        id: 5,
        title: "This Portfolio!",
        details: "The goal of this portfolio was to make a clean and fluid UI using physics based animations with React Spring. Everybody likes animations!",
        url: "https://www.pixilart.com/art/neon-cat-ae79bdb23e82243",
        links: [{ title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/2019_Portfolio" }],
        stack: "React",
        hosted: "Netlify"
    },
    {
        id: 6,
        title: "Live Chat",
        details: "SocketIO is an incredibly powerful tool. Allowing multiple users to connect with eachother. I created this app because I feel like its important for a Developer to be able to create software that allow users to communicate.",
        url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/livechat.jpg",
        links: [{ title: "Live Demo", link: "https://livechattesting.herokuapp.com/" }, { title: "Full-Stack Repo", link: "https://github.com/MarcDwyer/Live-Chat" }],
        stack: "HTML, CSS, JavaScript, NodeJS and SocketIO",
        hosted: "Heroku"
    }
]
interface WorkExperience {
    companyName: string;
    duration: number;
    descriptionRole: string[];
    currentJob?: boolean;
}
export const WorkExp: WorkExperience[] = [
    {
        companyName: "Freelance Developer",
        duration: 2,
        descriptionRole: ["Consult with local businesses", "Volunteer work with non-profit organizations", "Deploy multiple Web Apps using modern technologies", "Create fast, fluid, and interactive web applications"]
    },
    {
        companyName: "Best Buy Co",
        duration: 1.5,
        descriptionRole: ["Work with customers finding appropriate product", "Help troubleshoot client's electronic issues"],
    },
    {
        companyName: "Whole Foods Co",
        duration: 2,
        descriptionRole: ["Assist customers in-person as well as over the phone", "Occasionally work as a team lead", "Assist other departments in their duties"],
        currentJob: true
    },
    {
        companyName: "Publix Grocery Store",
        duration: 1,
        descriptionRole: ["Primarily a stocking role", "Assist customers in finding appropriate products", "Manage and organize products based on expiration dates"],
    }
]


export const Params: any = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#201616"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.23675550259247283,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 94.70220103698914,
            "color": "#251b1b",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}