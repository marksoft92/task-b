import React from 'react';
import styled from 'styled-components';
import routes from '../../utils/routes'
import MainMenuBlock from '../../components/MainMenuBlock/MainMenu';
import SvgSprite from '../../components/SvgSprite';

const AppWrapper = styled.div`
  margin: 0 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      {routes()}
      <SvgSprite/>
    </AppWrapper>
  );
}
