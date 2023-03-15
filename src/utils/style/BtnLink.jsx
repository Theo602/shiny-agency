import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './color'


export const StyleLink = styled(Link)`
    padding: 20px; 
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: ${({ $theme }) => ($theme === "light" ? '#5843E4' : '#fff')};
    &:hover{
        text-decoration: underline ${({ $theme }) => ($theme === "light" ? '#5843E4' : '#fff')};
    }
    ${(props) => 
        props.$isFullLink &&
        `
            color: #fff; 
            border: 1px solid transparent; 
            padding: 15px 25px;
            border-radius: 30px;
            background-color: ${colors.primary}; 
            font-weight: bold;
            &:hover{
                text-decoration: none;
                background-color: ${colors.textTitle};
                transition: 1s
         }`
    }

    `;


 