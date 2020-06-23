import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '../../styles/colors';

interface ContainerProps {
  outline: boolean;
  clear: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${colors.primary};
  color: ${colors.primaryConstrast};
  border: 0;

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

      &:disabled {
        &:hover {
          background: transparent;
        }
      }
    `}

  ${(props) =>
    props.clear &&
    css`
      background: transparent;
      border: 0;
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

      &:disabled {
        &:hover {
          background: transparent;
        }
      }
    `}

  > svg {
    width: 24px;
    height: 24px;
  }
`;
