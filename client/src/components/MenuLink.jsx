import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ number, text, href, onMouseEnter, onMouseLeave }) => {
    const chars = text.split('');
    return (
        <Link
            to={href}
            className="menu__link"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <p className="menu__number">{number}</p>
            <div className="menu__text-wrapper">
                <span className="menu__link-span">
                    <span>
                        {chars.map((char, index) => (
                            <span key={index} style={{ '--char-index': index }} className="char">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </span>
                <span className="menu__link-clone">
                    <span>
                        {chars.map((char, index) => (
                            <span key={index} style={{ '--char-index': index }} className="char">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default MenuLink;
