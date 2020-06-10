import styled, { css } from 'styled-components';

import colors from '../../../../styles/colors';

interface ContainerProps {
  isIncome: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export const Container = styled.main<ContainerProps>`
  display: flex;
  align-items: center;

  padding: 16px;
  position: relative;

  > aside {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: #eee;

    > svg {
      color: ${(props) => (props.isIncome ? colors.success : colors.hintIcon)};
      z-index: 5;
    }

    ${(props) =>
      !props.isFirst &&
      css`
        &:before {
          content: '';
          position: absolute;
          top: 0;
          width: 1px;
          height: 50%;
          background: #eee;
        }
      `}

    ${(props) =>
      !props.isLast &&
      css`
        &:after {
          content: '';
          position: absolute;
          width: 1px;
          height: 50%;
          background: #eee;
          bottom: 0;
        }
      `}
  }

  > span {
    margin-left: 16px;
    font-size: 13px;
    letter-spacing: 1.25px;
    font-weight: 500;
    color: ${colors.secondaryText};
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 16px;

  > small {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.15px;
    text-transform: uppercase;
  }

  > strong {
    color: ${colors.text};
    font-size: 16px;
    line-height: 24px;
  }

  > div {
    font-size: 13px;
    letter-spacing: 0.15px;

    color: ${colors.secondaryText};

    > span > b {
      font-size: 14px;
      margin-left: 4px;
      margin-right: 6px;
    }
  }
`;

export const User = styled.section`
  display: flex;
  align-items: center;
  align-self: flex-start;

  padding: 2px 12px 2px 4px;
  border-radius: 24px;
  border: 1px solid ${colors.hintColor};
  margin-top: 8px;

  > img {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    object-fit: cover;
  }

  > strong {
    margin-left: 6px;
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;

interface PriceProps {
  isIncome: boolean;
}

export const Price = styled.strong<PriceProps>`
  color: ${colors.text};
  font-size: 16px;
  margin-left: 16px;
  width: 100px;
  text-align: end;

  ${(props) =>
    props.isIncome &&
    css`
      color: ${colors.success};
    `}
`;
