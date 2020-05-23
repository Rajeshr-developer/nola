import React from 'react';
import styled from 'styled-components';

const userImg = require('../assets/pin.png');

const User = styled.img`
    position:absolute;
    width:40px;
`

export const CustomerView = (): JSX.Element => {
    return (
        <>
            <User src={userImg} style={{'left':'190px','top':'80px'}}/>
        </>
    )
}