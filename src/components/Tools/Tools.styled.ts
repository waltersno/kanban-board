import { GRAY10_HEX_COLOR, WHITE10_HEX_COLOR, BLUE40_HEX_COLOR } from 'shared/constants/styles';
import styled, { css } from 'styled-components';

interface ILi {
  isActive?: boolean;
}

const ToolsWrapper = styled.section`
  background-color: var(--gray10);
`;

const Heading = styled.h2`
  margin: 24px auto 28px 16px;
  font-weight: 400;
  font-size: 18px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const activeLiStyles = css`
  &::before {
    left: 0;
    position: absolute;
    content: '';
    height: 100%;
    width: 4px;
    border-radius: 0px 10px 10px 0px;
    background-color: ${BLUE40_HEX_COLOR};
  }
`;

const Li = styled.li<ILi>`
  padding-left: 14px;
  width: 138px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  position: relative;
  ${({ isActive }) => isActive && activeLiStyles}
  background-color: ${({ isActive }) => (isActive ? WHITE10_HEX_COLOR : GRAY10_HEX_COLOR)};
`;

export const StyledToolsComponents = {
  ToolsWrapper,
  Heading,
  Ul,
  Li,
};
