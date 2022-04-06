import styled from 'styled-components';

export default function SubmitButton() {
    return (
        <StyledButton type='submit'>
            ENTRAR
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: 299px;
    height: 52px;

    border-radius: 8px;

    font-size: 14px;
    font-weight: bold;


    color: #FFFFFF;
    background-color: #FF4791;
`;