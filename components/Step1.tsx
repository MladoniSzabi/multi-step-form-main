import * as React from 'react'

import style from './Step1.module.css'

export default function Step1() {
    return <div className={style['step1-container']}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <div className={style['inputs-container']}>

            <div className={style.input}>
                <label htmlFor='step1-name'>Name</label>
                <input type="text" id="step1-name" placeholder='e.g. Stephen King' />
            </div>

            <div className={style.input}>
                <label htmlFor='step1-name'>Email Address</label>
                <input type="email" id="step1-name" placeholder='e.g. stephenking@lorem.com' />
            </div>

            <div className={style.input}>
                <label htmlFor='step1-name'>Phone Number</label>
                <input type="tel" id="step1-name" placeholder='e.g. +1 234 567 890' />
            </div>
        </div>
    </div>
}