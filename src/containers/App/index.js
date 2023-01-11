import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Homelog from "../Homelog";
import WrappedForgotPasswordForm from "../ForgotPassword";
import { setInitUrl } from "appRedux/actions/Auth";

const RestrictedRoute = ({
  component: Component,
  location,
  authUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: location },
          }}
        />
      )
    }
  />
);

const App = (props) => {
  const dispatch = useDispatch();
  const { locale } = useSelector(({ settings }) => settings);
  const { authUser, initURL } = useSelector(({ auth }) => auth);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "/css/style.css";

    link.className = "gx-style";
    document.body.appendChild(link);
  }, []);

  useEffect(() => {
    if (initURL === "") {
      dispatch(setInitUrl(location.pathname));
    }
  });

  // /main/dashboard/CRM

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/Homelog");
      if (authUser === null) {
        history.push("/Homelog");
      } else if (initURL === "" || initURL === "/" || initURL === "/signin") {
        history.push("/main/dashboard/Home");
      } else {
        history.push(initURL);
      }
    }
  }, [authUser, initURL, location, history]);

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <LocaleProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/Homelog" component={Homelog} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/WrappedForgotPasswordForm"
            component={WrappedForgotPasswordForm}
          />
          <RestrictedRoute
            path={`${match.url}`}
            authUser={authUser}
            location={location}
            component={MainApp}
          />
        </Switch>
      </IntlProvider>
    </LocaleProvider>
  );
};

export default memo(App);
