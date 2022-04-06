import styled from 'styled-components';

import DrivenLogo from './driven-logo'
import Form from './form'
import SignUpLink from './sign-up-link';

export default function Login() {
    return (
        <Container>
            <DrivenLogo />
            <Form />
            <SignUpLink />
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