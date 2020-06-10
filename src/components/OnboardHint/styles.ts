import styled, { keyframes } from 'styled-components';

import colors from '../../styles/colors';

const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 16px;
  max-width: 520px;
  margin: 48px auto 0;

  animation: ${fadeAnimation} 250ms ease-out;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 124px;
    height: 124px;
    border-radius: calc(124px / 2);
    background: ${colors.divider};

    > svg {
      color: ${colors.secondaryText};
    }
  }

  > strong {
    font-size: 20px;
    line-height: 32px;
    margin: 16px 0 0;
    color: ${colors.secondaryText};
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    color: ${colors.secondaryText};
  }
`;
