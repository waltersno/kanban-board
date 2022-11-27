import { TRANSPARENT, BLUE40_HEX_COLOR, GRAY10_HEX_COLOR } from 'shared/constants/styles';
import styled from 'styled-components';
import { IButton } from './Button.types';

const Button = styled.button<
  Pick<IButton, 'transparentBg' | 'primary' | 'textColor' | 'padding' | 'isActive'>
>`
  padding: ${({ padding }) => padding || '10px'};
  border-radius: 50px;
  display: flex;
  gap: 15px;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${({ textColor }) => textColor};
  background-color: ${({ primary, transparentBg, isActive }) => {
    if (transparentBg) {
      return TRANSPARENT;
    }

    if (isActive) {
      return 'var(--gray25)';
    }

    if (primary) {
      return BLUE40_HEX_COLOR;
    }

    return GRAY10_HEX_COLOR;
  }};
`;

const Image = styled.img<Pick<IButton, 'flipImage'>>`
  transform: ${({ flipImage }) => flipImage && 'rotate(180deg)'};
`;

export const StyledButton = {
  Button,
  Image,
};
