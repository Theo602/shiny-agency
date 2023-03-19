import styled from 'styled-components';
import imageError from '../../assets/img/404.svg'
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/style/color'


const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
`;

const FirstTitle = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 25px;
`;

const SecondeTitle = styled.h3`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
`;

const FigureError = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

const ImgNotFound = styled.img`
    width: 60%;
`;

function Error(){

    const { theme } = useTheme();

    return(

        <ContainerFreelance theme={theme}>

            <FirstTitle theme={theme}>Oups...</FirstTitle>

            <FigureError>
                <ImgNotFound src={imageError} alt="Page not found" />
            </FigureError>
            
            <SecondeTitle theme={theme}>Il semblerait que la page que vous cherchez n’existe pas</SecondeTitle>

        </ContainerFreelance>
    )
}

export default Error;