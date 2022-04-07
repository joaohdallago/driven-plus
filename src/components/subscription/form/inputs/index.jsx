import styled from 'styled-components';

export default function Inputs({ purchaseData, setPurchaseData }) {

    const { cardName, cardNumber, securityNumber, expirationDate } = purchaseData;

    console.log(purchaseData)

    return (
        <Container>
            <input
                type="text"
                placeholder="Nome impresso no cartão"
                required
                onChange={e => setPurchaseData({...purchaseData, cardName: e.target.value})}
                value={cardName}
            />
            <input
                type="number"
                placeholder="Dígitos do cartão"
                required
                onChange={e => setPurchaseData({...purchaseData, cardNumber: e.target.value})}
                value={cardNumber}
            />
            <div>
                <input
                    type="number"
                    placeholder="Código de segurança"
                    required
                    onChange={e => setPurchaseData({...purchaseData, securityNumber: e.target.value})}
                    value={securityNumber}
                />
                <input
                    type="text"
                    placeholder="Validade"
                    required
                    onChange={e => setPurchaseData({...purchaseData, expirationDate: e.target.value})}
                    value={expirationDate}
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 299px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
        width: 100%;
        height: 52px;

        border-radius: 8px;
        
        text-indent: 14px;

        background-color: #FFFFFF;
        ::placeholder {
            font-size: 14px;

            color: #7E7E7E;
        }
    }

    div {
        display: flex;
        gap: 8px;

        input {
            text-indent: 6px;
        }
    }
`;