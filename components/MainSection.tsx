import Button from './Button';
import LinkCustom from './LinkCustom';

export default function MainSection({
    translation,
}: {
    translation: Translation;
}): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:justify-evenly font-raleway md:pb-0 pb-4">
            <span className="md:w-1/2 w-full font-semibold text-3xl md:leading-normal md:text-4xl pt-2 md:self-center">
                {translation.greeting}
            </span>
            <span className="md:w-1/2 w-full font-medium text-2xl md:text-2xl pt-2">
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
                <Button
                    hasLink={true}
                    url="./resume.pdf"
                    label={translation.resume}
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="fill-current mx-1"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M80.34375,115.668a7.99983,7.99983,0,1,1,11.3125-11.31445L120,132.6897V40a8,8,0,0,1,16,0v92.6897l28.34375-28.33618a7.99983,7.99983,0,1,1,11.3125,11.31445l-42,41.98926a7.99945,7.99945,0,0,1-11.3125,0ZM216,144a8.00039,8.00039,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A8.00039,8.00039,0,0,0,216,144Z"></path>
                        </svg>
                    }
                />
            </span>
        </div>
    );
}
