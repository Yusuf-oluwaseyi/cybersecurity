import React from 'react';
import Hero from '../components/Hero';

const Home = ({ hoveredMenu, setHoveredMenu }) => {
    return (
        <>
            <Hero hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} />
        </>
    );
};

export default Home;
