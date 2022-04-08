import styled from 'styled-components';

export default function Header({ name, membership }) {
    const { image } = membership
    
    return (        
        <Container>
            <div>
                <img src={image} alt="membership icon" />
            </div>

            <h3>Olá, {name}</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-bottom: 53px;

    >div {
        >img {
            height: 50px;
        }
    }

    >h3 {
        font-size: 24px;
        text-align: center;
    }
`;