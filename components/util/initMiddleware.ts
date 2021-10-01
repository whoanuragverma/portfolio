import type { NextApiRequest, NextApiResponse } from 'next';
export default function initMiddleware(middleware: any) {
    return (req: NextApiRequest, res: NextApiResponse) => {
        return new Promise((resolve, reject) => {
            middleware(req, res, (result) => {
                if (result instanceof Error) reject(result);
                resolve(result);
            });
        });
    };
}
