import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID);
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed`, status: 405 });
    const { token, email, message, name, subject } = req.body;
    const msg = {
        to: process.env.SENDER_EMAIL,
        bcc: email,
        from: process.env.SENDER_EMAIL,
        subject,
        name,
        html: `Hi ${name}, <br/><br/> This is just an automated copy of whatever you wrote in the contact form. I'll get back to you as soon as possible. <br/>You can reply to this email to include some additional information. <br/><br/>Best<br/>Anurag Verma <br/><br/> On ${new Date().toUTCString()}<br/>&lt;<a href="mailto:${email}">${email}</a>&gt; wrote:<br/><blockquote style="margin: 0px 0px 0px 0.8ex; border-left: 1px solid rgb(204, 204, 204); padding-left: 1ex;">${message}</blockquote>`,
    };
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
                await sgMail.send(msg);
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
