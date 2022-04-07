import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../../../contexts/UserContext'

import Plan from './plan';

export default function Plans() {
    const { user } = useContext(UserContext);
    const [ plansList, setPlansList ] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        }

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';

        const promise = axios.get(url, config);

        promise.then((response) => setPlansList(response.data))
    }, [])

    return (
        <Container>
            {plansList.map(planData => <Plan {...{planData}}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;