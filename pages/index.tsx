import * as React from 'react'
import StepSelector from '../components/StepSelector';

function IndexPage() {
    return <div>
        <main>
            <StepSelector></StepSelector>
            {(process.env.NODE_ENV == "development") && <img src='./mobile-design-step-1.jpg' alt="asd" className='overlay'></img>}
        </main>
    </div>
}

export default IndexPage;