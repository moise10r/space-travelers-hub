import Header from "../features/header/Header";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rockets from "../features/rockets/Rockets";
import Dragons from "../features/dragons/Dragons";
import Missions from "../features/missions/Missions";
import Profile from "../features/profile/Profile";
import '../assets/css/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Rockets />
          </Route>
          <Route path='/dragons'>
            <Dragons />
          </Route>
          <Route path='/missions'>
            <Missions />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
