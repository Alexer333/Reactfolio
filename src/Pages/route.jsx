import React from 'react';
import Home from './home';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';
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