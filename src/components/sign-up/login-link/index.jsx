import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function LoginLink() {
    return (
        <Container>
            <Link to='/'>
                Já possuí uma conta? Entre
            </Link>
        </Container>
    )
}

const Container = styled.div`
    a { 
        font-size: 14px;

        color: white;
    }
`;