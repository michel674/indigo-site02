import styled from 'styled-components';








const getColor = (type: string)=>{
    if (type==='primary'){
        return(
            `#FFFFFF`
        )
    }

    if (type==='secondary'){
        return(
            `#000000`
        )
    }else{
        return(
            `#FFFFFF`
        )
    }
}

const cardParagraph = (card:boolean) => {
    if (card) {
        return`
            display: flex;
            justify-content: center;
            min-height: 80px;

        `
    }

}

export const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300&display=swap');
    font-family: "Exo 2", sans-serif;
    font-weight: bold;
    font-size: 5rem;
    margin: 0; 
    padding: 0;
`

interface TextProps{
    type: string;
    baseline?: boolean;
}
export const H2 = styled.h2<TextProps>`
    font-family: "Exo 2", sans-serif;
    font-size: 4.5rem;
    margin: 36px 0px; 
    padding: 0;
    color: ${props => getColor(props.type)};
    text-align: center;
`
export const H2Indigo = styled.h2<TextProps>`
    font-family: "Exo 2", sans-serif;
    font-size: 2.5rem;
    margin: 36px 0px; 
    padding: 0;
    color: ${props => getColor(props.type)};
    text-align: center;
`


export const H3 = styled.h3<TextProps>`
    font-family: "Exo 2", sans-serif;
    font-size: 2rem;
    margin: 16px 0; 
    padding: 0;
    color: ${props => getColor(props.type)};
    vertical-align: ${props => props.baseline?'super': 'super'};
`

export const H4 = styled.h4<TextProps>`
    font-family: "Exo 2", sans-serif;
    font-size: 2rem;
    margin: 0; 
    padding: 0;
    color: ${props => getColor(props.type)};
    vertical-align: ${props => props.baseline?'super': 'super'};
`

export const H5 = styled.h5<TextProps>`
    font-family: "Exo 2", sans-serif;
    font-size: 2rem;
    margin: 0; 
    padding: 0;
    color: #000000;
    text-align: center;
    position: relative;
    top: -62px;
    
`

interface ParagraphProps{
    weight?: string;
    minHeight?: boolean;
    center?: boolean;
    card?: boolean;
    
}
export const P = styled.p<ParagraphProps>`
    font-family: "Open Sans", sans-serif;
    font-size: 1.3rem;
    margin: 0; 
    padding: 0;
    vertical-align: middle;
    font-weight: ${props => props.weight? props.weight: 'normal'};
    ${props => props.card? cardParagraph(props.card): ''};

    & + & {
        margin-top: 8px;
    } 
`

export const Quote = styled.p<ParagraphProps>`
    font-family: "Open Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0; 
    padding: 0;
    display: inline;
    ${props => props.card? cardParagraph(props.card): ''};

    & + & {
        margin-top: 8px;
    } 
`
