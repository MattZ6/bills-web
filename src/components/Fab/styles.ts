import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.button)`
  position: fixed;
  right: 32px;
  bottom: 16px;

  width: 56px;
  height: 56px;
  border-radius: calc(56px / 2);
`;
