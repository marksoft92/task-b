import React, {useEffect, memo, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'antd'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {SCOPE} from './constants'
import {useInjectReducer} from 'utils/injectReducer';
import {useInjectSaga} from 'utils/injectSaga';
import {Table} from 'antd';
import columns from "./List/columns";
import {getIp, getIpUser, getSearch} from './actions';
import {
  makeSelectAllItem,
  makeSelectCountriesItems,
  makeSelectCountryItem, makeSelectError,
  makeSelectSearch
} from './selectors';
import SearchBar from "../../components/searchBar";
import reducer from './reducer';
import saga from './saga';
import {withRouter} from "react-router-dom";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import InfoBox from "../../components/infoBox";
import alert from "../../utils/helpers";

const key = SCOPE;

export function CountriesList(props) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const {
    onLoadCountries,
    onLoadIpUser,
    onGetSearch,
    searchValue,
    ip,
    ipUser,
    allSearch,
    error
  } = props
console.log(error)

const itsError = !!error
  useEffect(() => {
    if(!!searchValue) onLoadCountries({ip: searchValue})
  }, [searchValue]);

  useEffect(() => {
    onLoadIpUser()
  },[])

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: ipUser.latitude, lng: ipUser.longitude }}
    >
      {props.isMarkerShown && <Marker position={{ lat: ipUser.latitude, lng: ipUser.longitude }} />}
    </GoogleMap>
  ))

  const IpMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: ip.latitude ? ip.latitude : ipUser.latitude, lng: ip.longitude ? ip.longitude: ipUser.longitude}}
    >
      {props.isMarkerShown && <Marker position={{ lat: ip.latitude ? ip.latitude : ipUser.latitude, lng: ip.longitude ? ip.longitude: ipUser.longitude}} />}
    </GoogleMap>
  ))

   useEffect(() => {
     console.log(1)
     alert(error)
     console.log(1)
   }, [searchValue]);
  return (
    <div>
      <div className="container">
        <div className="left">
          <Table
            className='table-2'
            columns={columns}
            dataSource={allSearch}
            pagination={false}
            onChange={''}
            rowKey={'ip'}
          />
        </div>
        <div className="right">
          <div className="user">
            <div className="map">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `70%` }} />}
              />
            </div>
            <div className="info">
              <InfoBox {...ipUser} />
            </div>
          </div>
          <SearchBar
            search={onGetSearch}
          />
          <div className="user">
            <div className="map">
              <IpMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `70%` }} />}
              />
            </div>
            <div className="info">
              <InfoBox {...ip} />
            </div>
          </div>
        </div>
      </div>

      {(error || []).map(x =>  <Alert
        message="Error"
        description={x}
        type="error"
        showIcon
        closable
        />)}
    </div>
  );
}

CountriesList.propTypes = {
  onLoadCountries: PropTypes.func,
  onLoadIpUser: PropTypes.func,
  onGetSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ip: makeSelectCountriesItems(),
  ipUser: makeSelectCountryItem(),
  searchValue: makeSelectSearch(),
  allSearch: makeSelectAllItem(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCountries: (ip) => dispatch(getIp(ip)),
    onLoadIpUser: () => dispatch(getIpUser()),
    onGetSearch: (params) => dispatch(getSearch(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(
  withConnect,
  memo,
)(CountriesList));
