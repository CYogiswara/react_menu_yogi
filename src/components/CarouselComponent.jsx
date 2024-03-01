import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/carousel.css'

const Carousel = () => {
    const images = [
        "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/February2024/WyeA46s5vSFOV2lCao5m.webp",
        "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/4uXkAyDvq4cEtU1LQV3K.webp"
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Carousel;