import { GRAY10_HEX_COLOR, TRANSPARENT } from 'shared/constants/styles';
import styled from 'styled-components';

interface IDropdownButton {
  isActive: boolean;
}

const DropdownMenu = styled.ul`
  top: 118%;
  list-style: none;
  position: absolute;
  padding: 6px;
  background-color: var(--white);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  min-width: 130px;
`;

const DropdownButton = styled.button<IDropdownButton>`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 12px 8px;
  text-align: left;
  background-color: ${({ isActive }) => (isActive ? GRAY10_HEX_COLOR : TRANSPARENT)};
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

export const StyledDropdown = {
  DropdownMenu,
  DropdownButton,
  DropdownWrapper,
};
