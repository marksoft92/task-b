import React, { memo, useMemo, useState } from 'react';

function Slide(props) {
const {className,img,claim,name,href} = props

  return (
    <div className={className}>
        <div className="header-info-box">
          <div className="section-counter">o1.</div>
          <a
            href={href}
            className="slider-link"
          >
            <div className="claim">{claim}</div>
            <div className="name">
              {name}
            </div>
            <div className="circle-link">
              <div className="line" />
              <div className="circle">
                <div className="arrow" />
              </div>
            </div>
          </a>
        </div>
        <img src={img} />
      </div>
  );
}



export default Slide
