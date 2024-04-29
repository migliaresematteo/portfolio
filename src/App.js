import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import NavbarComponent from './customComponents/NavbarComponent';
import HeaderComponent from './customComponents/HeaderComponent';
import FooterComponent from './customComponents/FooterComponent';
import AboutLanding from './customComponents/AboutLanding';
import CertificationsLanding from './customComponents/CertificationsLanding';
import ECommerceSection from './customComponents/ECommerceSection';

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <NavbarComponent
        navLinks={[
          { id: 1, title: 'Home', href: '#home', icon: <FontAwesomeIcon icon={faHouse} /> },
          { id: 2, title: 'About', href: '#about', icon: <FontAwesomeIcon icon={faUser} /> },
          { id: 3, title: 'Certifications', href: '#certifications', icon: <FontAwesomeIcon icon={faTrophy} /> },
          { id: 4, title: 'Shop', href: '#shop', icon: <FontAwesomeIcon icon={faBagShopping} /> },
          /*{ title: 'Reviews', href: '#reviews', icon: <FontAwesomeIcon icon={faCertificate} /> },*/
        ]}        
      />
      <HeaderComponent
        content={[
          { title: 'Matteo Migliarese', subtitle: "Web developer & Web designer", href: "/assets/CV (1).pdf", cta: "Scarica il mio CV"}
      ]}/>
      <AboutLanding showMusicSection />
      <CertificationsLanding/>
      <ECommerceSection/>
      <FooterComponent/>
    </>
  );
}

export default App;
