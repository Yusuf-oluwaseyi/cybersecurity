import React from 'react';
import MenuLink from './MenuLink';

const GlobalMenu = ({ setHoveredMenu }) => {
    return (
        <div className="menu__wrap" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 40px', // Match container padding
            zIndex: 96, // Above overlay (90) and below FixedNav (100)
            pointerEvents: 'none', // Allow clicking through empty space
            mixBlendMode: 'difference'
        }}>
            <ul className="menu__inner menu-home" style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                pointerEvents: 'auto' // Re-enable pointer events for links
            }}>
                <li className="menu__item menu-hover">
                    <MenuLink
                        number="01"
                        text="Works"
                        href="/work"
                        onMouseEnter={() => setHoveredMenu('Works')}
                        onMouseLeave={() => setHoveredMenu(null)}
                    />
                </li>
                <li className="menu__item menu-hover">
                    <MenuLink
                        number="02"
                        text="About"
                        href="/about"
                        onMouseEnter={() => setHoveredMenu('About')}
                        onMouseLeave={() => setHoveredMenu(null)}
                    />
                </li>
                <li className="menu__item menu-hover">
                    <MenuLink
                        number="03"
                        text="Labs"
                        href="/docs"
                        onMouseEnter={() => setHoveredMenu('Labs')}
                        onMouseLeave={() => setHoveredMenu(null)}
                    />
                </li>
                <li className="menu__item menu-hover">
                    <MenuLink
                        number="04"
                        text="Contact"
                        href="/contact"
                        onMouseEnter={() => setHoveredMenu('Contact')}
                        onMouseLeave={() => setHoveredMenu(null)}
                    />
                </li>
                <li className="menu__item" style={{ marginTop: '0' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#FFF' }}>©2025</span>
                </li>
            </ul>
        </div>
    );
};

export default GlobalMenu;
