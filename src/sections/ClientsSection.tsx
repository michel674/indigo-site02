import React from "react";
import { Container, Column, Row } from "../components/Grid";
import { H3, P, Quote } from "../components/Tipography";
import { Spacing, Section } from "../components/Box";
import { BackgroundBox } from './background-box';

export const ClientsSection: React.FC = () => {
  return (
    <Section fluid={true}>
      <Spacing size={"el"} />
      <Container paddingNone={true} fluid={true} >
        <Row  verticalAlign='center' >
          <Column desktop={5} tablet={12} mobile={12} align="right"  paddingNone={true}>
            <BackgroundBox >
            <H3 type={"secondary"}>
              Seja grande, seja pequena, somos para empresas que...
            </H3>
            </BackgroundBox>
          </Column>
          <Column desktop={6} tablet={12} mobile={12} fullHeight={true}>
            <P>
              <Quote>1.</Quote> Têm um desafio que querem explorar e evoluir em dores e oportunidades;
            </P>
            <Spacing size='sm'/>
            <P>
              <Quote>2.</Quote> Têm uma ótima ideia, mas não possuem o know-how para <Quote>testá-la</Quote> e/ou para <Quote>desenvolvê-la</Quote>;
            </P>  
            <Spacing size='sm'/>
            <P> <Quote>3.</Quote> Estão no mercado e querem aprimorar o que já têm, como interface, usabilidade, funcionalidades e modelo de negócio.</P>
          </Column>
        </Row>
      </Container>
      <Spacing size={"el"} />
    </Section>
  );
};
