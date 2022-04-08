import styled from 'styled-components';
import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';

import UserIcon from './user-icon';
import Header from './header';
import Perks from './perks';
import Buttons from './buttons';

export default function Home() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <UserIcon />
            <Header {...user}/>
            <Perks />
            <Buttons />
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;

    padding: 32px 38px 12px;
`;