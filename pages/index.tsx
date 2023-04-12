import * as React from 'react'
import StepSelector from '../components/StepSelector';
import Step1 from '../components/Step1';

function IndexPage() {

    const [currentStep, setCurrentStep] = React.useState(0);
    let steps = []

    function nextStep(steps) {
        setCurrentStep(prevStep => {
            if (prevStep >= steps.length - 1) {
                return prevStep;
            } else {
                return prevStep + 1
            }
        })
    }
    steps.push(<Step1 nextStep={() => { nextStep(steps) }}></Step1>, <p>Finished!</p>)

    return <div>
        <main>
            <div className='step-selector'>
                <StepSelector steps={["Your Info", "Select Plan", "Add-ons", "Summary"]}></StepSelector>
            </div>

            <div className='step-container'>
                {steps[currentStep]}
            </div>
        </main>
        {
            (process.env.NODE_ENV == "development") &&
            <picture>
                <source media='(min-width: 800px)' srcSet='./desktop-design-step-1.jpg'></source>
                <img src='./mobile-design-step-1.jpg' alt="preview" className='overlay'></img>
            </picture>
        }
    </div>
}

export default IndexPage;