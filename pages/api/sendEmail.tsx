import type { NextApiRequest, NextApiResponse } from 'next';
import sendMail from 'components/util/sendMail';
import defaultMessage from 'components/util/defaultMessage';
import { randomizeEmail } from 'components/util/shuffleEmail';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed`, status: 405 });
    const {
        token,
        email,
        message,
        name,
        subject,
    }: {
        token: string;
        email: string;
        message: string;
        name: string;
        subject: string;
    } = req.body;
    if (!token || !email || !message || !name || !subject)
        return res
            .status(400)
            .json({ error: 'Missing Parameters', status: 400 });

    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
            {
                headers: {
                    'Content-Type':
                        'application/x-www-form-urlencoded; charset=utf-8',
                },
                method: 'POST',
            }
        );
        const captchaValidation = await response.json();
        if (captchaValidation.success) {
            try {
                await sendMail(
                    email,
                    { name: 'Anurag Verma', email: process.env.SENDER_EMAIL },
                    subject,
                    defaultMessage(name, email, message)
                );
                const randomEmail = `${await randomizeEmail(email)}@${
                    process.env.AUTH_DOMAIN
                }`;
                await sendMail(
                    process.env.PROXY_EMAIL,
                    { name: 'Anurag Verma', email: process.env.SENDER_EMAIL },
                    subject,
                    defaultMessage(name, email, message),
                    undefined,
                    randomEmail
                );
                return res.status(200).json({ message: 'OK', status: 200 });
            } catch (error) {
                console.log(error);
                return res
                    .status(500)
                    .json({ error: 'Error sending email', status: 500 });
            }
        }

        return res.status(422).json({
            message: 'Unproccesable request, Invalid captcha code',
            status: 422,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(422)
            .json({ message: 'Something went wrong', status: 422 });
    }
}
