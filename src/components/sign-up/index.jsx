import styled from 'styled-components';

import Form from './form';
import LoginLink from './login-link';

export default function SignUp() {
    return (
        <Container>
            <Form />
            <LoginLink />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
    gap: 24px;

    padding-bottom: 148px;
`;