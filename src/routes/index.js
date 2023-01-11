import React from "react";
import {Route, Switch} from "react-router-dom";
import Components from "./components/index";
import CustomViews from "./customViews/index";
import ExtraComponents from "./extraComponents/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";
import Postproject from "./Postproject/Postproject";
import About from "./../containers/Topbar/About"
import CurrencyCalculator from "../components/dashboard/Crypto/CurrencyCalculator";
import Whywe from './../components/Whywe/Whywe';
import Update from "./update";
import Hero from "../components/dashboard/CRM/Hero";
import ProductsList from './customViews/eCommerce/ProductList/index';
const App = ({match}) => (
  <>
  <Hero/>
 
  <div className="gx-main-content-wrapper">
  
    <Switch>
      <Route path={`${match.url}main`} component={Main}/>
      <Route path={`${match.url}components`} component={Components}/>
      <Route path={`${match.url}custom-views`} component={CustomViews}/>
      <Route path={`${match.url}extra-components`} component={ExtraComponents}/>
      <Route path={`${match.url}social-apps`} component={SocialApps}/>
      <Route path={`${match.url}documents`} component={Documents}/>
      <Route path={`${match.url}Postproject`} component={Postproject}/>
      <Route path={`${match.url}About`} component={About}/>
      <Route path={`${match.url}CurrencyCalculator`} component={CurrencyCalculator}/>
      <Route path={`${match.url}Whywe`} component={Whywe}/>
      <Route path={`${match.url}ProductsList`} component={ProductsList}/>
      <Route path={`${match.url}Update`} component={Update}/>
    </Switch>
  </div>
  </>
);

export default App;
