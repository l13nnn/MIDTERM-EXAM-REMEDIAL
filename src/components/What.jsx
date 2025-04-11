import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/What.css';

gsap.registerPlugin(ScrollTrigger);

function What() {

    useEffect(() => {
        gsap.fromTo(
            '.what-container',
            { 
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: '.what-container',
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
            '.what-image',
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
                    trigger: '.what-image',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.what-figma-section',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.what-figma-section',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.looking-section',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.looking-section',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.buy-button',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.buy-button',
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
            <div className='what-section'>
                <div className='what-container'>
                    <div className='what-text'>
                        <h2>What is included in <br /> Brandingfolio X</h2>
                    </div>
                    <div className='what-text-2'>
                        <p><span className='what-span'>Brandingfolio X Webflow</span> Template includes over <span className='what-span'>19</span> <br /> <span className='what-span'>pages</span> in total, with more than <span className='what-span'>35 sections.</span></p>
                    </div>
                </div>
                <div className='what-image'>
                    <div className='what-image-2'>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc4_brandingfolio-x-10-pages-included-branding-agency-webflow-template.png" />
                        <div className='what-divider'></div>
                        <h1>19+ Pages</h1>
                    </div>
                    <div className='what-image-3'>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3d_brandingfolio-x-35-sections-included-branding-agency-webflow-template.png" />
                        <div className='what-divider'></div>
                        <h1>35+ Sections</h1>
                    </div>
                    <div className='what-image-4'>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f50_brandingfolio-x-35-styles-and-symbols-included-branding-agency-webflow-template.png" />
                        <div className='what-divider'></div>
                        <h1>25+ Styles & Symbols</h1>
                    </div>
                </div>
                <div className='what-figma-section'>
                    <div className='what-figma'>
                        <div className='what-figma-container'>
                            <img className='what-figma-image' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fba_figma-icon-brandingfolio-x-webflow-template.svg" />
                            <h1>Figma file included</h1>
                            <p>Send us an email to <br /> <span className='what-figma-span'>brandingfoliox@brixtemplates.com</span> with your <br /> purchase receipt, and we will send you the editable <br /> Figma file for the Brandingfolio X template.</p>
                            <button>Request figma file</button>
                        </div>
                        <div className='what-figma-divider'></div>
                        <img className='what-figma-image-2' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc2_brandingfolio-x-figma-included-branding-agency-webflow-template.png" />
                    </div>
                </div>
                <div className='looking-section'>
                    <div className='looking-container'>
                        <img className='looking-image' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f4f_brandingfolio-x-brix-included-branding-agency-webflow-template.png" />
                        <div className='looking-divider'></div>
                        <div className='looking-container-1'>
                            <img className='looking-image-2' src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fbd_brix-templates-icon-brandingfolio-x-webflow-template.svg" />
                            <h1>Looking for more <br /> amazing Webflow <br /> Templates?</h1>
                            <p>Take a look at our collection of 100+ <br /> premium Webflow Templates at BRIX <br /> Templates.</p>
                            <button>Browse templates</button>
                        </div>
                    </div>
                </div>
                <div className='buy-button'>
                    <button>Buy template</button>
                </div>
            </div>
        </>
    )
}

export default What;