import React, {useMemo} from "react";
import {Alert} from "antd";


export function resultFilters (items, currentPage, search) {
    let res = []
   res = useMemo(() => items.slice((currentPage*5)-5,currentPage*5));


if(search){
  items.filter((product) => {
    if(product.name.common.toUpperCase().includes(search)) {
      res.push(product)
    }
  });
}

  return res
}

export default function alertError (message) {
  console.log('helper',message)


    return (
      <Alert
        message="Error"
        description={message}
        type="error"
        showIcon
        closable
      />

    )


}
