import { useFetch, useTheme } from "../../utils/hooks";
import Cart from '../../components/Cart/Cart';
import { Loader } from "../../utils/style/Loader";
import { ContentError, ContainerFreelance, TitleFreelance, TextFreelance, CardsContainer, LinkCart} from './FreelancesStyle'


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

                (
                    <CardsContainer theme={theme}>
                        
                        {  
                            freelancersList.map((profil, index ) => (
                                <LinkCart key={`freelance-${profil.id}`} to={`/profile/${profil.id}`}>                          
                                <Cart 
                                    key={`${profil.name}-${profil.id}`}
                                    label={ profil.job }
                                    picture={ profil.picture }
                                    title={ profil.name }
                                    theme={ theme }
                                />
                                </LinkCart>
                            ))  
                        }

                    </CardsContainer>
                )
            }
 
        </ContainerFreelance>
    )
}

export default Freelances;