import Link from "next/link";
export interface NavLink{
    href:string,
    title:string,
}
const NavLink = ({ href, title }:NavLink) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-gray-200 sm:text-md rounded md:bg-transparent md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-300 hover:to-orange-500"
            aria-current="page"
        >
            {title}
        </Link>
    );
};

export default NavLink;