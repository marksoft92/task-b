import React from 'react';

const columns = () => (
  [
    {
    title: 'City',
    dataIndex: 'city',
  },
    {
      title: 'Country code',
      dataIndex: 'country_code',
    },
    {
      title: 'Continent name',
      dataIndex: 'continent_name'
    },
    {
      title: 'Country name',
      dataIndex: 'country_name',
    },
    {
      title: 'Region name',
      dataIndex: 'region_name',
    },
    {
      title: 'Ip',
      dataIndex: 'ip',
    },
  ]
)

export default columns()
