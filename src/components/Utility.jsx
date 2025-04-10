import React from 'react';
import '../styles/Utility.css';

function Utility() {

    return (    
        <>
        <div className='utility-section'>
            <div className='utility-container'>
                <div className='utility-text'>
                    <h1>Utility pages</h1>
                </div>
                <div className='utility-text-2'>
                    <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
                </div>
            </div>
            <div className='utility-image'>
                <div className='utility-image-2'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f72_brandingfolio-x-404-not-found-utility-page-branding-agency-webflow-template.png" />
                    <div className='utility-divider'></div>
                    <h1>404 Not found</h1>
                </div>
                <div className='utility-image-3'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f71_brandingfolio-x-password-protected-utility-page-branding-agency-webflow-template.png" />
                    <div className='utility-divider'></div>
                    <h1>Password protected</h1>
                </div>
            </div>
            <div className='utility-button'>
                <button>Buy template</button>
            </div>
        </div>
        </>
    )

}

export default Utility;