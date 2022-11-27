import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IButton {
  primary?: boolean;
  imgSource?: string;
  transparentBg?: boolean;
  imgPosition?: 'before' | 'after';
}

const StyledButton = styled.button<Pick<IButton, 'transparentBg' | 'primary'>>`
  border-radius: 50px;
  background-color: ${({ primary, transparentBg }) => {
    if (transparentBg) {
      return 'transparent';
    }

    if (primary) {
      return 'var(--blue40)';
    }

    return 'var(--gray10)';
  }};
`;

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  imgSource,
  primary,
  transparentBg,
  imgPosition = 'before',
}) => {
  return (
    <StyledButton transparentBg={transparentBg} primary={primary}>
      {imgPosition === 'after' && (
        <>
          {children}
          <img src={imgSource} alt='' />
        </>
      )}

      {imgPosition === 'before' && (
        <>
          <img src={imgSource} alt='' />
          {children}
        </>
      )}
    </StyledButton>
  );
};
