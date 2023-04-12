import * as React from 'react'

import style from './Step1.module.css'

export default function Step1({ nextStep }) {

    function validateForm() {
        return Array.from(document.querySelectorAll(".step1-container input"))
            .map((val) => (val as HTMLInputElement).validity.valid)
            .every((val) => val)
    }

    function _nextStep() {
        if (validateForm()) {
            nextStep()
        }
    }

    return <div className={'step1-container ' + style['step1-container']}>
        <div className={style['form-container']}>
            <div>
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className={style['inputs-container']}>

                <div className={style.input}>
                    <label htmlFor='step1-name'>Name</label>
                    <input required type="text" id="step1-name" placeholder='e.g. Stephen King' />
                </div>

                <div className={style.input}>
                    <label htmlFor='step1-name'>Email Address</label>
                    <input required type="email" id="step1-name" placeholder='e.g. stephenking@lorem.com' />
                </div>

                <div className={style.input}>
                    <label htmlFor='step1-name'>Phone Number</label>
                    <input required type="tel" id="step1-name" placeholder='e.g. +1 234 567 890' />
                </div>
            </div>
        </div>
        <div className='next-button'>
            <button onClick={_nextStep}>Next Step</button>
        </div>
    </div>
}