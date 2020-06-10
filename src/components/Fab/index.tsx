import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdArrowUpward } from 'react-icons/md';

import { Container } from './styles';

interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconBaseProps;
}

const Fab: React.FC<FabProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <MdArrowUpward size={24} />
    </Container>
  );
};

export default React.memo(Fab);
