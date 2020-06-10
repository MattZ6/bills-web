import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  > div {
    flex: 1;

    > h1 {
      font-size: 54px;
      font-weight: 600;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 420px;

  > form {
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 0 16px;

    > h2 {
      font-size: 24px;
      line-height: 32px;
      margin: 0 0 24px;
    }

    > button {
      align-self: flex-end;
    }
  }
`;
