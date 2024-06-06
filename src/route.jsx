import React from 'react';
import Home from './pages/home';
import About from './pages/portfolio';
import Projects from './pages/resume';
import Contact from './pages/contact';
import { BrowserRouter as Route, Router } from `react-router-dom`;

const Routes = () => {
    <Router>
        <div> 
            <Banner />

            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

        </div>
    </Router>
}

export default Routes;