import styled from 'styled-components';

import Perks from './perks';
import Price from './price';

export default function PerksAndPrices({ perks, price }) {
    return(
        <Container>
            <Perks perksList={perks}/>
            <Price {...{price}}/>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        header {
            span {
                font-size: 16px;
            }
        }

        ul {
            font-size: 14px;
        }
    }
`;