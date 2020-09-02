import React from 'react';
import NavBar from './components/NavBar';
import MainForm from './components/MainForm';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";

function App() {
  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <NavBar/>
      <MainForm/>
    </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
