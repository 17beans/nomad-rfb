import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Detail from './Routes/Detail';
import Home from './Routes/Home';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Develop */}
        <Route exact path={`/`} element={<Home/>} />
        <Route exact path={`/movie/:id`} element={<Detail/>} />

        {/* Production */}
        <Route exact path={`/`} element={<Home/>} />
        <Route exact path={`/movie/:id`} element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
