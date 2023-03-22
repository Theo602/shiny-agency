import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/img/profile.png'
import styled from 'styled-components';
import colors from '../../utils/style/color'
import { useTheme } from '../../utils/hooks';
import { useState } from 'react';


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

function Card({ label, title, picture }) {
    
    const { theme } = useTheme();
    const [isFavorite, setIsFavorite ] = useState(false);
    const star = isFavorite ? '⭐️' : '';

    return (
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle data-testid="title-element" theme={theme}>
                {star} {title} {star}
            </CardTitle>
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