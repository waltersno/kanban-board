import { FC, PropsWithChildren } from 'react';
import {
  BLUE40_HEX_COLOR,
  GRAY10_HEX_COLOR,
  TRANSPARENT,
  WHITE10_HEX_COLOR,
} from 'shared/constants/styles';
import styled from 'styled-components';

interface IButton {
  primary?: boolean;
  imgSource?: string;
  transparentBg?: boolean;
  imgPosition?: 'before' | 'after';
  textColor?: string;
  padding?: string;
}

const StyledButton = styled.button<
  Pick<IButton, 'transparentBg' | 'primary' | 'textColor' | 'padding'>
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
  background-color: ${({ primary, transparentBg }) => {
    if (transparentBg) {
      return TRANSPARENT;
    }

    if (primary) {
      return BLUE40_HEX_COLOR;
    }

    return GRAY10_HEX_COLOR;
  }};
`;

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  imgSource,
  primary,
  transparentBg,
  padding,
  textColor = WHITE10_HEX_COLOR,
  imgPosition = 'before',
}) => {
  return (
    <StyledButton
      transparentBg={transparentBg}
      primary={primary}
      textColor={textColor}
      padding={padding}
    >
      {imgPosition === 'after' && (
        <>
          {children}
          {imgSource && <img src={imgSource} alt='' />}
        </>
      )}

      {imgPosition === 'before' && (
        <>
          {imgSource && <img src={imgSource} alt='' />}
          {children}
        </>
      )}
    </StyledButton>
  );
};
