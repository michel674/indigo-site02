import React from "react";
import { Section, Spacing } from "../components/Box";
import { Container, Column, Row } from "../components/Grid";
import { IMG } from "../components/GeneralComponents";
import fleury from "../components/images/fleury.png";
import taqtile from "../components/images/taqtile.png";
import pence from "../components/images/pence.png";
import finx from "../components/images/fin-x.png";
import { H3, H2, P } from "../components/Tipography";
import ParticlesBg from "particles-bg";

export const PrevClientsSection: React.FC = () => {
  return (
    <Section minHeight={"10vh"} background={"prev-clients"}>
      <ParticlesBg type={"cobweb"} num={100} color={"#03d1af"} bg={true} />
      <Container>
        <Row center={true} verticalAlign={true}>
          <Column desktop={12} tablet={12} mobile={12} align={"center"}>
            <H2 type={"secondary"}>Com quem já trabalhamos</H2>
            <Spacing size={"md"} />
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
            <Spacing size={"el"} />
            <H3 type={"secondary"}>Depoimentos</H3>
          </Column>

          <Column desktop={8} tablet={8} mobile={12} align={"center"}>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </P>
          </Column>

          <Column desktop={12} tablet={12} mobile={12} align={"center"}>
            <P>Nome</P>
          </Column>

          <Column desktop={12} tablet={12} mobile={12} align={"center"}>
            <P>Cargo</P>
          </Column>
        </Row>
        <Spacing size="lg" />
      </Container>
    </Section>
  );
};
