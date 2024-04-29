import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp, faSquareInstagram, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
    { icon: faSquareWhatsapp, href: "https://wa.me/393396446669" },
    { icon: faSquareInstagram, href: "https://www.instagram.com/matteomigliarese_/" },
    { icon: faSquareFacebook, href: "https://www.facebook.com/matteo.migliarese.14" },
    { icon: faSquareGithub, href: "https://github.com/migliaresematteo" },
];

function FooterComponent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => document.body.removeChild(script);
    }, []);

    const contactContent = (
        <div className="col-12 col-md-6 pe-0 pe-md-5 ps-0 my-5">
            <h6 data-aos="fade-up" className="display-6 fw-bolder underline w-max">Contacts</h6>
            <p data-aos="fade-up" className="lead my-3 my-md-0 mt-md-3 mb-md-4">
                Feel free to contact me if you need assistance, collaboration, or anything else! Please use the following contacts for professional purposes only and use social media for informal matters.
            </p>
            <p data-aos="fade-up" className='lead mb-3 mb-md-0'><FontAwesomeIcon icon={faEnvelope} /> migliaresematteo@gmail.com</p>
        </div>
    );

    const socialContent = (
        <div className="col-12 col-md-6 ps-0 ps-md-5 my-5">
            <h6 data-aos="fade-up" className="display-6 fw-bolder underline w-max">Socials</h6>
            <p data-aos="fade-up" className="lead my-3">
                Get in touch with me and follow me on my socials – my latest adventure is just getting started, and you don't want to miss a thing! I'll be posting live updates, stories, and exclusive content.
            </p>
            <div data-aos="fade-up" className="d-flex">
                {socialLinks.map((link) => (
                    <a key={link.href} className="pe-3 text-decoration-none text-dark display-6" href={link.href} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <footer>
            <Container data-aos="fade-up">
                <div className="row px-3 my-5">
                    {contactContent}
                    {socialContent}
                    <h6 className="display-6 px-0 fw-bolder underline w-max mt-5">Contact form</h6>
                    <p className="lead mt-3 mb-4 px-0">
                        If you need to contact me rapidly for business matters you can compile the form down there, I'll respond as soon as possible!
                    </p>
                    <div className='px-0' data-tf-live="01HV72Y3S1WQTHJ1GBHTHVQPC1"></div>
                </div>
            </Container>
        </footer>
    );
}

export default FooterComponent;
