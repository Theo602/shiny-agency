import styled from 'styled-components';
import colors from '../../utils/style/color';


export const ContainerError = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
`;

export const FirstTitle = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 25px;
`;

export const SecondeTitle = styled.h3`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
`;

export const FigureEmpty = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

export const ImgEmpty = styled.img`
    width: 60%;
`;