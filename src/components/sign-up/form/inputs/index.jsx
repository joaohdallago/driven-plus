import styled from 'styled-components';

export default function Inputs({ signUpData, setSignUpData }) {
    const { name, cpf, email, password } = signUpData;

    console.log(signUpData);
    
    return (
        <Container>
            <input
                type="text"
                placeholder="Nome"
                required
                onChange={e => setSignUpData({...signUpData, name: e.target.value})}
                value={name}
            />
            <input
                type="text"
                placeholder="CPF" 
                required
                onChange={e => setSignUpData({...signUpData, cpf: e.target.value})}
                value={cpf}
            />
            <input
                type="email"
                placeholder="E-mail"
                required
                onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                value={email}
            />
            <input
                type="password"
                placeholder="Senha" 
                required
                onChange={e => setSignUpData({...signUpData, password: e.target.value})}
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