import React, {useContext} from 'react';
import map from "../../assets/img/map__small.svg";
import arrowDown from "../../assets/img/arrow__down.svg";
import {GlobalContext} from "../../context/globalContext";

const ActiveRegionCard = () => {
    const {openItems, fullData} = useContext(GlobalContext);
    return (
        <>
            <div className="map__row">
                <div className="map__info">
                    <div className="map__img">
                        <div className="map__icon">
                            <img src={fullData[0]?.im_g} alt=""/>
                        </div>
                    </div>
                    <div className="map__button">
                        <h3>{fullData[0]?.name}</h3>
                        <span>{fullData[0]?.stat?.distributedCalls || 0}</span>
                        <div className="button" onClick={openItems}>
                            <img src={arrowDown} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActiveRegionCard;