import React from 'react';

import { useProfile } from '../../../../../../hooks/profile';

import { Container } from './styles';

const User: React.FC = () => {
  const { profile } = useProfile();

  return (
    <Container>
      <img
        src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
        alt="avatar"
      />

      <div>
        <strong>{profile?.first_name}</strong>
        <span>{profile?.username}</span>
      </div>
    </Container>
  );
};

export default User;
