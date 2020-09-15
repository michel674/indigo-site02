import React from "react";
import { H2 } from "../components/Tipography";
import { Section, Spacing, HorizontalSpacing } from "../components/Box";
import { Container, Column, Row } from "../components/Grid";
import taqtile from "../components/images/taqtile-black.png";
import corall from "../components/images/corall-logo.png";
import { Card } from "../components/Card";

interface PartnersProps {
  bold?: boolean;
}

export const PartnersSection: React.FC<PartnersProps> = (props) => {
  return (
    <Section background={'partners'}>
      <Container>
        <Row center={true}>
          <Column desktop={12}>
            <H2 type={"secondary"}>Nossos parceiros</H2>
          </Column>
          <Column desktop={4} align={"center"}>
            <Card
              image={corall}
              text={
                "Consultoria organizacional focada em liberar a potência de pessoas e organizações"
              }
              bold={props.bold}
            />
          </Column>

          <Column desktop={1} align={"center"}>
            <HorizontalSpacing />
          </Column>

          <Column desktop={4} align={"center"}>
            <Card
              image={taqtile}
              text={
                "Referência no mercado de desenvolvimento e estratégia de concepção de produtos e serviços digitais, design sprints e operação na área tecnológica"
              }
              bold={props.bold}
            />
          </Column>
        </Row>
      </Container>
      <Spacing size={"lg"} />
    </Section>
  );
};
