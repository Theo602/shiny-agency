import DefaultPicture from '../../assets/img/profile.png'
import Cart from '../../components/Cart'
import styled from 'styled-components';
import colors from '../../utils/style/color'

const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
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
`;



function Freelances(){
     
    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]

    return(
        <ContainerFreelance>

            <TitleFreelance>Trouvez votre prestataire</TitleFreelance>
            <TextFreelance>Chez Shiny nous réunissons les meilleurs profils pour vous.</TextFreelance>

            <CardsContainer>
                {freelanceProfiles.map((profile,index) => (
                    <Cart 
                        key={`${profile.name}-${index}`}
                        label={`${profile.jobTitle}`}
                        picture={`${profile.picture}`}
                        title={`${profile.name}`}
                    />
                ))}
            </CardsContainer>
            
        </ContainerFreelance>
    )
}

export default Freelances;