import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
 
import IsLoadingContext from '../../../contexts/IsLoadingContext'

import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    const { setIsLoading } = useContext(IsLoadingContext);
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
        setIsLoading(true)

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';

        const promise = axios.post(url, signUpData);

        promise.then(() => {
            navigate('/')
            setIsLoading(false)
        })

        promise.catch(() => {
            alert('Ops! Houve algum erro...')
            setIsLoading(false)
        })

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