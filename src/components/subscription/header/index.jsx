import styled from 'styled-components';

export default function Header({ image, name }) {
    return (
        <Container>
            <div>
                <img src={image} alt="subscription image" />
                <h2>{name}</h2>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    div {
            img {
                height: 95px;

                margin-bottom: 12px;
            }

            h2 {
                font-size: 32px;
            }
    }
`;