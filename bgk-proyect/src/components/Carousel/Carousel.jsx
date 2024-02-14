import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getImageUrl } from "../../utils";
import { Col, Container, Row } from 'react-bootstrap';

function CarouselPage() {
    return (
        <Container className="d-flex justify-content-center ">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/3.png")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/4.png")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/5.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/8.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/1.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/2.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/10.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={getImageUrl("projects/7.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        </Container>
    );
}

export default CarouselPage;
