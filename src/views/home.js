import React, { useContext } from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppFaq from '../components/home/faq';
import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';
import { ThemeContext } from '../context';
import Toggle from '../Toggle/Toggle';

function AppHome() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="main"
            style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode && "white",
            }}
        >
            <Toggle />
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    );
}

export default AppHome;