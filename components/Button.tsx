import Link from 'next/link';
export default function Button({
    label,
    hasLink,
    url,
    svg,
    nextLink,
}: {
    label: string;
    hasLink: boolean;
    url?: string;
    nextLink?: boolean;
    svg?: JSX.Element;
}): JSX.Element {
    return (
        <button className="my-6 text-base px-4 py-1 bg-black text-white uppercase rounded-full hover:shadow-lg transition-all dark:bg-white dark:text-black dark:hover:shadow-inner focus:outline-none">
            {hasLink && !nextLink && (
                <a href={url} className="flex items-center content-center" target="_blank" rel='noreferrer noopener'>
                    {svg}
                    {label}
                </a>
            )}
            {hasLink && nextLink && (
                <Link href={url as string} passHref>
                    <a className="flex items-center content-centers">
                        {label}
                        {svg}
                    </a>
                </Link>
            )}
            {!hasLink && (
                <span className="flex items-center content-centers">
                    {label}
                    {svg}
                </span>
            )}
        </button>
    );
}
