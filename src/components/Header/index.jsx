import { Link } from 'react-router-dom';
import styled from 'styled-components';
import darkLogo from '../../assets/img/dark-logo.png'
import lightLogo from '../../assets/img/light-logo.png'
import { useTheme } from '../../utils/hooks';
import { StyleLink } from '../../utils/style/BtnLink'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 150px;
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

    const { theme } = useTheme();

    return(

        <HeaderContainer>

            <FigureLogo>
                <Link to="/"><ImgLogo src={ theme === 'dark' ? lightLogo : darkLogo} alt="Logo Agency shiny" /></Link>   
            </FigureLogo>
            
            <Nav>
                <StyleLink $theme={theme} to="/">Accueil</StyleLink>
                <StyleLink $theme={theme} to="/freelances">Profils</StyleLink>
                <StyleLink  to="/survey/1" $isFullLink={theme}>Faire le test</StyleLink>
            </Nav>

        </HeaderContainer>
    )
}

export default Header;