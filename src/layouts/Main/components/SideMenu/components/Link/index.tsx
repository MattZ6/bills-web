import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface LinkProps extends RouterLinkProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  active?: boolean;
}

const Link: React.FC<LinkProps> = ({
  title,
  icon: Icon,
  active = false,
  ...rest
}) => {
  return (
    <Container active={active}>
      <RouterLink {...rest}>
        <Icon size={24} />
        <strong>{title}</strong>
      </RouterLink>
    </Container>
  );
};

export default Link;
