import React, { useState, useEffect } from "react";
import { vetoAny } from "../types";
import Resps from './Resps'
import Sliders from "./Sliders";
import axios from 'axios'
import Plotly from "plotly.js";
import { drawChart } from "./utils/drawAchart";

const Sidebar: React.FC = () => {
    let [elCount, elCountSet] = useState({}) as vetoAny
    let [isUpd, isUpdSet] = useState(false)

    let showCountHandler = () => Object.entries(elCount).map((x, xIndex) => <div key={`0_${xIndex}`}> {x[0]}: </div>)
    let valCountHandler = () => Object.entries(elCount).map((x, xIndex) => {
        console.log(x[1]);
        
        return <div key={`1_${xIndex}`}> {x[1]} </div>
    })

    useEffect(() => {
        //* axios
        let localReq = async () => {
            let resp = await axios.get('/chem/')
            console.log(resp);

            //* updatuj zbir svih jedinjenja 
            if (resp.data[resp.data.length - 1]) elCountSet(resp.data[resp.data.length - 1].elCount);
            else elCountSet({})
            isUpdSet(true)
        }
        localReq()
    }, [])

    drawChart(document.getElementById('mainPlot') !== null)

    return <div className="sidebar">
        <Sliders setCount={elCountSet} setUpd={isUpdSet} />
        <Resps count={showCountHandler} val={valCountHandler} updBool={isUpd} />
    </div>
}
export default Sidebar