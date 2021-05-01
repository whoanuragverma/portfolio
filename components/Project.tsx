import Image from 'next/image';
import Button from './Button';
export default function Project({
    title,
    imgPath,
    link,
    para1,
    para2,
}: {
    title: string;
    imgPath: string;
    link: string;
    para1: string;
    para2: string;
}): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:justify-evenly font-raleway my-8 animate-fadeIn">
            <span className="md:w-1/2 w-full text-2xl md:leading-normal pt-2 md:self-center">
                <Image
                    src={imgPath}
                    width={430}
                    height={230}
                    layout="responsive"
                    loading="lazy"
                    quality={100}
                    className="rounded-xl"
                />
            </span>
            <span className="md:w-1/2 w-full font-medium text-2xl py-5 px-0 md:px-5 md:py-3">
                <h2 className="text-3xl font-bold mb-5">{title}</h2>
                <p className="leading-5 text-base my-2">{para1}</p>
                <p className="leading-5 text-base my-2">{para2}</p>
                <Button
                    label="Learn More"
                    hasLink={true}
                    nextLink={true}
                    url={link}
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            className="fill-current ml-1"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline
                                points="216 100 215.992 40.008 156 40"
                                fill="none"
                                strokeLinecap="round"
                                className="stroke-current"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></polyline>
                            <line
                                x1="143.9714"
                                y1="112.0286"
                                x2="215.9714"
                                y2="40.0286"
                                fill="none"
                                className="stroke-current"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                            <path
                                d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64"
                                fill="none"
                                className="stroke-current"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></path>
                        </svg>
                    }
                />
            </span>
        </div>
    );
}
