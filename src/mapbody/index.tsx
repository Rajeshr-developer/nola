import React from 'react';
import styled from 'styled-components';
import { CustomerView } from '../entities/customers';
import { FetchData } from '../fetcher/fetchData';

const map = require('../assets/map.png');

const AerialView = styled.img`
    background:#FFF;
    border-bottom:red;
`

const AppBody = styled.div`
    height:90vh;
    overflow:hidden;
`

export const MapView:React.FC = (): JSX.Element => {
    return (
        <AppBody>
            <FetchData/>
            <CustomerView/>
            <AerialView src={map} />
        </AppBody>
    )
}