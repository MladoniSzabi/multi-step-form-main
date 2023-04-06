import * as React from 'react'
import StepSelector from '../components/StepSelector';
import Step1 from '../components/Step1';

function IndexPage() {
    return <div>
        <main>
            <div className='step-selector'>
                <StepSelector steps={["Your Info", "Select Plan", "Add-ons", "Summary"]}></StepSelector>
            </div>

            <div className='step-container'>
                <Step1></Step1>
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