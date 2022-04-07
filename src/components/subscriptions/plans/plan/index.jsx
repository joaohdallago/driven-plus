import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Plan({ planData }) {
    const { id, image, price } = planData;

    const formattedPrice = 'R$ ' + price.replace('.', ',')
    return (
        <Link to={'/subscriptions/' + id}>
            <Container>
                <img src={image} alt="plan image" />

                <span>{formattedPrice}</span>
            </Container>
        </Link>
    )
}

const Container = styled.div`
    width: 290px;
    height: 180px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border: 3px solid #7E7E7E;

    border-radius: 12px;

    img {
        height: 92px
    };

    span {
        font-size: 24px;
        font-weight: bold;
    }
`;