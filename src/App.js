
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Board from './Board';
import Home from './Home';
import Layout from './Layout';

function App() {
  
  return (
    <Routes>
        <Route element = {<Layout /> } >
          <Route index element={<Home />} />
          <Route path='/list' element={<Board />} />
        </Route>
    </Routes>
    
    
  );
}

export default App;
