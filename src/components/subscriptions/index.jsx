import styled from 'styled-components';

import Plans from './plans';

export default function Subscriptions() {
    return (
        <Container>
            <h2>Escolha seu Plano</h2>
            <Plans />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;


    h2 {
        font-size: 32px;
    }
`;