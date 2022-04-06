import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    const navigate = useNavigate();

    const [ loginData, setLoginData ] = useState(
        {
            email: "",
            password: ""
        }
    )

    const submitLogin = (event) => {
        event.preventDefault();

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';

        const promise = axios.post(url, loginData);

        promise.then((response) => {
            response.data.subscriptions ?
                navigate('/home')
            :
                navigate('/subscriptions');
        })

        promise.catch(() => alert('Ops! Houve algum erro...'))
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