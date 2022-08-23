 import {call, put, takeLatest} from 'redux-saga/effects';


import {loadIpLocation, loadIpUser} from "../../api/methods/ipsearch";
import {getIpError, getIpSuccess, getIpUserError, getIpUserSuccess} from "./actions";
import {GET_IP, GET_IP_USER} from "./constants";

import alertError from "../../utils/helpers";
export function* getIpData(actions) {
  const ip = actions.items.ip
       const key = 'eb16e5652591ee97c0fba0e228f84f56'
  try {

    const data = yield call(
      loadIpLocation, ip, key
    );

    if (!data.error) {
      yield put(getIpSuccess(data));
    } else {
      alertError(data.error.info)
      yield put(getIpError(data.error.info));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getIpUser() {

  try {
    const data = yield call(
      loadIpUser,
    );

    if (data) {
      yield put(getIpUserSuccess(data));
    } else {

      yield put(getIpUserError(error));
    }
  } catch (err) {
    console.log(err);
  }
}


export default function* githubData() {
  yield takeLatest(GET_IP, getIpData);
  yield takeLatest(GET_IP_USER, getIpUser);
}
