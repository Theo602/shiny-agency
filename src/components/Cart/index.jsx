import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/img/profile.png'
import styled from 'styled-components';
import colors from '../../utils/style/color'


const CardLabel = styled.p`
    color: #5843e4;
    font-size: 20px;
    font: weight: bold;
    word-break: break-all;
}
`;

const CardTitle = styled.p`
    text-align: center;
    font-size: 18px;
    word-break: break-all;
}
`;

const CardImage = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin: 10px auto;
`;



const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
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