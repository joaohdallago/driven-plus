import styled from 'styled-components';
import { useContext } from 'react';

import UserContext from '../../../../../contexts/UserContext'


export default function ChangeSubscription() {
    const { user } = useContext(UserContext);

    return (
        <StyledButton>
            Mudar plano
        </StyledButton>
    )  
}

const StyledButton = styled.button`
    background-color: #FF4791;
`;