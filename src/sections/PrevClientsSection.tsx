import React from "react";
import { Section, Spacing, BriefBox } from "../components/Box";
import { Container, Column, Row } from "../components/Grid";
import { IMG } from "../components/GeneralComponents";
import fleury from "../components/images/fleury.png";
import taqtile from "../components/images/taqtile.png";
import pence from "../components/images/pence.png";
import finx from "../components/images/fin-x.png";
import { H3, H2, P, Quote } from "../components/Tipography";
import ParticlesBg from "particles-bg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getUnpackedSettings } from "http2";
 import { LeftArrow } from '../components/arrows'; 

 function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "#CCC" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "#CCC"}}
      onClick={onClick}
    />
  );
}

export const PrevClientsSection: React.FC = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,

  }
  return (
    <Section minHeight={"10vh"} background={"prev-clients"}>
      <ParticlesBg type={"cobweb"} num={100} color={"#03d1af"} bg={true} />
      <Container>
        <Row align='center' verticalAlign='center'>
          <Column desktop={12} tablet={12} mobile={12} align={"center"}>
            <H2 type={"secondary"}>Com quem já trabalhamos</H2>
            <Spacing size={"sm"} />
          </Column>
          <Column desktop={3} tablet={6} mobile={12} align={"center"}>
            <IMG src={fleury} />
          </Column>

          <Column desktop={3} tablet={6} mobile={12} align={"center"}>
            <IMG src={taqtile} />
          </Column>

          <Column desktop={3} tablet={6} mobile={12} align={"center"}>
            <IMG src={finx} />
          </Column>

          <Column desktop={3} tablet={6} mobile={12} align={"center"}>
            <IMG src={pence} />
          </Column>

          <Column desktop={12} tablet={12} mobile={12} align={"center"}>
            <Spacing size={"sm"} />
            <H3 type={"secondary"}>Depoimentos</H3>
            
          </Column>

        
        </Row>
        <Spacing size="sm" />
      </Container>
      <Slider {...settings} >
        <div>
          <Container >
            <Row>
              <Column align='center'>
                <P>
                "A Indigo para nós é muito mais que uma parceira! O nível de empatia, compreensão dos conceitos e soluções que eles desenvolvem ultrapassam as expectativas. Amamos trabalhar com eles e todas as interações são ricas em aprendizados, novos olhares e principalmente cocriações lindas!" 
                </P>
                <Spacing size='md' />
                <Quote>Erica Isomura</Quote>
                <Spacing size='md' />
                <P>Sócia da Corall e da Pence</P>
              </Column>
            </Row>
          </Container>
          
        </div>
        <div>
          <Container>
            <Row>
              <Column align='center'>
              <P>
            "O trabalho da Indigo mostra algo raro... Uma consultoria que consegue trabalhar UX na área da Saúde, trazer visão de produto, de design e de tecnologia, além de uma qualidade extremamente diferenciada em todas as entregas."  
          </P>
          <Spacing size='md' />
          <Quote>Edmar Miyake</Quote>
          <Spacing size='md' />
          <P>Fundador da Taqtile</P>
              </Column>
            </Row>
          </Container>
        </div>
      
      </Slider>
    </Section>
  );
};
