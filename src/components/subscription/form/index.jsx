import styled from 'styled-components';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

import Inputs from './inputs';
import SubmitButton from './submit-button';
import ConfirmModal from './confirm-modal'

export default function Form() {
    const { subscriptionId } = useParams()
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ purchaseData, setPurchaseData ] = useState({
        membershipId: subscriptionId,
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    });

    const submit = (event) => {
        event.preventDefault();
        
        setIsModalOpen(true);
    }

    return (
        <StyledForm onSubmit={submit}>
            <Inputs {...{purchaseData, setPurchaseData}}/>
            <SubmitButton />
            {isModalOpen && <ConfirmModal {...{setIsModalOpen, purchaseData}}/>}
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;