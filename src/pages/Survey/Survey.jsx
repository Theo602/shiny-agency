import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import { SurveyContext } from "../../utils/context";
import colors from '../../utils/style/color'
import { Loader } from "../../utils/style/Loader";
import { useFetch, useTheme } from "../../utils/hooks";


const ContainerQuestion = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const TittleQuestion = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
`;

const ContentQuestion = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
    padding: 20px;
`;

const ContainerArrow = styled.div`
    padding: 20px;

    & a{
        color:${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
        font-size: 18px;
        margin: 20px;
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorBlack)};
            transition: 1s;
        }
    }
`;

const ContentError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const ContainerReply = styled.div`
  display: flex;
  flex-direction: row;
`

const ReplyBox = styled.button`
  border: none;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 20px;
  font-size: 18px;
  box-shadow: ${(props) => 
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};

   }
    

`

function Survey(){

    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;

    const { answers, saveAnswers } = useContext(SurveyContext);

    const { data, isLoading, error } = useFetch('http://localhost:8000/survey'); 
    const { surveyData } = data;

    const { theme } = useTheme();

    if(error) {
        return <ContentError theme={theme}>Oups il ya un problème</ContentError>
    }
    
    function saveReply(answers){
        
        saveAnswers({ [questionNumber]: answers })
    }
    
    return(

        <ContainerQuestion>

            <TittleQuestion theme={theme}>Question { questionNumber }</TittleQuestion>
            
                {isLoading ?
                
                    (<Loader />)
                    :
                    (<ContentQuestion theme={theme}>{surveyData && surveyData[questionNumber]} </ContentQuestion>)

                }

            <ContainerReply>
            
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>

                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
      
            </ContainerReply>

            <ContainerArrow theme={theme}>

                <Link to={`/survey/${questionPrevious}`}>Précédent</Link>
                
                {surveyData && surveyData[question + 1] ? 
                    (<Link to={`/survey/${questionNext}`}>Suivant</Link>)
                    :
                    (<Link to="/results">Resultats</Link>)
                }

            </ContainerArrow>   

        </ContainerQuestion>
    )
}

export default Survey;