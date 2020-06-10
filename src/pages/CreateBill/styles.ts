import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;

  > div {
    max-width: 1024px;
    width: 100%;

    margin: 0 auto;

    padding: 16px;

    > form {
      display: flex;
      flex-direction: column;

      > h1 {
        margin-bottom: 16px;
        font-size: 24px;
      }

      input {
        padding: 8px;
        border-radius: 4px;
        border: 1.5px solid #eee;
        transition: all 200ms ease-out;

        &:focus {
          border-color: ${colors.primary};
        }

        &:hover {
          border-color: ${colors.primary};
        }
      }

      > button {
        align-self: flex-end;
      }
    }
  }
`;
