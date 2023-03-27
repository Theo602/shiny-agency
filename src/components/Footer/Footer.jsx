import { useTheme } from '../../utils/hooks';
import EmailInput from '../EmailInput/EmailImput';
import { FooterContainer, NightModeButton } from './FooterStyle';

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