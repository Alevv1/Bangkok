import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getImageUrl } from "../../utils";
import { Container, Row } from 'react-bootstrap';

function CarouselPage() {
    return (
        <Container className="d-flex justify-content-center ">
            <Row>
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
            </Row>
        </Container>
    );
}

export default CarouselPage;
