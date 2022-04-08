import styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../../../contexts/UserContext'

export default function CancelSubscription() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { token } = user;

    console.log(user)
    
    const cancelSubscription = () => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        const deleteUrl = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'

        const promise = axios.delete(deleteUrl, config);

        promise.then(() => navigate('/subscriptions'))

    }

    return (
        <StyledButton onClick={cancelSubscription}>
            Cancelar plano
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: #FF4747;
`;