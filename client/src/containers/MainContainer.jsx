import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ActivityDetail from '../screens/ActivityDetail/ActivityDetail';
import AddActivity from '../screens/AddActivity/AddActivity';
import AllActivities from '../screens/AllActivities/AllActivities';
import EditActivity from '../screens/EditActivity/EditActivity';
import Landing from '../screens/Landing/Landing';
import {getAllActivities, postActivity, putActivity} from '../services/activities'

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

  const handleCreate = async (activityData) => {
    const newActivity = await postActivity(activityData);
    setActivities(prevState => [...prevState, newActivity]);
    history.push('/activities');
  }

  const handleUpdate = async (id, activityData) => {
    const updatedActivity = await putActivity(id, activityData);
    setActivities(prevState => prevState.map(activity => {
      return activity.id === Number(id) ? updatedActivity : activity
    }))
    history.push('/activities');
  }

  return (
    <Switch>
      <Route exact path='/'>
      <Landing />
      </Route>
        <Route exact path='/activities'>
          <AllActivities
            activities={activities}
            currentUser={props.currentUser}
          />
      </Route>
      <Route exact path='/activities/new'>
        <AddActivity handleCreate={handleCreate} />
      </Route>
      <Route exact path='/activities/:id'>
      <ActivityDetail />
      </Route>
      <Route exact path='/activities/:id/edit'>
        <EditActivity activities={activities} handleUpdate={handleUpdate}/>
      </Route>

    </Switch>
  );
}

export default MainContainer;