"use client"
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="/img/carrusel/carrusel-2.jpg" text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/img/carrusel/carrusel-1.webp" text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/img/carrusel/carrusel-2.jpg" text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/img/carrusel/carrusel-1.webp" text="Forth slide" />
                <Carousel.Caption>
                    <h3>Forth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/img/carrusel/carrusel-2.jpg" text="Fifth slide" />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;