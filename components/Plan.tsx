import * as React from 'react'

import style from './Plan.module.css'

export default function Plan({ icon, type, price, children = null, onPlanSelected }) {

    function onSelectionChange(event) {
        onPlanSelected(event.target.value)
    }

    return <div className={style['container']}>
        <input type="radio" value={type} id={type} name="plan" onChange={onSelectionChange} />
        <label htmlFor={type}>
            <div className={style['plan-container']}>
                <img src={icon} alt={'icon for ' + type + ' plan'}></img>
                <div>
                    <h4>{type}</h4>
                    <p>{price}</p>
                    {children}
                </div>
            </div>
        </label>
    </div>
}