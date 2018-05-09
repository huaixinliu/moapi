import AsyncComponent from '../components/AsyncComponent'
import RenderComponent from '../components/RenderComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'


const Routes = () => (
  <Switch>
    <Route path="/project" component={AsyncComponent(() => import('./project'))} />
    <Route path="/editor/:projectId" render={props=><RenderComponent {...props} component={()=>import('./editor')} ></RenderComponent>} />
    <Redirect from="*" to="/project" />
  </Switch>
)

export default Routes
