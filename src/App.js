
import { Route, Routes } from 'react-router-dom';
import BoardInsert from './\bBoardInsert';

import './App.css';
import Board from './Board';
import BoardView from './BoardView';
import Home from './Home';
import Layout from './Layout';


function App() {
  
  return (
    <Routes>
        <Route element = {<Layout /> } >
          <Route index element={<Home />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/view/:id' element={<BoardView />} />
          <Route path='/board/insert' element={<BoardInsert />} />
        </Route>
    </Routes>
    
    
  );
}

export default App;
