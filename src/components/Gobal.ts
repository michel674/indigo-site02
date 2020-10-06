import {createGlobalStyle} from 'styled-components';




interface GlobalProps{
    mode: boolean;
  }
  
export const GlobalStyle = createGlobalStyle<GlobalProps>`
    body{
      margin: 0px;
      padding: 0px;
      transition: background-color 0.5s;
      background-color: ${props => props.mode?'#333333': '#EEEEFF'};
      }

      html{
        font-size: 20px;
      }
    
      @media (min-width: 0px){
        html{
          font-size: 12px;
        }
    
      }
    
    
      @media (min-width: 768px){
        html{
          font-size: 14px;
        }
    
      }
    
      @media (min-width: 1024px){
        html{
          font-size: 16px;
        }
      }
  `
  