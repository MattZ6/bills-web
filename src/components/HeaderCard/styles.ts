import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
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
