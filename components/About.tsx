import Image from 'next/image';
import Button from './Button';
import cover from 'public/cover.jpg';

export default function About({
    salute,
    intro,
    resume,
}: {
    salute: string;
    resume: string;
    intro: { para1: string; para2: string; para3: string };
}): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:justify-evenly font-raleway my-8 animate-fadeIn">
            <span className="md:w-1/2 w-full relative px-4 lg:px-32">
                <Image
                    src={cover}
                    width={45}
                    height={65}
                    alt="Anurag Verma"
                    layout="responsive"
                    loading="lazy"
                    placeholder="blur"
                    quality={50}
                    className="rounded-xl"
                />
            </span>
            <span className="md:w-1/2 w-full font-medium text-2xl py-5 px-0 md:px-5 md:py-3">
                <h2 className="text-3xl font-bold mb-5">{salute}</h2>
                <p className="leading-7 text-base my-2">{intro.para1}</p>
                <p className="leading-7 text-base my-2">{intro.para2}</p>
                <p className="leading-7 text-base my-2">{intro.para3}</p>
                <Button
                    hasLink={true}
                    url="./resume.pdf"
                    label={resume}
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="fill-current mx-1 stroke-current"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M80.34375,115.668a7.99983,7.99983,0,1,1,11.3125-11.31445L120,132.6897V40a8,8,0,0,1,16,0v92.6897l28.34375-28.33618a7.99983,7.99983,0,1,1,11.3125,11.31445l-42,41.98926a7.99945,7.99945,0,0,1-11.3125,0ZM216,144a8.00039,8.00039,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A8.00039,8.00039,0,0,0,216,144Z"></path>
                        </svg>
                    }
                />
            </span>
        </div>
    );
}
