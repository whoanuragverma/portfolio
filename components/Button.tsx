export default function Button({
    label,
    hasLink,
    url,
    svg,
}: {
    label: string;
    hasLink: boolean;
    url?: string;
    svg?: JSX.Element;
}): JSX.Element {
    return (
        <button className="my-4 text-base flex items-center content-center px-4 py-1 bg-black text-white uppercase rounded-full hover:shadow-lg transition-all dark:bg-white dark:text-black dark:hover:shadow-inner focus:outline-none">
            {hasLink && <a href={url}>{label}</a>}
            {!hasLink && label}
            {svg}
        </button>
    );
}
