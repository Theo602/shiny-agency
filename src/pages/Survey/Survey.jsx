import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/color'
import { Loader } from "../../utils/style/Loader";

const ContainerQuestion = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
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
`;

function Survey(){
    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(false);

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