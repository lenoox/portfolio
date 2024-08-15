import React from "react";
import {NavigationLinks, navLinks} from "@app/data/Navbar";
import NavLink from "@app/components/Navlink";
import {map} from "lodash";
interface MenuOverlay {
    links:NavigationLinks[]
}
const MenuOverlay = ({links}:MenuOverlay) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {map(links,(link:NavigationLinks, index:number) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;