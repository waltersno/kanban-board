import styled from 'styled-components';

const TaskGroup = styled.article``;

const TaskGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  gap: 10px;
  border-bottom: 1px solid var(--gray5);

  & > h3 {
    font-weight: 500;
    color: var(--black20);
    font-size: 14px;
  }

  & > span {
    width: 26px;
    height: 20px;
    display: block;
    background-color: var(--gray30);
    display: grid;
    place-items: center;
    font-size: 14px;
    color: var(--gray40);
    border-radius: 100px;
  }
`;

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 10px;
  gap: 10px;
  border-right: 1px solid var(--gray5);
  height: 100%;
`;

export const StyledStatusGroup = {
  TaskGroup,
  TaskGroupHeader,
  TasksWrapper,
};
