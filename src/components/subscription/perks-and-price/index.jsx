import styled from 'styled-components';
import { useContext } from 'react';

import SubscriptionContext from '../../../contexts/SubscriptionContext';

import Perks from './perks';
import Price from './price';

export default function PerksAndPrices() {
    const { subscriptionData } = useContext(SubscriptionContext);
    
    const { perks, price } = subscriptionData

    return(
        <Container>
            <Perks perksList={perks}/>
            <Price {...{price}}/>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        header {
            span {
                font-size: 16px;
            }
        }

        ul {
            font-size: 14px;
        }
    }
`;