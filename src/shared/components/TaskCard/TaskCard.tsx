import { FC } from 'react';
import { ETaskTypes } from 'shared/types/tasks-types';
import { StyledTaskCard as SC } from './TaskCard.styled';

interface ITaskCard {
  title: string;
  time: string;
  type: ETaskTypes;
}

export const TaskCard: FC<ITaskCard> = ({ title, time, type }) => {
  return (
    <SC.TaskCardWrapper type={type}>
      <h6>{title}</h6>
      <time>{time}</time>
    </SC.TaskCardWrapper>
  );
};
