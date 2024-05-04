"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {Projects, projectsData} from "@app/data/Projects";

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project:Projects) =>
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2 py-3 text-white">
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
        </section>
    );
};

export default ProjectsSection;