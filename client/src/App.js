import './App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './screens/Landing/Landing';
import Login from './screens/Login/Login'
import Register from './screens/Register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
