import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa'

export default function CloseButton({ setIsModalOpen }) {
    return (
        <StyledButton onClick={() => setIsModalOpen(false)}>
            <FaWindowClose
                fontSize='30px'
                color='white'
            />
        </StyledButton>
    )
}

const StyledButton = styled.button`
    position: absolute;
    top: 26px;
    right: 20px;
`;