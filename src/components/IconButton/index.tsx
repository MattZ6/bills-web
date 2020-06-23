import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container type="button" clear={false} outline={false} {...rest}>
      <Icon />
    </Container>
  );
};

export default Button;
