import React from 'react';
import '../styles/Buy.css';

function Buy() {

    return (
        <>
        <div className='buy-section'>
            <div className='buy-container'>
                <div className='buy-text'>
                    <img className='buy-logo-3' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e8c_webflow-logo-brix-blocks.svg" />
                    <h1>Buy now on Webflow</h1>
                    <p>Get the Brandingfolio X Webflow Template today, and <br /> take your website design to the next level.</p>
                    <button>Buy template</button>
                </div>
                <img className='buy-logo' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc5_brandingfolio-x-brandingfolio-banner-branding-agency-webflow-template.png" />
            </div>
            <div className='buy-container-2'>
                <div className='buy-text-2'>
                    <img className='buy-logo-1' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e4d_brix-templates-icon-square-brix-templates.png" />
                    <h1>Browse all templates</h1>
                    <p>Looking for more templates? Browse our collection of <br /> 100+ Webflow Templates on BRIXTemplates.com</p>
                    <button>Explore more templates</button>
                </div>
                <img className='buy-logo-2' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f98_brandingfolio-x-brix-banner-branding-agency-webflow-template.png" />
            </div>
        </div>
        </>
    )

}

export default Buy;