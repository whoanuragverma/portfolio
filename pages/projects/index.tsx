import { GetStaticProps } from 'next';
import Footer from 'components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../../components/NavBar';
import Project from 'components/Project';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';
import Divider from 'components/Divider';
export default function Projects({
    footer,
    translation,
    projects,
}: {
    footer: Footer;
    translation: Translation;
    projects: Projects[];
}) {
    return (
        <>
            <Head>
                <title>
                    {translation.projects.charAt(0).toUpperCase() +
                        translation.projects.substr(1).toLowerCase()}{' '}
                    - {translation.title}
                </title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black text-black dark:text-white h-fill-80 flex flex-col">
                <h1 className="text-3xl font-montserrat font-bold capitalize">
                    {translation.projects}
                </h1>
                <p className="text-md font-montserrat font-normal">
                    {translation.moreInfo}
                </p>
                <div className="project-wrapper">
                    {projects.map((project, idx) => (
                        <Project {...project} key={idx} />
                    ))}
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
    const projects: Projects[] = [];
    let path: string[] = [];
    (await fs.readdir(`i18n/${locale}/projects`)).map((val) => {
        path.push(val);
    });
    for (let i = 0; i < path.length; i++) {
        projects.push(
            JSON.parse(
                await fs.readFile(`i18n/${locale}/projects/${path[i]}`, 'utf-8')
            )
        );
        projects[i].imgBase64 = (
            await getPlaiceholder(projects[i].imgPath)
        ).base64;
    }
    return {
        props: {
            locale: locale,
            projects: projects,
            translation: common,
            footer: footer,
        },
    };
};
