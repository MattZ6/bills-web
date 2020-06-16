import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '../../styles/colors';

interface ContainerProps {
  outline: boolean;
}

export const Container = styled.button<ContainerProps>`
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

  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      border: 1px solid ${colors.primary};
      color: ${colors.primary};

      &:focus {
        background: ${lighten(0.35, colors.primary)};
      }

      &:hover {
        background: ${lighten(0.4, colors.primary)};
      }

      &:active {
        background: ${lighten(0.2, colors.primary)};
      }
    `}

  &:disabled {
    cursor: default;

    opacity: 0.6;

    &:hover {
      background: ${colors.primary};
    }
  }
`;
