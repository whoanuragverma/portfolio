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
