"use client"
import Carousel from 'react-bootstrap/Carousel';
import styles from './slider.module.css'
import Button from './button';

export default function Slider() {
    return (
        <Carousel className={styles.slider}>
            <Carousel.Item className={styles.sliderItem}>
                <img src="/img/carrusel/carrusel-2.jpg" text="First slide" className={styles.sliderImage} />
                <Carousel.Caption className={styles.sliderCaption}>
                <div className={styles.sliderCaptionContainer}>
                        <h3 className={styles.sliderTitle}>The Giggle</h3>
                        <Button className={styles.sliderButton}/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.sliderItem}>
                <img src="/img/carrusel/carrusel-1.webp" text="Second slide" className={styles.sliderImage} />
                <Carousel.Caption className={styles.sliderCaption}>
                <div className={styles.sliderCaptionContainer}>
                        <h3 className={styles.sliderTitle}>Allons-y!</h3>
                        <Button className={styles.sliderButton}/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.sliderItem}>
                <img src="/img/carrusel/carrusel-2.jpg" text="Third slide" className={styles.sliderImage} />
                <Carousel.Caption className={styles.sliderCaption}>
                <div className={styles.sliderCaptionContainer}>
                        <h3 className={styles.sliderTitle}>The Giggle</h3>
                        <Button className={styles.sliderButton}/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.sliderItem}>
                <img src="/img/carrusel/carrusel-1.webp" text="Forth slide" className={styles.sliderImage} />
                <Carousel.Caption className={styles.sliderCaption}>
                    <div className={styles.sliderCaptionContainer}>
                        <h3 className={styles.sliderTitle}>Allons-y!</h3>
                        <Button className={styles.sliderButton}/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.sliderItem}>
                <img src="/img/carrusel/carrusel-2.jpg" text="Fifth slide" className={styles.sliderImage} />
                <Carousel.Caption className={styles.sliderCaption}>
                    <div className={styles.sliderCaptionContainer}>
                        <h3 className={styles.sliderTitle}>The Giggle</h3>
                        <Button className={styles.sliderButton}/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
