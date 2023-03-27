import colors from '../../utils/style/color'
import styled from 'styled-components'
import { useFetch, useTheme } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../../utils/style/Loader";

const ContainerProfile = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4%;
    min-height: calc(100vh - 200px);
    padding: 4%;
    background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 30px;
`;

const FigureProfile = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgProfile = styled.img`
    border-radius: 50%;
    margin: 20px auto;
    height: 150px;
    width: 150px;
`;

const DetailProfile = styled.div`
    margin-left: 3%;
`;

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
`;

const TitleProfile = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 30px;
    font-weight: 800;
    margin: 0;
`;

const LocationProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.secondary : colors.colorWhite)};
    font-size: 20px;
    margin: 3px 0 0 50px;
    font-weight: 600;
`;


const JobTitle = styled.h3`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 25px;
    font-weight: 800;
    margin: 0;
    padding-top: 20px;
`;

const ContainerSkills = styled.div`
    display: flex;
`;

const SkillProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    margin-right: 10px;
    border: 2px solid ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};;
    padding: 5px;
    border-radius: 5px;
`;

const Availability = styled.p`
    &:before {
      position: absolute;
      left: 0;
      top: 4px;
      height: 10px;
      width: 10px;
      border-radius: 5px;
      background-color: ${({ available }) => (available ? 'green' : 'red')};
      content: '';
}
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    padding-left: 20px;
    position: relative;
`;

const PriceProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
    font-weight: bold;
`;

const FetchError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

function Profile(){
  
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelance?id=${id}`); 
  const { freelanceData } = data; 
  const { theme } = useTheme(); 
  

  if(error) {
    return <FetchError>Oups il ya un problème</FetchError>
  }

  return(

    <ContainerProfile theme={theme}>

        { isLoading ?

            (<Loader />)

            :

            (
              <>

                  <FigureProfile>
                    <ImgProfile src={freelanceData.picture}  alt={freelanceData.name}/> 
                  </FigureProfile>

                  <DetailProfile>

                      <ContainerTitle>
                          <TitleProfile theme={theme}>{freelanceData.name}</TitleProfile>
                          <LocationProfile theme={theme}>{freelanceData.location}</LocationProfile>
                      </ContainerTitle>

                      <JobTitle theme={theme}>{freelanceData.job}</JobTitle>

                      <ContainerSkills>
                          {freelanceData.skills && freelanceData.skills.map((skill) => (
                              <SkillProfile key={`skill-${skill}-${id}`} theme={theme}>
                                  {skill}
                              </SkillProfile>
                          ))}
                      </ContainerSkills>

                      <Availability theme={theme} available={freelanceData.available}>
                            {freelanceData.available ? 'Disponible maintenant' : 'Indisponible'}
                      </Availability>

                      <PriceProfile theme={theme}>{freelanceData.tjm} € / jour</PriceProfile>

                  </DetailProfile>

              </>

            )

        }

    </ContainerProfile>    

  )

}

export default Profile;