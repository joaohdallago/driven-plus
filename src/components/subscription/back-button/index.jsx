import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'

import IsLoadingContext from '../../../contexts/IsLoadingContext';

import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
    const { setIsLoading } = useContext(IsLoadingContext);
    const navigate = useNavigate();

    const goBack = () => {
        setIsLoading(true);
        navigate(-1)
    }

    return (
        <Container onClick={goBack}>
            <FaArrowLeft fontSize='30' color='white'/>
        </Container>
    )
}

const Container = styled.div`
`;