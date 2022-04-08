import styled from 'styled-components';

export default  function Buttons() {
    return (
        <Container>
            <button style={{backgroundColor: '#CECECE'}}>Não</button>
            <button style={{backgroundColor: '#FF4791'}}>SIM</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        width: 95px;
        height: 52px;

        border-radius: 8px;

        font-weight: 700;
        font-size: 14px;

        color: #FFFFFF;
    }

`;