import { useTheme } from '../../utils/hooks';
import { StyledBurger } from './BurgerStyle';

const Burger = ({ navOpen, setNavOpen}) => {

  const { theme } = useTheme();

  return (
    
    <StyledBurger theme={theme} navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;