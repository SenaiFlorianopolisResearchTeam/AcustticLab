'use client'

import { NextComponentType } from "next"
import Styles from "../scss/components/navbar.module.scss"

type Props = {
    page: string
}

const Home: React.FC<Props> = (props: Props) => {

    let color = "#5B5959"

    if(props.page === "dashboard"){
        color = "#C8C8C8"
    }

    return (
        <svg className={Styles.Home} viewBox="0 0 40 40">
            <g clipPath="url(#clip0_420_266)">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.5359 3.81205C20.1859 3.71456 19.8141 3.71456 19.4639 3.81205C19.3633 3.84012 19.1862 3.91034 18.8096 4.18308C18.4136 4.46993 17.9287 4.88045 17.1731 5.52287L7.13045 14.0615C5.89928 15.1083 5.55025 15.424 5.3076 15.7731C5.07419 16.109 4.90031 16.4793 4.79296 16.8693C4.68135 17.2748 4.66659 17.7339 4.66659 19.3096V26.3331C4.66659 28.0667 4.66765 29.2751 4.7351 30.2207C4.80139 31.1502 4.92536 31.6914 5.1043 32.1044C5.68789 33.4521 6.80726 34.523 8.21617 35.081C8.64816 35.2523 9.21396 35.3709 10.1855 35.4343C11.1743 35.4989 12.4376 35.4998 14.2499 35.4998H25.75C27.5622 35.4998 28.8255 35.4989 29.8143 35.4343C30.7859 35.3709 31.3517 35.2523 31.7837 35.081C33.1926 34.523 34.312 33.4521 34.8956 32.1044C35.0744 31.6914 35.1984 31.1502 35.2647 30.2207C35.3322 29.2751 35.3334 28.0667 35.3334 26.3331V19.3096C35.3334 17.7339 35.3186 17.2748 35.2069 16.8693C35.0995 16.4793 34.9257 16.109 34.6922 15.7731C34.4496 15.424 34.1006 15.1083 32.8695 14.0615L22.8267 5.52287C22.0712 4.88045 21.5863 4.46993 21.1903 4.18308C20.8137 3.91034 20.6366 3.84012 20.5359 3.81205ZM18.3921 0.291633C19.4423 -0.000856875 20.5576 -0.000856875 21.6077 0.291633C22.3363 0.494601 22.9404 0.851515 23.5041 1.25976C24.035 1.64425 24.633 2.15261 25.3215 2.73801L35.4162 11.321C35.4706 11.3672 35.5241 11.4128 35.5772 11.4578C36.5771 12.307 37.3323 12.9486 37.8846 13.7432C38.3513 14.4149 38.6992 15.1557 38.9139 15.9357C39.1678 16.8584 39.1675 17.8246 39.1667 19.1035C39.1667 19.1714 39.1667 19.2399 39.1667 19.3096V26.3982C39.1667 28.0515 39.1667 29.3851 39.0893 30.4704C39.0095 31.5863 38.8418 32.5732 38.4372 33.5077C37.4645 35.7539 35.5988 37.5383 33.2507 38.4687C32.2738 38.8557 31.242 39.0163 30.0752 39.0924C28.9405 39.1664 27.5463 39.1664 25.8181 39.1664H14.1818C12.4535 39.1664 11.0593 39.1664 9.92461 39.0924C8.75785 39.0163 7.72615 38.8557 6.74923 38.4687C4.40104 37.5383 2.53541 35.7537 1.56276 33.5077C1.1581 32.5732 0.990274 31.5863 0.910656 30.4704C0.833241 29.3851 0.833261 28.0515 0.833261 26.3982V19.3096C0.833261 19.2399 0.833222 19.1714 0.833203 19.1035C0.832494 17.8246 0.831976 16.8584 1.08597 15.9357C1.3007 15.1557 1.64848 14.4149 2.1153 13.7432C2.66753 12.9486 3.42287 12.307 4.42274 11.4578C4.47571 11.4128 4.52936 11.3672 4.58372 11.321L14.6785 2.73803C15.3669 2.15261 15.9648 1.64425 16.4958 1.25976C17.0595 0.851515 17.6636 0.494601 18.3921 0.291633Z" style={{fill: color}}/>
            </g>
        </svg>
    )
}

export default Home