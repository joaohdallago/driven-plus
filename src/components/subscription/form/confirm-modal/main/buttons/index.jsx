import styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../../../../../contexts/UserContext';

export default  function Buttons({ setIsModalOpen, purchaseData }) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const { token, email, password } = user;

    const makePurchase = () => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        };

        const purchaseUrl = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';

        const promise = axios.post(purchaseUrl, purchaseData, config);

        promise.then(() => {
            const loginUrl = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
            
            axios.post(loginUrl, {email, password}, config).then(response => {
                setUser(response.data)
                navigate('/home')
            })
        })

        promise.catch(() => alert('Ops! Houve algum erro...'))
    }

    return (
        <Container>
            <button
                style={{backgroundColor: '#CECECE'}}
                onClick={() => setIsModalOpen(false)}
            >Não</button>
            <button
                onClick={makePurchase}
                style={{backgroundColor: '#FF4791'}}
            >SIM</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        width: 95px;
        height: 52px;

        border-radius: 8px;

        font-weight: 700;
        font-size: 14px;

        color: #FFFFFF;
    }

`;