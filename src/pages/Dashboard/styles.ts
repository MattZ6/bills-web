import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;

  position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;
`;

export const Content = styled.section`
  position: relative;
  padding-bottom: 72px;

  overflow: hidden auto;
`;

interface BalancesProps {
  showBorder: boolean;
}

export const Balances = styled.div<BalancesProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 16px;

  position: sticky;
  top: 0;
  background: ${colors.background};
  z-index: 10;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: transparent;
  transition: all 200ms ease-out;

  padding: 16px;

  ${(props) =>
    props.showBorder &&
    css`
      border-color: ${colors.divider};
    `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border: 1px solid ${colors.divider};
  border-radius: 6px;
  position: relative;
  background: ${colors.background};

  > span {
    font-size: 14px;
    line-height: 24px;
    color: ${colors.secondaryText};
  }

  > strong {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    color: ${colors.text};
  }

  > svg {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;
