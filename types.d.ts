declare module 'plaiceholder' {
    export function getPlaiceholder(path: string): {
        img: { src: string; width: number; height: number; type: string };
        css: {
            backgroundImage: string;
            backgroundSize: string;
            backgroudRepeat: string;
            backgroundPosition: string;
        };
        base64: string;
        blurhash: { width: number; height: number; hash: string };
        svg: [SVGElement];
    };
}

declare module '*.jpg' {
    const value: any;
    export default value;
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
            SPOTIFY_REFRESH_TOKEN: string;
        }
    }
}

export {};
