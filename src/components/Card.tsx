import React from 'react';
import {CardBox} from './Box';
import {Container, Column, Row} from './Grid';
import {IMG} from './GeneralComponents';
import {P} from './Tipography'; 
const Fade = require("react-reveal/Fade");


interface CardProps{
    image: string;
    text: string;
    bold?: boolean;
}
export const Card: React.FC<CardProps> = props =>{
    return(
        <Fade>
        <CardBox>
        <Container>
            <Row align='center' verticalAlign='string'>
                <Column align={'center'} desktop={12} tablet={12} mobile={12}>
                    <IMG src={props.image} minHeight={true}/>
                </Column>
                <Column align={'center'}>
                    <P  card={true}  weight={'bold'}>{props.text} </P>
                </Column>
            </Row>
        </Container>
        </CardBox>
        </Fade>

        
    )
}