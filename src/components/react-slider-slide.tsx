import { ReactNode } from 'react'
import styles from './react-slider-slide.module.css'

interface SlideProps {
    showSlide: boolean,
    avatar: string,
    slideNum?: number,
    author?: string,
    authorTitle?: string,
    children: ReactNode,
    style?: object
}

function Slide({showSlide, avatar, slideNum = 1, author = 'Unknown', authorTitle = 'Unknown title', children, style}: SlideProps) {
    const slideVisible = showSlide ? styles.slider__slide_show : '';

    return (
        <div className={[styles.slider__slide, slideVisible, 'slide_num_' + slideNum].join(' ')}>
            <div className={styles.slide}>
                <img src={avatar} className={styles.slide__image} alt={ author } style={style}/>
                <p className={styles.slide__quote}>{ children }</p>
                <span className={styles.slide__credit}>
                    <span className={styles.slide__name}>{ author }</span>
                    <span className={styles.slide__title}> -- { authorTitle }</span>
                </span>
            </div>
        </div>
    );
}

export default Slide;