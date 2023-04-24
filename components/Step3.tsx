import * as React from 'react'

import Step from './Step'

import style from './Step3.module.css'

type arguments = { nextStep: () => void, previousStep: () => void }

export default function Step3({ nextStep, previousStep }: arguments) {

    const addons = [
        {
            name: "Online Service",
            subtext: "Access to multiplayer games",
            priceMontly: 1,
            priceYearly: 10
        },
        {
            name: "Larger storage",
            subtext: "Extra 1TB of cloud save",
            priceMonthly: 2,
            priceYearly: 20
        },
        {
            name: "Customizable Profile",
            subtext: "Custom theme on your profile",
            priceMonthly: 2,
            priceYearly: 20
        },
    ]

    function _nextStep() {
        nextStep()
    }

    function _previousStep() {
        previousStep()
    }

    return <Step
        header={"Pick add-ons"}
        paragraph={"Add-ons help enhance your gaming experience"}
        inputs={<div className={style['addons-container']}>
        </div>}
        nextStep={_nextStep}
        previousStep={_previousStep}
    />
}