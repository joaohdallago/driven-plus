import styled from 'styled-components'

import Perks from './perks';
import Buttons from './buttons';

export default function Main({ membership }) {
    return (
        <Container>
            <Perks {...membership}/>
            <Buttons />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;