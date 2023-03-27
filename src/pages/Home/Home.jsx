import { useTheme } from "../../utils/hooks";
import illustrationHome from '../../assets/img/home-illustration.svg';
import { PageLink } from '../../utils/style/BtnLink'
import {ContainerHome, ContainerLeft, TitleHome, FigureRight, ImageHome} from './HomeStyle';


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
