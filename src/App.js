import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Detail from './Routes/Detail';
import Home from './Routes/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/movie/:id' element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
