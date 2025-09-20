'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Dot from '@nsmr/pixelart-react';

interface HeaderProps {
    activePage: 'home' | 'history' | 'practice' | 'about';
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/', key: 'home' },
        { label: 'History', href: '/history', key: 'history' },
        { label: 'Practice', href: '/practice', key: 'practice' },
        { label: 'About Me', href: '/about', key: 'about' },
    ];

    const currentPageLabel = navItems.find(item => item.key === activePage)?.label || 'Home';

    return (
        <header className="bg-[rgb(44,44,44)] text-yellow-400 px-4 py-2 border-b-4 border-yellow-400 h-20">
            <div className="flex items-center justify-between h-full">

                <img src="/logo_green_bg.png" alt="Logo" className="w-15 hidden md:flex" />

                <div className="md:hidden flex items-center space-x-3">
                    <img src="/logo_green_bg.png" alt="Logo" className="w-15" />
                    <span className="text-3xl font-mono uppercase tracking-wider text-yellow-300">
                        {currentPageLabel}
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center items-center space-x-6">
                    {activePage !== 'home' && (
                        <Dot name='dot' size={16} className="text-yellow-400 ml-2 mr-1" />
                    )}
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <Link
                                    href={item.href}
                                    className={`
                                        text-3xl font-mono uppercase tracking-wider
                                        ${activePage === item.key
                                            ? 'text-yellow-300'
                                            : 'text-gray-300 hover:text-yellow-300 transition-colors'
                                        }
                                        [text-shadow:1px_1px_0px_rgba(0,0,0,0.8)]
                                    `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="md:hidden flex flex-col space-y-1 w-6 h-6"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block h-1 w-6 bg-yellow-400 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 w-6 bg-yellow-400 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 w-6 bg-yellow-400 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                {/* Empty div for desktop balance */}
                <div className="hidden md:block w-15"></div>
            </div>

            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <nav className="py-4 bg-[rgb(44,44,44)] w-100h">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <Link
                                    href={item.href}
                                    className={`
                                        block text-2xl font-mono uppercase tracking-wider px-4 py-2
                                        ${activePage === item.key
                                            ? 'text-yellow-300'
                                            : 'text-gray-300 hover:text-yellow-300 transition-colors'
                                        }
                                        [text-shadow:1px_1px_0px_rgba(0,0,0,0.8)]
                                    `}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

