import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AllActivities from '../screens/AllActivities/AllActivities';
import Landing from '../screens/Landing/Landing';
import {getAllActivities} from '../services/activities'

function MainContainer(props) {
  const [activities, setActivities] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivities(activityData)
    }
    fetchActivities()
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
      <Landing />
      </Route>
        <Route exact path='/Activities'>
          <AllActivities
            activities={activities}
            currentUser={props.currentUser}
          />
        </Route>
    </Switch>
  );
}

export default MainContainer;