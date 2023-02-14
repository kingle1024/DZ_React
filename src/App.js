
import { Route, Routes } from 'react-router-dom';
import BoardInsert from './Board/BoardInsert';

import './App.css';
import Board from './Board/Board';
import BoardView from './Board/BoardView';
import SignUp from './Member/SignUp';
import Layout from './Layout';
import Login from './Login';
import MyPage from './Member/MyPage';
import 'bootstrap/dist/css/bootstrap.css';
import LoginValid from './LoginValid';
import Logout from './Logout';
import Home from './Home';

function App() {
  
  return (
    <div>
    <Routes>      
        <Route element = {<Layout />}>
          <Route path='/' >                                          
            <Route path='/login' element = {<Login />} />
            <Route path='/logout' element = {<Logout />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          <Route path="/" element = {<LoginValid /> } >
            <Route index element={<Home />} />
            <Route path='/board' element={<Board />} />
            <Route path='/board/view/:id' element={<BoardView />} />
            <Route path='/board/insert' element={<BoardInsert />} />
            
            <Route path='/member/info' element={<MyPage />} />
          </Route>
        </Route>
        
                
    </Routes>
    </div>
  );
}

export default App;
