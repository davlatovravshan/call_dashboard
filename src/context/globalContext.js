import React, {createContext, useEffect, useState} from 'react';
import api from '../api/axiosConfig';
import moment from "moment";
import img from "../assets/img";
import axios from "axios";
import {logDOM} from "@testing-library/react";

let regionID = 0;

export const GlobalContext = createContext(null);

export default function GlobalContextProvider(props) {
    const [fullData, setFullData] = useState([]);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [monthData, setMonthData] = useState([]);
    const [monthDataByDate, setMonthDataByDate] = useState([]);
    const [region, setRegion] = useState([]);
    // console.log(regionID);
    if (error.length) {
        console.log(error);
    }

    const getFullData = async (
        startDate = moment(new Date()).format("YYYY-MM-DD"),
        endDate = moment(new Date()).format("YYYY-MM-DD"),
        regId) => {
        regionID = regId

        try {
            const res = await api.get('api/calls/stats', {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                    serviceId: 21,
                    regionId: regId
                }
            })
            const data = [];
            res.data.fullData.map(i => {
                switch (i.id) {
                    case 0:
                        data.push({...i, im_g: img.uzb})
                        break
                    case 11:
                        data.push({...i, im_g: img.Fargona})
                        break
                    case 21:
                        data.push({...i, im_g: img.ToshkentV})
                        break
                    case 51:
                        data.push({...i, im_g: img.Namangan})
                        break
                    case 61:
                        data.push({...i, im_g: img.Andijon})
                        break
                    case 71:
                        data.push({...i, im_g: img.Samarqand})
                        break
                    case 81:
                        data.push({...i, im_g: img.Jizzax})
                        break
                    case 91:
                        data.push({...i, im_g: img.Surhondaryo})
                        break
                    case 101:
                        data.push({...i, im_g: img.Qashqadaryo})
                        break
                    case 111:
                        data.push({...i, im_g: img.Sirdaryo})
                        break
                    case 131:
                        data.push({...i, im_g: img.Buxoro})
                        break
                    case 141:
                        data.push({...i, im_g: img.Xorazm})
                        break
                    case 151:
                        data.push({...i, im_g: img.Qashqadaryo})
                        break
                    case 161:
                        data.push({...i, im_g: img.Navoiy})
                        break
                }
            })
            localStorage.setItem('data', JSON.stringify(data));
            setFullData(data)
            // console.log(data)

            // changeDateById(regionId, data)

        } catch (e) {
            setError(e.message);
            setFullData(JSON.parse(localStorage.getItem('data')));
        }
        setTimeout(() => getFullData(startDate = moment(new Date()).format("YYYY-MM-DD"),
            endDate = moment(new Date()).format("YYYY-MM-DD"), regionID), 1000 * 10);
    }

    const getRegionName = async () => {
        if (region.length) return;
        try {
            const response = await api.get('/api/regions/getAllRegion');
            setRegion(response.data.sort((a, b) => {
                let nameA = a.name.toUpperCase()
                let nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }))
        } catch (e) {
            console.log(e.message);
        }
    }

    const openItems = () => {
        setOpen(!open)
    }

    const getCallsHistory = async (regionId = 0) => {
        try {
            const response = await api.get('api/history/getCallsByMonthAll', {
                params: {
                    regionId
                }
            })
            setMonthData(response.data);
        } catch (e) {
            setError(e.message)
        }
    }


    const getDataByMonth = async (monthNumber) => {
        // console.log(monthNumber);
        try {
            const res = await api.get('api/history/getCallsByMonth', {
                params: {
                    monthNumber,
                    regionId: regionID
                }
            })
            console.log(res);
            setMonthDataByDate(res.data)
        } catch (e) {
            setError(e.message);
        }
    }


    const getFunc = () => {
        // if (eff) {
        getFullData()
        console.log('getFullData')
        getCallsHistory()
        getDataByMonth(new Date().getMonth() - 1)
        // }
        // setEff(false)
    }


    const values = {
        fullData,
        monthData,
        openItems,
        open,
        getFunc,
        getRegionName,
        region,
        getFullData,
        getCallsHistory,
        getDataByMonth,
        monthDataByDate
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    );
};