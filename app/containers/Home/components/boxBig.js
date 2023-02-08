import React, { memo, useMemo, useState } from 'react';

function BoxBig(props) {
  const { src, label, title, href, className } = props;

  return (
    <div className={'col '+className}>
      <a href={href} className="img-box">
        <div
          className="img-wrap hover-img-item"
          data-displacement="assets/images/displacement/4.png"
          data-intensity="0.2"
          data-speedin="1.6"
          data-speedout="1.6"
        >
          <img
            alt={title}
            title={title}
            className="img-cover lazyload"
            src={src}
          />
          <img
            alt={title}
            title={title}
            src="assets/images/brands/x03_hover_blend.jpg.pagespeed.ic.thlLxX_FSZ.webp"
          />
        </div>
        <div className="info">
          <h5 className="name">
            <span className="top">{title}</span>
            <span className="original">{title}</span>
          </h5>
          <div className="line-link">
            <span className="line" />
            <span className="txt">
              <span className="top">{label}</span>
              <span className="original">{label}</span>
            </span>
            <span className="arrow" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default BoxBig;
