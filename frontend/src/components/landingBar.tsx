"use client"

import Link from 'next/link';
import React, { useState, useEffect, FC } from 'react';

interface Props {
    page: string;
}

const LandingBar: FC<Props> = (props: Props) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const classBar = `${props.page} landingBar ${scrolled ? 'scrolled' : ''}`;

    return (
        <div className={classBar}>
            <div className='container'>
                <div>
                    <Link href="/"> AcustticAI </Link>
                </div>
                <div>
                    <Link href="/login"> Login </Link>
                    <Link href="/signup"> Signup </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingBar;