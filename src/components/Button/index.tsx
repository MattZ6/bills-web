import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  ...rest
}) => {
  return (
    <Container type="button" outline={outline} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
