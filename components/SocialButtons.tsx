import Button from './Button';
import LinkIcon from './LinkIcon';

export default function SocialButtons({
    hi,
    findMe,
    email,
}: {
    hi: string;
    findMe: string;
    email: string;
}) {
    return (
        <div className="flex flex-col md:flex-row md:justify-evenly font-raleway animate-fadeIn">
            <div className="md:w-1/2 w-full text-3xl font-semibold py-5 px-0 md:px-5 md:py-3 flex flex-col justify-center items-center">
                <span>{hi}</span>
                <Button
                    label={email}
                    hasLink={true}
                    url="mailto:anu.anuragverma@gmail.com?body=Hi, I saw your portfolio and it looks great!"
                    nextLink={false}
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="fill-current mx-1 stroke-current"
                            viewBox="0 0 256 256"
                        >
                            <polyline
                                points="224 56 128 144 32 56"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></polyline>
                            <path
                                d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></path>
                            <line
                                x1="110.54541"
                                y1="128.00013"
                                x2="34.4668"
                                y2="197.73926"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                            <line
                                x1="221.53418"
                                y1="197.73926"
                                x2="145.45424"
                                y2="127.99964"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                        </svg>
                    }
                />
            </div>
            <div className="md:w-1/2 w-full text-3xl font-semibold py-5 px-0 md:px-5 md:py-3 flex flex-col justify-center items-center">
                <span>{findMe}</span>
                <span className="flex gap-2">
                    <LinkIcon
                        url="https://github.com/whoanuragverma/"
                        svg={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                className="fill-current stroke-current"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    d="M84,232a24,24,0,0,0,24-24V160"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                                <path
                                    d="M172,232a24,24,0,0,1-24-24V160"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                                <path
                                    d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                                <path
                                    d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                                <path
                                    d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                            </svg>
                        }
                    />
                    <LinkIcon
                        url="https://linkedin.com/in/whoanuragverma"
                        svg={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                className="fill-current stroke-current"
                                viewBox="0 0 256 256"
                            >
                                <rect
                                    x="40"
                                    y="40"
                                    width="176"
                                    height="176"
                                    rx="8"
                                    strokeWidth="16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                ></rect>
                                <line
                                    x1="120"
                                    y1="112.00094"
                                    x2="120"
                                    y2="176.00094"
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <line
                                    x1="88"
                                    y1="112.00094"
                                    x2="88"
                                    y2="176.00094"
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <path
                                    d="M120,140.00094a28,28,0,1,1,56,0v36"
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                                <circle cx="88" cy="79.99998" r="12"></circle>
                            </svg>
                        }
                    />
                </span>
            </div>
        </div>
    );
}
