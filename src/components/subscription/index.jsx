import styled from "styled-components";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserContext from '../../contexts/UserContext';

import BackButton from './back-button';
import Header from './header';
import PerksAndPrices from "./perks-and-price";
import Form from "./form";

export default function Subscription() {
    const { user } = useContext(UserContext);
    const { subscriptionId } = useParams();
    const [ subscriptionData, setSubscriptionData ] = useState({
        "id": '',
        "name": "",
        "image": "",
        "price": "",
        "perks": []
    });

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        }

        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/' + subscriptionId;


        const promise = axios.get(url, config);

        promise.then(response => setSubscriptionData(response.data))
    }, []);

    const { name, image, perks, price } = subscriptionData;

    return (
        <Container>
            <BackButton />
            <Header {...{name, image}}/>
            <PerksAndPrices {...{perks, price}}/>
            <Form />
        </Container>
    )
};

const Container = styled.div`
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    >div, >a {
        width: 100%;
    }
`;