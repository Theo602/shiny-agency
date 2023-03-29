import { StyledBurger } from './BurgerStyle';

const Burger = ({ navOpen, setNavOpen}) => {


  return (
    
    <StyledBurger navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;