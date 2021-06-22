export default function LinkIcon({
    svg,
    url,
    name,
}: {
    svg: JSX.Element;
    url: string;
    name: string;
}) {
    return (
        <a
            aria-label={name}
            href={url}
            title={name}
            target="_blank"
            rel="noreferrer noopener"
            className="text-black dark:text-white"
        >
            {svg}
        </a>
    );
}
