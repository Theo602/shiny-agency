import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import { SurveyContext } from "../../utils/context";
import colors from '../../utils/style/color'
import { Loader } from "../../utils/style/Loader";

const ContainerQuestion = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const TittleQuestion = styled.h2`
    color: ${colors.primary};
    font-size: 25px;
`;

const ContentQuestion = styled.p`
    color: ${colors.textTitle};
    font-size: 20px;
    padding: 20px;
`;

const ContainerArrow = styled.div`
    padding: 20px;

    & a{
        color:${colors.colorDefaut};
        font-size: 18px;
        margin: 20px;
        text-decoration: none;
        &:hover{
            color:${colors.primary};
            transition: 1s;
        }
    }
`;

const ContentError = styled.p`
    color: ${colors.primary};
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
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 20px;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};

`

function Survey(){
    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(false);
    const { answers, saveAnswers } = useContext(SurveyContext);


    function saveReply(answers){
        
        saveAnswers({ [questionNumber]: answers })
    }
    
    useEffect(() => {

        async function fetchSurvey(){
            setIsDataLoading(true);

            try{
                const response = await fetch('http://localhost:8000/survey');
                const { surveyData } = await response.json();
                setSurveyData(surveyData);
            }
            catch(error){
                console.log('=== error ===', error);
                setError(true);
            }
            finally{
                setIsDataLoading(false);
            }
        }
        fetchSurvey();
    }, []);

    if(error) {
        return <ContentError>Oups il ya un problème</ContentError>
    }

    return(

        <ContainerQuestion>

            <TittleQuestion>Question { questionNumber }</TittleQuestion>
            
                {isDataLoading ?
                
                    (<Loader />)
                    :
                    (<ContentQuestion>{surveyData[questionNumber]} </ContentQuestion>)

                }

            <ContainerReply>
            
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                >
                    Oui
                </ReplyBox>

                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                >
                    Non
                </ReplyBox>
      
            </ContainerReply>

            <ContainerArrow>

                <Link to={`/survey/${questionPrevious}`}>Précédent</Link>
                
                {surveyData[question + 1] ? 
                    (<Link to={`/survey/${questionNext}`}>Suivant</Link>)
                    :
                    (<Link to="/results">Resultats</Link>)
                }

            </ContainerArrow>   

        </ContainerQuestion>
    )
}

export default Survey;