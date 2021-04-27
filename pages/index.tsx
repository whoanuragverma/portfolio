import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Head from 'next/head';
import NavBar from 'components/NavBar';

export default function Home({
    translation,
}: {
    translation: Translation;
}): JSX.Element {
    return (
        <div className="container">
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
                    href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <NavBar translation={translation} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const translation: Translation = JSON.parse(
        await fs.readFile(`i18n/${locale}/home.json`, 'utf-8')
    );
    return {
        props: {
            translation: translation,
        },
    };
};
