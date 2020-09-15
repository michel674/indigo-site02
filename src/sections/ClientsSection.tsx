import React from "react";
import { Container, Column, Row } from "../components/Grid";
import { H3, P } from "../components/Tipography";
import { Spacing, Section } from "../components/Box";

export const ClientsSection: React.FC = () => {
  return (
    <Section minHeight={""} background={'clients'}>
      <Spacing size={"el"} />
      <Container>
        <Row center={true} verticalAlign={true}>
          <Column desktop={4} tablet={12} mobile={12} align="right">
            <H3 type={"secondary"}>
              Seja grande, seja pequena, somos para empresas que...
            </H3>
          </Column>
          <Column desktop={6} tablet={12} mobile={12} fullHeight={true}>
            <P>
              1. Tem uma ótima ideia e não possuem o know-how para torná-la realidade
            </P>
            <P>
              2. Já tem uma solução inicial, e precisam desenvolver o modelo de negócios e proposta de valor
            </P>
            <P>3. Já estão no mercado, e querem expandir</P>
          </Column>
        </Row>
      </Container>
      <Spacing size={"el"} />
    </Section>
  );
};
