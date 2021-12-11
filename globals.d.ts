interface Translation {
    moreInfo: ReactNode;
    title: string;
    description: string;
    keywords: string;
    home: string;
    projects: string;
    about: string;
    contact: string;
    hamburgerHelper: string;
    type: string;
    lang: string;
    problem: string;
    objective: string;
    solution: string;
    keyword: string;
    greeting: string;
    featured: string;
    touch: string;
    moreInfo: string;
    tools: string;
    partner: string;
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
    code: string;
    demo: string;
}

interface Projects {
    title: string;
    imgPath: string;
    link: string;
    partner: string;
    github: string;
    demo: string;
    para1: string;
    para2: string;
    keywords: Array<string>;
    imgBase64: string;
    view: string;
    type: string;
    longDesc: string;
    problem: string;
    shortDesc: string;
    tech: Array<string>;
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
    spotify: string;
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

interface AvailableLang {
    name: string;
    locale: string;
    helper: string;
}

interface Lang {
    title: string;
    hero: string;
    message: string;
    help0: string;
    github: string;
    help1: string;
    langs: Array<AvailableLang>;
}

interface Contact {
    title: string;
    touch: string;
    hello: string;
    submit: string;
    thankyou: string;
    findme: string;
    email: string;
    name: string;
    subject: string;
    emailY: string;
    message: string;
}
