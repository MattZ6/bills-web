import styled from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background: ${colors.primary};
  color: ${colors.primaryConstrast};
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  border: 0;
  min-height: 40px;
  letter-spacing: 1px;

  transition: all 200ms ease-out;

  &:focus {
    background: ${darken(0.02, colors.primary)};
  }

  &:hover {
    background: ${lighten(0.05, colors.primary)};
  }

  &:active {
    background: ${darken(0.05, colors.primary)};
  }

  &:disabled {
    cursor: default;

    opacity: 0.6;

    &:hover {
      background: ${colors.primary};
    }
  }
`;
