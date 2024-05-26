"use client";
import React, {JSX, useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {About, aboutData} from "@app/data/About";

const AboutSection = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about.png" width={500} height={500} alt="station" priority/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white text-base md:text-lg">
                        I am a full stack developer with a passion for creating web applications.
                        I have experience working with React, Redux, NextJS. Angular, NGRX, Java, Spring, SQL,
                        PostgreSQL, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("courses")}
                            active={tab === "courses"}
                        >
                            Courses
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {aboutData.find((t: About) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;