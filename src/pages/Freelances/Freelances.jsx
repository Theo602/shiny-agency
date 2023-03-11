import DefaultPicture from '../../assets/img/profile.png'
import Cart from '../../components/Cart'
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
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
    ]

    return(
        <div>

            <h1>Freelances</h1>

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
            
        </div>
    )
}

export default Freelances;