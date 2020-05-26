import { Dispatch } from "react";

const fetchURL: string = "http://localhost:5000/rides";

const setIntervalTime: number = 1000;

export const dynamicChecking = (setstate: Dispatch<any>) => {
    console.log('dynamicChecking = ');
    let dataVal = '';
    async function fetchJsonData(): Promise<any> {
        const jsondata: Response = await fetch(fetchURL);
        return jsondata.json();
    }
    const interval: number = setInterval(() => {
        fetchJsonData()
            .then((value) => {
                if (JSON.stringify(value) !== JSON.stringify(dataVal)) {
                    dataVal = value;
                    setstate({ data: value });
                }
                return value;
            })
            .catch(err => {
                console.log('err type ', err);
                clearInterval(interval);
            })
    }, setIntervalTime)
}