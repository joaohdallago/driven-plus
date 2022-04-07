import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
    return (
        <Link to='/subscriptions'>
            <Container>
                <FaArrowLeft fontSize='30' color='white'/>
            </Container>
        </Link>
    )
}

const Container = styled.div`
`;