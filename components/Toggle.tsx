import * as React from 'react'

import style from './Toggle.module.css'

type args = { on: React.ReactNode, off: React.ReactNode, onToggled: (boolean) => void, isOn: boolean }

export default function Toggle({ on = "On", off = "Off", onToggled, isOn = false }: args) {

    function setOff() {
        onToggled(false)
    }

    function setOn() {
        onToggled(true)
    }

    return <div className={style['toggle-container']}>
        <span onClick={setOff}>{off}</span>
        <label>
            <input type='checkbox' onChange={() => onToggled((val) => !val)} checked={isOn} />
            <div className={style['toggle-button-container']}>
                <div className={style['toggle-button']}></div>
            </div>
        </label>
        <span onClick={setOn}>{on}</span>
    </div>
}