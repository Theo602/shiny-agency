import { useEffect, useState } from "react";
import Cart from '../../components/Cart'
import styled from 'styled-components';
import colors from '../../utils/style/color'
import { Loader } from "../../utils/style/Loader";

const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

const TitleFreelance = styled.h1`
    font-size: 30px;
    color: ${colors.textTitle};
`;

const TextFreelance = styled.p`
    font-size: 18px;
    color: ${colors.textSousTitle};
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 2% 0;
    width: 50%;
`;

const ContentError = styled.p`
    color: ${colors.primary};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

function Freelances(){
     
    const [freelancersList, setFreelancersList] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        async function fetchProfil(){

            setIsDataLoading(true);

            try {
                const response = await fetch('http://localhost:8000/freelances');
                const  { freelancersList }  = await response.json(); 
                setFreelancersList(freelancersList);                      
            } 
            catch (error) {
                console.log('=== error ===', error);
                setError(true);
            }
            finally{
                setIsDataLoading(false);
            }
        }
        fetchProfil();

    }, [])   
     
    if(error) {
        return <ContentError>Oups il ya un problème</ContentError>
    }

    return(
        
        <ContainerFreelance>

            <TitleFreelance>Trouvez votre prestataire</TitleFreelance>
            <TextFreelance>Chez Shiny nous réunissons les meilleurs profils pour vous.</TextFreelance>

            { isDataLoading ?
            
                (<Loader />)
                :

                (<CardsContainer>
                    
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