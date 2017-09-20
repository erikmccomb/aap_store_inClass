import axios from 'axios';

// get all apps = index action of our apps contoller

export const getApps = () => {
  // thunk
  return(dispatch) => {
    axios.get('/api/apps')
      .then( res => dispatch({ type: 'APPS', apps: res.data }))
  }
}

// add an app - create action of our apps controller

const addApp= (app) => {
  return(dispatch) => {
    axios.post('/api/apps', {app})
      .then( res => dispatch({ type: 'ADD_APP', app: res.data }))
  }
}

// update an app - update action of our apps controller

  ...

//delete an app - destroy action of our apps conrtroller

  ...
