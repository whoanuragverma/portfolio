import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import MainSection from 'components/MainSection';
import Project from 'components/Project';

export default function Home({
    translation,
    meschain,
    ratemyprof,
}: {
    translation: Translation;
    meschain: Projects;
    ratemyprof: Projects;
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
                />
            </Head>

            <NavBar translation={translation} />
            <div className="mt-20 px-6 py-6 md:px-12 bg-white dark:bg-black  text-black dark:text-white">
                <MainSection translation={translation} />
                <span className="block w-full h-px bg-black my-16 dark:bg-white opacity-20"></span>
                <h2 className="text-3xl font-raleway pb-5 font-bold">
                    Featured Projects
                </h2>
                <Project {...meschain} />
                <Project {...ratemyprof} />
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
    const ratemyprof: Projects = JSON.parse(
        await fs.readFile(`i18n/${locale}/projects/ratemyprof.json`, 'utf-8')
    );
    const translation: Translation = { ...common, ...home };
    return {
        props: {
            translation: translation,
            meschain: meschain,
            ratemyprof: ratemyprof,
        },
    };
};
