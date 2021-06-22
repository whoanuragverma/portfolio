import LinkCustom from './LinkCustom';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
export default function Footer({ footer }: { footer: Footer }) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR<SpotifyAPIData>('/api/spotify', fetcher, {
        refreshInterval: 60000,
    });
    return (
        <>
            <div className="grid md:grid-cols-5 grid-flow-row gap-y-5 md:gap-y-0">
                <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-100 font-raleway">
                    <svg
                        width="45"
                        height="45"
                        fill="none"
                        viewBox="0 0 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6217 12.9072L17.9617 21.8962H7.46995L12.6217 12.9072ZM12.6217 12.9072L7.46995 4.23497M12.6217 12.9072L13.8087 10.8361L20.1038 21.8962L21.1203 20.1468M21.1203 20.1468L26.5301 10.8361H15.9071L21.1203 20.1468ZM21.1203 20.1468L26.5301 29.8087M33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17Z"
                            className="stroke-current"
                            strokeWidth="0.8"
                        />
                    </svg>
                    <span>{footer.copy}</span>
                    <span>&copy; {footer.year}</span>
                </div>

                <div className="flex flex-col space-y-2 font-raleway">
                    <h3 className="font-montserrat text-xl font-semibold">
                        {footer.quick}
                    </h3>
                    <div className="flex flex-col space-y-1 text-base uppercase">
                        {footer.links.map((el) => (
                            <LinkCustom
                                name={el.name}
                                href={el.href}
                                nextLink={true}
                                key={el.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-2 font-raleway">
                    <h3 className="font-montserrat text-xl font-semibold">
                        {footer.contact}
                    </h3>
                    <div className="flex flex-col space-y-1 text-base uppercase">
                        {footer.contacts.map((el) => (
                            <LinkCustom
                                name={el.name}
                                href={el.href}
                                key={el.name}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-700 to-green-800 grid grid-cols-5 w-full max-h-20 shadow-lg text-white rounded-lg items-center py-2 md:px-3 px-2 md:col-span-2 gap-1 font-montserrat">
                    <div
                        className={`h-full rounded-md flex content-center items-center ${
                            data?.item?.album?.images?.[0].url ? '' : 'hidden'
                        }`}
                    >
                        {data?.item?.album?.images?.[0].url && (
                            <Image
                                src={
                                    data?.item?.album?.images?.[0].url as string
                                }
                                alt={data?.item.album.name}
                                width={63}
                                height={63}
                                className="rounded-md"
                            />
                        )}
                    </div>
                    <div
                        className={`flex flex-row items-center gap-3 ${
                            data?.item?.album?.images?.[0].url
                                ? 'col-span-3'
                                : 'col-start-1 col-end-5'
                        }`}
                    >
                        <div className="flex flex-col truncate">
                            <div className="font-medium truncate">
                                {data?.item?.name && (
                                    <a
                                        href={
                                            data?.item?.album?.external_urls
                                                ?.spotify
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data?.item?.name}
                                    </a>
                                )}
                                {!data?.item?.name && (
                                    <span>{footer.spotify}</span>
                                )}
                            </div>
                            <div className="font-light text-xs truncate">
                                {data?.item?.artists?.map((el, idx) => (
                                    <a
                                        key={idx}
                                        href={el.external_urls?.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {el.name}
                                        {idx + 1 !== data?.item?.artists?.length
                                            ? ', '
                                            : ''}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`bg-white rounded text-black flex items-center content-center px-1 py-1 h-4 text-xs ${
                                !data?.item?.explicit ? 'hidden' : ''
                            }`}
                        >
                            {data?.item?.explicit ? 'E' : ''}
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Link href="https://spotify.com" passHref>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                title="Spotify"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="42"
                                    width="42"
                                    viewBox="-33.4974 -55.829 290.3108 334.974"
                                    className="fill-current"
                                >
                                    <path d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-3 pb-1">
                <div className="font-semibold flex items-center font-montserrat text-gray-700 dark:text-gray-300 text-xs">
                    <span className="pr-1">Powered by</span>
                    <Link href="https://vercel.com" passHref>
                        <a
                            title="Vercel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="50"
                                height="12"
                                viewBox="0 0 283 64"
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
                            </svg>
                        </a>
                    </Link>
                    <span className="px-1">and</span>
                    <Link href="https://nextjs.org/" passHref>
                        <a
                            title="Next.JS"
                            target="_blank"
                            rel="noopener norefferer"
                        >
                            <svg
                                width="40"
                                height="25"
                                viewBox="0 0 207 124"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        transform="translate(-247.000000, -138.000000)"
                                        fillRule="nonzero"
                                    >
                                        <g transform="translate(247.000000, 138.000000)">
                                            <g>
                                                <path
                                                    d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                                                    fill="currentColor"
                                                ></path>
                                                <polygon
                                                    points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                                                    fill="currentColor"
                                                ></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
