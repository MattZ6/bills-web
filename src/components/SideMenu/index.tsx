import React from 'react';
import {
  MdExitToApp,
  MdMonetizationOn,
  MdPerson,
  MdAttachMoney,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import User from './components/User';

import { Container, Content, Links } from './styles';

const SideMenu: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <User />

      <Content>
        <Links>
          <Link to="/app">
            <MdAttachMoney size={24} />
            <strong>Minhas contas</strong>
          </Link>
        </Links>

        <Links>
          <Link to="/transactions">
            <MdMonetizationOn size={24} />
            <strong>Contas</strong>
          </Link>

          <Link to="/app">
            <MdPerson size={24} />
            <strong>Usuários</strong>
          </Link>
        </Links>
      </Content>

      <button type="button" onClick={signOut}>
        <MdExitToApp size={24} />
        <strong>Sair da minha conta</strong>
      </button>
    </Container>
  );
};

export default SideMenu;
