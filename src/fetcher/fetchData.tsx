import React, { useState, useCallback, useEffect } from 'react';
import { CabView } from '../entities/cab';

const fetchURL = "http://localhost:4000/Cabs";

export const CustomContext = React.createContext({ data: [] });

export const FetchData = () => {

    let dataVal = '';

    const [data, setState] = useState({ data: [] });

    const dynamicChecking = () => {
        async function fetchJsonData() {
            const jsondata = await fetch(fetchURL);
            return jsondata.json();
        }
        const interval = setInterval(() => {
            fetchJsonData().then((value) => {
                if (JSON.stringify(value) !== JSON.stringify(dataVal)) {
                    dataVal = value;
                    setState({ data: value });
                }
                return value;
            })
        }, 1000)
    }

    useEffect(() => {
        dynamicChecking();
    }, [])

    return (
        <CustomContext.Provider value={data}>
            <CabView />
        </CustomContext.Provider>
    );

}