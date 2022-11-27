import { FC } from 'react';
import styled from 'styled-components';
import { Search } from 'app/images';
import { EBorderRadius } from './SearchInput.types';

interface ISearchInput {
  borderSize?: EBorderRadius;
}

const Input = styled.input.attrs({ type: 'text', placeholder: 'Search...' })`
  background-color: transparent;
  outline: none;
  border: none;
  caret-color: var(--white);
  width: 100%;
  color: var(--white);

  ::placeholder {
    font-size: 14px;
  }
`;

const SearchWrapper = styled.div<ISearchInput>`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--blue30);
  border-radius: ${({ borderSize }) => (borderSize === EBorderRadius.LARGE ? '50xp' : '4px')};
`;

export const SearchInput: FC<ISearchInput> = () => {
  return (
    <SearchWrapper>
      <Input />
      <img width={12} height={12} src={Search} alt='' />
    </SearchWrapper>
  );
};
