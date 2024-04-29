import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import frame3 from '../assets/frame3.png';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

function ECommerceSection() {
    const cards = [
        {
            title: "Customised website",
            image: frame3,
        },
    ];

    return (
        <Container id="shop">
            <h6 data-aos="fade-up" className="px-0 display-6 fw-bolder underline w-max mb-4">Shop</h6>
            <p data-aos="fade-up" className="lead mt-3 mb-4 px-0">
                Below you can find a selection of the many services I offer, feel free to contact me about any of them by pressing the related button.
            </p>
            <div data-aos="fade-up" className='row no-gutters'>
                {cards.map((card, index) => (
                    <div key={index} className='col-12 col-md-4'>
                        <Card>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faWandMagicSparkles} /> {card.title}</Card.Title>
                                <ul>
                                    <li>Complete customisation</li>
                                    <li>Unlimited functionality</li>
                                    <li>Maintenance included for the first year</li>
                                    <li>Delivery in 2 months</li>
                                </ul>
                                <a target='_blank' href='"https://wa.me/393396446669"' className='d-block w-max bg-dark text-light fw-bolder rounded-2 text-light py-2 mt-3 px-3 text-decoration-none'><FontAwesomeIcon icon={faWhatsapp} /> Contact me</a>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default ECommerceSection;
