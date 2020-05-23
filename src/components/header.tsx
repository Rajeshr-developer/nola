import React from 'react';
import styled from 'styled-components';

const logo = require('../assets/uber.png');

const HeaderLayer = styled.div`
    height:10vh;
    background:#FFF;
    border-bottom:red;
`

const Logo = styled.img`
    width:63px;
    margin-left:10px;
`

export const Header = (): JSX.Element => {
    return (
        <HeaderLayer>
            <Logo src={logo}/>
        </HeaderLayer>
    )
}