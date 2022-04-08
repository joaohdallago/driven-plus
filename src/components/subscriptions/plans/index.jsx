import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../../../contexts/UserContext'
import IsLoadingContext from '../../../contexts/IsLoadingContext';

import Plan from './plan';

export default function Plans() {
    const { setIsLoading } = useContext(IsLoadingContext);
    const { user } = useContext(UserContext);
    const [ plansList, setPlansList ] = useState([]);

    const { token } =  user
    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';

        const promise = axios.get(url, config);

        promise.then((response) => {
            setPlansList(response.data)
            setIsLoading(false)
        })
    }, [setIsLoading, token]);

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