import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: center;

    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    padding: 0 16px;

    > span {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
