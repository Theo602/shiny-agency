import styled from 'styled-components';
import colors from '../../utils/style/color';


export const ContainerFreelance = styled.section`
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

export const FigureError = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

export const ImgNotFound = styled.img`
    width: 60%;
`;