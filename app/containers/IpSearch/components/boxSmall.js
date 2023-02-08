import React, { memo, useMemo, useState } from 'react';

function BoxSmall(props) {
  const { className, img, claim, name, href } = props;

  return (
    <div className="col one-third">
      <a href="https://keune-polska.pl/marka/style" class="img-box">
        <div
          class="img-wrap hover-img-item"
          data-displacement="assets/images/displacement/4.png"
          data-intensity="0.2"
          data-speedin="1.6"
          data-speedout="1.6"
        >
          <img
            alt="Keune Style"
            title="Keune Style"
            class="img-cover lazyload"
            src="assets/images/brands/x02_style.jpg.pagespeed.ic.v1V9HEa8HO.webp"
            data-pagespeed-url-hash="2094561348"
            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
          <img
            alt="Keune Style"
            title="Keune Style"
            src="assets/images/brands/x02_hover_style.jpg.pagespeed.ic.4RzcZuja0l.webp"
            data-pagespeed-url-hash="2394972677"
            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
        </div>
        <div class="info">
          <h5 class="name">
            <span class="top">Keune style</span>
            <span class="original">Keune style</span>
          </h5>
          <div class="line-link">
            <span class="line" />
            <span class="txt">
              <span class="top">Odkryj serie</span>
              <span class="original">Odkryj serie</span>
            </span>
            <span class="arrow" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default BoxSmall;
