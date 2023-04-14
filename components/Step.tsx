import * as React from 'react'

import style from './Step.module.css'


export default function Step({ header, paragraph, inputs, canGoBack, nextStep }) {

    function _prevStep() {

    }

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
        <div className='next-button'>
            <button onClick={nextStep}>Next Step</button>
            {canGoBack && <button onClick={_prevStep}>Back</button>}
        </div>
    </div>
}