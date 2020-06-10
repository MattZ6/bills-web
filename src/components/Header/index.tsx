import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <span role="img" aria-label="Batata doce">
          Nossas continhas 😭
        </span>
      </div>
    </Container>
  );
};

export default Header;
