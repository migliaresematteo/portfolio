import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function HeaderComponent({ content }) {
    useEffect(() => {
        const handlePointerMove = (e) => {
            if(window.innerWidth > 1200) {
                const { currentTarget: el, clientX: x, clientY: y } = e;
                const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
                el.style.setProperty('--posX',  x-l-w/2);
                el.style.setProperty('--posY',  y-t-h/2);
            }
        };
        if(window.innerWidth > 1200) {
            document.querySelector("#home").addEventListener("pointermove", handlePointerMove);

            return () => {
                document.querySelector("#home").removeEventListener("pointermove", handlePointerMove);
            };
        }
    }, []);

    return (
        <header id="home" className="pageHeader d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
            <Container>
                {content.map((index) => (
                    <h1 data-aos="fade-up" key={index} className='text-light display-1 fw-bold'>{index.title}</h1>
                ))}
                {content.map((index) => (
                    <p data-aos="fade-up" data-aos-delay="200" key={index} className='text-light lead fw-bold mb-4'>{index.subtitle}</p>
                ))}
                {content.map((index) => (
                    <a data-aos="fade-up" data-aos-delay="500" target='_blank' rel='noreferrer' key={index} className='w-max bg-light text-dark fw-bolder rounded-2 text-light py-2 px-3 text-decoration-none' href={index.href}>{index.cta}</a>
                ))}
            </Container>
        </header>
    );
}

export default HeaderComponent;
