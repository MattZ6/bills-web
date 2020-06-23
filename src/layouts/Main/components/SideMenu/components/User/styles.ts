import styled from 'styled-components';

import colors from '../../../../../../styles/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 48px 24px 32px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: calc(56px / 2);
    object-fit: cover;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    margin-left: 16px;

    > strong {
      font-size: 16px;
      color: ${colors.text};
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    > span {
      font-size: 14px;
      color: ${colors.secondaryText};
    }
  }
`;
