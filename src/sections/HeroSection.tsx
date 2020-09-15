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
      <ParticlesBg type={'cobweb'} num={100} color={"#03d1af"} bg={true} />
      <Container>
        <Spacing size={"sm"} />
        <Row center={true}>
          <Column desktop={8}>
            <IMG src={LogoImage} />
          </Column>
        </Row>
        <Spacing size={"md"} />
      </Container>

      <Section minHeight={"85vh"}>
        <Container>
          <Row center={true} verticalAlign={true}>
            <Column desktop={8} tablet={12} mobile={12}>
              <H1>Design, Tecnologia e Inovação a serviço da Saúde</H1>
            </Column>
          </Row>

          <Spacing size={"sm"} />

          <Row center={true} verticalAlign={true}>
            <Column desktop={6} tablet={12} mobile={12}>
              <P>
                De startups a grandes empresas, ajudamos a criar soluções
                inovadoras e relevantes para impactar a Saúde
              </P>
              <Spacing size={"lg"} />
              <Button>Fale conosco</Button>
            </Column>
            <Column desktop={2} tablet={12} mobile={12} />
          </Row>
        </Container>
        <Spacing size={"el"} />
      </Section>
    </>
  );
};
