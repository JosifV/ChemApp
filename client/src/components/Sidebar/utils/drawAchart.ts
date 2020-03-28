import Plotly from "plotly.js";
import { vetoAny } from "../../types";

export const drawChart = (IsIt:boolean)=>{
    if (IsIt) {
        let trimedLayout: object = {
            showgrid: false,
            zeroline: false,
            showline: false,
            ticks: '',
            // showticklabels: false,
            autosize: true,
            fixedrange: true,
          };
          let layout = {
            xaxis: {
                ...trimedLayout,
              },
              yaxis: {
                ...trimedLayout,
              }
          }
          let config ={
            staticPlot: true
          }
//* ostaje dinamicki prikaz jedinjenja da se uradi ovde
//* trebace elCount SVAKE stavke iz data baze, jer svaka stavka ce biti jedna istorijska tacka
        let trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter'
        };

        let trace2 = {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter'
        };

        let trace3= {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter'
        };

        let data = [trace1, trace2, trace3];

        Plotly.newPlot('mainPlot', data as vetoAny, layout, config);
    }
}