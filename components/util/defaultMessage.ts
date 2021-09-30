export default function defaultMessage(
    name: string,
    email: string,
    message: string
) {
    return `Hi ${name}, <br/><br/> This is just an automated copy of whatever you wrote in the contact form. I'll get back to you as soon as possible. <br/>You can reply to this email to include some additional information. <br/><br/>Best<br/>Anurag Verma <br/><br/> On ${new Date().toUTCString()}<br/>&lt;<a href="mailto:${email}">${email}</a>&gt; wrote:<br/><blockquote style="margin: 0px 0px 0px 0.8ex; border-left: 1px solid rgb(204, 204, 204); padding-left: 1ex;">${message}</blockquote>`;
}
