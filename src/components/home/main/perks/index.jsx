import styled from 'styled-components';

import Perk from './perk'

export default function Perks({ perks }) {

    return (
        <Container>
            {perks.map(perkData => <Perk {...perkData}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;