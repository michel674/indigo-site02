import styled from  'styled-components';
import greenSpheres from '../components/images/greenSpheres.png';
import greenSpheres02 from '../components/images/greenSpheres02.png';


const getBackground = (background:string)=>{
    if (background ==='indigo'){
        return`
            background:  url(${greenSpheres}) no-repeat -20% 90%, url(${greenSpheres}) no-repeat 100% 20%;
            background-color: #EEEEEE;
            background-size: 30%; 
        `
    }


    if (background ==='preclients'){
        return`
            background: transparent;
        `
    }

    if (background ==='clients'){
        return`
            background: #A5FFF0;
        `
    }

    if (background ==='partners'){
        return`
            background:  url(${greenSpheres02}) no-repeat -20% 90%, url(${greenSpheres}) no-repeat 100% 20%;
            background-size: 30%;
            background-color: #EEEEEE;
        `
    }
}

const getSize = (size: string) =>{
    if (size==='sm'){
        return(
            'padding-bottom: 12px;'
        )
    }
    if (size==='md'){
        return(
            'padding-bottom: 50px;'
        )
    }
    if (size==='lg'){
        return(
            'padding-bottom: 80px;'
        )
    }

    if (size==='el'){
        return(
            'padding-bottom: 100px;'
        )
    }

    if (size==='super' ){
        return(`
            padding-bottom: 400px;
            @media (max-width: 1060px){
                padding-bottom: 0px;
            }
            `
            )
    }
}

interface SpacingProps{
    size?: string;

}
export const Spacing = styled.div<SpacingProps>`
    ${(props) => props.size?getSize(props.size): '10px'};
`

export const HorizontalSpacing = styled.div<SpacingProps>`
    margin-right: 10px;
`

export const HorizontalBox = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Box = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100wh;
    `

export const ContentBox = styled.div`
    padding-top: 40px;
    max-width: 1080px;    
    margin: 0 auto;
`


interface SectionProps{
    minHeight?: string;
    section?: string;
    background?: string;
    fluid?: boolean;
}



export const Section = styled.section<SectionProps>`
    min-height: ${(props: SectionProps)=> props.minHeight?props.minHeight:0};
    position: relative;
    width: 100%;
    ${props => props.background?getBackground(props.background): ''};
    @media (max-width: 1060px){
        min-height: 0px;
`

interface DivProps{
    fullWidth?: boolean;
    alignRight?: boolean;

}
export const Div = styled.div<DivProps>`
    width: ${props => props.fullWidth? '100%': '50%'};
    text-align: ${props => props.alignRight? 'right': 'left'};
    @media (max-width: 1060px){
        width: 100%;
    }
    `
export const DivClients = styled.div<DivProps>`
   display: flex;
   flex-direction: row;
   height: 450px;
    `

export const Clear = styled.div`
    clear: box;
    clear: both;
`

export const CardBox = styled.div`


`

export const BriefBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
