import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  loading?: boolean;
  clear?: boolean;
  leftIcon?: React.ComponentType<IconBaseProps>;
  rigthIcon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  clear = false,
  leftIcon: LeftIcon,
  rigthIcon: RigthIcon,
  ...rest
}) => {
  return (
    <Container
      type="button"
      outline={outline}
      clear={clear}
      marginLeft={!!LeftIcon}
      marginRight={!!RigthIcon}
      {...rest}
    >
      {LeftIcon && <LeftIcon />}

      <strong>{children}</strong>

      {RigthIcon && <RigthIcon />}
    </Container>
  );
};

export default Button;
