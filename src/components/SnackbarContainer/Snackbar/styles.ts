import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import colors from '../../../styles/colors';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  dissmissable: number;
}

const snackbarTypeVariations = {
  info: css`
    background: ${colors.info};
    color: ${colors.primaryConstrast};
  `,
  success: css`
    background: ${colors.success};
    color: ${colors.primaryConstrast};
  `,
  error: css`
    background: ${colors.error};
    color: ${colors.primaryConstrast};
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  display: flex;
  align-items: center;

  width: 344px;
  position: relative;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  min-height: 48px;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  transition: all 150ms ease-out;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    !!props.dissmissable &&
    css`
      padding-right: 8px;
    `}

  ${(props) => snackbarTypeVariations[props.type || 'info']}

  > div {
    flex: 1;

    > p {
      font-size: 14px;
      letter-spacing: 0.15px;
      line-height: 20px;
    }
  }

  > button {
    border: 0;
    border-radius: 4px;
    height: 32px;
    padding: 0 8px;
    letter-spacing: 0.15px;
    font-weight: 500;
    background: transparent;
    color: ${colors.primaryConstrast};
    transition: all 200ms ease-out;

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.2);
    }

    &:active {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;
