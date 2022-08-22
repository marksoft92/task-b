import React, {useEffect, memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {SCOPE} from '../constants'
import {useInjectReducer} from 'utils/injectReducer';
import {useInjectSaga} from 'utils/injectSaga';

import {getCountry} from '../actions';

import reducer from '../reducer';
import saga from '../saga';
import {withRouter} from "react-router-dom";

import {makeSelectCountryItem} from "../selectors";


const key = SCOPE;

export function CountryView(props) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const {
    onLoadCountry,
    match,
    country
  } = props

  const name = match.params.name
  useEffect(() => {
    onLoadCountry(name)
  }, []);


  return (
    <div>
      <button
        onClick={() => props.history.push(`/countries`)}
        className="pointner"
      >Wstecz
      </button>
      <section>
        <div className="field-details">
          <span>Stolica</span>
          <span>{country.capital}</span>
        </div>
        <div className="field-details">
          <span>Państwo</span>
          <span>{country.name}</span>
        </div>
        {(country.currencies || []).map(v => <>
          <div className="field-details">
            <span>Waluta</span>
            <span>{v.code}</span>
          </div>
          <div className="field-details">
            <span>Nazwa waluty</span>
            <span>{v.name}</span>
          </div>
          <div className="field-details">
            <span>Symbol</span>
            <span>{v.symbol}</span>
          </div>
        </>)

        }
      </section>
    </div>
  );
}

CountryView.propTypes = {
  onLoadCountries: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  country: makeSelectCountryItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCountry: (name) => dispatch(getCountry(name)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(
  withConnect,
  memo,
)(CountryView));
