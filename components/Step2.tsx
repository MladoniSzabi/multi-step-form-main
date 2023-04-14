import * as React from 'react'

import style from './Step2.module.css'
import Step from './Step'
import Plan from './Plan'

type arguments = { nextStep: () => void, previousStep: () => void }

export default function Step2({ nextStep, previousStep }: arguments) {

    const plans = [
        {
            type: "Arcade",
            icon: "",
            monthly: 9,
            yearly: 90
        },
        {
            type: "Arcade",
            icon: "",
            montly: 12,
            yearly: 120
        },
        {
            type: "Arcade",
            icon: "",
            monthly: 15,
            yearly: 150
        }
    ]

    const [isMonthly, setIsMonthly] = React.useState(true)
    const [plan, setPlan] = React.useState(0)

    function _nextStep() {
        nextStep()
    }

    function _previousStep() {
        previousStep()
    }

    return <Step
        header={"Personal info"}
        paragraph={"Please provide your name, email address, and phone number."}
        inputs={<div className={style.inputs}>
            <div className={style['plans-container']}>
                {plans.map(el => <Plan
                    icon={el.icon}
                    price={isMonthly ? el.monthly : el.yearly}
                    type={el.type}
                ></Plan>)}
            </div>
            <div className={style['bill-type-selector']}>
                Monthly
                <input type="checkbox" />
                Yearly
            </div>
        </div>}
        nextStep={_nextStep}
        previousStep={_previousStep}
    />
}