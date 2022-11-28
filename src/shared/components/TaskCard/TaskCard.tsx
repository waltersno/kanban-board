import { FC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { ITask } from 'shared/types/models';
import { EStatuses, ETaskTypes } from 'shared/types/tasks-types';
import { StyledTaskCard as SC } from './TaskCard.styled';

interface ITaskCard {
  task: ITask;
  provided: DraggableProvided;
  groupStatus: EStatuses;
  innerRef: (element?: HTMLElement | null | undefined) => unknown;
}

export const TaskCard: FC<ITaskCard> = ({ task, provided, groupStatus, innerRef }) => {
  return (
    <SC.TaskCardWrapper
      type={groupStatus === EStatuses.COMPLETED ? ETaskTypes.DISABLED : task.cardType}
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h6>{task.taskTitle}</h6>
      <time>{task.time}</time>
    </SC.TaskCardWrapper>
  );
};
