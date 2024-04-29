import React from 'react';
import Container from 'react-bootstrap/Container';
import pic from '../assets/pic.webp';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function PictureSection() {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-lg-6 px-0 pe-lg-5 d-flex flex-column">
            <img src={pic} className="img-fluid rounded-4 object-fit-cover" alt="Profile" style={{ height: '100%' }}></img>
        </div>
    );
}

function TextSection() {
    return (
        <div className="col-12 col-lg-6 px-0 my-5 d-flex flex-column justify-content-center">
            <h6 data-aos="fade-up" data-aos-delay="200" className="display-6 fw-bolder underline w-max">About me</h6>
            <p data-aos="fade-up" data-aos-delay="400" className="lead my-3">
                Hi! I'm Matteo Migliarese, a highly skilled and passionate web developer. My background in computer engineering and my extensive experience in the industry have allowed me to become an expert in creating professional and functional websites. I use the latest technologies and development methodologies to ensure that my projects are efficient, well-structured, and easy for users to navigate. I'm committed to understanding my clients' needs and work closely with them to achieve their goals and meet their expectations. My attention to detail, ability to work efficiently, and dedication to staying up-to-date on the latest news in web development make me an asset to any team or project. I'm always looking for new challenges and am eager to apply my expertise and knowledge to help create successful websites.
            </p>
            <a href="#ciao" data-aos="fade-up" data-aos-delay="200" className='d-block w-max bg-dark text-light fw-bolder rounded-2 text-light py-2 mt-3 px-3 text-decoration-none'>Read more...</a>
        </div>
    );
}

function SkillsSection() {
    return (
        <div className="col-12 my-5 px-0 d-flex flex-column">
            <h6 data-aos="fade-up" data-aos-delay="200" className="display-6 fw-bolder underline w-max mb-4">Programming skills</h6>
            <p data-aos="fade-up" data-aos-delay="400" className='lead'>Below, you'll find a comprehensive list of my programming skills spanning both software and web development. Continuously enhancing my expertise, I am dedicated to delivering ongoing improvements.</p>
            <h4 data-aos="fade-up" data-aos-delay="400"><FontAwesomeIcon icon={faPager} /> Web developing:</h4>
            <Stack className='lead mt-3 d-flex flex-wrap' direction="horizontal" gap={2}>
                <Badge data-aos="fade-up" data-aos-delay="400" bg="accent">HTML5</Badge>
                <Badge data-aos="fade-up" data-aos-delay="500" bg="accent">CSS3</Badge>
                <Badge data-aos="fade-up" data-aos-delay="600" bg="accent">JavaScript ES6</Badge>
                <Badge data-aos="fade-up" data-aos-delay="750" bg="accent">PHP</Badge>
                <Badge data-aos="fade-up" data-aos-delay="900" bg="accent">ReactJS</Badge>
                <Badge data-aos="fade-up" data-aos-delay="1100" bg="accent">Bootstrap 5</Badge>
                <Badge data-aos="fade-up" data-aos-delay="1300" bg="accent">TailWind CSS</Badge>
                <Badge data-aos="fade-up" data-aos-delay="1500" bg="adding">MySQL</Badge>
            </Stack>
            <h4 data-aos="fade-up" data-aos-delay="600" className='mt-4'><FontAwesomeIcon icon={faLaptopCode} /> Software developing:</h4>
            <Stack className='lead mt-3 d-flex flex-wrap' direction="horizontal" gap={2}>
                <Badge data-aos="fade-up" data-aos-delay="600" bg="accent">Java</Badge>
                <Badge data-aos="fade-up" data-aos-delay="700" bg="accent">Python</Badge>
                <Badge data-aos="fade-up" data-aos-delay="800" bg="accent">C++</Badge>
                <Badge data-aos="fade-up" data-aos-delay="950" bg="adding">Kotlin</Badge>
            </Stack>
        </div>
    );
}

function SpeakingSection() {
    const languages = [
        { id: 1, name: 'Italian', level: 'Native' },
        { id: 2, name: 'English', level: 'B2' },
        { id: 3, name: 'French', level: 'A1' },
        { id: 4, name: 'German', level: 'A1' }
    ];

    return (
        <div className="col-12 my-5 px-0 d-flex flex-column">
            <h6 data-aos="fade-up" className="display-6 fw-bolder underline w-max mb-4">Spoken languages</h6>
            <p data-aos="fade-up" className='lead mb-4'>I'm proficient in four languages, my proficiency levels are listed below. <span className='opacity-50'>(*not certified)</span></p>
            <Table data-aos="fade-up" striped>
                <thead>
                    <tr>
                        <th className='bg-dark text-light'>#</th>
                        <th className='bg-dark text-light'>Language</th>
                        <th className='bg-dark text-light'>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map(language => (
                        <tr key={language.id}>
                            <td>{language.id}</td>
                            <td>{language.name}</td>
                            <td>{language.level}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

function MusicSection() {
    const events = [
        { id: 1, location: 'Volpiano (TO)', date: '25/05/2024', repertoire: 'Fryderyk Chopin - Op. 34 n. 2' }
    ];

    return (
        <div className="col-12 my-5 px-0 d-flex flex-column">
            <h6 data-aos="fade-up" className="display-6 fw-bolder underline w-max mb-4">Classical piano studies</h6>
            <p data-aos="fade-up" className='lead mb-4'>I have been studying classical piano for about 1 year at the 'Ludovico Lessona' music institute located in Volpiano (TO). I am working hard to reach a satisfactory level that will allow me to enter the 'Giuseppe Verdi' conservatory in Turin. I plan to take my solfeggio exam in September 2025. Below you can find a table of my upcoming events and the repertoire I will be playing.</p>
            <h4 data-aos="fade-up" className='mb-4'>Upcoming events:</h4>
            <Table data-aos="fade-up" striped>
                <thead>
                    <tr>
                        <th className='bg-dark text-light'>#</th>
                        <th className='bg-dark text-light'>Where</th>
                        <th className='bg-dark text-light'>Date</th>
                        <th className='bg-dark text-light'>Repertoire</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.location}</td>
                            <td>{event.date}</td>
                            <td>{event.repertoire}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

function AboutLanding({ showMusicSection }) {
    return (
        <Container>
            <div id='about' className="row flex-wrap px-3 my-5">
                <PictureSection />
                <TextSection />
                <SkillsSection />
                <SpeakingSection />
                {showMusicSection && <MusicSection />}
            </div>
        </Container>
    );
}

export default AboutLanding;
