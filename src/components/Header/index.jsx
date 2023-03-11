import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/dark-logo.png'
import { StyleLink } from '../../utils/style/BtnLink'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const FigureLogo = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgLogo = styled.img`
width: 80%;
`;

const Nav = styled.nav`
    padding-right: 2%;
`;

function Header(){
    return(

        <HeaderContainer>

            <FigureLogo>
                <Link to="/"><ImgLogo src={logo} alt="Logo Agency shiny" /></Link>
                
            </FigureLogo>
            
            <Nav>
                <StyleLink to="/">Accueil</StyleLink>
                <StyleLink to="/freelances">Profils</StyleLink>
                <StyleLink to="/survey/1" $isFullLink>Faire le test</StyleLink>
            </Nav>

        </HeaderContainer>
    )
}

export default Header;