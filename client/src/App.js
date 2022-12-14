import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import Mainnavbar from './components/shared/Mainnavbar';
import Login from './components/auth/Login';
import Game from './components/games/Games';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <Mainnavbar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/:tournamentId/game' element={ <Game /> } />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>

)

export default App;
