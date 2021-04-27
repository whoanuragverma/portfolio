import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function NavBar({
    translation,
}: {
    translation: Translation;
}): JSX.Element {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <nav className="font-raleway font-bold px-6 sm:px-12 py-6 fixed flex items-center w-screen animate-fadeIn">
            <Link href="/abc">
                <span className="flex items-center space-x-4 cursor-pointer">
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6217 12.9072L17.9617 21.8962H7.46995L12.6217 12.9072ZM12.6217 12.9072L7.46995 4.23497M12.6217 12.9072L13.8087 10.8361L20.1038 21.8962L21.1203 20.1468M21.1203 20.1468L26.5301 10.8361H15.9071L21.1203 20.1468ZM21.1203 20.1468L26.5301 29.8087M33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17Z"
                            stroke="black"
                            strokeWidth="0.8"
                        />
                    </svg>
                    <span className="font-quicksand text-lg sm:text-2xl lowercase">
                        {translation.title}
                    </span>
                </span>
            </Link>
            <div className="flex-grow hidden font-light justify-end uppercase text-sm font-medium sm:flex">
                <Link href="/">
                    <span
                        className={`mx-8 cursor-pointer transition ${
                            router.pathname == '/' ? 'active font-bold' : ''
                        } animate-underline`}
                    >
                        {translation.home}
                    </span>
                </Link>
                <Link href="/about">
                    <span
                        className={`mx-8 cursor-pointer transition ${
                            router.pathname == '/about'
                                ? 'active font-bold'
                                : ''
                        } animate-underline`}
                    >
                        {translation.about}
                    </span>
                </Link>
                <Link href="/projects">
                    <span
                        className={`mx-8 cursor-pointer transition ${
                            router.pathname == '/projects'
                                ? 'active font-bold'
                                : ''
                        } animate-underline`}
                    >
                        {translation.projects}
                    </span>
                </Link>
                <Link href="/contact">
                    <span
                        className={`mx-8 cursor-pointer transition ${
                            router.pathname == '/contact'
                                ? 'active font-bold'
                                : ''
                        } animate-underline`}
                    >
                        {translation.contact}
                    </span>
                </Link>
            </div>
            <div className="flex-grow sm:hidden font-light justify-end uppercase text-sm font-medium flex">
                <button
                    className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">
                        {translation.hamburgerHelper}
                    </span>
                    <div className="block w-5 absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2">
                        <span
                            aria-hidden="true"
                            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                                open ? 'rotate-45' : '-translate-y-1.5'
                            }`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                                open ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                                open ? '-rotate-45' : 'translate-y-1.5'
                            }`}
                        ></span>
                    </div>
                </button>
            </div>
        </nav>
    );
}
