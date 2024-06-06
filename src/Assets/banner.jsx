import React from `react`;
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <nav>
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me!</Link>
                </li>
            </nav>
        </div>
    )
}

export default Banner;