import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '../../../../../../styles/colors';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 4px 8px;
  height: 40px;
  border-radius: 6px;

  transition: all 200ms ease-out;

  > a {
    display: flex;
    align-items: center;

    border: 0;
    background: transparent;
    text-align: start;
    padding: 0 8px;
    width: 100%;
    height: 100%;
    border-radius: inherit;

    text-decoration: none;

    transition: all 200ms ease-out;

    &:focus {
      background: rgba(0, 0, 0, 0.05);

      &:hover {
        background: rgba(0, 0, 0, 0.075);
      }

      &:active {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    > strong {
      flex: 1;

      font-size: 14px;
      line-height: 20px;
      margin-left: 16px;
      color: ${colors.text};

      overflow: hidden;
      white-space: pre;
      text-overflow: ellipsis;
      transition: all 200ms ease-out;
    }

    > svg {
      color: ${colors.hintIcon};
      transition: all 200ms ease-out;
    }
  }

  ${(props) =>
    props.active &&
    css`
      background: ${lighten(0.35, colors.primary)};

      > a {
        &:focus {
          background: rgba(0, 0, 0, 0.03);

          &:hover {
            background: rgba(0, 0, 0, 0.04);
          }

          &:active {
            background: rgba(0, 0, 0, 0.04);
          }
        }

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }

        > strong,
        > svg {
          color: ${darken(0.06, colors.primary)};
        }
      }
    `}
`;
