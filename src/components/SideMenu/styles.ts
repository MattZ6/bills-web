import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

const linkButtonStyle = css`
  display: flex;
  align-items: center;

  margin: 4px 8px;
  border-radius: 6px;
  border: 0;
  height: 40px;
  background: transparent;
  text-align: start;
  padding: 0 8px;

  text-decoration: none;

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
`;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
  border-right: 1px solid ${colors.divider};

  > button {
    ${linkButtonStyle};

    color: ${colors.warn};
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;

  & + nav {
    padding-top: 4px;
    margin-top: 4px;
    border-top: 1px solid ${colors.divider};
  }

  > a {
    ${linkButtonStyle};

    > strong {
      color: ${colors.text};
    }

    > svg {
      color: ${colors.hintIcon};
    }
  }
`;
