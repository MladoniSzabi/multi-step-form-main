import * as React from 'react'
import StepSelector from '../components/StepSelector';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';

function IndexPage() {

    const [currentStep, setCurrentStep] = React.useState(1);
    let steps = []

    function previousStep() {
        setCurrentStep(prevStep => {
            if (prevStep > 0) {
                return prevStep - 1
            }
            return prevStep
        })
    }

    function nextStep() {
        setCurrentStep(prevStep => {
            if (prevStep >= steps.length - 1) {
                return prevStep;
            } else {
                return prevStep + 1
            }
        })
    }
    steps.push(<Step1 nextStep={nextStep}></Step1>, <Step2 previousStep={previousStep} nextStep={nextStep}></Step2>, <p>Finished!</p>)

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
                <source media='(min-width: 800px)' srcSet='./desktop-design-step-2.jpg'></source>
                <img src='./mobile-design-step-2.jpg' alt="preview" className='overlay'></img>
            </picture>
        }
    </div>
}

export default IndexPage;