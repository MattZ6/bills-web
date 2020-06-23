import React from 'react';
import {
  MdExitToApp,
  MdMonetizationOn,
  MdPerson,
  MdAttachMoney,
} from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../../hooks/auth';

import User from './components/User';
import Link from './components/Link';

import { Container, Content, Links } from './styles';

const SideMenu: React.FC = () => {
  const { signOut } = useAuth();

  const { location } = useHistory();

  return (
    <Container>
      <User />

      <Content>
        <Links>
          <Link
            to="/app"
            title="Minhas contas"
            active={location.pathname === '/app'}
            icon={MdAttachMoney}
          />
        </Links>

        <Links>
          <Link
            to="/transactions"
            title="Contas"
            active={location.pathname === '/transactions'}
            icon={MdMonetizationOn}
          />
          <Link
            to="/users"
            title="Usuários"
            active={location.pathname === '/users'}
            icon={MdPerson}
          />
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
