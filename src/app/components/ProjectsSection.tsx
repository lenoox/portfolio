"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Next.JS, Tailwind",
        image: "/images/projects/portfolio.png",
        sourceCode: "https://github.com/lenoox/portfolio",
        tag: ["All", "React"],
    },
    {
        id: 2,
        title: "Media Tracker",
        description: "React 18, Unit test, React Testing Library/Jest, Tailwind CSS",
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
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag) => {
        console.log(newTag);
        setTag(newTag);
    };

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    name="React"
                    onClick={handleTagChange}
                    isSelected={tag === "React"}
                />
                <ProjectTag
                    name="Angular"
                    onClick={handleTagChange}
                    isSelected={tag == "Angular"}
                />
                <ProjectTag
                    name="NodeJS"
                    onClick={handleTagChange}
                    isSelected={tag == "NodeJS"}
                />
                <ProjectTag
                    name="Java"
                    onClick={handleTagChange}
                    isSelected={tag == "Java"}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        sourceCode={project.sourceCode}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;