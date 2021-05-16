import Image from 'next/image';

export default function About({
    src,
    salute,
}: {
    src: string;
    salute: string;
}): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:justify-evenly font-raleway my-8 animate-fadeIn">
            <span className="md:w-1/2 w-full relative px-4 lg:px-32">
                <Image
                    src={src}
                    width={45}
                    height={66}
                    layout="responsive"
                    loading="lazy"
                    quality={50}
                    className="rounded-xl"
                />
            </span>
            <span className="md:w-1/2 w-full font-medium text-2xl py-5 px-0 md:px-5 md:py-3">
                <h2 className="text-3xl font-bold mb-5">{salute}</h2>
                <p className="leading-8 text-base my-2"></p>
            </span>
        </div>
    );
}
