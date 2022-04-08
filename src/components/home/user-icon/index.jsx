import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

export default function UserIcon() {
    return (
        <Container>
            <FaUserCircle
                fontSize='34px'
            />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 23px;
    right: 23px;
`; 