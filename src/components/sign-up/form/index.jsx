import styled from 'styled-components';

import Inputs from './inputs';
import SubmitButton from './submit-button';

export default function Form() {
    return (
        <StyledForm onSubmit={alert}>
                <Inputs />
                <SubmitButton />
        </StyledForm>
    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;