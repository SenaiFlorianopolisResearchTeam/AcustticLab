import { FC } from "react";
import createSession from "../fetchs/createSession"

interface Props { 
    onCreateSession: () => void;
}

const Plus: FC<Props> = (props: Props) => {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => props.onCreateSession()}>
            <g clipPath="url(#clip0_420_271)">
                <path d="M1.16669 10.0002H19.8334M10.5 1.11133V18.8891" stroke="#5B5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_420_271">
                    <rect width="21" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Plus