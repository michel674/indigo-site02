import React from 'react';
import { HeroSection} from './sections/HeroSection';
import {IndigoSection} from './sections/IndigoSection';
import {WeDoSection} from './sections/WeDoSection';
import { WeBelieveSection } from './sections/WeBelieveSection';
import {ClientsSection} from './sections/ClientsSection';
import {PartnersSection} from './sections/PartnersSection';
import {PrevClientsSection} from './sections/PrevClientsSection';
import {ContactSection} from './sections/ContactSection';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html{
    font-size: 20px;
  }

  @media (min-width: 0px){
    html{
      font-size: 12px;
    }

  }


  @media (min-width: 768px){
    html{
      font-size: 14px;
    }

  }

  @media (min-width: 1024px){
    html{
      font-size: 16px;
    }
  }
`


function App() {
  return (
    <>
      <GlobalStyle/>
      <HeroSection/>
      <IndigoSection/>
      <WeDoSection/>
      <WeBelieveSection/>
      <ClientsSection/>
      <PrevClientsSection/>
      <PartnersSection/>
      <ContactSection/>
    </>
  );  
}

export default App;
