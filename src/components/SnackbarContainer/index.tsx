import React from 'react';
import { useTransition } from 'react-spring';

import { SnackbarMessage } from '../../hooks/snackbar';

import Snackbar from './Snackbar';

import { Container } from './styles';

interface SnackbarContainerProps {
  messages: SnackbarMessage[];
}

const SnackbarContainer: React.FC<SnackbarContainerProps> = ({ messages }) => {
  const animatedMessages = useTransition(messages, (message) => message.id, {
    from: { transform: 'translateY(16px)', opacity: 0 },
    enter: { transform: 'translateY(0)', opacity: 1 },
    leave: { transform: 'translateY(-16%)', opacity: 0 },
  });

  return (
    <Container>
      {animatedMessages.map(({ key, item, props }) => (
        <Snackbar key={key} data={item} style={props} />
      ))}
    </Container>
  );
};

export default SnackbarContainer;
