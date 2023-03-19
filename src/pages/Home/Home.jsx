import styled from 'styled-components';
import colors from '../../utils/style/color'
import illustrationHome from '../../assets/img/home-illustration.svg'
import { PageLink } from '../../utils/style/BtnLink'
import { useTheme } from "../../utils/hooks";


const ContainerHome = styled.section`
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const ContainerLeft = styled.div`
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

const TitleHome = styled.h1`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 40px;
    line-height: 60px;
    padding: 20px;
    width: 79%;
`;

const FigureRight = styled.figure`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ImageHome = styled.img`
    width: 80%;
`;

function Home() {

    const { theme } = useTheme();

    return(

        <ContainerHome theme={theme}>

            <ContainerLeft>

                <TitleHome theme={theme}>
                    Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
                </TitleHome>

                <PageLink to="/survey/1" $theme={theme}>Faire le test</PageLink>

            </ContainerLeft>

            <FigureRight>
                <ImageHome src={illustrationHome} alt="Logo Agency shiny" />
            </FigureRight>
            
        </ContainerHome>


    )
}

export default Home;
