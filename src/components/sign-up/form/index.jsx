import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState(
        {
            email: "",
            name: "",
            cpf: "",
            password: ""
        }
    );

    const submitSignUp = (event) => {
        event.preventDefault();

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';

        const promise = axios.post(url, signUpData);

        promise.then(() => navigate('/'))

        promise.catch(() => alert('Ops! Houve algum erro...'))

    }

    return (
        <StyledForm onSubmit={submitSignUp}>
                <Inputs {...{signUpData, setSignUpData}}/>
                <SubmitButton />
        </StyledForm>
    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;