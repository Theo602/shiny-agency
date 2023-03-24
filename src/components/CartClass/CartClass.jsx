import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/img/profile.png'
import styled from 'styled-components';
import colors from '../../utils/style/color'
import { Component } from 'react';


const CardLabel = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 20px;
    font: weight: bold;
    word-break: break-all;
}
`;

const CardTitle = styled.p`
    text-align: center;
    font-size: 18px;
    word-break: break-all;
    color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
}
`;

const CardImage = styled.img`
    border-radius: 50%;
    margin: 20px auto;
    height: 140px;
    width: 140px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 30px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${({ theme }) => (theme === "light" ? '#e2e3e9' : '#312298')};
        
    }
`

class CardClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isFavorite: false,
      }
    }
  
    setFavorite = () => {
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {

      const { theme, picture, label, title } = this.props;
      const { isFavorite } = this.state;
      const star = isFavorite ? '⭐️' : '';

      return (
        <CardWrapper theme={theme} onClick={this.setFavorite}>
          <CardLabel theme={theme}>{label}</CardLabel>
          <CardImage src={picture} alt="freelance" />
          <CardTitle theme={theme}>{star} {title} {star}</CardTitle>
        </CardWrapper>
      )
    }
  }

CardClass.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};

CardClass.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
}

export default CardClass;