import { Avatar, Bell, GrayPlus, Plus } from 'app/images';
import { useState } from 'react';
import { Button } from 'shared/components/Button/Button';
import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import { SearchInput } from 'shared/components/SearchInput/SearchInput';
import { StatusGroup } from 'shared/components/StatusGroup/StatusGroup';
import { tasksGroup } from './BoardBody.data';
import { StyledHeader as SC } from './BoardBody.styled';

export const BoardBody = () => {
  const [statusGroup, setStatusGroup] = useState(tasksGroup);

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
        {Object.entries(statusGroup).map(([columnId, column] ) => {
          return (
            <StatusGroup
              key={column.title}
              count={column.count}
              tasks={column.items}
              title={column.title}
            />
          );
        })}
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
