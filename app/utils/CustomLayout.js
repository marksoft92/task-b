import React from 'react'




function CustomLayout(props){
  console.log('layout',props)
  return(
   <div>
     {props.children}
   </div>
  );
}
export default CustomLayout
