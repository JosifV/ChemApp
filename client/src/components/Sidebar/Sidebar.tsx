import React, { useState, useEffect } from "react";
import { vetoAny } from "../types";
import Resps from './Resps'
import Sliders from "./Sliders";
import axios from 'axios'
import { drawChart } from "./utils/drawAchart";

const Sidebar: React.FC = () => {
    let [elCount, elCountSet] = useState({}) as vetoAny
    let [isUpd, isUpdSet] = useState(false)
    let [fullResp, fullRespSet] = useState({}) as vetoAny

    let showCountHandler = () => Object.entries(elCount).map((x, xIndex) => <div key={`0_${xIndex}`}> {x[0]}: </div>)
    let valCountHandler = () => Object.entries(elCount).map((x, xIndex) => <div key={`1_${xIndex}`}> {x[1]} </div>)

    useEffect(() => {
        let localReq = async () => {
            let { data } = await axios.get('/chem/')
            fullRespSet(data)

            //* update sum of compounds
            if (data[data.length - 1]) elCountSet(data[data.length - 1].elCount);
            else elCountSet({})
            isUpdSet(true)
        }
        localReq()
    }, [isUpd]) 
    drawChart(document.getElementById('mainPlot') !== null, fullResp)

    return <div className="sidebar">
        <Sliders setCount={elCountSet} setUpd={isUpdSet} />
        <Resps count={showCountHandler} val={valCountHandler} updBool={isUpd} />
    </div>
}
export default Sidebar