export default function LinkIcon({
    svg,
    url,
}: {
    svg: JSX.Element;
    url: string;
}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-black dark:text-white"
        >
            {svg}
        </a>
    );
}
