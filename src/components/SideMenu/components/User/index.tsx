import React from 'react';

import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
        alt="avatar"
      />

      <div>
        <strong>Matheus Z.</strong>
        <span>#matt_z6</span>
      </div>
    </Container>
  );
};

export default User;
