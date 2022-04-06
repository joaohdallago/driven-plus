import styled from 'styled-components';

export default function Inputs({ loginData, setLoginData }) {
    const { email, password } = loginData;
    
    return (
        <Container>
            <input
                type="email"
                placeholder="E-mail"
                required
                onChange={e => setLoginData({...loginData, email: e.target.value})}
                value={email}
            />
            <input
                type="password"
                placeholder="Senha" 
                required
                onChange={e => setLoginData({...loginData, password: e.target.value})}
                value={password}
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