import React from "react";
import { WeDoContainer, IMG } from "./WedoStyle";
import Bar from "../components/images/barra-sublinhado.png";
import { Container, Column, Row } from "../components/Grid";
import { H2} from "../components/Tipography";
import { Spacing } from "../components/Box";
import weDoImage from "../components/images/weDo-back.png";
const Rotate = require("react-reveal/Rotate");
const Zoom = require("react-reveal/Zoom");
const Fade = require("react-reveal/Fade");

export const WeDoSection: React.FC = () => {
  return (
    <WeDoContainer>
      <Container>
        <Row>
          <Column align="center" className="yrdy">
            <H2 type={"primary"}>Nossos pilares</H2>
            <Fade right>
              <IMG src={Bar} />
            </Fade>
            <Spacing size={"md"} />
          </Column>
        </Row>
        <Row center={true}>
          <Column>
            <Zoom>
              <Rotate>
                <IMG src={weDoImage} type={"weDoImage"} />
              </Rotate>
            </Zoom>
          </Column>
        </Row>
      </Container>
    </WeDoContainer>
  );
};
