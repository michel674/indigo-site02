import React from 'react';
import {Container, Column, Row} from '../components/Grid';
import {H2,  P} from '../components/Tipography';
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



export const WeBelieveSection: React.FC = () =>{
    return(
        <Section >
            <Container>
                <Row center={true}>
                    <Column desktop ={12} tablet={12} mobile={12} align={'center'}>
                        <H2 type ={'secondary'}  baseline={true}>Acreditamos. Fazemos</H2>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'} >
                        <Card image={userCentered} text={'Foco no usuário'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                        <Card image={dataDriven} text={'Orientados por dados'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                    <Card image={designThinking} text={'Metodologias Ágeis'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                    <Card image={inovacao} text={'Inovação'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                        <Card image={redeApoio} text={'Rede de Apoio'} bold={true}/>
                    </Column>

                    <Column desktop ={3} tablet={6} mobile={12} align={'center'}>
                        <Card image={impactoPositivo} text={'Impactar positivamente a saúde'} bold={true}/>
                    </Column>

                    <Column desktop={3} tablet={6} mobile={12} align={'center'}>
                        <Card image={trabalhoConjunto} text={'Trabalho conjunto'} bold={true}/>
                    </Column>
                    <Column desktop={10}>
                        <Spacing size={'md'}/>
                        <P>Nossa proposta de valor é potencializada pelas conexões que nutrimos com diferentes setores, desde centros de pesquisa científica, hubs de inovação na Saúde, hospitais e serviços públicos do SUS, a laboratórios e serviços particulares.</P>
                    </Column>
                </Row>
                <ParticlesBg type={'cobweb'}  num={100} color={'#03d1af'} bg={true} />  
                <Spacing size='el' />
            </Container>
        </Section>        
    )

}