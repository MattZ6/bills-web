import styled, { css, keyframes } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 72px;
  position: relative;
`;

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isDisabled: boolean;
  hasIcon: boolean;
}

export const InputContainer = styled.label<InputContainerProps>`
  display: flex;
  align-items: center;

  border-radius: 6px;
  border: 1.2px solid ${colors.hintColor};
  height: 48px;
  background: ${colors.background};
  cursor: text;

  transition: all 200ms ease-out;

  &:hover {
    ${(props) =>
      !props.isErrored &&
      css`
        border-color: ${colors.primary};

        > svg {
          color: ${colors.primary};
        }
      `}
  }

  ${(props) =>
    props.isDisabled &&
    css`
      border-color: ${colors.hintColor} !important;
      opacity: 0.6;
      cursor: default;

      > svg {
        color: ${colors.hintIcon} !important;
        opacity: 0.6;
      }
    `}

  > input {
    flex: 1;

    height: 100%;
    border: 0;
    padding: 0 16px;
    background: transparent;
    border-radius: inherit;
    font-size: 16px;
    line-height: 24px;

    ${(props) =>
      props.hasIcon &&
      css`
        padding: 0 48px 0 16px;
      `}

    &:disabled {
      opacity: 0.6;
    }
  }

  > svg {
    position: absolute;
    right: 16px;
    color: ${colors.hintIcon};
    transition: all 200ms ease-out;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};

      > svg {
        color: ${colors.primary};
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      > svg {
        color: ${colors.primary};
      }
    `}

    ${(props) =>
      props.isErrored &&
      css`
        border-color: ${colors.warn};

        > svg {
          color: ${colors.warn};
        }
      `}
`;

const appearError = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;

  padding: 0 16px;
  height: 28px;
  color: ${colors.warn};

  animation: ${appearError} 150ms ease-out;

  > svg {
    margin-right: 4px;
  }

  > span {
    flex: 1;

    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.4px;

    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
  }
`;
