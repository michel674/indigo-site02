import React from 'react';
import {Container, Column, Row} from '../components/Grid';
import {H2, H3, P} from '../components/Tipography';
import {Spacing, Section} from '../components/Box';
import dataDriven from '../components/images/data-driven.png';
import designThinking from '../components/images/design-thinking.png';
import impactoPositivo from '../components/images/impacto-positivo.png';
import inovacao from '../components/images/inovacao.png';
import userCentered from '../components/images/user-centered.png';
import redeApoio from '../components/images/rede-de-apoio.png';
import trabalhoConjunto from '../components/images/trabalho-conjunto.png';
import {Card} from '../components/Card';
import ParticlesBg from 'particles-bg';
import { ConectionsTextWrapper, ConectionsBackground } from '../components/conections_bg';



export const WeBelieveSection: React.FC = () =>{
    return(
        <Section fluid={true}>
            <ParticlesBg type={"cobweb"} num={15} color={"#03d1af"} bg={true} />
            <Container paddingNone={true}>
                <Row align='center'>
                    <Column desktop ={12} tablet={12} mobile={12} align={'center'}>
                        <H2 type ={'secondary'}  baseline={true}>Nossos pilares</H2>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'} >
                        <Card image={userCentered} text={'User centered'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                    <Card image={designThinking} text={'Lean thinking'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                        <Card image={dataDriven} text={'Data driven'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                    <Card image={inovacao} text={'Design Thinking'} bold={true}/>
                    </Column>

                </Row>
                <Spacing size='md'/>

                <Row align='center' verticalAlign='center'>
                    <Column align='center' desktop={6}>
                        <H3 type='secondary'>Conexões</H3>
                        
                    </Column>

                    <Column desktop={6} paddingNone={true}>
                    <ConectionsTextWrapper>
                            <P>
                                Nossa proposta de valor é potencializada pelas conexões que nutrimos com os diversos setores da saúde, desde centros de pesquisa científica, hubs de inovação na Saúde, hospitais e serviços públicos do SUS, a farmacêuticas, laboratórios e outros serviços suplementares.
                            </P>
                        </ConectionsTextWrapper>

                    </Column>
                </Row>
                <ParticlesBg type={'cobweb'}  num={100} color={'#03d1af'} bg={true} />  
                <Spacing size='md' />
            </Container>
            </Section>
    )

}