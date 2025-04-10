import React from 'react';
import '../styles/Footer.css';

function Footer() {

    return (
        <>
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='footer-text'>
                    <h1>Contact us today!</h1>
                    <p>Nunc tortor aliquam nec sed nunc convallis tincidunt quam. <br /> felis volutpat ut consequat turpis risus lacus hendrerit.</p>
                </div>
                <div className='footer-button'>
                    <button className='footer-button-1'>Contact us</button>
                    <button className='footer-button-2'>Our projects</button>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='footer-copyright-image'>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed6_logo-web-white-brandingfolio-x-webflow-template.svg" />
                    <p>Copyright © Brandingfolio X | Designed by <br /> <span className='footer-copyright-span'>BRIX Templates</span> - Powered by <span className='footer-copyright-span'>Webflow</span></p> <br />
                    <h3>Subscribe to our newsletter</h3>
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
                <div className='footer-copyright-list'>
                    <ul>
                        <h4>Pages</h4> <br />
                        <li>Preview</li> <br />
                        <li>Home V1</li> <br />
                        <li>Home V2</li> <br />
                        <li>Home V3</li> <br />
                        <li>About</li> <br />
                        <li>Blog V1</li> <br />
                        <li>Blog V2</li> <br />
                        <li>Blog V3</li> <br />
                        <li>Blog Post</li> <br />
                    </ul>
                    <ul>
                        <br /><br /><br />
                        <li>Blog category</li> <br />
                        <li>Packages</li> <br />
                        <li>Packages single</li> <br />
                        <li>Contact v1</li> <br />
                        <li>Contact v2</li> <br />
                        <li>Contact v3</li> <br />
                        <li>Portfolio</li> <br />
                        <li>Portfolio single</li> <br />
                        <li>Team member</li> <br />
                    </ul>
                    <ul>
                        <h4>Utility pages</h4> <br />
                        <li>Style guide</li> <br />
                        <li>Start here</li> <br />
                        <li>404 not found</li> <br />
                        <li>Password protected</li> <br />
                        <li>Licenses</li> <br />
                        <li>Changelog</li> <br />
                        <u>More Webflow <br /> Template</u> <br />
                    </ul>
                    <ul>
                        <h4>Follow us</h4> <br />
                        <li>Facebook</li> <br />
                        <li>Twitter</li> <br />
                        <li>Instagram</li> <br />
                        <li>LinkedIn</li> <br />
                        <li>YouTube</li> <br />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}

export default Footer;