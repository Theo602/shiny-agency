import styled from 'styled-components';
import colors from '../../utils/style/color'
import illustrationHome from '../../assets/img/home-illustration.svg'
import { StyleLink } from '../../utils/style/BtnLink'

const ContainerHome = styled.section`
    margin: 4%;
    background: #F9F9FC;
    display: flex;
    align-items: center;
    padding: 4%;
`;

const ContainerLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${StyleLink}{
        padding: 10px 50px;
        width: 20%;
        margin-left: 20px;
    }
`;

const TitleHome = styled.h1`
    color: ${colors.textTitle};
    font-size: 40px;
    line-height: 60px;
    padding: 20px;
    width: 79%;
`;

// const BtnHome = styled(Link)`
//     padding: 20px;
//     text-decoration: none;
//     font-size: 18px;
//     color: white;
//     border: 1px solid transparent;
//     padding: 10px 50px;
//     border-radius: 30px;
//     background-color: ${colors.primary};
//     font-weight: bold;
//     width: 20%;
//     margin-left: 20px;
//     &:hover{
//       text-decoration: none;
//       background-color: ${colors.textTitle};
//       transition: 1s
//    }
// `;

const FigureRight = styled.figure`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ImageHome = styled.img`
    width: 80%;
`;

function Home() {
  return(

    <ContainerHome>

        <ContainerLeft>

            <TitleHome>
                Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
            </TitleHome>

            <StyleLink to="/survey/1" $isFullLink>Faire le test</StyleLink>

        </ContainerLeft>

        <FigureRight>
            <ImageHome src={illustrationHome} alt="Logo Agency shiny" />
        </FigureRight>
        
    </ContainerHome>


  )
}

export default Home;
