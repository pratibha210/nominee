import './App.css';
import useStyles from "./Components/App.style";
import Ballot from './Components/Ballot/Ballot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
const classes = useStyles();
 
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App" className={classes.Appheader}>

      <Router>
        <Routes>
          <Route path={'/'} element={<Ballot />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
