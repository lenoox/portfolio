import Link from "next/link";
const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-gray-200 sm:text-md rounded md:bg-transparent md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:via-blue-400 hover:to-blue-400"
            aria-current="page"
        >
            {title}
        </Link>
    );
};

export default NavLink;