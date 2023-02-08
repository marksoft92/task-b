import React, { useEffect, memo, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { SCOPE } from './constants';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectValue } from './selectors';

import reducer from './reducer';
import saga from './saga';
import { withRouter } from 'react-router-dom';
import CustomCarousel from '../../components/Carousel';
import { changeValue } from './actions';
import Slide from './components/slide';
import slide1 from '../../images/slide1-big.jpg';
import slide2 from '../../images/slide2-big.jpg';

import design from '../../images/02_design.jpg';
import design1 from '../../images/01_care.jpg';
import design2 from '../../images/03_blend_1.jpg';
import design3 from '../../images/04_koloryzacja.jpg';
import design4 from '../../images/05_so_pure.jpg';

import BoxBig from './components/boxBig';

const key = SCOPE;

export function IpList(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { onChangeValue } = props;
  console.log(props);
  return (
    <>
      <CustomCarousel onChange={v => onChangeValue(v)}>
        <Slide
          className="white"
          img={slide1}
          claim="Dla pięknych blond włosów"
          name="Nowość! 3-etapowa kuracja Keune Care Blonde Savior"
          href="https://keune-polska.pl/aktualnosci/nowosc-keune-care-blonde-savior-dla-pieknych-zdrowych-zachwycajacych-blond-wlosow"
          
        />
        <Slide
          className="black"
          img={slide2}
          claim="Dla pięknych blond włosów"
          name="Nowość! 3-etapowa kuracja Keune Care Blonde Savior"
          href="https://keune-polska.pl/aktualnosci/nowosc-keune-care-blonde-savior-dla-pieknych-zdrowych-zachwycajacych-blond-wlosow"
        />
      </CustomCarousel>
      <section className="default-grid brand-section">
      <BoxBig
          className="one-third"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design}
        />
        <BoxBig
          className="two-thirds"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design1}
        />
        <BoxBig
          className="one-third"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design}
        />
        <BoxBig
          className="two-thirds"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design2}
        />
        <BoxBig
          className="two-thirds"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design3}
        />
        <BoxBig
          className="one-third"
          title= {<>keune<br/>blen</>}
          label="Odkryj serie"
          href="https://keune-polska.pl/marka/blend"
          src={design4}
        />
      </section>
    </>
  );
}

IpList.propTypes = {};

const mapStateToProps = createStructuredSelector({
  class: makeSelectValue(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeValue: value => dispatch(changeValue(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(IpList),
);
