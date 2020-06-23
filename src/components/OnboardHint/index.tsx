import React from 'react';
import { IconBaseProps } from 'react-icons';

import Button from '../Button';

import { Container } from './styles';

interface OnboardHint {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
  description?: string;

  buttonText?: string;
  onClick?(): void;
}

const OnboardHint: React.FC<OnboardHint> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick,
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

      {buttonText && (
        <Button outline onClick={onClick} style={{ marginTop: 16 }}>
          {buttonText}
        </Button>
      )}
    </Container>
  );
};

export default React.memo(OnboardHint);
