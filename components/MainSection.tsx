import LinkCustom from './LinkCustom';

export default function MainSection({
    translation,
}: {
    translation: Translation;
}): JSX.Element {
    return (
        <div className="bg-white dark:bg-black px-6 py-6 md:px-12 text-black dark:text-white flex flex-col md:flex-row md:justify-evenly font-raleway">
            <span className="md:w-1/2 w-full font-semibold text-3xl md:leading-normal md:text-4xl pt-5 md:self-center">
                {translation.greeting}
            </span>
            <span className="md:w-1/2 w-full font-medium text-2xl md:text-2xl pt-5">
                <p>
                    {translation.heroP1.part0}
                    <LinkCustom
                        href="https://vit.ac.in"
                        name={translation.heroP1.link01}
                    />
                    {translation.heroP1.part1}
                </p>
                <br />
                <p>
                    {translation.heroP2.part0}
                    <LinkCustom
                        href="https://meschain.herokuapp.com/"
                        name={translation.heroP2.link01}
                    />
                    {translation.heroP2.part1}
                </p>
                <br />
                <p>
                    {translation.heroP3.part0}
                    <LinkCustom
                        href="https://github.com/whoanuragverma"
                        name={translation.heroP3.link01}
                    />
                    {translation.heroP3.part1}
                </p>
            </span>
        </div>
    );
}
