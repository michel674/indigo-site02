import React from "react";
import { H3, P } from "../components/Tipography";
import {
  Section,
  Spacing,
  HorizontalSpacing,
  Box,
} from "../components/Box";
import { Container, Column, Row } from "../components/Grid";
import { IMG } from "../components/GeneralComponents";
import { Button } from "../components/Button";
import indigo from "../components/images/indigo-logo.png";
import instagram from "../components/images/instagram.png";
import linkedin from "../components/images/linkedin.png";

export const ContactSection: React.FC = () => {
  return (
    <>``
      <Section minHeight={"12vh"} background="acreditamos01" fluid={true}>
        <Container>
          <Row>
            <Column desktop={6} tablet={12} mobile={12}>
              <H3 type={"secondary"}>Quer trabalhar conosco?</H3>
              <Spacing size={"md"} />
              <a href='mailto: indigo@indigohive.com.br'><Button>Fale conosco</Button></a>
            </Column>

            <Column
              desktop={6}
              tablet={12}
              mobile={12}
              align={"right"}
              contact={false}
              
            >

              <P>São Paulo</P>
              <P>Av. Dr Arnaldo, 2194 - Sumaré</P>
              <P>(11) xxxx-xxxx</P>
              <P>São Paulo</P>
              <Spacing size={"sm"} />
              <IMG src={indigo} />
              <Spacing size={"sm"} />
              <br />
              <Box>
                <a target='_blank' href='https://www.linkedin.com/company/instituto-taqtile/'><IMG src={linkedin} /> </a>
              </Box>
            </Column>
          </Row>
        </Container>
        <Spacing size={"sm"} />
      </Section>
    </>
  );
};
