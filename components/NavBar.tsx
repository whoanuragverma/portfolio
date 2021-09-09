import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTheme from './hooks/useTheme';
export default function NavBar({
    translation,
}: {
    translation: Translation;
}): JSX.Element {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [theme, switchTheme] = useTheme();
    return (
        <nav className="font-raleway shadow top-0 font-bold px-6 md:px-12 py-6 fixed flex items-center w-screen animate-fadeIn bg-white dark:bg-black dark:text-white z-10">
            <Link passHref href="/">
                <a className="flex items-center space-x-4 cursor-pointer">
                    <svg
                        width="45"
                        height="45"
                        fill="none"
                        viewBox="0 0 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6217 12.9072L17.9617 21.8962H7.46995L12.6217 12.9072ZM12.6217 12.9072L7.46995 4.23497M12.6217 12.9072L13.8087 10.8361L20.1038 21.8962L21.1203 20.1468M21.1203 20.1468L26.5301 10.8361H15.9071L21.1203 20.1468ZM21.1203 20.1468L26.5301 29.8087M33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17Z"
                            className="stroke-current"
                            strokeWidth="0.8"
                        />
                    </svg>
                    <span className="font-montserrat text-lg md:text-2xl lowercase font-normal">
                        {translation.title}
                    </span>
                </a>
            </Link>
            <div className="flex-grow hidden justify-end uppercase text-sm font-medium md:flex dark:text-gray-50 items-center">
                <Link passHref href="/">
                    <a
                        className={`mx-6 cursor-pointer transition ${
                            router.pathname == '/' ? 'active font-bold' : ''
                        } animate-underline dark:animate-underline`}
                    >
                        {translation.home}
                    </a>
                </Link>
                <Link passHref href="/about">
                    <a
                        className={`mx-6 cursor-pointer transition ${
                            router.pathname == '/about'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline`}
                    >
                        {translation.about}
                    </a>
                </Link>
                <Link passHref href="/projects">
                    <a
                        className={`mx-6 cursor-pointer transition ${
                            router.pathname == '/projects'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline`}
                    >
                        {translation.projects}
                    </a>
                </Link>
                <Link passHref href="/contact">
                    <a
                        className={`mx-6 cursor-pointer transition ${
                            router.pathname == '/contact'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline`}
                    >
                        {translation.contact}
                    </a>
                </Link>
                <Link passHref href="/lang">
                    <a
                        className={`mx-6 cursor-pointer transition ${
                            router.pathname == '/lang' ? 'active font-bold' : ''
                        } animate-underline dark:animate-underline`}
                    >
                        {translation.lang}
                    </a>
                </Link>
                <button
                    className="mx-3 focus:outline-none"
                    onClick={switchTheme}
                    aria-label="Change Theme"
                >
                    {theme === 'dark' && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="fill-current transition hover:text-red-600"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <g>
                                <circle cx="128" cy="128" r="68"></circle>
                                <path d="M128,44a8.00008,8.00008,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8.00008,8.00008,0,0,0,128,44Z"></path>
                                <path d="M57.28955,68.603A7.99984,7.99984,0,1,0,68.603,57.28955L54.46094,43.14746A7.99984,7.99984,0,1,0,43.14746,54.46094Z"></path>
                                <path d="M44,128a8.00008,8.00008,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8.00008,8.00008,0,0,0,44,128Z"></path>
                                <path d="M57.28955,187.397,43.14746,201.53906a7.99984,7.99984,0,1,0,11.31348,11.31348L68.603,198.71045A7.99984,7.99984,0,1,0,57.28955,187.397Z"></path>
                                <path d="M128,212a8.00008,8.00008,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8.00008,8.00008,0,0,0,128,212Z"></path>
                                <path d="M198.71045,187.397A7.99984,7.99984,0,1,0,187.397,198.71045l14.14209,14.14209a7.99984,7.99984,0,1,0,11.31348-11.31348Z"></path>
                                <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"></path>
                                <path d="M193.05371,70.94629a7.97507,7.97507,0,0,0,5.65674-2.34326l14.14209-14.14209a7.99984,7.99984,0,1,0-11.31348-11.31348L187.397,57.28955a7.99976,7.99976,0,0,0,5.65674,13.65674Z"></path>
                            </g>
                        </svg>
                    )}
                    {theme === 'light' && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="fill-current transition hover:text-blue-500"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M224.30762,150.29346a8.00288,8.00288,0,0,0-10.01416-5.28955A84.03122,84.03122,0,0,1,111.01514,41.6377a8.00207,8.00207,0,0,0-9.96582-9.96192,100.01386,100.01386,0,1,0,123.29,123.2207A8.0018,8.0018,0,0,0,224.30762,150.29346Z"></path>
                        </svg>
                    )}
                </button>
            </div>
            <div className="flex-grow md:hidden  justify-end uppercase text-sm font-medium flex">
                <button
                    className="text-black w-10 h-10 relative focus:outline-none bg-white dark:bg-black dark:text-gray-50"
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
            <div
                className={`absolute font-medium w-screen bg-white dark:bg-black left-0 top-20 p-6 flex items-center content-center flex-col justify-center h-fill-80 pb-24 uppercase ${
                    open ? 'block' : 'hidden'
                }`}
            >
                <Link passHref href="/">
                    <span
                        className={`my-2 cursor-pointer transition ${
                            router.pathname == '/' ? 'active font-bold' : ''
                        } animate-underline dark:animate-underline animate-fadeInDown opacity-0`} //@ts-ignore
                        style={{ '--animation-delay': 1 }}
                    >
                        {translation.home}
                    </span>
                </Link>
                <Link passHref href="/about">
                    <span
                        className={`my-2 cursor-pointer transition ${
                            router.pathname == '/about'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline animate-fadeInDown opacity-0`} //@ts-ignore
                        style={{ '--animation-delay': 2 }}
                    >
                        {translation.about}
                    </span>
                </Link>
                <Link passHref href="/projects">
                    <span
                        className={`my-2 cursor-pointer transition ${
                            router.pathname == '/projects'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline animate-fadeInDown opacity-0`} //@ts-ignore
                        style={{ '--animation-delay': 3 }}
                    >
                        {translation.projects}
                    </span>
                </Link>
                <Link passHref href="/contact">
                    <span
                        className={`my-2 cursor-pointer transition ${
                            router.pathname == '/contact'
                                ? 'active font-bold'
                                : ''
                        } animate-underline dark:animate-underline animate-fadeInDown opacity-0`} //@ts-ignore
                        style={{ '--animation-delay': 4 }}
                    >
                        {translation.contact}
                    </span>
                </Link>
                <Link href="/lang" passHref>
                    <span
                        className={`my-2 cursor-pointer transition ${
                            router.pathname == '/lang' ? 'active font-bold' : ''
                        } animate-underline dark:animate-underline animate-fadeInDown opacity-0`}
                        //@ts-ignore
                        style={{ '--animation-delay': 5 }}
                    >
                        {translation.lang}
                    </span>
                </Link>
                <button
                    className="my-3 focus:outline-none animate-fadeInDown opacity-0"
                    //@ts-ignore
                    style={{ '--animation-delay': 6 }}
                    onClick={switchTheme}
                >
                    {theme === 'dark' && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="fill-current transition hover:text-swatch-redActive"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <g>
                                <circle cx="128" cy="128" r="68"></circle>
                                <path d="M128,44a8.00008,8.00008,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8.00008,8.00008,0,0,0,128,44Z"></path>
                                <path d="M57.28955,68.603A7.99984,7.99984,0,1,0,68.603,57.28955L54.46094,43.14746A7.99984,7.99984,0,1,0,43.14746,54.46094Z"></path>
                                <path d="M44,128a8.00008,8.00008,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8.00008,8.00008,0,0,0,44,128Z"></path>
                                <path d="M57.28955,187.397,43.14746,201.53906a7.99984,7.99984,0,1,0,11.31348,11.31348L68.603,198.71045A7.99984,7.99984,0,1,0,57.28955,187.397Z"></path>
                                <path d="M128,212a8.00008,8.00008,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8.00008,8.00008,0,0,0,128,212Z"></path>
                                <path d="M198.71045,187.397A7.99984,7.99984,0,1,0,187.397,198.71045l14.14209,14.14209a7.99984,7.99984,0,1,0,11.31348-11.31348Z"></path>
                                <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"></path>
                                <path d="M193.05371,70.94629a7.97507,7.97507,0,0,0,5.65674-2.34326l14.14209-14.14209a7.99984,7.99984,0,1,0-11.31348-11.31348L187.397,57.28955a7.99976,7.99976,0,0,0,5.65674,13.65674Z"></path>
                            </g>
                        </svg>
                    )}
                    {theme === 'light' && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="fill-current transition hover:text-swatch-blueActive"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M224.30762,150.29346a8.00288,8.00288,0,0,0-10.01416-5.28955A84.03122,84.03122,0,0,1,111.01514,41.6377a8.00207,8.00207,0,0,0-9.96582-9.96192,100.01386,100.01386,0,1,0,123.29,123.2207A8.0018,8.0018,0,0,0,224.30762,150.29346Z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
}
