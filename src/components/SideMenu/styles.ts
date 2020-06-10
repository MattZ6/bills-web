import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
  border-right: 1px solid ${colors.divider};

  > button {
    display: flex;
    align-items: center;

    margin: 8px;
    border-radius: 6px;
    border: 0;
    height: 40px;
    background: transparent;
    text-align: start;
    padding: 0 8px;

    color: ${colors.warn};

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

      overflow: hidden;
      white-space: pre;
      text-overflow: ellipsis;
    }
  }
`;
