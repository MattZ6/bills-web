import React from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Content } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <SideMenu />

      <Content>{children}</Content>
    </Container>
  );
};

export default Main;
