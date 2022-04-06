import styled from 'styled-components';

import drivenLogoSrc from './../../../assets/driven-logo.png'

export default function DrivenLogo() {
    return (    
        <StyledImg src={drivenLogoSrc} alt="driven logo" />
    )
}

const StyledImg = styled.img`
    width: 299px;

    margin-bottom: 76px;
`;