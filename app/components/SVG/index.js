import React, {memo} from "react"

function Svg(props) {
  const id = 'svg-'+props.name;

  const className = (props.className? props.className+' ':'')+id;

  return (
    <svg className={className}>
      <use xlinkHref={'#'+id}/>
    </svg>
  );
}

export default memo(Svg);
