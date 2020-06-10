import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface OnboardHint {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
  description?: string;
}

const OnboardHint: React.FC<OnboardHint> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Container>
      {Icon && (
        <div>
          <Icon size={72} />
        </div>
      )}

      <strong>{title}</strong>
      {description && <p>{description}</p>}
    </Container>
  );
};

export default React.memo(OnboardHint);
