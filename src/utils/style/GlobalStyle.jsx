import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react'
import { ThemeContext } from '../context/';


const StyledGlobalStyle = createGlobalStyle`
    body{
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : '#fff')};
    }  

    ::before,
    ::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
`;


function GlobalStyle(){
    const { theme } = useContext(ThemeContext);
    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}


export default GlobalStyle;