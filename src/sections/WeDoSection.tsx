import React from "react";
import { WeDoContainer, IMG } from "./WedoStyle";
import Bar from "../components/images/barra-sublinhado.png";
import { Container, Column, Row } from "../components/Grid";
import { H2, P, Quote } from "../components/Tipography";
import { Section, Spacing } from "../components/Box";
import ParticlesBg from "particles-bg";

import weDoImage from "../components/images/pentagon.png";
const Rotate = require("react-reveal/Rotate");
const Zoom = require("react-reveal/Zoom");
const Fade = require("react-reveal/Fade");

export const WeDoSection: React.FC = () => {
  return (
    <Section>
      <ParticlesBg type={'cobweb'} num={100} color={"#03d1af"} bg={true} />
      <Container>
        <Row align='center' >
          <Column align="center">
            <H2 type={"secondary"}>Design Thinking na área da saúde</H2>
            <Spacing size={"md"} />
          </Column>
        </Row>
        <Row align='center' verticalAlign='center'>
          <Column desktop={6}>
            <Quote>
              Fazemos diversas coisas, mas somos particularmente indicados para cocriarmos boas ideias e testá-las.
            </Quote>
            <Spacing size='md' />
            
            <P>
              O nosso forte, além do time multidisciplinar, é trazermos os usuários para dentro do processo, concebendo soluções que realmente funcionam. 
            </P>
          </Column>
          <Column desktop={6}>
            <Zoom>
              <Rotate>
                <IMG src={weDoImage} type={"weDoImage"} />
              </Rotate>
            </Zoom>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};
