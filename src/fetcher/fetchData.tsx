import React, { useState, useCallback, useEffect } from 'react';
import { CabView } from '../entities/cab';
import { dynamicChecking } from './asyncFetch';

export const CustomContext = React.createContext({ data: [] });

export const FetchData = () => {

    const [data, setState] = useState({ data: [] });

    useEffect(() => {
        dynamicChecking(setState);
    }, [])

    return (
        <CustomContext.Provider value={data}>
            <CabView />
        </CustomContext.Provider>
    );

}