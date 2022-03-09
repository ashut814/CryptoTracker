import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';
import { makeStyles } from '@material-ui/core/styles';

function App() {
 
const useStyles = makeStyles({
  App: {
    backgroundColor: '#14161a',
    color: "white",
    minHeight: "100vh",
  },
});

const clasess = useStyles();

  return (
    <BrowserRouter>
    <div className={clasess.App}>
      <Header />
      <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route path="/coins/:id" exact element={ <Coinpage/> }> </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
