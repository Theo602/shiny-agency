import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/style/color'
import EmailInput from '../EmailInput/EmailImput';


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    background-color: ${({ theme }) => (theme === "light" ? colors.primary : colors.backgroundDark)};
    height: 50px;
    padding: 20px;
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.colorWhite};
    font-size: 16px;
    margin: 0px 20px;
`;

function Footer(){

    const { toggleTheme, theme } = useTheme();

    return(
        <FooterContainer theme={theme}>
            <EmailInput theme={theme} /> 
            <NightModeButton theme={theme} onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;