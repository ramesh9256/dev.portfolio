'use-client';
import {
    RiGithubFill,
    RiPhoneFill,
    RiLinkedinBoxFill,
    RiMailLine
} from 'react-icons/ri';

export function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="max-w-7xl mx-auto">
                {/* Copyright Section */}
                <p className="footer-copy">
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>

                {/* Social Icons with Your Real Links */}
                <div className="footer-socials">
                    {/* Instagram - Aap apna link yahan dal sakte hain */}
                    {/* Github - Updated */}
                    <a href="https://github.com/ramesh9256/" className="social-link" title="Github" target="_blank" rel="noopener noreferrer">
                        <RiGithubFill />
                    </a>

                    {/* Phone - Updated */}
                    <a href="tel:+919256746259" className="social-link" title="Call Me">
                        <RiPhoneFill />
                    </a>

                    {/* LinkedIn - Updated */}
                    <a href="https://www.linkedin.com/in/ramesh-kumar-rr8920/" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <RiLinkedinBoxFill />
                    </a>

                    {/* Gmail - Updated */}
                    <a href="mailto:9256.ramesh@gmail.com" className="social-link" title="Email Me">
                        <RiMailLine />
                    </a>
                </div>

            </div>
        </footer>
    );
}