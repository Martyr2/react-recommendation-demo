import { useEffect, useState } from 'react';
import Slide from './react-slider-slide'
import styles from './react-slider.module.css'
import slideData from './slideData'

interface SliderProps {
    speed?: number;
    backgroundColor?: string;
    glowColor?: string;
    outlineColor?: string;
}

function ReactSlider({speed = 5000, backgroundColor = "rgba(24, 32, 69)", glowColor = "rgb(72, 71, 133)", outlineColor = "rgba(74, 52, 133)"}: SliderProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // Styles for the slider itself
    const sliderStyleAttrs = {
        background: `radial-gradient(ellipse at bottom center, ${glowColor} 0, ${backgroundColor} 50%)`,
    }

    // Styles for the slide image
    const slideStyleAttrs = {
        border: `${outlineColor} solid 1px`,
        boxShadow: `0 0 25px ${glowColor}`
    }

    useEffect(() => {
        const internalTimer = setInterval(tick, speed < 1000 ? 1000 : speed);

        return () => { clearInterval(internalTimer); }
    }, []);

	const tick = () => {
        setCurrentSlideIndex(previousSlideIndex => previousSlideIndex >= slideData.length - 1 ? 0 : previousSlideIndex + 1);
	}

    const jumpToSlide = (slideIndex: number) => {
        setCurrentSlideIndex(slideIndex);
    }

    const slideSelected = (slideIndex: number) => {
        return slideIndex === currentSlideIndex;
    }

    return (
        <div className={styles.slider} style={sliderStyleAttrs}>
            <div className={styles.slider__window}>
                { slideData.map(function(slide, index) {
                    return <Slide key={index} style={slideStyleAttrs} showSlide={slideSelected(index)} slideNum={index} author={slide.author} authorTitle={slide.authorTitle} avatar={slide.avatar}>{slide.text}</Slide>;
                }) }
            </div>
            <div className={styles.slider__buttons}>
                { slideData.map(function(slide, index) {
                    const highlightButton = slideSelected(index) ? styles.slider__button_active : '';

                    return <span key={index} onClick={() => jumpToSlide(slide.slideNum)} className={[styles.slider__button, highlightButton].join(' ')}></span>;
                }) }
            </div>
        </div>
    )
}

export default ReactSlider;