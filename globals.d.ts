interface Translation {
    title: string;
    description: string;
    keywords: string;
    home: string;
    projects: string;
    about: string;
    contact: string;
    hamburgerHelper: string;
    lang: string;
    greeting: string;
    featured: string;
    touch: string;
    heroP1: {
        part0: string;
        link01: string;
        part1: string;
    };
    heroP2: {
        part0: string;
        link01: string;
        part1: string;
    };
    heroP3: {
        part0: string;
        link01: string;
        part1: string;
    };
    resume: string;
}

interface Projects {
    title: string;
    imgPath: string;
    link: string;
    para1: string;
    para2: string;
    imgBase64: string;
    view: string;
}

interface About {
    src: string;
    b64: string;
    salute: string;
    resume: string;
    intro: {
        para1: string;
        para2: string;
        para3: string;
    };
    hi: string;
    findMe: string;
    email: string;
}

interface Footer {
    copy: string;
    year: number;
    quick: string;
    contact: string;
    links: [
        {
            name: string;
            href: string;
        }
    ];
    contacts: [
        {
            name: string;
            href: string;
        }
    ];
}
interface OAuth {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

interface SpotifyAPIData {
    timestamp?: number;
    context?: {
        external_urls?: {
            spotify?: string;
        };
        href?: string;
        type?: string;
        uri?: string;
    };
    progress_ms?: number;
    item?: {
        album?: {
            album_type?: string;
            artists?: [
                {
                    external_urls?: {
                        spotify?: string;
                    };
                    href?: string;
                    id?: string;
                    name?: string;
                    type?: string;
                    uri?: string;
                }
            ];
            external_urls?: {
                spotify?: string;
            };
            href?: string;
            id?: string;
            images?: [
                {
                    height?: number;
                    url?: string;
                    width?: number;
                }
            ];
            name?: string;
            type?: string;
        };
        artists?: [
            {
                external_urls?: {
                    spotify?: string;
                };
                href?: string;
                name?: string;
                type?: string;
            }
        ];
        duration_ms?: number;
        explicit?: true;
        external_urls?: {
            spotify?: string;
        };
        name?: string;
        type?: string;
        uri?: string;
    };
    is_playing?: boolean;
}
