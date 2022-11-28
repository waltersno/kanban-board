import { FC } from 'react';
import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import { TaskCard } from 'shared/components/TaskCard/TaskCard';
import { ITask } from 'shared/types/models';
import { EStatuses } from 'shared/types/tasks-types';
import { StyledStatusGroup as SC } from './StatusGroup.styled';

interface IStatusGroup {
  title: string;
  count: number;
  tasks: ITask[];
  provided: DroppableProvided;
  groupStatus: EStatuses;
  innerRef: (element: HTMLElement | null) => unknown;
}

export const StatusGroup: FC<IStatusGroup> = ({
  title,
  count,
  tasks,
  provided,
  groupStatus,
  innerRef,
}) => {
  return (
    <SC.TaskGroup key={title} ref={innerRef}>
      <SC.TaskGroupHeader>
        <h3>{title}</h3>
        <span>{count}</span>
      </SC.TaskGroupHeader>
      <SC.TasksWrapper>
        {tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
              <TaskCard
                groupStatus={groupStatus}
                task={task}
                innerRef={provided.innerRef}
                provided={provided}
              />
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </SC.TasksWrapper>
    </SC.TaskGroup>
  );
};
