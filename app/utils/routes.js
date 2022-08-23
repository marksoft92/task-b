import React from "react";
import {Route,Switch} from "react-router-dom";
import IpSearch from "../containers/IpSearch"
import CustomLayout from "./CustomLayout"
const APP = () =>
  <Switch>
    <Route
      exact
      path="/"
      component={()=>(
        <CustomLayout>
          <IpSearch/>
        </CustomLayout>
      )}
    />

  </Switch>
export default APP
