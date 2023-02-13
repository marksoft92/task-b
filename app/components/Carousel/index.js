import React, { memo, useMemo, useState } from 'react';
import { Carousel } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

function CustomCarousel(props) {
const {onChange} = props
const [parentClass,setClass] = useState('white')

function chandleChangeParentClass (v) {
  setClass(v ? 'white' : 'black')
    return onChange(v)
}

  return (
    <Carousel 
    effect="fade"
    className={`carousel-${parentClass}`}
    dots="dots-carousel"
    beforeChange={v=>chandleChangeParentClass(v)}
    autoplay
    >
    {props.children}
    </Carousel>
  );
}

const mapStateToProps = createStructuredSelector({

});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(CustomCarousel),
);
