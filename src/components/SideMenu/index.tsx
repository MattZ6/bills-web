import React from 'react';
import { MdExitToApp } from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import User from './components/User';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <User />

      <button type="button" onClick={signOut}>
        <MdExitToApp size={24} />
        <strong>Sair da minha conta</strong>
      </button>
    </Container>
  );
};

export default SideMenu;
