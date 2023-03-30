import { useTheme } from '../../utils/hooks';
import { useEffect, useState } from 'react';
import { StyleLink } from '../../utils/style/BtnLink';
import { NavResponsive } from './NavBarResponsiveStyle';

function NavBarResponsive({ navOpen, setNavOpen }){

    const { theme } = useTheme();
    const [ checkWidth, setCheckWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setCheckWidth(window.innerWidth);

            if(window.innerWidth > 992) {
                setNavOpen(false);
            }

        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [setNavOpen]);

    return(
        <>
           { (checkWidth <= 992) && (
                
                <NavResponsive theme={theme} navOpen={navOpen}>
                    <StyleLink $theme={theme} to="/">Accueil</StyleLink>
                    <StyleLink $theme={theme} to="/freelances">Profils</StyleLink>
                    <StyleLink  to="/survey/1" $theme={theme}>Faire le test</StyleLink>
                </NavResponsive>
           )

           }

        </>

    )
}

export default NavBarResponsive;