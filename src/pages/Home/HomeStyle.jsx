import styled from 'styled-components';
import colors from '../../utils/style/color';
import { PageLink } from '../../utils/style/BtnLink'


export const ContainerHome = styled.section`
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const ContainerLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${PageLink}{
        padding: 10px 50px;
        width: 20%;
        margin-left: 20px;
    }
`;

export const TitleHome = styled.h1`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 40px;
    line-height: 60px;
    padding: 20px;
    width: 79%;
`;

export const FigureRight = styled.figure`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ImageHome = styled.img`
    width: 80%;
`;