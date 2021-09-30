import sgMail from '@sendgrid/mail';
import { AttachmentData } from '@sendgrid/helpers/classes/attachment';
import { EmailData } from '@sendgrid/helpers/classes/email-address';

export default async function sendMail(
    to: EmailData | EmailData[],
    from: EmailData,
    subject: string,
    html?: string,
    text?: string,
    replyTo?: EmailData,
    bcc?: EmailData | EmailData[],
    cc?: EmailData | EmailData[],
    attachments?: AttachmentData[]
) {
    sgMail.setApiKey(process.env.SENDGRID);
    await sgMail.send({
        to: to,
        from: from,
        subject: subject,
        text: text!,
        html: html,
        replyTo: replyTo,
        bcc: bcc,
        cc: cc,
        attachments: attachments,
    });
}
