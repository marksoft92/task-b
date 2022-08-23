import {
  GET_IP,
  GET_IP_ERROR,
  GET_IP_SUCCESS,
  GET_IP_USER,
  GET_IP_USER_ERROR,
  GET_IP_USER_SUCCESS,
  GET_SEARCH,
} from './constants';

export function getIp(items) {
  return {
    type: GET_IP,
    items,
  };
}

export function getIpSuccess(items) {
  return {
    type: GET_IP_SUCCESS,
    items,
  };
}

export function getIpError(error) {
  return {
    type: GET_IP_ERROR,
    error,
  };
}
export function getIpUser(item) {
  return {
    type: GET_IP_USER,
    item,
  };
}

export function getIpUserSuccess(item) {
  return {
    type: GET_IP_USER_SUCCESS,
    item,
  };
}

export function getIpUserError(item) {
  return {
    type: GET_IP_USER_ERROR,
    item,
  };
}

export function getSearch(searchValue){
  return {
    type: GET_SEARCH,
    searchValue,
  };
}
