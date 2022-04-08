import styled from 'styled-components';
import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';

import UserIcon from './user-icon';
import Header from './header';
import Main from './main'

export default function Home() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <UserIcon />
            <Header {...user}/>
            <Main {...user}/>
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    padding: 32px 38px 12px;
`;