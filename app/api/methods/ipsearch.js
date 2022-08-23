import request from '../../utils/request';

export function loadIpLocation(ip,key) {
  return request(`http://api.ipstack.com/${ip}?access_key=${key}&output=json`);
}
export function loadIpUser() {
  return request(`https://geolocation-db.com/json/`);
}


