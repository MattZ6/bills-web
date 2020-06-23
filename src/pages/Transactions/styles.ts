import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  padding-bottom: 72px;
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
  z-index: 5;
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
