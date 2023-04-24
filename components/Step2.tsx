import * as React from 'react'

import style from './Step2.module.css'
import Step from './Step'
import Plan from './Plan'
import Toggle from './Toggle'

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

    const [isYearly, setIsYearly] = React.useState(false)
    const [currentplan, setCurrentPlan] = React.useState(null)
    const [errorMsg, setErrorMsg] = React.useState('')

    function onPlanSelected(plan) {
        setCurrentPlan(plan)
        setErrorMsg('')
    }

    function _nextStep() {
        if (currentplan !== null) {
            nextStep()
        } else {
            setErrorMsg("You must select a plan")
        }
    }

    function _previousStep() {
        previousStep()
    }

    return <Step
        header={"Select your plan"}
        paragraph={"You have the option of monthly or yearly billing."}
        inputs={<div className={style.inputs}>
            <div>
                {errorMsg && <span className={style['error-text']} >{errorMsg}</span>}
                <div className={style['plans-container']}>
                    {plans.map(el => <Plan
                        onPlanSelected={() => onPlanSelected(el.type)}
                        key={el.type}
                        icon={el.icon}
                        price={isYearly ? ('$' + el.yearly + '/yr') : ('$' + el.monthly + '/mo')}
                        type={el.type}
                    ></Plan>)}
                </div>
            </div>
            <Toggle
                on={<span className={style['toggle-text']}>Yearly</span>}
                off={<span className={style['toggle-text']}>Monthly</span>}
                onToggled={setIsYearly} isOn={isYearly}
            />
        </div>}
        nextStep={_nextStep}
        previousStep={_previousStep}
    />
}