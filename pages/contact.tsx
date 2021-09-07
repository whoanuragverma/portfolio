/// <reference path="../globals.d.ts" />
import { GetStaticProps } from 'next';
import Footer from '../components/Footer';
import { promises as fs } from 'fs';
import NavBar from '../components/NavBar';
import SocialButtons from '../components/SocialButtons';
import Head from 'next/head';
import { FormEvent, LegacyRef, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
export default function Lang({
    footer,
    translation,
    contact,
}: {
    footer: Footer;
    translation: Translation;
    contact: Contact;
}) {
    const { register, handleSubmit } = useForm();
    const recaptchaRef = useRef<ReCAPTCHA>();
    const [submit, setSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const onSubmit: SubmitHandler<FormEvent<HTMLFormElement>> | undefined = async (
        inputs
    ) => {
        setSubmit(true);
        if (recaptchaRef.current) {
            const token = await recaptchaRef.current.executeAsync();
            try {
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    body: JSON.stringify({
                        ...inputs,
                        token: token,
                    }),
                    headers: { 'content-type': 'application/json' },
                });
                const res = await response.json();
                if (res.status === 200) {
                    setSuccess(true);
                }
                setSubmit(false);
            } catch (err) {
                alert(err);
                setSubmit(false);
            }
        }
    };
    return (
        <>
            <Head>
                <meta name="description" content={translation.description} />
                <meta name="keywords" content={translation.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>{contact.title}</title>
            </Head>
            <NavBar translation={translation} />
            <div className="mt-20 px-6 pt-6 md:px-12 bg-white dark:bg-black text-black dark:text-white h-fill-80 flex flex-col">
                <div className="flex md:flex-row items-center flex-col md:min-h-1/2">
                    <div>
                        <h1 className="text-2xl font-montserrat font-bold">
                            {contact.touch}
                        </h1>
                        <p className="text-md font-montserrat font-normal">
                            {contact.hello}
                        </p>
                        {!success && (
                            <form
                                className="my-2 flex flex-col font-raleway"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    {...register('name', { required: true })}
                                    placeholder={contact.name}
                                    type="text"
                                    className="my-1 py-1 px-2 focus:outline-none rounded bg-gray-100 dark:bg-gray-800"
                                    required
                                />

                                <input
                                    {...register('subject', { required: true })}
                                    placeholder={contact.subject}
                                    type="text"
                                    className="my-1 py-1 px-2 focus:outline-none rounded bg-gray-100 dark:bg-gray-800"
                                    required
                                />
                                <input
                                    {...register('email', { required: true })}
                                    placeholder={contact.emailY}
                                    type="email"
                                    className="my-1 py-1 px-2 focus:outline-none rounded bg-gray-100 dark:bg-gray-800"
                                    required
                                />
                                <textarea
                                    {...register('message', { required: true })}
                                    className="my-1 py-1 px-2 focus:outline-none rounded bg-gray-100 dark:bg-gray-800"
                                    placeholder={contact.message}
                                    required
                                ></textarea>

                                <button
                                    className="my-2 flex flex-row py-1 px-2 items-center justify-center w-32 mr-auto ml-auto dark:bg-white dark:text-black text-white bg-black rounded-full uppercase dark:focus:outline-white focus:outline-black"
                                    type="submit"
                                >
                                    {contact.submit}{' '}
                                    {submit && (
                                        <svg
                                            className="animate-spin h-4 w-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                </button>
                                <ReCAPTCHA
                                    size="invisible"
                                    ref={recaptchaRef as LegacyRef<ReCAPTCHA>}
                                    sitekey={
                                        process.env.NEXT_PUBLIC_RECAPTCHA_KEY
                                    }
                                />
                            </form>
                        )}
                        {success && <div className="">{contact.thankyou}</div>}
                    </div>
                    <div className="flex items-center md:mr-auto md:ml-auto flex-col mt-3 md:mt-0 w-full md:w-auto">
                        <h1 className="text-2xl font-montserrat font-bold self-start md:self-auto">
                            {contact.findme}
                        </h1>
                        <SocialButtons hi="" findMe="" email={contact.email} />
                    </div>
                </div>
                <Footer footer={footer} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const footer: Footer = JSON.parse(
        await fs.readFile(`i18n/${locale}/footer.json`, 'utf-8')
    );
    footer.year = new Date().getFullYear();
    const common: Translation = JSON.parse(
        await fs.readFile(`i18n/${locale}/common.json`, 'utf-8')
    );
    const contact: Contact = JSON.parse(
        await fs.readFile(`i18n/${locale}/contact.json`, 'utf-8')
    );
    return {
        props: {
            translation: common,
            footer: footer,
            contact: contact,
        },
    };
};
