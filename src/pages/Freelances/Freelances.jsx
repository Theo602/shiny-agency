import Cart from '../../components/Cart'
import styled from 'styled-components';
import colors from '../../utils/style/color'
import { Loader } from "../../utils/style/Loader";
import { useFetch, useTheme } from "../../utils/hooks";


const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const TitleFreelance = styled.h2`
    font-size: 30px;
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
`;

const TextFreelance = styled.p`
    font-size: 18px;
    color: ${({ theme }) => (theme === "light" ? colors.textSousTitle : colors.colorWhite)};
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 2% 0;
    width: 50%;
`;

const ContentError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

function Freelances(){
     
    const { data, isLoading, error } = useFetch('http://localhost:8000/freelances'); 
    const { freelancersList } = data;   
    const { theme } = useTheme();
    
    if(error) {
        return <ContentError theme={theme}>Oups il ya un problème</ContentError>
    }

    return(
        
        <ContainerFreelance>

            <TitleFreelance theme={theme}>Trouvez votre prestataire</TitleFreelance>
            <TextFreelance theme={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</TextFreelance>

            { isLoading ?
            
                (<Loader data-testid="loader" />)
                
                :

                (<CardsContainer theme={theme}>
                    
                    {  
                        freelancersList.map((profil, index ) => (
                                                      
                            <Cart 
                                key={`${profil.name}-${profil.id}`}
                                label={ profil.job }
                                picture={ profil.picture }
                                title={ profil.name }
                            />

                        ))  
                    }

                </CardsContainer>)
            }

            
        </ContainerFreelance>
    )
}

export default Freelances;