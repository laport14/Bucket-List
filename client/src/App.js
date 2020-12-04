import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom'
import MainContainer from './containers/MainContainer'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { useEffect, useState } from 'react';
import Layout from './components/shared/Layout/Layout';

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
  }, [history])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
            <MainContainer currentUser={currentUser} />
        <Switch>
          <Route exact path='/Login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path='/Register'>
            <Register handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
