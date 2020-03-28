import React, { useState, ChangeEvent } from "react";
import { Slider, Typography, Button } from '@material-ui/core';
import { vetoAny } from "../types";
import axios from 'axios'

interface LocalProps {
    setCount: (count: object) => object
    setUpd:vetoAny
}
const Sliders: React.FC<LocalProps> = (props) => {
    let [sOne, sOneSet] = useState(0)
    let [sTwo, sTwoSet] = useState(0)
    let [sThree, sThreeSet] = useState(0)

    let sOneHandler = (event: ChangeEvent<{}>, newVal: vetoAny) => sOneSet(newVal)
    let sTwoHandler = (event: ChangeEvent<{}>, newVal: vetoAny) => sTwoSet(newVal)
    let sThreeHandler = (event: ChangeEvent<{}>, newVal: vetoAny) => sThreeSet(newVal)

    let saveToDBHandler = async () => {
        props.setUpd(false)
        let inputArr: string[] = [
            ...Array.from({ length: sOne }, _ => "H"),
            ...Array.from({ length: sTwo }, _ => "O"),
            ...Array.from({ length: sThree }, _ => "C"),
        ].flat(Infinity)
        let resp = await axios.post('/chem/', {
            inputArr
        })
        //* updatuj zbir svih jedinjenja 
        props.setCount(resp.data.elCount);
        props.setUpd(true)
    }

    return <div className="sliders">
        <Typography id="sliderOne" className="sliderOne">
            Hydrogen
        </Typography>
        <div className="sliderContOne">
            <Slider onChange={sOneHandler} min={0} max={10000} className="sliderOne slider" aria-labelledby="sliderOne" />
            <span className="span">{sOne}</span>
        </div>

        <Typography id="sliderOne" className="sliderTwo">
            Oxygen
        </Typography>
        <div className="sliderContTwo">
            <Slider onChange={sTwoHandler} min={0} max={10000} className="sliderTwo slider" aria-labelledby="sliderTwo" />
            <span className="span">{sTwo}</span>
        </div>

        <Typography id="sliderThree" className="sliderThree">
            Carbon
        </Typography>
        <div className="sliderContThree">
            <Slider onChange={sThreeHandler} min={0} max={10000} className="sliderThree slider" aria-labelledby="sliderThree" />
            <span className="span">{sThree}</span>
        </div>

        <div className="buttonCont">
            <Button onClick={saveToDBHandler} variant="contained" color="primary">Save to DB</Button>
        </div>
    </div>
}
export default Sliders
