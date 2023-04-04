import Image from 'next/image';
import * as React from 'react'

function IndexPage() {
    return <div>
        <main>
            <picture className='background-image'>
                <source media='(min-width: 800px)' srcSet='/images/bg-sidebar-desktop.svg' />
                <img src='/images/bg-sidebar-mobile.svg' alt="background image" />
            </picture>
        </main>
    </div>
}

export default IndexPage;