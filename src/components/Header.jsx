import React, { useRef, useEffect } from 'react';
import '../styles/Header.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const headerContent = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);

    useEffect(() => {
        
        gsap.fromTo(
            headerContent.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.5, 
            }
        );

        ScrollTrigger.create({
            trigger: headerContent.current,
            start: "top 80%", 
            end: "top 20%",
            scrub: true, 
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            image1.current,
            { y: 10 },
            {
                y: -400,
                scrollTrigger: {
                    trigger: headerContent.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            }
        );

        gsap.fromTo(
            image2.current,
            { y: -200 },
            {
                y: 10,
                duration: 1,
                scrollTrigger: {
                    trigger: headerContent.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <>
        <div className='header-parent'>
            <div className='header-section'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed7_logo-web-brandingfolio-x-webflow-template.svg" />
                        <div className='header-navigation'>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Cart</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='header-button'>
                        <button>Contact us</button>
                    </div>
                </div>
            </div>
            <div className='header-content-section'>
                <div className='header-content-container'>
                    <div className='header-content' ref={headerContent}>
                        <div className='header-text-container'>
                            <div className='header-text'>
                                <h1>Brandingfolio X <br /> Webflow Template</h1>
                            </div>
                            <div className='header-text-2'>
                                <p>Presenting Brandingfolio X, the ultimate Branding <br /> Agency Webflow Template.</p>
                            </div>
                        </div>
                        <div className='header-button-2'>
                            <button className='button-2'>Buy template</button>
                            <button className='button-3'>Explore pages</button>
                        </div>
                    </div>
                        <div className='header-image'>
                            <div className='header-image-1' ref={image1}>
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f53_brandingfolio-x-about-main-page-branding-agency-webflow-template.png" />
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png" />
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f51_brandingfolio-x-blog-posts-main-page-branding-agency-webflow-template.png" />
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5c_brandingfolio-x-portfolio-single-main-page-branding-agency-webflow-template.png" />
                            </div>
                            <div className='header-image-2' ref={image2}>
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3a_brandingfolio-x-packages-page-branding-agency-webflow-template.png" />
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png" />
                                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f38_brandingfolio-x-team-member-page-branding-agency-webflow-template.png" />
                            </div>
                        </div>               
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;