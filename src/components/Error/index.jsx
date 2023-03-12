import styled from 'styled-components';
import imageError from '../../assets/img/404.svg'
import colors from '../../utils/style/color'

const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    margin: 4%;
    background: ${colors.backgroundLight};
`;

const FirstTitle = styled.h2`
    color: ${colors.textTitle};
    font-size: 25px;
`;

const SecondeTitle = styled.h3`
    color: ${colors.textTitle};
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
    return(

        <ContainerFreelance>

            <FirstTitle>Oups...</FirstTitle>

            <FigureError>
                <ImgNotFound src={imageError} alt="Page not found" />
            </FigureError>
            
            <SecondeTitle>Il semblerait qu’il y ait un problème</SecondeTitle>

        </ContainerFreelance>
    )
}

export default Error;