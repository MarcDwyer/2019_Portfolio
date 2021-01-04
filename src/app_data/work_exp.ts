interface WorkExperience {
  companyName: string;
  duration?: string;
  title: string;
  descriptionRole: string[];
  currentJob?: boolean;
}
const WorkExp: WorkExperience[] = [
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
    title: "Full-Stack Developer",
    currentJob: false,
    duration: "< 1 year",
    descriptionRole: [
      "Worked on Full-Stack administrative tool that was used to manage IHMC's projects",
      "Introduced new deployment methods such as Docker",
      "Communicated with Project Manager and Lead Developer on UI designs, tech stack and best possible solutions to create tool",
      "Created front-end and back-end using modern technologies such as TypeScript, NodeJS and ReactJS",
    ],
  },
];

export default WorkExp;
