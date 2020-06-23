import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.main`
  display: flex;
  height: 100%;

  > aside {
    width: 360px;
    height: 100%;
    border-left: 1px solid ${colors.divider};

    > form {
      > div {
        padding: 16px 16px 0;
      }
    }
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: 32px 0;

  > img {
    align-self: center;

    width: 136px;
    height: 136px;
    border-radius: calc(136px / 2);
    object-fit: cover;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: 0;
    right: 96px;

    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;

    border: 2px solid ${colors.primaryConstrast};
    background: ${colors.primary};

    > svg {
      width: 24px;
      height: 24px;
      color: ${colors.primaryConstrast};
    }

    > input {
      width: 0;
      height: 0;
    }
  }
`;

export const Content = styled.section`
  flex: 1;

  > header {
    padding: 48px 48px 16px;

    > h1 {
      font-size: 36px;
      letter-spacing: 0.15px;
      font-weight: 600;
      text-transform: capitalize;
      color: ${colors.text};
    }
  }

  > ul {
    list-style: none;
    padding: 16px;
    margin: 0;

    > li {
      display: flex;
      align-items: center;

      padding: 16px;

      > img {
        width: 56px;
        height: 56px;
        border-radius: 8px;
        object-fit: cover;
      }

      > div {
        display: flex;
        flex-direction: column;

        margin-left: 16px;

        > strong {
          font-size: 16px;
          color: ${colors.text};
        }

        > span {
          font-size: 14px;
          color: ${colors.secondaryText};
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;

  padding: 8px;
`;
