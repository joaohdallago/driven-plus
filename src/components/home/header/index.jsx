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

`;