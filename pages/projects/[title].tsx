import { GetStaticPaths, GetStaticProps } from 'next';
import Footer from 'components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../../components/NavBar';
import Image from 'next/image'
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';
import Divider from 'components/Divider';
export default function Project({
    footer,
    translation,
    project,
}: {
    footer: Footer;
    translation: Translation;
    project: Projects;
}) {
    return (
        <>
            <Head>
                <title>{project.title} &mdash; {translation.title}</title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords.concat(',' + project.keywords?.toString())} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black  text-black dark:text-white">
                <div className="flex flex-col md:flex-row md:justify-evenly font-raleway my-8 animate-fadeIn">
                    <span className="md:w-1/2 w-full md:self-center">
                        <Image
                            src={project.imgPath}
                            width={430}
                            placeholder="blur"
                            blurDataURL={project.imgBase64}
                            height={230}
                            layout="responsive"
                            loading="lazy"
                            quality={100}
                            className="rounded-xl"
                            alt={project.title}
                        />
                    </span>
                    <span className="md:w-1/2 w-full font-medium text-2xl py-5 px-0 md:px-5 md:py-3">
                        <h2 className="text-4xl font-bold mb-5">{project.title}</h2>
                        <p className="pt-3 text-justify">{project.shortDesc}</p>
                    </span></div>
                <Divider />
                <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-x-3 grid-rows-auto gap-y-4 font-montserrat">
                    <div className="md:ml-48 md:mr-8" style={{ lineBreak: 'strict' }}>
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">{translation.keyword}</h3>
                        <span className="text-gray-800">
                            {project.keywords?.map((x, k) => <>{x}{k == project.keywords.length - 1 ? '' : ', '}</>)}</span>
                    </div>
                    <div className="md:ml-12 md:mr-8">
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">{translation.partner}</h3>
                        <span className="text-gray-800 ">{project.partner}</span>
                    </div>
                    <div className="md:ml-48 md:mr-8" style={{ lineBreak: 'strict' }}>
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">{translation.tools}</h3>
                        <span className="text-gray-800">
                            {project.tech?.map((x, k) => <>{x}{k == project.tech.length - 1 ? '' : ', '}</>)}</span>

                    </div>
                    <div className="md:ml-12 md:mr-8">
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">{translation.tools}</h3>
                        <span className="text-gray-800">
                            {project.tech?.map((x, k) => <>{x}{k == project.tech.length - 1 ? '' : ', '}</>)}</span>
                    </div>
                </div>
                <Divider />
                <Footer footer={footer} />
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    let path: any[] = [];
    for (let locale of locales!) {
        (await fs.readdir(`i18n/${locale}/projects`)).map((val) => {
            path.push({
                params: {
                    title: val.split('.json')[0],
                },
                locale: locale,
            });
        });
    }
    return {
        paths: path,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const footer: Footer = JSON.parse(
        await fs.readFile(`i18n/${locale}/footer.json`, 'utf-8')
    );
    footer.year = new Date().getFullYear();
    const common: Translation = JSON.parse(
        await fs.readFile(`i18n/${locale}/common.json`, 'utf-8')
    );
    const project: Projects = JSON.parse(
        await fs.readFile(`i18n/${locale}/projects/${params?.title}.json`, 'utf-8')
    );
    project.imgBase64 = (
        await getPlaiceholder(project.imgPath)
    ).base64;
    return {
        props: {
            locale: locale,
            translation: common,
            footer: footer,
            project: project,
        },
    };
};
