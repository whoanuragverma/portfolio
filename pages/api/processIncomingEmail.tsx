import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import initMiddleware from '../../components/util/initMiddleware';
import { simpleParser } from 'mailparser';
import { randomizeEmail, unradomizeEmail } from 'components/util/shuffleEmail';
import type { AddressObject } from 'mailparser';
import { text } from 'body-parser';
import sendMail from 'components/util/sendMail';
const multerAny = initMiddleware(multer().any());

export const config = {
    api: {
        bodyParser: false,
    },
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed`, status: 405 });
    await multerAny(req, res);
    const parsedEmail = await simpleParser(req.body.email);
    const to = (parsedEmail.to as AddressObject).text;
    if (to.indexOf(`hello@${process.env.AUTH_DOMAIN}`) != -1) {
        // Forward this to proxy email
        const from = (parsedEmail.from as AddressObject).text;
        const randomEmail = `${await randomizeEmail(from)}@${
            process.env.AUTH_DOMAIN
        }`;
        await sendMail(
            process.env.PROXY_EMAIL,
            { name: 'Anurag Verma', email: process.env.SENDER_EMAIL },
            parsedEmail.subject || 'Default',
            parsedEmail.html || undefined,
            parsedEmail.text || undefined,
            randomEmail
        );
    } else {
        // Otherwise it is a reply from other side
        const unrandomEmail = await unradomizeEmail(to.split('@')[0]);
        await sendMail(
            unrandomEmail,
            { name: 'Anurag Verma', email: process.env.SENDER_EMAIL },
            parsedEmail.subject || 'Default',
            parsedEmail.html || undefined,
            parsedEmail.text || undefined
        );
    }

    return res.status(200).json({ message: `Done`, status: 200 });
}
