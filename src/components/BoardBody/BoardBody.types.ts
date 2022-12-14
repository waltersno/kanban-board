import { ITask } from 'shared/types/models';
import { EStatuses } from 'shared/types/tasks-types';

interface ITaskGroup {
  title: string;
  groupStatus: EStatuses;
  items: ITask[];
}

export type ITaskGroups = {
  [key in EStatuses]: ITaskGroup;
};
