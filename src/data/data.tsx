interface Projects {
    title: string;
    details: string;
    url: string;
    links: Links[];
    stack: string;
    ocean: boolean | undefined
}

interface Links {
    title: string;
    link: string;
}

export const projects: Projects[] = [
    {
        title: 'GoPoll.me',
        details: "This app was inspired by Strawpoll.me. In my opinion a good web app is one that has a simple UI and interactive experience. With the use of WebSockets and the power of Go, I created websocket rooms using gorilla/mux package. With Websocket rooms, I can efficiently broadcast to users viewing specific types of data. In this case, I broadcast only to users viewing the same poll. With the knowledge I've gained from this project, my skills are much more valuable. The ability to broadcast specific messages depenedent on what the client is viewing is incredibly powerful for a variety of situations.",
        url: 'https://fetchappbucket.s3.us-east-2.amazonaws.com/port/poller.jpg',
        links: [{ title: "Live Demo", link: "https://gopoll.me/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/GoPoll" }],
        stack: "React, Go and MongoDB",
        ocean: true
    },
    {
        title: "Fetcherapp.net v2",
        details: "This application pulls steamer's status from both the Twitch API as well as the Youtube API. Both APIs have different data structures and the biggest difficulty was merging both data types into one type and serving it to the client. The backend uses Go and makes use of Go's channels, polymorphism and GoRoutines making the application incredibly fast. The Front-end makes use of React, and keeps the client updated using WebSockets and only updates the client when the server has updated the object of streamers. The frontend is equipped with its own notification system, streamer statistics and images of the stream. This application is extremely convenient when tracking streamers from two different platforms",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/twitchu.jpg",
        links: [{ title: "Live Demo", link: "https://www.fetcherapp.net/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/theNetwork-react-hooks-typescript" }],
        stack: "React and Go",
        ocean: true
    },
    {
        title: "Do Not Press!",
        details: "Really fun project inspired by https://makefrontendshitagain.party/",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/rick.jpg",
        links: [{ title: "Live Demo", link: "https://donotpress.herokuapp.com/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/rickastley" }],
        stack: "Html, CSS and JavaScript",
        ocean: false
    },
    {
        title: "Live Chat",
        details: "SocketIO is an incredibly powerful tool. Allowing multiple users to connect with eachother. I created this app because I feel like its important for a Developer to be able to create software that allow users to communicate.",
        url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/livechat.jpg",
        links: [{ title: "Live Demo", link: "https://livechattesting.herokuapp.com/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/Live-Chat" }],
        stack: "HTML, CSS, JavaScript, NodeJS and SocketIO",
        ocean: false
    }   
]