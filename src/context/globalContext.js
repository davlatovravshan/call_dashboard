import React, {createContext, useState} from 'react';
import api from '../api/axiosConfig';
import moment from "moment";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider(props) {
    const [fullData, setFullData] = useState([]);
    const [error, setError] = useState([]);
    const [open, setOpen] = useState(false);
    console.log(error);

    const openItems = () => {
        setOpen(!open)
    }

    const getFullData = async () => {
        let startDate = moment(new Date()).format("YYYY-MM-DD")
        let endDate = moment(new Date()).format("YYYY-MM-DD")
        try {
            const res = await api.get('api/calls/stats', {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                    serviceId: 21
                }
            })
            setFullData(res.data);
            localStorage.setItem('data', JSON.stringify(res.data));
        } catch (e) {
            setError(e.message);
            setFullData(JSON.parse(localStorage.getItem('data')));
        }
        setTimeout(() => getFullData(), 5000);
    }

    const values = {fullData, getFullData, openItems, open}
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    );
};