import React, { memo } from 'react';
import styled from 'styled-components';

const carImg = require('../assets/cab.png');

const Car = styled.img`
    position:absolute;
    width:63px;
`

const CarNo = styled.span`
    position:absolute;
    width:auto;
    color:black;
    font-weight:bold;
    font-size:0.6em;
`

const MemoCars = ({ props }: any): JSX.Element | null => {
    return (
        props.available && (
            <>
                <Car src={carImg} style={{ 'left': props.lat + 'px', 'top': props.lon + 'px' }}></Car>
                <CarNo style={{ 'left': (props.lat) + 'px', 'top': (props.lon - 10) + 'px' }}>{props.name}</CarNo>
            </>
        )
    )
}

export default memo(MemoCars)