import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getImageUrl } from "../../utils";
import { Container } from 'react-bootstrap';

function CarouselPage() {
    return (
        <Container fluid="md" className="d-flex justify-content-center ">
            <Carousel data-bs-theme="dark">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={getImageUrl("nav/bangkok4.png")}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={getImageUrl("nav/bangkok4.png")}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={getImageUrl("nav/bangkok4.png")}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default CarouselPage;
