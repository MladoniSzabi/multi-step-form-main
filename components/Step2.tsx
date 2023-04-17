import * as React from 'react'

import style from './Step2.module.css'
import Step from './Step'
import Plan from './Plan'

type arguments = { nextStep: () => void, previousStep: () => void }

export default function Step2({ nextStep, previousStep }: arguments) {

    const plans = [
        {
            type: "Arcade",
            icon: "/images/icon-arcade.svg",
            monthly: 9,
            yearly: 90
        },
        {
            type: "Advanced",
            icon: "/images/icon-advanced.svg",
            monthly: 12,
            yearly: 120
        },
        {
            type: "Pro",
            icon: "/images/icon-pro.svg",
            monthly: 15,
            yearly: 150
        }
    ]

    const [isMonthly, setIsMonthly] = React.useState(true)
    const [currentplan, setCurrentPlan] = React.useState(0)

    function _nextStep() {
        nextStep()
    }

    function _previousStep() {
        previousStep()
    }

    return <Step
        header={"Select your plan"}
        paragraph={"You have the option of monthly or yearly billing."}
        inputs={<div className={style.inputs}>
            <div className={style['plans-container']}>
                {plans.map(el => <Plan
                    key={el.type}
                    icon={el.icon}
                    price={isMonthly ? ('$' + el.monthly + '/mo') : ('$' + el.yearly + '/yr')}
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