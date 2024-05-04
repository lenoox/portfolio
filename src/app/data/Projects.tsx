
export interface Projects {
    id:number,
    title:string,
    description:string,
    image:string,
    sourceCode:string,
    tag:string[],
}
export const projectsData:Projects[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Next.JS, Tailwind, TypeScript",
        image: "/images/projects/portfolio.png",
        sourceCode: "https://github.com/lenoox/portfolio",
        tag: ["All", "React"],
    },
    {
        id: 2,
        title: "Media Tracker",
        description: "React 18, Unit test, React Testing Library/Jest, Tailwind CSS, TypeScript",
        sourceCode: "https://github.com/lenoox/media-tracker",
        image: "/images/projects/media-tracker.png",
        tag: ["All", "React"],
    },
    {
        id: 3,
        title: "HR-Talent",
        description: "Angular, State management, NodeJS, Nest.JS, PostgreSQL",
        sourceCode: "https://github.com/lenoox?tab=repositories&q=hr-talent&type=&language=&sort=",
        image: "/images/projects/Hr-Talent.png",
        tag: ["All", "Angular","NodeJS"],
    },
    {
        id: 4,
        title: "ProMusic",
        description: "Angular, Java, Spring, PostgreSQL",
        sourceCode: "https://github.com/lenoox?tab=repositories&q=promusic&type=&language=&sort=",
        image: "/images/projects/ProMusic.jpg",
        tag: ["All", "Angular", "Java"],
    },
];