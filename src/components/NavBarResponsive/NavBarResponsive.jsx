import { Link } from 'react-router-dom';
import { useTheme } from '../../utils/hooks';

import styled from 'styled-components';
import devices from '../../utils/responsive/devices';
import { StyleLink } from '../../utils/style/BtnLink'

const NavResponsive = styled.nav`
    
    display: none;

    @media screen and ${devices.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: #fff;
        transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.9s ease-in-out;
        z-index: 1;
        ${StyleLink}{
            font-size: 30px;
        }    
    }

`;

function NavBarResponsive({ navOpen }){

    const { theme } = useTheme();

    return(
           
            <NavResponsive navOpen={navOpen}>
                <StyleLink $theme={theme} to="/">Accueil</StyleLink>
                <StyleLink $theme={theme} to="/freelances">Profils</StyleLink>
                <StyleLink  to="/survey/1" $theme={theme}>Faire le test</StyleLink>
            </NavResponsive>

    )
}

export default NavBarResponsive;