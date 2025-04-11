import React, { useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Branding.css';

gsap.registerPlugin(ScrollTrigger);

function Utility() {

    useEffect(() => {
        gsap.fromTo(
            '.branding-container',
            { 
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: '.branding-container',
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
            '.branding-header',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.branding-header',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.branding-notification',
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
                    trigger: '.branding-notification',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.branding-custom',
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
                    trigger: '.branding-custom',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.branding-social',
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
                    trigger: '.branding-social',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                    once: true,
                },
            }
        );

        gsap.fromTo(
            '.branding-email',
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
                    trigger: '.branding-email',
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
        <div className='branding-section'>
            <div className='branding-container'>
                <div className='branding-text'>
                    <h1>The Brandingfolio X Webflow <br /> Template also comes with <br /> more surprises...</h1>
                </div>
            </div>
            <div className='branding-header'>
                <div className='branding-header-text'>
                    <h1>3 Headers and Footers</h1>
                    <p>With a total of 3 different headers and footers, you <br /> can easily customize the Brandingfolio X Webflow <br /> Template to fit your company needs <br /> and requirements.</p>
                    <button>Buy template</button>
                </div>
                <div className='branding-header-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f75_brandingfolio-x-3-headers-and-footers-branding-agency-webflow-template.png" />
                </div>
            </div>
            <div className='branding-notification'>
                <div className='branding-notification-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f73_brandingfolio-x-3-notification-bars-branding-agency-webflow-template.png" />
                </div>
                <div className='branding-notification-text'>
                    <h1>3 Notification Bars</h1>
                    <p>If you are looking to get more sales, use one of our 3 <br /> notification bars included in the Brandingfolio X <br /> notification bars included in the Brandingfolio X <br /> products or services.</p>
                    <button>Buy template</button>
                </div>
            </div>
            <div className='branding-custom'>
                <div className='branding-custom-text'>
                    <h1>Custom Icon Set</h1>
                    <p>The Brandingfolio X Webflow Template includes 3 <br /> sets of custom icons (rounded, square and filled), so <br /> you can easily use more icon fonts in your template.</p> <br />
                    <p>No matter if you are looking to add another social <br /> media icon in the footer, or change the cart icon in <br /> the header, we got you covered.</p>
                    <div className='branding-custom-button-container'>
                        <button className='branding-custom-button'>Buy template</button>
                        <button className='branding-custom-button-1'>Download icon set</button>
                    </div>
                </div>
                <div className='branding-custom-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f74_brandingfolio-x-custom-icon-set-branding-agency-webflow-template.png" />
                </div>
            </div>
            <div className='branding-social'>
                <div className='branding-social-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f77_brandingfolio-x-social-media-assets-branding-agency-webflow-template.png" />
                </div>
                <div className='branding-social-text'>
                    <h1>Social Media Assets</h1>
                    <p>Our Brandingfolio X Webflow Template Figma file <br /> includes a collection of social media covers that <br /> match with the Webflow Template design for <br /> Facebook, Twitter and LinkedIn, so you can easily <br /> edit, customize, and use them for your own social <br /> media profiles.</p>
                    <button>Buy template</button>
                </div>
            </div>
            <div className='branding-email'>
                <div className='branding-email-text'>
                    <h1>Email Signature</h1>
                    <p>Our Brandingfolio X Webflow Template Figma file <br /> includes 2 custom email signature templates that <br /> match with the Webflow template, and you can use <br /> them to impress your customers with an amazing <br /> email signature.</p>
                    <button>Buy template</button>
                </div>
                <div className='branding-email-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f78_brandingfolio-x-email-signature-branding-agency-webflow-template.png" />
                </div>
            </div>
        </div>
        </>
    )

}

export default Utility;