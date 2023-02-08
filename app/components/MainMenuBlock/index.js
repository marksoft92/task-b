import React, { memo, useMemo } from 'react';
import MainMenuItemsData from './MainMenu';
import { Link } from 'react-router-dom';
import { Dropdown, Space, Menu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import Svg from '../SVG';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from '../../containers/IpSearch/selectors';
import { withRouter } from 'react-router-dom';
import reducer from '../../containers/IpSearch/reducer';
import { SCOPE } from '../../containers/IpSearch/constants';
import { useInjectReducer } from 'utils/injectReducer';
const key = SCOPE;

const items = [
  {
    key: '1',
    label: (
      <div class="col">
        <h5 class="inner-menu-title">Efekt</h5>
        <ul class="filter-menu-list">
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/od%C5%BCywienie">
              odżywienie
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/po%C5%82ysk">
              połysk
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/obj%C4%99to%C5%9B%C4%87">
              objętość
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/utrwalenie">
              utrwalenie
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/struktura">
              struktura
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/mat">mat</a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/pi%C4%99kny%20kolor">
              piękny kolor
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/null/g%C5%82adkie%20w%C5%82osy">
              gładkie włosy
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div class="col">
        <h5 class="inner-menu-title">Rodzaj włosów i skóry</h5>
        <ul class="filter-menu-list">
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/wszystkie%20rodzaje%20w%C5%82os%C3%B3w">
              wszystkie rodzaje włosów
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20zniszczone">
              włosy zniszczone
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/problemy%20ze%20sk%C3%B3r%C4%85%20g%C5%82owy">
              problemy ze skórą głowy
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20cienkie">
              włosy cienkie
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20pusz%C4%85ce%20si%C4%99">
              włosy puszące się
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20farbowane">
              włosy farbowane
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20kr%C3%B3tkie">
              włosy krótkie
            </a>
          </li>
          <li class="filter-menu-list__item">
            <a href="https://keune-polska.pl/produkty/w%C5%82osy%20suche">
              włosy suche
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div class="col">
        <h5 class="inner-menu-title">Marki KEUNE</h5>
        <ul class="brands-menu-list">
          <li class="brands-menu-list__item" data-brand="style">
            <a href="https://keune-polska.pl/marka/style">Style</a>
          </li>
          <li class="brands-menu-list__item" data-brand="1922-by-jm-keune">
            <a href="https://keune-polska.pl/marka/1922-by-jm-keune">
              1922 by J.M. Keune
            </a>
          </li>
          <li class="brands-menu-list__item" data-brand="blend">
            <a href="https://keune-polska.pl/marka/blend">Blend</a>
          </li>
          <li class="brands-menu-list__item" data-brand="care">
            <a href="https://keune-polska.pl/marka/care">Care</a>
          </li>
          <li class="brands-menu-list__item" data-brand="forming">
            <a href="https://keune-polska.pl/marka/forming">Forming</a>
          </li>
          <li class="brands-menu-list__item" data-brand="koloryzacja">
            <a href="https://keune-polska.pl/marka/koloryzacja">Koloryzacja</a>
          </li>
          <li class="brands-menu-list__item" data-brand="so-pure">
            <a href="https://keune-polska.pl/marka/so-pure">So pure</a>
          </li>
        </ul>
      </div>
    ),
  },
];

const MainMenu = memo(props => {
  console.log('menu');
  const res1 = MainMenuItemsData().map(v => (
    <li>
      {(['/news'].includes(v.url) && (
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
  console.log('menu', props);
  useInjectReducer({ key, reducer });

  return (
    <header>
      <div className="logo">
        <Svg name={`logo-${props.class}`} />
      </div>
      <MainMenu class={props.class} />
      <div class="navbar_socials">
        <a
          target="_blank"
          href="https://www.facebook.com/keunepolska/"
          data-social-media-event="Facebook"
          class="item fb"
        >
          <Svg name={`fb-${props.class}`} />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/keunepolska/"
          data-social-media-event="Facebook"
          class="item fb"
        >
          <Svg name={`twitter-${props.class}`} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/keunehaircosmeticspolska/"
          data-social-media-event="Instagram"
          class="item insta"
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
