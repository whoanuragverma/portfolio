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
}
