import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color'

const StyleLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: 18px;
    font-size: 18px;
    ${(props) => 
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`
    }
    `;

function Header(){
    return(
        <nav>
            <StyleLink to="/">Accueil</StyleLink>
            <StyleLink to="/freelances">Freelances</StyleLink>
            <StyleLink to="/survey/1" $isFullLink>Questionnaire</StyleLink>
        </nav>
    )
}

export default Header;