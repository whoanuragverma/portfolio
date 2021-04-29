export default function LinkCustom({
    href,
    name,
}: {
    href: string;
    name: string;
}): JSX.Element {
    return (
        <a
            href={href}
            className="text-swatch-blueActive hover:text-swatch-blue dark:text-swatch-redActive dark:hover:text-swatch-red font-semibold transition-all"
            target="_blank"
            rel="noreferrer noopener"
        >
            {name}
        </a>
    );
}
