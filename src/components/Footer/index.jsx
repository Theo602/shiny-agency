import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/style/color'


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    background-color: ${({ theme }) => (theme === "light" ? colors.primary : colors.backgroundDark)};
    height: 50px;
    padding: 10px;
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.colorWhite};
    font-size: 16px;
`;

function Footer(){

    const { toggleTheme, theme } = useTheme();

    return(
        <FooterContainer theme={theme}>
            <NightModeButton theme={theme} onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;