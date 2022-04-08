import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import IsLoadingContext from '../../../../../contexts/IsLoadingContext';

export default function ChangeSubscription() {
    const { setIsLoading } = useContext(IsLoadingContext);
    const navigate = useNavigate();

    const changeSubscription = () => {
        setIsLoading(true)
        navigate('/subscriptions')
    }

    return (
        <StyledButton onClick={changeSubscription}>
            Mudar plano
        </StyledButton>
    )  
}

const StyledButton = styled.button`
    background-color: #FF4791;
`;