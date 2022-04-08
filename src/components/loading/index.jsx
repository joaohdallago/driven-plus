import styled from 'styled-components';
import { useContext } from 'react';
import { ThreeDots } from  'react-loader-spinner'

import IsLoadingContext from '../../contexts/IsLoadingContext';

export default function Loading() {
    const { isLoading } = useContext(IsLoadingContext);

    return (
        <>
            {isLoading && (
                <Container>
                    <ThreeDots
                        height="100"
                        width="100"
                        color="white"
                        ariaLabel='loading'
                    />
                </Container>
            )}
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
`;