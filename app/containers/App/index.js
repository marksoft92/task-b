import React from 'react';
import styled from 'styled-components';
import routes from '../../utils/routes'

const AppWrapper = styled.div`
  margin: 0 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      {routes()}

    </AppWrapper>
  );
}
