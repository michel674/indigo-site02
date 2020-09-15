import React from "react";
import { Container, Column, Row } from "../components/Grid";
import { H2, P } from "../components/Tipography";
import { Section, Spacing } from "../components/Box";
export const IndigoSection: React.FC = () => {
  return (
    <Section  background={"indigo"}>
      <Container>
        <Row center={true}>
          <Column desktop={8} tablet={8} mobile={12}>
            <H2 type={"secondary"}>IN.DI.GO</H2>
          </Column>
          <Column desktop={6} tablet={8} mobile={12}>
            <P>
              Seja pelas barreiras técnicas específicas da Saúde, seja pelas
              barreiras de negócios e tecnologia, percebemos que a maioria das
              ótimas ideias não se tornam ótimos produtos ou soluções. Do
              encontro de pessoas inquietas que tem como missão de vida impactar
              a Saúde, nasce a Indigo. Integramos o conhecimento das áreas de
              Saúde, Tecnologia e Design com Metodologias Ágeis para conceber,
              expandir e gerir soluções inovadoras e sustentáveis com nossos
              parceiros.
            </P>
          </Column>
        </Row>
      </Container>
      <Spacing size="el" />
    </Section>
  );
};
