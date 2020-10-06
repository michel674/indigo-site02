import styled from 'styled-components';
import connectionsBackground from '../components/images/connections_bg.png';

export const ConectionsBackground = styled.div`
    background:  url(${connectionsBackground}) 50% 50% no-repeat;
    height: 200px;;
    display: flex;
    align-items: center;
    justify-content: center;    
`

export const ConectionsTextWrapper = styled.div`
    background-color: #EEEEEE;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    padding-right: 30%;
    @media (max-width: 968px) {
        padding: 20px;
        display: block;
        text-align: center;
    }



`