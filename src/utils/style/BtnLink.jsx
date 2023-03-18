import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './color'


export const StyleLink = styled(Link)`
    padding: 20px; 
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: ${({ $theme }) => ($theme === "light" ? colors.primary : colors.colorWhite)};
    &:hover{
        text-decoration: underline ${({ $theme }) => ($theme === "light" ? colors.primary : colors.colorWhite)};
    }
    ${(props) => 
        props.$isFullLink &&
        `
            color: ${colors.colorWhite};
            border: 1px solid transparent; 
            padding: 15px 25px;
            border-radius: 30px;
            background-color: ${colors.primary}; 
            font-weight: bold;
            &:hover{
                text-decoration: none;
                color: ${(props.$isFullLink === "light" ? colors.colorWhite : colors.colorDefaut)};
                background-color: ${(props.$isFullLink === "light" ? colors.textTitle : colors.colorWhite)};
                transition: 1s;
         }`
    }

    `;


 