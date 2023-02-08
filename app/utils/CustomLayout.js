import React from 'react'
import MainMenuBlock from '../components/MainMenuBlock';
function CustomLayout(props){

  return(
   <div>
    <MainMenuBlock/>
     {props.children}
   </div>
  );
}
export default CustomLayout
