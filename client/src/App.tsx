import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Chart from './components/Chart/Chart';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: deepOrange,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />
        <Chart />
      </div>
    </ThemeProvider>
  );
}

export default App;
