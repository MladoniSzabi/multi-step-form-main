import * as React from 'react'

import style from './StepSelector.module.css';

export default function StepSelector({ stepCount = 4, currentStep = 0 }) {
    return <div className={style['step-selector-container']}>
        <picture className='background-image'>
            <source media='(min-width: 800px)' srcSet='/images/bg-sidebar-desktop.svg' />
            <img src='/images/bg-sidebar-mobile.svg' alt="background image" />
        </picture>

        <div className={style['steps-container']}>
            {[...Array(stepCount)].map((_, index) => <div className={style.step} data-selected={(currentStep == index) ? "yes" : "no"}>{index + 1}</div>)}
        </div>
    </div>
}