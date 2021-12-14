import { GetStaticPaths, GetStaticProps } from 'next';
import Footer from 'components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../../components/NavBar';
import Image from 'next/image';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';
import Divider from 'components/Divider';
import Button from 'components/Button';
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
                <title>
                    {project.title} &mdash; {translation.title}
                </title>
                <meta name="description" content={translation.description} />
                <meta
                    name="keywords"
                    content={translation.keywords.concat(
                        ',' + project.keywords?.toString()
                    )}
                />
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
                        <h2 className="text-4xl font-bold mb-5">
                            {project.title}
                        </h2>
                        <p className="pt-3 text-justify">{project.shortDesc}</p>
                        <span className="flex gap-x-2">
                            {project.github && <Button
                                label={translation.code}
                                hasLink={true}
                                url={project.github}
                                nextLink={false}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        className="fill-current mr-1"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                    </svg>
                                }
                            />}
                            {project.demo && <Button
                                label={translation.demo}
                                hasLink={true}
                                url={project.demo}
                                nextLink={false}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="fill-current mr-1"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                    </svg>
                                }
                            />}
                        </span>
                    </span>
                </div>
                <Divider />
                <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-x-3 grid-rows-auto gap-y-4 font-montserrat">
                    <div
                        className="md:ml-48 md:mr-8"
                        style={{ lineBreak: 'strict' }}
                    >
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">
                            {translation.keyword}
                        </h3>
                        <span className="text-gray-800 dark:text-gray-300">
                            {project.keywords?.map((x, k) => (
                                <>
                                    {x}
                                    {k == project.keywords.length - 1
                                        ? ''
                                        : ', '}
                                </>
                            ))}
                        </span>
                    </div>
                    <div className="md:ml-12 md:mr-8">
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">
                            {translation.partner}
                        </h3>
                        <span className="text-gray-800 dark:text-gray-300 ">
                            {project.partner}
                        </span>
                    </div>
                    <div
                        className="md:ml-48 md:mr-8"
                        style={{ lineBreak: 'strict' }}
                    >
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">
                            {translation.tools}
                        </h3>
                        <span className="text-gray-800 dark:text-gray-300">
                            {project.tech?.map((x, k) => (
                                <>
                                    {x}
                                    {k == project.tech.length - 1 ? '' : ', '}
                                </>
                            ))}
                        </span>
                    </div>
                    <div className="md:ml-12 md:mr-8">
                        <h3 className="uppercase font-semibold tracking-wider text-xl mb-3">
                            {translation.type}
                        </h3>
                        <span
                            className="text-gray-800 dark:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: project.type }}
                        ></span>
                    </div>
                </div>
                <Divider />
                <div className="grid md:grid-cols-5 md:grid-rows-3 md:gap-x-3 gap-y-4 md:gap-y-3 grid-rows-auto font-montserrat">
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-xl">
                        {translation.problem}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        {project.problem}
                    </div>
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-xl">
                        {translation.objective}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        <p>{project.para1}</p>
                        <p>{project.para2}</p>
                    </div>
                    <div className="md:ml-48 md:mr-8 col-span-2 uppercase font-semibold tracking-wider text-xl">
                        {translation.solution}
                    </div>
                    <div className="col-span-3 md:mr-16 text-justify">
                        {project.longDesc}
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
        await fs.readFile(
            `i18n/${locale}/projects/${params?.title}.json`,
            'utf-8'
        )
    );
    project.imgBase64 = (await getPlaiceholder(project.imgPath)).base64;
    return {
        props: {
            locale: locale,
            translation: common,
            footer: footer,
            project: project,
        },
    };
};
