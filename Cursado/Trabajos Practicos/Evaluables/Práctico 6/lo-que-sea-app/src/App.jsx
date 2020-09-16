import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MainForm from './components/MainForm';
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A42B36',
    },
    secondary: {
      main: '#565F81',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <NavBar />
        <MainForm />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
