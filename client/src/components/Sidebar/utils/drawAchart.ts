import Plotly from "plotly.js";
import { vetoAny, ElementObjectClass, TrimLayout, PostRespFE } from "../../types";

export const drawChart = (IsIt: boolean, respData: PostRespFE[]) => {
  if (IsIt) {
    let trimedLayout: TrimLayout = {
      showgrid: false,
      zeroline: false,
      showline: false,
      ticks: '',
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

    //* ostaje dinamicki prikaz jedinjenja da se uradi ovde
    class ChartEl {
      public type: string = 'scatter'
      public name: string = ''
      public x: number[] = [];
      public y: number[] = [];
      constructor(x: number[], y: number[], name: string) {
      }
    }

    let elHistObj: ElementObjectClass = {
      H2O2: new ChartEl([], [], ''),
      H2O: new ChartEl([], [], ''),
      H2CO3: new ChartEl([], [], ''),
      H2: new ChartEl([], [], ''),
      CH3COOH: new ChartEl([], [], ''),
      C2H6: new ChartEl([], [], ''),
      CO2: new ChartEl([], [], ''),
      CO: new ChartEl([], [], ''),
      O3: new ChartEl([], [], ''),
      O2: new ChartEl([], [], ''),
      C2H5OH: new ChartEl([], [], ''),
      CH4: new ChartEl([], [], ''),
      CH3OH: new ChartEl([], [], ''),
      CH3COO: new ChartEl([], [], ''),
      OH: new ChartEl([], [], '')
    }

    let counter: number = -1

    for (const itr of respData) {
      counter++
      for (const elKey in itr.elCount) {
        let x: number = counter
        let y: number = itr.elCount[elKey];

        if (elHistObj[`${elKey}`]) {
          elHistObj[`${elKey}`].x.push(x)
          elHistObj[`${elKey}`].y.push(y)
          elHistObj[`${elKey}`].name = `${elKey}`
        }
      }
    }

    let plotData: vetoAny[] = []
    for (const [key, val] of Object.entries(elHistObj)) {
      const objToDefine = {};
      Object.defineProperty(objToDefine, `${key}`, {
        value: val,
        writable: false
      });
      plotData.push(val)
    }

    Plotly.newPlot('mainPlot', plotData, layout);
  }
}