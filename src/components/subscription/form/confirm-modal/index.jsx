import styled from 'styled-components';

import CloseButton from './close-button'
import Main from './main';

export default function ConfirmModal({ setIsModalOpen}) {
    return (
        <Container>
            <CloseButton {...{setIsModalOpen}}/>
            <Main />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
`;