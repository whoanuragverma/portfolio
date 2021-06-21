import LinkCustom from './LinkCustom';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer({
    footer,
    spotifyAPIData,
}: {
    footer: Footer;
    spotifyAPIData: SpotifyAPIData;
}) {
    const color = [
        'to-red-800',
        'to-yellow-800',
        'to-green-800',
        'to-blue-800',
        'to-purple-800',
        'to-pink-800',
        'to-indigo-800',
    ];
    return (
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
            <div
                className={`bg-gradient-to-r from-gray-700 ${
                    color[Math.floor(Math.random() * color.length)]
                } grid grid-cols-5 w-full max-h-20 shadow-lg text-white rounded-lg items-center py-2 md:px-3 px-2 md:col-span-2 gap-1 font-montserrat`}
            >
                <div className="h-full rounded-md flex content-center items-center">
                    {spotifyAPIData.item?.album?.images?.[0].url && (
                        <Image
                            src={
                                spotifyAPIData.item?.album?.images?.[0]
                                    .url as string
                            }
                            alt={spotifyAPIData.item.album.name}
                            width={63}
                            height={63}
                            className="rounded-md"
                        />
                    )}
                </div>
                <div className="col-span-3 flex flex-row items-center gap-3">
                    <div className="flex flex-col truncate">
                        <div className="font-medium truncate">
                            {
                                <a
                                    href={
                                        spotifyAPIData.item?.album
                                            ?.external_urls?.spotify
                                    }
                                >
                                    {spotifyAPIData.item?.name ||
                                        'Nothing Playing on Spotify'}
                                </a>
                            }
                        </div>
                        <div className="font-light text-xs truncate">
                            {spotifyAPIData.item?.artists?.map((el, idx) => (
                                <a
                                    key={idx}
                                    href={el.external_urls?.spotify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {el.name}
                                    {idx + 1 !==
                                    spotifyAPIData.item?.artists?.length
                                        ? ', '
                                        : ''}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`bg-white rounded text-black flex items-center content-center px-1 py-1 h-4 text-xs ${
                            !spotifyAPIData.item?.explicit ? 'hidden' : ''
                        }`}
                    >
                        {spotifyAPIData.item?.explicit ? 'E' : ''}
                    </div>
                </div>
                <div className="ml-auto">
                    <Link href="https://spotify.com" passHref>
                        <a target="_blank" rel="noreferrer noopener">
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
    );
}
