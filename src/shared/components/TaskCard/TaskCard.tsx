import { FC, useRef } from 'react';
import { ITask } from 'shared/types/models';
import { StyledTaskCard as SC } from './TaskCard.styled';

interface ITaskCard {
  task: ITask;
}

export const TaskCard: FC<ITaskCard> = ({ task }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SC.TaskCardWrapper ref={ref} type={task.cardType}>
      <h6>{task.taskTitle}</h6>
      <time>{task.time}</time>
    </SC.TaskCardWrapper>
  );
};
