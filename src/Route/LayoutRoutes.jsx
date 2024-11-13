import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

const LayoutRoutes = () => {

  return (
    <div>
      <Routes>
        {routes.map(({ auth, path, Components }, index) => (
          <Route  key={index}>
            <Route path={path} element={Components} exact />
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export default LayoutRoutes;
