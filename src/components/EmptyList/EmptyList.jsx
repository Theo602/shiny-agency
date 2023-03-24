import styled from 'styled-components';
import imageEmpty from '../../assets/img/empty.svg'
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/style/color'


const ContainerError = styled.section`
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

const FigureEmpty = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

const ImgEmpty = styled.img`
    width: 60%;
`;

function EmptyList(){

    const { theme } = useTheme();

    return(

        <ContainerError theme={theme}>

            <FirstTitle theme={theme}>Dommage...</FirstTitle>

            <FigureEmpty>
                <ImgEmpty src={imageEmpty} alt="Image de liste vide"/>
            </FigureEmpty>
            
            <SecondeTitle theme={theme}>Il semblerait que vous n’ayez besoin d’aucune compétence</SecondeTitle>

        </ContainerError>
    )
}

export default EmptyList;