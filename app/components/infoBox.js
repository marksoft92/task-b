import React from 'react';

export function InfoBox(props) {
  const {
    IPv4,
    city,
    country_code,
    country_name,
    postal,
    state,
  } = props

  return (
    <>
      <p>Country: {country_name}</p>
      <p>Country code: {country_code}</p>
      <p>State: {state ? state : props.region_name}</p>
      <p>City: {city}</p>
      <p>Postal: {postal ? postal :props.zip}</p>
      <p>IP: {IPv4 ? IPv4 : props.ip}</p>
    </>
  );
}

export default InfoBox
