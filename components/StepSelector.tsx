import * as React from 'react'

import style from './StepSelector.module.css';

export default function StepSelector({ steps, currentStep = 0 }) {
    return <div className={style['step-selector-container']}>
        <picture className='background-image'>
            <source media='(min-width: 800px)' srcSet='/images/bg-sidebar-desktop.svg' />
            <img src='/images/bg-sidebar-mobile.svg' alt="background image" />
        </picture>

        <div className={style['steps-container']}>
            {steps.map((text, index) => <div className={style.step} data-selected={(currentStep == index) ? "yes" : "no"}>
                <div key={index}  >
                    {index + 1}
                </div>
                <p>Step{index + 1}</p>
                <p>{text}</p>
            </div>)}
        </div>
    </div>
}