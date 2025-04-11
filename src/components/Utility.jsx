import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Utility.css';

gsap.registerPlugin(ScrollTrigger);

function Utility() {

    useEffect(() => {
        gsap.fromTo(
            '.utility-container',
            { 
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: '.utility-container',
                    start: 'top 80%',
                    end: 'top 60%',
                    scrub: true,
                    once: true,
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            '.utility-image',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.utility-image',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.utility-button',
            { 
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.utility-button',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );
    }, []);

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