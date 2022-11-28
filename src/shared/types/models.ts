import { EStatuses, ETaskTypes } from "./tasks-types";

export interface ITask {
  id: string;
  taskTitle: string;
  time: string;
  cardType: ETaskTypes;
  status: EStatuses;
}