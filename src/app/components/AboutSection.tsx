"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
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

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about.png" width={500} height={500} alt="station"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white text-base md:text-lg">
                        I am a full stack web developer with a passion for creating web applications.
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
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;