import axios from 'axios';

// get all apps = index action of our apps contoller

export const getApps = (callback) => {
  // thunk
  return(dispatch) => {
    axios.get('/api/apps')
      .then( res => dispatch({ type: 'APPS', apps: res.data }))
      .then(callback())
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

const updateApp = (app) => {
  return (dispatch) => {
    axios.put(`/api/apps/${app.id}`, {app} )
      .then(res => dispatch({type: 'ADD_APP', app: res.data}))
  }
}

//delete an app - destroy action of our apps conrtroller

export const deleteApp = (id) => {
  return(dispatch) => {
    axios.delete(`/api/apps/${id}`)
      .then( res => dispatch({ type: 'DELTE_APP', id }))
  }
}

export default axios;