import { Link } from 'react-router-dom';
import { useTheme } from '../../utils/hooks';
import darkLogo from '../../assets/img/dark-logo.png'
import lightLogo from '../../assets/img/light-logo.png'
import { StyleLink } from '../../utils/style/BtnLink'
import { HeaderContainer, FigureLogo, ImgLogo, Nav } from './HeaderStyle'


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