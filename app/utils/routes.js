import React from "react";
import {Route,Switch} from "react-router-dom";
import CountriesList from "../containers/Countries"
import CountryView from "../containers/Countries/View"
import CustomLayout from "./CustomLayout"
const APP = () =>
  <Switch>
    <Route
      exact
      path="/countries"
      component={()=>(
        <CustomLayout>
          <CountriesList/>
        </CustomLayout>
      )}
    />
    <Route
      exact
      path="/country/:name"
      component={()=>(
        <CustomLayout>
          <CountryView/>
        </CustomLayout>
      )}
    />
  </Switch>
export default APP
