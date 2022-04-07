import styled from 'styled-components';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    const { subscriptionId } = useParams()

    const [ purchaseData, setPurchaseData ] = useState({
        membershipId: subscriptionId,
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    });

    const submit = (event) => {
        event.preventDefault();

        alert()
    }

    return (
        <StyledForm onSubmit={submit}>
            <Inputs {...{purchaseData, setPurchaseData}}/>
            <SubmitButton />
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;