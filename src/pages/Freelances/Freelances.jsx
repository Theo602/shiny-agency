import DefaultPicture from '../../assets/profile.png'
import Cart from '../../components/Cart'

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

            {freelanceProfiles.map((profile,index) => (
                <Cart 
                    key={`${profile.name}-${index}`}
                    label={`${profile.jobTitle}`}
                    picture={`${profile.picture}`}
                    title={`${profile.name}`}
                />
            ))}

        </div>
    )
}

export default Freelances;