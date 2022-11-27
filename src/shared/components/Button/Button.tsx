import { FC, PropsWithChildren } from 'react';
import {
  WHITE10_HEX_COLOR,
} from 'shared/constants/styles';
import { IButton } from './Button.types';
import { StyledButton as SC } from './Button.styled';

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  imgSource,
  primary,
  transparentBg,
  padding,
  isActive,
  onClick,
  flipImage = false,
  textColor = WHITE10_HEX_COLOR,
  imgPosition = 'before',
}) => {
  return (
    <SC.Button
      transparentBg={transparentBg}
      primary={primary}
      textColor={textColor}
      padding={padding}
      onClick={onClick}
      isActive={isActive}
    >
      {imgPosition === 'after' && (
        <>
          {children}
          {imgSource && <SC.Image flipImage={flipImage} src={imgSource} alt='' />}
        </>
      )}

      {imgPosition === 'before' && (
        <>
          {imgSource && <SC.Image flipImage={flipImage} src={imgSource} alt='' />}
          {children}
        </>
      )}
    </SC.Button>
  );
};
