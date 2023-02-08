import React from "react";
import {Route,Switch} from "react-router-dom";
import Home from "../containers/Home"
import CustomLayout from "./CustomLayout"
const APP = () =>
  <Switch>
    <Route
      exact
      path="/"
      component={()=>(
        <CustomLayout>
          <Home/>
        </CustomLayout>
      )}
    />
  
  </Switch>
export default APP
