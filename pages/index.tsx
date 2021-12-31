import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import MainSection from 'components/MainSection';
import Project from 'components/Project';
import { getPlaiceholder } from 'plaiceholder';
import About from 'components/About';
import SocialButtons from 'components/SocialButtons';
import Divider from 'components/Divider';
import Footer from 'components/Footer';

export default function Home({
    translation,
    meschain,
    ratemyprof,
    about,
    footer,
}: {
    translation: Translation;
    meschain: Projects;
    ratemyprof: Projects;
    about: About;
    footer: Footer;
}): JSX.Element {
    return (
        <>
            <Head>
                <title>{translation.title}</title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>

            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black  text-black dark:text-white">
                <MainSection translation={translation} />
                <Divider />
                <h2 className="text-3xl font-raleway pb-5 font-bold">
                    {translation.featured}
                </h2>
                <div className="project-wrapper">
                    <Project {...meschain} />
                    <Project {...ratemyprof} />
                </div>
                <Divider />
                <h2 className="text-3xl font-raleway pb-2 font-bold">
                    {translation.touch}
                </h2>
                <About {...about} />
                <SocialButtons {...about} />
                <Divider />
                <Footer footer={footer} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const common = JSON.parse(
        await fs.readFile(`i18n/${locale}/common.json`, 'utf-8')
    );
    const home = JSON.parse(
        await fs.readFile(`i18n/${locale}/home.json`, 'utf-8')
    );
    const meschain: Projects = JSON.parse(
        await fs.readFile(`i18n/${locale}/projects/meschain.json`, 'utf-8')
    );
    meschain.imgBase64 = (await getPlaiceholder(meschain.imgPath)).base64;
    const ratemyprof: Projects = JSON.parse(
        await fs.readFile(`i18n/${locale}/projects/ratemyprof.json`, 'utf-8')
    );
    ratemyprof.imgBase64 = (await getPlaiceholder(ratemyprof.imgPath)).base64;
    const translation: Translation = { ...common, ...home };
    const about: About = JSON.parse(
        await fs.readFile(`i18n/${locale}/about.json`, 'utf-8')
    );
    const footer: Footer = JSON.parse(
        await fs.readFile(`i18n/${locale}/footer.json`, 'utf-8')
    );
    footer.year = new Date().getFullYear();
    return {
        props: {
            translation: translation,
            meschain: meschain,
            ratemyprof: ratemyprof,
            about: about,
            footer: footer,
        },
    };
};
