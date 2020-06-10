import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding: 48px 48px 16px;

  > div {
    > span {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.5px;
      color: ${colors.text};
    }

    > h1 {
      font-size: 36px;
      letter-spacing: 0.15px;
      font-weight: 600;
      text-transform: capitalize;
      color: ${colors.text};
    }
  }

  > nav {
    display: flex;
    align-items: center;

    > button {
      display: flex;
      align-items: center;

      background: transparent;
      border-radius: 6px;
      border: 0;
      padding-left: 8px;
      padding-right: 8px;
      height: 40px;
      color: ${colors.secondaryText};

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

      & + button {
        margin-left: 8px;
      }

      &:first-child {
        padding-right: 16px;

        > strong {
          margin-left: 8px;
        }
      }

      &:last-child {
        padding-left: 16px;

        > strong {
          margin-right: 8px;
        }
      }

      > strong {
        font-size: 14px;
        line-height: 20px;
        text-transform: capitalize;
      }
    }
  }
`;
