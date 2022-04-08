import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import UserContext from '../../../contexts/UserContext'
import IsLoadingContext from '../../../contexts/IsLoadingContext'

import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    const { setIsLoading } = useContext(IsLoadingContext);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [ loginData, setLoginData ] = useState(
        {
            email: "",
            password: ""
        }
    )

    const submitLogin = (event) => {
        event.preventDefault();
        setIsLoading(true)

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';

        const promise = axios.post(url, loginData);

        promise.then((response) => {
            setUser(response.data)
            response.data.membership ?
                navigate('/home')
            :
                navigate('/subscriptions');
        })

        promise.catch(() => {
            setIsLoading(false)
            alert('Ops! Houve algum erro...')
        })
    }

    return (
        <StyledForm onSubmit={submitLogin}>
                <Inputs {...{loginData, setLoginData}}/>
                <SubmitButton />
        </StyledForm>
    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;