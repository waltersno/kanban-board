import { FC } from 'react';
import { TaskCard } from 'shared/components/TaskCard/TaskCard';
import { ITask } from 'shared/types/models';
import { EStatuses } from 'shared/types/tasks-types';
import { StyledStatusGroup as SC } from './StatusGroup.styled';

interface IStatusGroup {
  title: string;
  count: number;
  tasks: ITask[];
  groupStatus: EStatuses;
}

export const StatusGroup: FC<IStatusGroup> = ({ title, count, groupStatus, tasks }) => {
  return (
    <SC.TaskGroup key={title}>
      <SC.TaskGroupHeader>
        <h3>{title}</h3>
        <span>{count}</span>
      </SC.TaskGroupHeader>
      <SC.TasksWrapper>
        {tasks
          .filter((task) => task.status === groupStatus)
          .map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </SC.TasksWrapper>
    </SC.TaskGroup>
  );
};
