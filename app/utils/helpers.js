import React, {useMemo} from "react";


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
