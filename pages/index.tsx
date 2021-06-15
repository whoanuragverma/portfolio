import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import MainSection from 'components/MainSection';
import Project from 'components/Project';
import { getImage } from '@plaiceholder/next';
import { getBase64 } from '@plaiceholder/base64';
import About from 'components/About';
import SocialButtons from 'components/SocialButtons';

export default function Home({
    translation,
    meschain,
    ratemyprof,
    about,
}: {
    translation: Translation;
    meschain: Projects;
    ratemyprof: Projects;
    about: About;
}): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta name="robots" content="index, follow" />
                <title>{translation.title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Montserrat:wght@200&display=swap"
                    rel="stylesheet"
                    media="print"
                    onLoad={this.media='all'}
                />
            </Head>

            <NavBar translation={translation} />
            <div className="mt-20 px-6 py-6 md:px-12 bg-white dark:bg-black  text-black dark:text-white">
                <MainSection translation={translation} />
                <span className="block w-full h-px bg-black my-16 dark:bg-white opacity-20"></span>
                <h2 className="text-3xl font-raleway pb-5 font-bold">
                    {translation.featured}
                </h2>
                <Project {...meschain} />
                <Project {...ratemyprof} />
                <span className="block w-full h-px bg-black my-16 dark:bg-white opacity-20"></span>
                <h2 className="text-3xl font-raleway pb-5 font-bold">
                    {translation.touch}
                </h2>
                <About {...about} />
                <SocialButtons {...about} />
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
    meschain.imgBase64 = await getBase64(await getImage(meschain.imgPath));
    const ratemyprof: Projects = JSON.parse(
        await fs.readFile(`i18n/${locale}/projects/ratemyprof.json`, 'utf-8')
    );
    ratemyprof.imgBase64 = await getBase64(await getImage(ratemyprof.imgPath));
    const translation: Translation = { ...common, ...home };
    const about: About = JSON.parse(
        await fs.readFile(`i18n/${locale}/about.json`, 'utf-8')
    );

    return {
        props: {
            translation: translation,
            meschain: meschain,
            ratemyprof: ratemyprof,
            about: about,
        },
    };
};
