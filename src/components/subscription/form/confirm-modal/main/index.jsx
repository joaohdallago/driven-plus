import styled from 'styled-components';
import { useContext } from 'react';

import SubscriptionContext from '../../../../../contexts/SubscriptionContext';

import Buttons from './buttons';

export default function Main() {
    const { subscriptionData } = useContext(SubscriptionContext);

    const { name, price } = subscriptionData;
    return (
        <Container>
            <header>
                <span>
                    Tem certeza que deseja assinar o plano 
                </span>
                <br />
                <span>{name} (R$ {price.replace('.', ',')})?</span>
            </header>

            <Buttons />
        </Container>
    )
}

const Container = styled.div`
    width: 248px;
    height: 210px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 33px 22px 12px;

    border-radius: 12px;

    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #000000;
    background: #FFF;
`;