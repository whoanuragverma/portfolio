import { GetStaticProps } from 'next';
import Footer from 'components/Footer';
import useOrientationSensor from 'components/hooks/useOrientationSensor';
import cover from 'public/cover.jpg';
import Image from 'next/image';
import { promises as fs } from 'fs';
import Button from 'components/Button';
import NavBar from '../components/NavBar';
import LinkIcon from 'components/LinkIcon';

import Head from 'next/head';
import Divider from 'components/Divider';
import EducationInfo from 'components/EducationInfo';
export default function About({
    footer,
    translation,
    about,
}: {
    footer: Footer;
    translation: Translation;
    about: AboutJSON;
}) {
    const angularVelocity = useOrientationSensor();
    return (
        <>
            <Head>
                <title>
                    {translation.about.charAt(0).toUpperCase() +
                        translation.about.substr(1).toLowerCase()}{' '}
                    &mdash; {translation.title}
                </title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black  text-black dark:text-white">
                <div className="flex flex-col md:flex-row md:justify-evenly font-raleway  animate-fadeIn">
                    <span className="md:w-1/2 w-full relative px-2 lg:px-24">
                        <div style={{ clipPath: 'inset(4% round 0.75rem)' }}>
                            <span
                                className="relative transition-all"
                                style={{
                                    left: `${-angularVelocity.y}px`,
                                    top: `${-angularVelocity.x}px`,
                                }}
                            >
                                <Image
                                    src={cover}
                                    width={45}
                                    height={65}
                                    alt={translation.title}
                                    layout="responsive"
                                    loading="lazy"
                                    placeholder="blur"
                                    quality={50}
                                />
                            </span>
                        </div>
                    </span>
                    <span className="md:w-1/2 w-full px-2 lg:px-8 md:pt-6 md:px-5 flex flex-col  justify-around">
                        <div>
                            <h1 className="font-bold font-montserrat text-4xl">
                                {about.salute}
                            </h1>
                            <h3 className="font-medium font-montserrat text-2xl my-3">
                                {about.hello}
                            </h3>
                            <p className="text-justify">{about.descPara1}</p>
                            <p className="text-justify">{about.descPara2}</p>
                        </div>
                        <div className="self-center md:self-start">
                            <Button
                                hasLink={true}
                                url="/resume.pdf"
                                label={about.resumeLabel}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        className="fill-current mx-1 stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M80.34375,115.668a7.99983,7.99983,0,1,1,11.3125-11.31445L120,132.6897V40a8,8,0,0,1,16,0v92.6897l28.34375-28.33618a7.99983,7.99983,0,1,1,11.3125,11.31445l-42,41.98926a7.99945,7.99945,0,0,1-11.3125,0ZM216,144a8.00039,8.00039,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A8.00039,8.00039,0,0,0,216,144Z"></path>
                                    </svg>
                                }
                            />
                        </div>
                    </span>
                </div>
                <Divider />
                <div className="grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:gap-y-6 grid-rows-auto font-montserrat">
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-2xl">
                        {about.sayHi}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        <span className="flex gap-2 justify-between">
                            <Button
                                label={about.emailLabel}
                                hasLink={true}
                                url="mailto:hello@anuragverma.tech"
                                nextLink={false}
                                //@ts-ignore
                                style={{ margin: '0' }}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        className="fill-current mx-1 stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <polyline
                                            points="224 56 128 144 32 56"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></polyline>
                                        <path
                                            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <line
                                            x1="110.54541"
                                            y1="128.00013"
                                            x2="34.4668"
                                            y2="197.73926"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></line>
                                        <line
                                            x1="221.53418"
                                            y1="197.73926"
                                            x2="145.45424"
                                            y2="127.99964"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></line>
                                    </svg>
                                }
                            />
                            <LinkIcon
                                url="https://github.com/whoanuragverma/"
                                name="GitHub"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        className="fill-current stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M84,232a24,24,0,0,0,24-24V160"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <path
                                            d="M172,232a24,24,0,0,1-24-24V160"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <path
                                            d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <path
                                            d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <path
                                            d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                    </svg>
                                }
                            />
                            <LinkIcon
                                url="https://linkedin.com/in/whoanuragverma"
                                name="LinkedIn"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        className="fill-current stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <rect
                                            x="40"
                                            y="40"
                                            width="176"
                                            height="176"
                                            rx="8"
                                            strokeWidth="16"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        ></rect>
                                        <line
                                            x1="120"
                                            y1="112.00094"
                                            x2="120"
                                            y2="176.00094"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></line>
                                        <line
                                            x1="88"
                                            y1="112.00094"
                                            x2="88"
                                            y2="176.00094"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></line>
                                        <path
                                            d="M120,140.00094a28,28,0,1,1,56,0v36"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                        <circle
                                            cx="88"
                                            cy="79.99998"
                                            r="12"
                                        ></circle>
                                    </svg>
                                }
                            />
                            <LinkIcon
                                name="twitter"
                                url="https://twitter.com/whoanuragverma"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        className="fill-current stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="16"
                                        ></path>
                                    </svg>
                                }
                            />
                            <LinkIcon
                                url="https://www.instagram.com/whoanuragverma/"
                                name="Instagram"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        className="fill-current stroke-current"
                                        viewBox="0 0 256 256"
                                    >
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="40"
                                            fill="none"
                                            strokeMiterlimit="10"
                                            strokeWidth="16"
                                        ></circle>
                                        <rect
                                            x="36"
                                            y="36"
                                            width="184"
                                            height="184"
                                            rx="48"
                                            strokeWidth="16"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        ></rect>
                                        <circle
                                            cx="180"
                                            cy="75.99998"
                                            r="12"
                                        ></circle>
                                    </svg>
                                }
                            />
                        </span>
                    </div>
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-2xl">
                        {about.about}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        <p>{about.aboutPara1}</p>
                        <p>{about.aboutPara2}</p>
                        <p>{about.aboutPara3}</p>
                    </div>
                </div>
                <Divider />
                <div className="grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:gap-y-6 grid-rows-auto font-montserrat">
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-2xl">
                        {about.experience}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        {about.experienceList.map((item, idx) => (
                            <EducationInfo {...item} key={idx} />
                        ))}
                    </div>
                </div>
                <Divider />
                <div className="grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:gap-y-6 grid-rows-auto font-montserrat">
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-2xl">
                        {about.education}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        {about.educationList.map((item, idx) => (
                            <EducationInfo {...item} key={idx} />
                        ))}
                    </div>
                </div>
                <Divider />
                <div className="grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:gap-y-6 grid-rows-auto font-montserrat">
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-2xl">
                        {about.additionalLabel}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        {about.additional.map((items, idx) => (
                            <div className="mb-3" key={idx}>
                                <div className="font-bold">{items.title}</div>
                                <div>{items.body}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Divider />
                <Footer footer={footer} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const footer: Footer = JSON.parse(
        await fs.readFile(`i18n/${locale}/footer.json`, 'utf-8')
    );
    footer.year = new Date().getFullYear();
    const common: Translation = JSON.parse(
        await fs.readFile(`i18n/${locale}/common.json`, 'utf-8')
    );
    const aboutJSON: AboutJSON = JSON.parse(
        await fs.readFile(`i18n/${locale}/aboutPage.json`, 'utf-8')
    );
    return {
        props: {
            locale: locale,
            translation: common,
            footer: footer,
            about: aboutJSON,
        },
    };
};
