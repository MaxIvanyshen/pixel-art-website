'use client';
import "./pixelGuy.css";
import { useState, useEffect } from 'react';

interface PixelGuyProps {
    minHeight?: number; // rem
    maxHeight?: number; // rem
    minWidth?: number; // rem
    maxWidth?: number; // rem
    interval?: number; // Interval in milliseconds (time between animation starts)
}

const PixelGuy: React.FC<PixelGuyProps> = ({
    minHeight = 12,
    maxHeight = 18,
    minWidth = 8,
    maxWidth = 12,
    interval = 5000, // 5 seconds
}) => {
    const [show, setShow] = useState(false); // Controls peeking animation
    const [size, setSize] = useState({ width: 10, height: 15 });
    const [position, setPosition] = useState({ right: 0 });
    const [animationKey, setAnimationKey] = useState(0); // For forcing animation restart

    if (interval < 3000) {
        console.warn("Interval too short; setting to minimum of 3000ms to allow full animation.");
        interval = 3000;
    }

    const randomize = () => {
        const randomWidth = Math.random() * (maxWidth - minWidth) + minWidth;
        const randomHeight = Math.random() * (maxHeight - minHeight) + minHeight;
        const randomRight = Math.random() * 80; // 0–80% of viewport width
        return { size: { width: randomWidth, height: randomHeight }, position: { right: randomRight } };
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShow(false); // Hide to reset
            const { size: newSize, position: newPosition } = randomize();
            setSize(newSize);
            setPosition(newPosition);
            setAnimationKey(prev => prev + 1); // Increment key to force remount
            setShow(true); // Start GIF and peeking animation simultaneously
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return (
        <div
            className={`pixel-crawl-container ${show ? 'peek' : 'hidden'}`}
            style={{
                height: `${size.height}rem`,
                width: `${size.width}rem`,
                right: `${position.right}vw`,
            }}
        >
            {show && (
                <img
                    src={`/pixel_animation.gif?reset=${animationKey}`}
                    alt="Pixel Guy"
                    className="pixel-guy"
                    id="pixel-guy"
                    key={animationKey} // Force remount to restart animation and GIF
                />
            )}
        </div>
    );
};

export default PixelGuy;
