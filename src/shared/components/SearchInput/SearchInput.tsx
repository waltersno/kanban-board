import { FC } from 'react';
import styled from 'styled-components';
import { Search } from 'app/images';
import {
  BLACK20_HEX_COLOR,
  BLUE30_HEX_COLOR,
  GRAY10_HEX_COLOR,
  WHITE10_HEX_COLOR,
} from 'shared/constants/styles';

interface ISearchInput {
  primary?: boolean;
}

const Input = styled.input.attrs({ type: 'text', placeholder: 'Search...' })<ISearchInput>`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  caret-color: ${({ primary }) => (primary ? WHITE10_HEX_COLOR : BLACK20_HEX_COLOR)};
  color: ${({ primary }) => (primary ? WHITE10_HEX_COLOR : BLACK20_HEX_COLOR)};
  padding-right: 10px;
  ::placeholder {
    font-size: 14px;
  }
`;

const SearchWrapper = styled.div<ISearchInput>`
  display: flex;
  align-items: center;
  padding: ${({ primary }) => (primary ? '10px' : '12px 16px')};
  background-color: ${({ primary }) => (primary ? BLUE30_HEX_COLOR : GRAY10_HEX_COLOR)};
  border-radius: ${({ primary }) => (primary ? '4px' : '50px')};
`;

export const SearchInput: FC<ISearchInput> = ({ primary }) => {
  return (
    <SearchWrapper primary={primary}>
      <Input primary={primary} />
      <img width={12} height={12} src={Search} alt='' />
    </SearchWrapper>
  );
};
