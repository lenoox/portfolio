import React from "react";
import {NavigationLinks, navLinks} from "@app/data/Navbar";
import NavLink from "@app/components/Navlink";
interface MenuOverlay {
    links:NavigationLinks[]
}
const MenuOverlay = ({links}:MenuOverlay) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link:NavigationLinks, index:number) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;