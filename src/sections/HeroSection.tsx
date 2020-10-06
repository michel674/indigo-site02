import React from "react";
import { Container, Column, Row } from "../components/Grid";
import { IMG } from "../components/GeneralComponents";
import { Button } from "../components/Button";
import LogoImage from "../components/images/indigo-logo.png";
import { Section, Spacing } from "../components/Box";
import { H1, P } from "../components/Tipography";
import ParticlesBg from "particles-bg";

export const HeroSection: React.FC = (props) => {
  return (
    <>
      <ParticlesBg type={'cobweb'} num={50} color={"#03d1af"} bg={true} />
      <Container>
        <Spacing size={"sm"} />
        <Row align='center'>
          <Column desktop={8}>
            <IMG src={LogoImage} />
          </Column>
        </Row>
        <Spacing size={"md"} />
      </Container>

      <Section minHeight={"85vh"} fluid={true}>
        <Container>
          <Row align='center' verticalAlign='center'>
            <Column desktop={8} tablet={12} mobile={12}>
              <H1>Design, Tecnologia e Inovação a serviço da Saúde</H1>
            </Column>
          </Row>

          <Spacing size={"sm"} />

          <Row align='center' verticalAlign='string'>
            <Column desktop={6} tablet={12} mobile={12}>
              <P>
                Impactando a saúde através da descoberta de problemas relevantes e potencialização de soluções de valor
              </P>
              <Spacing size={"lg"} />
              <a href='mailto: indigo@indigohive.com.br'><Button>Fale conosco</Button></a>
            </Column>
            <Column desktop={2} tablet={12} mobile={12} />
          </Row>
        </Container>
        <Spacing size={"el"} />
      </Section>
    </>
  );
};
