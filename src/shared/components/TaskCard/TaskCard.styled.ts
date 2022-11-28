import styled, { css } from 'styled-components';
import { ETaskTypes } from 'shared/types/tasks-types';
import { TaskColorInfo } from './TaskCard.constants';

interface ITaskCardWrapper {
  type: ETaskTypes;
}

const TaskCardWrapper = styled.div<ITaskCardWrapper>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 15px;
  border-radius: 8px;
  cursor: grab;
  background-color: ${({ type }) => TaskColorInfo[type].bgColor};

  > h6 {
    font-weight: 400;
    font-size: 14px;
    color: var(--black20);
    ${({ type }) =>
      type === ETaskTypes.DISABLED &&
      css`
        color: var(--gray35);
        text-decoration: line-through;
      `}
  }

  > time {
    font-weight: 400;
    font-size: 13px;
    color: ${({ type }) => TaskColorInfo[type].timeColor};
  }
`;

export const StyledTaskCard = { TaskCardWrapper };
