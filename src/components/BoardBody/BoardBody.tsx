import { ArrowDownBlack, Avatar, Bell, GrayPlus, Plus } from 'app/images';
import { Button } from 'shared/components/Button/Button';
import { SearchInput } from 'shared/components/SearchInput/SearchInput';
import { TaskCard } from 'shared/components/TaskCard/TaskCard';
import { BLACK20_HEX_COLOR } from 'shared/constants/styles';
import { generateReactKey } from 'shared/helpers/react';
import { tasksGroup } from './BoardBody.data';
import { StyledHeader as SC } from './BoardBody.styled';

export const BoardBody = () => {
  const secondaryButtonProps = {
    padding: '12px 20px',
    textColor: BLACK20_HEX_COLOR,
    imgPosition: 'after',
    imgSource: ArrowDownBlack,
  } as const;

  return (
    <main>
      <SC.Header>
        <SC.HeaderLeftSide>
          <Button primary padding='12px 20px 12px 27px' imgSource={Plus}>
            Add new
          </Button>
          <Button {...secondaryButtonProps}>Kanban</Button>
          <Button {...secondaryButtonProps}>Filter</Button>
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
        {tasksGroup.map(({ title, count, taskItems }) => (
          <SC.TaskGroup key={title}>
            <SC.TaskGroupHeader>
              <h3>{title}</h3>
              <span>{count}</span>
            </SC.TaskGroupHeader>
            <SC.TasksWrapper>
              {taskItems.map(({ taskTitle, time, type }, index) => (
                <TaskCard time={time} title={taskTitle} type={type} key={generateReactKey(index)} />
              ))}
            </SC.TasksWrapper>
          </SC.TaskGroup>
        ))}
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
