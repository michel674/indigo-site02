import styled from 'styled-components';


interface IMGProps{
    minHeight?: boolean;
}

export const IMG = styled.img<IMGProps>`
    max-height: ${props => props.minHeight? '100px': 'auto'};


`