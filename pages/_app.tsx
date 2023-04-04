import * as React from 'react'
import { AppProps } from 'next/app';
import Head from 'next/head';

import './style.css'

function MainPage({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>
                Frontend Mentor | Multi-step form
            </title>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Component {...pageProps}></Component>
    </>
}

export default MainPage