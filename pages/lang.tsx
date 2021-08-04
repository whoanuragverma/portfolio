import { GetStaticProps } from 'next';
import Footer from 'components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import LinkCustom from '../components/LinkCustom';

import Head from 'next/head';
export default function Lang({
    footer,
    translation,
    lang,
    locale,
}: {
    footer: Footer;
    translation: Translation;
    lang: Lang;
    locale: string;
}) {
    return (
        <>
            <Head>
                <title>{lang.title}</title>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black text-black dark:text-white h-fill-80 flex flex-col">
                <div className="my-8">
                    <h1 className="text-4xl font-montserrat font-extrabold">
                        {lang.hero}
                    </h1>
                    <h5 className="text-xl font-montserrat font-light">
                        {lang.message}
                    </h5>
                    <div className="my-5 grid md:grid-cols-5 grid-cols-2 gap-2 font-montserrat">
                        {lang.langs.map((el) => (
                            <Link
                                href="/"
                                locale={el.locale}
                                passHref
                                key={el.locale}
                            >
                                <a>
                                    <div
                                        className={`p-3 flex flex-col py-4 border-2 rounded-md transition-shadow cursor-pointer ${
                                            locale === el.locale
                                                ? 'border-swatch-blueActive dark:border-swatch-redActive hover:shadow-blue dark:hover:shadow-red'
                                                : 'hover:shadow-md'
                                        }`}
                                    >
                                        <span className="font-bold uppercase py-2 text-lg flex items-center">
                                            {el.name}
                                            <span
                                                className={`font-normal text-xs mx-3 bg-swatch-blueActive dark:bg-swatch-redActive p-1 rounded-full ${
                                                    el.helper !== 'English'
                                                        ? 'block'
                                                        : 'hidden'
                                                }`}
                                            >
                                                BETA
                                            </span>
                                        </span>
                                        <span className="font-semibold py-2 dark:text-gray-300 text-gray-600">
                                            {el.helper}
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-sm font-medium font-montserrat mb-5">
                    {lang.help0}
                    <LinkCustom
                        name={lang.github}
                        href="https://github.com/whoanuragverma/portfolio"
                    />{' '}
                    {lang.help1}
                </div>
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
    const lang: Lang = JSON.parse(
        await fs.readFile(`i18n/${locale}/lang.json`, 'utf-8')
    );
    return {
        props: {
            locale: locale,
            lang: lang,
            translation: common,
            footer: footer,
        },
    };
};
