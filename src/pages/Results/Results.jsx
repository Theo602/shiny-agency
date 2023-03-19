import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { useFetch, useTheme } from "../../utils/hooks";
import colors from '../../utils/style/color'
import styled from 'styled-components';
import { Loader } from "../../utils/style/Loader";
import { PageLink } from "../../utils/style/BtnLink";


const ContainerResults = styled.section`
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const ContentResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ContentInformation = styled.div`
    max-width: 60%;
    padding: 40px 0;
`;

const ContentDescription = styled.div`
    margin: 30px 0;
`;

const ContentError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleResults = styled.h2`
    font-size: 30px;
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 30px;
    word-break: break-all;
    max-width: 47%;
    line-height: 50px;
    text-align: center;
    padding-bottom: 20px;
    
`;

const SubTitleResults = styled.span`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    padding-left: 10px;
`;

const TittleInformation = styled.h3`
    font-size: 25px;
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    margin: 10px 0px;
`;

const TextInformation = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
    font-size: 20px;
    margin: 0px;
    line-height: 25px;
`;

const TextError = styled.p`
    font-size: 25px;
    color: ${({ theme }) => (theme === "light" ? colors.textSousTitle : colors.colorWhite)};
    margin: 30px 0px;
`

const FetchError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

function formatFetchParams(answers){
    
    const answersNumbers = Object.keys(answers);

    return answersNumbers.reduce((previousParams, answersNumbers, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? '' : '&';
        return `${previousParams}${separator}a${answersNumbers}=${answers[answersNumbers]}`;
    }, '');
}

const firstLetterCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Results(){
    
    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    const fetchParams = formatFetchParams(answers);
    const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${fetchParams}`);

    const { resultsData } = data;

    if(error) {
        return <FetchError>Oups il ya un problème</FetchError>
    }

    return (

        <ContainerResults theme={theme}>

            { isLoading ?

                (<Loader />) 

                :

                (
                    <>
                    
                        {
                            (resultsData.length !== 0) ?  

                            (
                            
                                <ContentResults>

                                    <TitleResults theme={theme}>Les compétences dont vous avez besoin :
                                      
                                        {
                                            resultsData.map((title, index) => (
                                                <SubTitleResults theme={theme} key={`result-title-${title.title}-${index}` }>
                                                    {firstLetterCapitalize(title.title)}   
                                                    {index === resultsData.length - 1 ? '' : ','}                
                                                </SubTitleResults>
                                            ))
                                        }
                                        
                                    </TitleResults>
                                    
                                    <PageLink to="/freelances" $theme={theme}>Découvrez nos profils</PageLink>

                                    <ContentInformation>
                                        {
                                                resultsData.map((title, index) => (
                                                    <ContentDescription key={`result-details-${title.title}-${index}`}>
                                                        <TittleInformation theme={theme}>
                                                            {firstLetterCapitalize(title.title)}
                                                        </TittleInformation>
                                                        <TextInformation theme={theme}>
                                                            {firstLetterCapitalize(title.description)}
                                                        </TextInformation>
                                                    </ContentDescription>
                                                            
                                                )) 
                                        }  
                                    </ContentInformation>
                                    
                                </ContentResults>
                            )

                            :

                            (
                                <ContentError>
                                    <TextError theme={theme}>Pas de résultats, veuillez répondre au questionnaire</TextError>
                                    <PageLink to="/survey/1" $theme={theme}>Faire le test</PageLink>
                                </ContentError>
                            )

                        }
                               
                    </>
                )
            }
            
        </ContainerResults>

    )
}

export default Results;