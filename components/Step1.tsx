import * as React from 'react'

import style from './Step1.module.css'

export default function Step1({ nextStep }) {

    const inputElements = [
        {
            label: "Name",
            type: "text",
            placeholder: "e.g. Stephen King"
        },
        {
            label: "Email Address",
            type: "email",
            placeholder: "e.g. stephenking@lorem.com"
        },
        {
            label: "Phone Number",
            type: "tel",
            placeholder: "e.g. +1 234 567 890"
        }
    ]

    const [errors, setErrors] = React.useState(Array(inputElements.length).fill(""))
    const [inputText, setInputText] = React.useState(Array(inputElements.length).fill(""))

    function writeError(inputElement: HTMLInputElement, index) {
        if (!inputElement.validity.valid) {
            setErrors(oldError => oldError.map((val, i) => (i == index) ? inputElement.validationMessage : val))
        } else {
            setErrors(oldError => oldError.map((val, i) => (i == index) ? "" : val))
        }
    }

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

    function onInputChange(event, index) {
        writeError(event.target, index)
        setInputText(prevInputText => prevInputText.map((val, i) => (i == index) ? event.target.value : val))
    }

    return <div className={'step1-container ' + style['step1-container']}>
        <div className={style['form-container']}>
            <div>
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className={style['inputs-container']}>

                {inputElements.map((el, index) => <div key={el.label} className={style.input}>
                    <input value={inputText[index]} onChange={(ev) => onInputChange(ev, index)} className={errors[index] === "" ? "" : style['error-input']} required type={el.type} id={'step1-' + el.label.replace(" ", "-")} placeholder={el.placeholder} />
                    <div>
                        <label htmlFor={'step1-' + el.label.replace(" ", "-")}>{el.label}</label>
                        <span className={'error-text ' + style["error-text"]}>{errors[index]}</span>
                    </div>

                </div>)}
            </div>
        </div>
        <div className='next-button'>
            <button onClick={_nextStep}>Next Step</button>
        </div>
    </div>
}