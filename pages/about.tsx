import { GetStaticProps } from 'next';
import Footer from 'components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../components/NavBar';

import Head from 'next/head';
export default function About({
    footer,
    translation,
}: {
    footer: Footer;
    translation: Translation;
}) {
    return (
        <>
            <Head>
                <title>Under Development</title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black text-black dark:text-white h-fill-80 flex flex-col">
                <h1 className="text-4xl">
                    Coming Soon - This page is under development.
                </h1>
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
    return {
        props: {
            locale: locale,
            translation: common,
            footer: footer,
        },
    };
};
