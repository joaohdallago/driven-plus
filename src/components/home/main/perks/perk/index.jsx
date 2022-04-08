import styled from 'styled-components';

export default function Perk({ title, link }) {
    return (
        <StyledAnchor href={link} target="_blank">
            {title}
        </StyledAnchor>
    )
}

const StyledAnchor = styled.a`
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    background-color: #FF4791;

    
    font-weight: 700;
    font-size: 14px;
    
`; 