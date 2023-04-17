import * as React from 'react'

import style from './Step.module.css'


export default function Step({ header, paragraph, inputs, nextStep, previousStep = null }) {
    return <div className={style['step-container']}>
        <div className={style['form-container']}>
            <div>
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </div>

            <div className={`${style['inputs-container']}`}>
                {inputs}
            </div>
        </div>
        <div className={style['navigation-button-container'] + (previousStep == null ? (' ' + style['one-child']) : '')}>
            {previousStep && <button onClick={previousStep}>Go Back</button>}
            <button className={style['next-button']} onClick={nextStep}>Next Step</button>
        </div>
    </div>
}