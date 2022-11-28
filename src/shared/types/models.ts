import { EStatuses, ETaskTypes } from "./tasks-types";

export interface ITask {
  id: number;
  taskTitle: string;
  time: string;
  cardType: ETaskTypes;
  status: EStatuses;
}