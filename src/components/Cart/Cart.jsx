import PropTypes from 'prop-types';
import { useTheme } from '../../utils/hooks';
import DefaultPicture from '../../assets/img/profile.png'
import { CardWrapper, CardLabel, CardImage, CardTitle } from './CartStyle';


function Card({ label, title, picture }) {
    
    const { theme } = useTheme();
     
    return (
        <CardWrapper theme={theme} >
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle data-testid="title-element" theme={theme}>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
}

export default Card;