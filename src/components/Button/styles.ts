import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '../../styles/colors';

interface ContainerProps {
  outline: boolean;
  clear: boolean;
  marginLeft: boolean;
  marginRight: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  padding-left: ${(props) => (props.marginLeft ? 8 : 16)}px;
  padding-right: ${(props) => (props.marginRight ? 8 : 16)}px;

  border-radius: 4px;
  background: ${colors.primary};
  color: ${colors.primaryConstrast};
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


  > strong {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;

    margin-left: ${(props) => (props.marginLeft ? 8 : 0)}px;
    margin-right: ${(props) => (props.marginRight ? 8 : 0)}px;
  }

  > svg {
    width: 24px;
    height: 24px;
  }
`;
