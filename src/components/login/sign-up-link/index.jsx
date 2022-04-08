import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function SignUpLink() {
    return (
        <Container>
            <Link to='/sign-up'>
                Não possuí uma conta? Cadastre-se
            </Link>
        </Container>
    )
}

const Container = styled.div`
    a { 
        font-size: 14px;

        color: white;

        text-decoration: underline;

    }
`;