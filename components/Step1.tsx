import * as React from 'react'

import style from './Step1.module.css'
import Step from './Step'

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

    function onInputChange(event, index) {
        writeError(event.target, index)
        setInputText(prevInputText => prevInputText.map((val, i) => (i == index) ? event.target.value : val))
    }

    function _nextStep() {
        console.log(`.${style.input} input`)
        const elements = Array.from(document.querySelectorAll(`.${style.input} input`))
        console.log(elements)
        const isValid = elements.map((el, index) => {
            const inputElements = (el as HTMLInputElement)
            if (!inputElements.validity.valid) {
                setErrors(oldError => oldError.map((val, i) => (i == index) ? inputElements.validationMessage : val))
                return false;
            }
            return true
        })

        if (isValid.every((el) => el == true)) {
            nextStep()
        }
    }

    return <Step
        header={"Personal info"}
        paragraph={"Please provide your name, email address, and phone number."}
        inputs={
            inputElements.map((el, index) => <div key={el.label} className={style.input}>
                <input value={inputText[index]} onChange={(ev) => onInputChange(ev, index)} className={errors[index] === "" ? "" : style['error-input']} required type={el.type} id={'step1-' + el.label.replace(" ", "-")} placeholder={el.placeholder} />
                <div>
                    <label htmlFor={'step1-' + el.label.replace(" ", "-")}>{el.label}</label>
                    <span className={'error-text ' + style["error-text"]}>{errors[index]}</span>
                </div>

            </div>)}
        nextStep={_nextStep}
    ></Step>
}