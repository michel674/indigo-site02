import styled from 'styled-components';


interface ContainerProps {
    paddingNone?: boolean;
    fluid?: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin-right: auto;
    box-sizing: border-box;
    width: 100%;
    padding: ${(props: ContainerProps) => props.paddingNone? ' ':'0 15px 0 15px'};
    margin: ${(props: ContainerProps) => props.fluid? '0px':''};
    
    
    
`;


interface RowProps {
    align?: string;
    verticalAlign?: string;
    
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: ${(props: RowProps) => props.align ? props.align : 'flex-start'};
    align-items: ${(props: RowProps) => props.verticalAlign ? props.verticalAlign : 'flex-start'};
`;


function getWidthGrid(value: number){
    if(!value) return;
    let width = value/12*100;
    return`flex-basis: ${width}%;
    max-width: ${width}%;`;

}


interface ColumnProps {
    paddingNone?: boolean;
    align?: string;
    mobile?: number;
    tablet?: number;
    desktop?: number;
    contact?: boolean;
    fullHeight?: boolean;

}

export const Column = styled.div<ColumnProps>`
    padding: ${(props: ColumnProps)=> props.paddingNone? '0px' : '1rem'};
    min-height: 1px;
    box-sizing: border-box;
    text-align: ${(props: ColumnProps) => props.align ? props.align : 'left'};
    height: ${props => props.fullHeight?'100%': ''};
        

    @media only screen and (max-width: 768px){
        ${({mobile})=> mobile && getWidthGrid(mobile)}
    }

    @media only screen and (min-width: 768px){
        ${({tablet})=> tablet && getWidthGrid(tablet)}
    }

    @media only screen and (min-width: 1000px){
        ${({desktop})=> desktop && getWidthGrid(desktop)}
    }



`
export const Center = styled.div`
    margin: 0 auto;
    width: 100%;
`