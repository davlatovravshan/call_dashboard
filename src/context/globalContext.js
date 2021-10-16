import React, {createContext, useState} from 'react';
import api from '../api/axiosConfig';
import moment from "moment";
import img from "../assets/img";

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
            const data = [];
            res.data.map(i => {
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
        setTimeout(() => getFullData(), 5000);
    }

    const values = {fullData, getFullData, openItems, open}
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    );
};