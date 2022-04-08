import styled from 'styled-components';

import ChangeSubscription from './change-subscription';
import CancelSubscription from './cancel-subscription';

export default function Buttons() {
    return(
        <Container>
            <ChangeSubscription />
            <CancelSubscription />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    >button {
        height: 52px;

        border-radius: 8px;

        font-weight: 700;
        font-size: 14px;

        
        color: #FFFFFF;
    }
`;