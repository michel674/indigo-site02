import React from "react";
import { Container, Column, Row } from "../components/Grid";
import { H2, P } from "../components/Tipography";
import { Section, Spacing } from "../components/Box";
export const IndigoSection: React.FC = () => {
  return (
    <Section  background={"indigo"}>
      <Container>
        <Row align='center'>
          <Column desktop={8} tablet={8} mobile={12}>
            <H2 type={"secondary"}>Multidisciplinaridade e integração</H2>
          </Column>
          <Column desktop={8} tablet={8} mobile={12}>
            <P>
              Unimos várias áreas dentro e fora da saúde. Por isso, nossa equipe contempla uma incrível diversidade de formações, como medicina, nutrição, fisioterapia, educação física, gestão em saúde, engenharia, ciência da computação e design. 
            </P>
            <Spacing size='md' />
            <P>
              Porém, mais que muldisciplinares, somos integrados, contando com profissionais híbridos, treinados para transitar entre conhecimentos técnicos na saúde, skills e estratégias de design e entendimento das possibilidades que tecnologia pode nos trazer.
            </P>
          </Column>
        </Row>
      </Container>
      <Spacing size="el" />
    </Section>
  );
};
