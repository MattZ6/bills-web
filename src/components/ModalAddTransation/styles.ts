import styled from 'styled-components';
import { darken } from 'polished';
import { Form as Unform } from '@unform/web';

import colors from '../../styles/colors';

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  padding: 16px 24px;
  background: ${darken(0.055, colors.primary)};

  position: relative;

  > strong {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.25px;
    color: ${colors.primaryConstrast};
  }

  > span {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.54);
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 8px;
    right: 8px;

    width: 40px;
    height: 40px;
    border-radius: 20px;

    background: transparent;
    border: 0;

    transition: all 200ms ease-out;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.15);
    }

    > svg {
      width: 24px;
      height: 24px;

      color: ${colors.primaryConstrast};
    }
  }
`;

export const Form = styled(Unform)`
  > main {
    display: flex;
    flex-direction: column;

    padding: 24px 24px 8px;

    > div {
    }

    > aside {
      > div {
        > button {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          border: 1px solid transparent;

          > img {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  > button,
  > div {
    flex: 1;
  }

  > div + div,
  > div + button,
  > button + div,
  > button + button {
    margin-left: 16px;
  }

  > button {
    display: flex;
    align-items: center;

    > img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      object-fit: cover;
      margin-right: 8px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 8px;

  > button + button {
    margin-left: 8px;
  }
`;
