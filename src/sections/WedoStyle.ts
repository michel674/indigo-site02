import styled from 'styled-components';

export const WeDoContainer = styled.div`
    margin-left: 20%;
    min-width: 1060px;
    min-height: 950px;
    background-color: #000000;
    padding-bottom: 30px;
    z-index: 1;
    @media only screen and (max-width: 1060px){
        min-width: 0;
        width: 100%;
        margin-left: 0;
    }

    &::before {
        z-index: -1;
        content: " ";
        position: absolute;
        background: #EEE;
        height: 50%;
        width: 100%;
        left: 0;
    }
`

interface imageProps{
    type?: string;
}
export const IMG = styled.img<imageProps>`
    flex-shrink: 1;
    ${props=> props.type==='weDoImage'?'width: 100%': ''};
`

