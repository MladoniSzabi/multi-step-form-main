import * as React from 'react'

import style from './Plan.module.css'

export default function Plan({ icon, type, price, children = null }) {
    return <div className={style['plan-container']}>
        <img src={icon} alt={'icon for ' + type + ' plan'}></img>
        <div>
            <h4>{type}</h4>
            <p>{price}</p>
            {children}
        </div>
    </div>
}