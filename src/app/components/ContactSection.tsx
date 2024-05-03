import React from "react";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section className="my-12 md:my-12 py-20 gap-4">
            <div className="z-10 flex items-center flex-col">
                <h5 className="text-xl font-bold">Let's Connect</h5>
                <div className="socials flex flex-row gap-2 pt-8">
                    <Link href="https://www.linkedin.com/in/adamgorecki128/">
                        <Image src={LinkedinIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;