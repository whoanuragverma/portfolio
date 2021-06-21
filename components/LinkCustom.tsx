import Link from 'next/link';
export default function LinkCustom({
    href,
    name,
    nextLink = false,
}: {
    href: string;
    name: string;
    nextLink?: boolean;
}): JSX.Element {
    return (
        <>
            <>
                {!nextLink && (
                    <a
                        href={href}
                        className="text-swatch-blueActive hover:text-swatch-blue dark:text-swatch-redActive dark:hover:text-swatch-red font-semibold transition-all"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {name}
                    </a>
                )}
            </>
            <>
                {nextLink && (
                    <Link passHref href={href}>
                        <a className="text-swatch-blueActive hover:text-swatch-blue dark:text-swatch-redActive dark:hover:text-swatch-red font-semibold transition-all">
                            {name}
                        </a>
                    </Link>
                )}
            </>
        </>
    );
}
