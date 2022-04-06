import styled from 'styled-components';

export default function Inputs() {
    return (
        <Container>
            <input
                type="text"
                placeholder="Nome"
            />
            <input
                type="number"
                placeholder="CPF" 
            />
            <input
                type="email"
                placeholder="E-mail"
            />
            <input
                type="password"
                placeholder="Senha" 
            />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
        width: 299px;
        height: 52px;

        border-radius: 8px;

        font-size: 14px;
        text-indent: 14px;

        ::placeholder {
            font-size: 14px;

            color: #7E7E7E;
        }
    }
`;