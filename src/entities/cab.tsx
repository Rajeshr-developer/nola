import React, { useMemo } from 'react';
import MemoCars from '../memo/mymemo';
import { CustomContext } from '../fetcher/fetchData';

interface IData {
    available: Boolean;
    id: number;
    lat: number;
    lon: number;
    name: string;
}

export const CabView:React.SFC = (): JSX.Element => {
    return (
        <CustomContext.Consumer>
            {values => (
                values?.data.map((data: IData, indx: number) => {
                    return <MemoCars key={'#' + indx} props={data}/>
                })
            )}
        </CustomContext.Consumer>
    )
}

