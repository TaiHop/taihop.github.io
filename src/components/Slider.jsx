import React, { useState } from 'react';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const goNext = () => {
        setCurrentIndex(prev =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="image-slider">
            <div className="slider-controls">
                <button className="slider-arrow left" onClick={goPrev}>❮</button>
                <button className="slider-arrow right" onClick={goNext}>❯</button>
            </div>

            <ul>
                {slides.map((slide, index) => (
                    <li key={index}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            style={{
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))`
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;
