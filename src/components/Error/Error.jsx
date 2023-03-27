import { useTheme } from '../../utils/hooks';
import imageError from '../../assets/img/404.svg';
import {ContainerFreelance, FirstTitle, FigureError, ImgNotFound, SecondeTitle } from './ErrorStyle';

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