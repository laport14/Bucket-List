import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom'
import Landing from './screens/Landing/Landing';
import Login from './screens/Login/Login'
import Register from './screens/Register/Register';
import { loginUser, verifyUser } from './services/auth';
import { useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify()
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Login' component={Login} handleLogin={handleLogin} />
        <Route exact path='/Register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
