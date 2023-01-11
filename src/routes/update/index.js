import React from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Update = ({match}) => (
    <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/login`}/>
    <Route path={`${match.url}/ProfileUpdate`} component={asyncComponent(() => import('./ProfileUpdate'))}/>
    <Route path={`${match.url}/ProjectUpdate`} component={asyncComponent(() => import('./ProjectUpdate'))}/>
    <Route path={`${match.url}/sProfile`} component={asyncComponent(() => import('./sProfile'))}/>
    <Route path={`${match.url}/sProject`} component={asyncComponent(() => import('./sProject'))}/>
  </Switch>
)    

export default Update;