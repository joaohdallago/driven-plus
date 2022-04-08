import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import IsLoadingContext from '../../../../contexts/IsLoadingContext'

export default function Plan({ planData }) {
    const { setIsLoading } = useContext(IsLoadingContext);
    const navigate = useNavigate();
    const { id, image, price } = planData;

    const formattedPrice = 'R$ ' + price.replace('.', ',')

    const goToSubscription = () => {
        setIsLoading(true);
        navigate('/subscriptions/' + id)
    }

    return (
        <Container onClick={goToSubscription}>
            <img src={image} alt="plan image" />
            <span>{formattedPrice}</span>
        </Container>
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