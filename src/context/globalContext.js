import React, {createContext, useState} from 'react';
import api from '../api/axiosConfig';
import moment from "moment";
import img from "../assets/img";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider(props) {
    const [fullData, setFullData] = useState([]);
    const [error, setError] = useState([]);
    const [open, setOpen] = useState(false);
    const [monthData, setMonthData] = useState([]);
    const [region, setRegion] = useState([]);


    console.log(error);

    const openItems = () => {
        setOpen(!open)
    }

    const getFullData = async (startDate = moment(new Date()).format("YYYY-MM-DD"), endDate = moment(new Date()).format("YYYY-MM-DD")) => {
        try {
            const res = await api.get('api/calls/stats', {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                    serviceId: 21
                }
            })
            const data = [];
            res.data.forEach(i => {
                if (i.id === 0) {
                    data.push({...i})
                }
                if (i.id === 11) {
                    data.push({...i, im_g: img.Fargona})
                }
                if (i.id === 21) {
                    data.push({...i, im_g: img.ToshkentV})
                }
                if (i.id === 51) {
                    data.push({...i, im_g: img.Namangan})
                }
                if (i.id === 61) {
                    data.push({...i, im_g: img.Andijon})
                }
                if (i.id === 71) {
                    data.push({...i, im_g: img.Samarqand})
                }
                if (i.id === 81) {
                    data.push({...i, im_g: img.Jizzax})
                }
                if (i.id === 91) {
                    data.push({...i, im_g: img.Surhondaryo})
                }
                if (i.id === 101) {
                    data.push({...i, im_g: img.Qashqadaryo})
                }
                if (i.id === 111) {
                    data.push({...i, im_g: img.Sirdaryo})
                }
                if (i.id === 131) {
                    data.push({...i, im_g: img.Buxoro})
                }
                if (i.id === 141) {
                    data.push({...i, im_g: img.Xorazm})
                }
                if (i.id === 151) {
                    data.push({...i, im_g: img.Qashqadaryo})
                }
                if (i.id === 161) {
                    data.push({...i, im_g: img.Navoiy})
                }
            })
            setFullData(data);
            localStorage.setItem('data', JSON.stringify(data));
        } catch (e) {
            setError(e.message);
            setFullData(JSON.parse(localStorage.getItem('data')));
        }
        setTimeout(() => getFullData(), 5000 * 100);
    }

    const getCallsHistory = async (regionId = 0) => {
        try {
            const response = await api.get('api/history/getCallsByMonth', {
                params: {
                    regionId
                }
            })
            // console.log(response);
            setMonthData(response.data);
        } catch (e) {
            setError(e.message)
        }
    }

    const getRegionName = async () => {
        if (region.length) return;
        try {
            const response = await api.get('/api/regions/getAllRegion');
            setRegion(response.data)
        } catch (e) {
            setError(e.message)
        }
    }

    const getDateById = (e) => {
        console.log(e);
    }


    const getFunc = () => {
        if (fullData.length) return
        getFullData()
        console.log('getFullData')

        if (monthData.length) return;
        getCallsHistory()
        console.log('getCallsHistory')

    }

    const values = {fullData, monthData, openItems, open, getFunc, getRegionName, region, getDateById}
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    );
};