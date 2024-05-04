export interface About {
    title: string,
    id: string,
    content: JSX.Element
}
export const aboutData: About[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React, Next.js</li>
                <li>Angular</li>
                <li>Java, Spring</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer science in WSEI University</li>
                <li>Computer science in John Paul II Catholic University of Lublin</li>
            </ul>
        ),
    },
    {
        title: "Courses",
        id: "courses",
        content: (
            <ul className="list-disc pl-2">
                <li>Introduction to Next.js 13+, v3</li>
                <li>AWS For Front-End Engineers, v2, Frontend Masters</li>
                <li>Website Accessibility v2, Frontend Masters</li>
                <li>Intermediate React, v5, Frontend Masters</li>
                <li>Complete Intro to React, v8, Frontend Masters</li>
                <li>Angular - The Complete Guide, Udemy</li>
                <li>Java Course, JavaStart</li>
            </ul>
        ),
    },
];