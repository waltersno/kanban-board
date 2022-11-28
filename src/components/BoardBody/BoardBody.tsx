import { Avatar, Bell, GrayPlus, Plus } from 'app/images';
import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Button } from 'shared/components/Button/Button';
import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import { SearchInput } from 'shared/components/SearchInput/SearchInput';
import { StatusGroup } from 'shared/components/StatusGroup/StatusGroup';
import { EStatuses } from 'shared/types/tasks-types';
import { tasksGroup } from './BoardBody.data';
import { StyledHeader as SC } from './BoardBody.styled';

export const BoardBody = () => {
  const [statusGroup, setStatusGroup] = useState(tasksGroup);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const srcDroppableKey = source.droppableId as EStatuses;
    const destinationDroppableKey = destination.droppableId as EStatuses;

    if (srcDroppableKey !== destinationDroppableKey) {
      const sourceColumn = statusGroup[srcDroppableKey];
      const destColumn = statusGroup[destinationDroppableKey];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setStatusGroup({
        ...statusGroup,
        [srcDroppableKey]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destinationDroppableKey]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = statusGroup[srcDroppableKey];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setStatusGroup({
        ...statusGroup,
        [srcDroppableKey]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <main>
      <SC.Header>
        <SC.HeaderLeftSide>
          <Button primary padding='12px 20px 12px 27px' imgSource={Plus}>
            Add new
          </Button>
          <Dropdown initialValue='Kanban' dropdownItems={['Board view', 'Table view', 'Kanban']} />
          <Dropdown
            initialValue='Filter'
            dropdownItems={['Popularity', 'Task count', 'Finished']}
          />
        </SC.HeaderLeftSide>
        <SC.HeaderRightSide>
          <SearchInput />
          <SC.Notification data-count='99+'>
            <img src={Bell} alt='' />
          </SC.Notification>
          <img width={40} height={40} src={Avatar} alt='' />
        </SC.HeaderRightSide>
      </SC.Header>
      <SC.TasksGroupWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(statusGroup).map(([columnId, column]) => {
            return (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <StatusGroup
                    innerRef={provided.innerRef}
                    provided={provided}
                    groupStatus={column.groupStatus}
                    count={column.items.length}
                    tasks={column.items}
                    title={column.title}
                  />
                )}
              </Droppable>
            );
          })}
        </DragDropContext>
        <div>
          <SC.CreateStatusButton>
            <img src={GrayPlus} alt='' />
            <p>Create status</p>
          </SC.CreateStatusButton>
          <div />
        </div>
      </SC.TasksGroupWrapper>
    </main>
  );
};
