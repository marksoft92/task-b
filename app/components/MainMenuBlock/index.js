import React, { memo, useMemo } from 'react';
import MainMenuItemsData from './MainMenu';
import { Link } from 'react-router-dom';
import { Dropdown, Space, Menu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import Svg from '../SVG';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from '../../containers/Home/selectors';
import { withRouter } from 'react-router-dom';
import reducer from '../../containers/Home/reducer';
import { SCOPE } from '../../containers/Home/constants';
import { useInjectReducer } from 'utils/injectReducer';
import {items} from './Items';
const key = SCOPE;

const MainMenu = memo(props => {
  const res1 = MainMenuItemsData().map(v => (
    <li key={v.name}>
      {(['/products'].includes(v.url) && (
        <Dropdown
          overlay={<Menu className="header-menu" items={items} />}
          placement="bottomRight"
          arrow
        >
          <Space>
            <Link to={v.url}>{v.name}</Link>
            <DownOutlined />
          </Space>
        </Dropdown>
      )) || <Link to={v.url}>{v.name}</Link>}
    </li>
  ));

  return <ul className={props.class ? 'white' : 'black'}>{res1}</ul>;
});

function MainMenuBlock(props) {
  useInjectReducer({ key, reducer });

  return (
    <header>
      <div className="logo">
        <Svg name={`logo-${props.class}`} />
      </div>
      <MainMenu class={props.class} />
      <div className="navbar_socials">
        <a
          target="_blank"
          href="https://www.facebook.com/keunepolska/"
          data-social-media-event="Facebook"
          className="item fb"
        >
          <Svg name={`fb-${props.class}`} />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/keunepolska/"
          data-social-media-event="Facebook"
          className="item fb"
        >
          <Svg name={`twitter-${props.class}`} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/keunehaircosmeticspolska/"
          data-social-media-event="Instagram"
          className="item insta"
        >
          <Svg name={`insta-${props.class}`} />
        </a>
      </div>
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  class: makeSelectValue(),
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
  )(MainMenuBlock),
);
