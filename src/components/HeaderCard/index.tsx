import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface HeaderCardProps {
  overline: string;
  title?: string;
  icon: React.ComponentType<IconBaseProps>;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  overline,
  title = '',
  icon: Icon,
}) => {
  return (
    <Container>
      <span>{overline}</span>
      <strong>{title}</strong>

      <Icon size={24} />
    </Container>
  );
};

export default HeaderCard;
