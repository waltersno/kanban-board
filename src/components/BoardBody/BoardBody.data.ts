import { ITask } from 'shared/types/models';
import { EStatuses, ETaskTypes } from 'shared/types/tasks-types';

interface ITaskGroup {
  title: string;
  count: number;
  groupStatus: EStatuses;
}

export const statusesArr = Object.values(EStatuses);

export const tasksList: ITask[] = [
  {
    id: 1,
    taskTitle: 'Check email',
    time: '0:20h',
    cardType: ETaskTypes.GREEN,
    status: EStatuses.NEW_TASK,
  },
  {
    id: 2,
    taskTitle: 'Compare PPC agencies and make a report for Steven',
    time: '3:00h',
    cardType: ETaskTypes.BLUE,
    status: EStatuses.NEW_TASK,
  },
  {
    id: 3,
    taskTitle: 'Meeting with Amanda (PR department)',
    time: '0:30h',
    cardType: ETaskTypes.GREEN,
    status: EStatuses.NEW_TASK,
  },
  {
    id: 4,
    taskTitle: "Get Patrick's approval for homepage new design",
    time: '0:20h',
    cardType: ETaskTypes.BLUE,
    status: EStatuses.NEW_TASK,
  },
  {
    id: 5,
    taskTitle: 'Check email',
    time: '0:20h',
    cardType: ETaskTypes.ORANGE,
    status: EStatuses.SCHEDULED,
  },
  {
    id: 6,
    taskTitle: 'Write a blogpost "7 best strategies for SEO in 2020"',
    time: '5:00h',
    cardType: ETaskTypes.RED,
    status: EStatuses.SCHEDULED,
  },
  {
    id: 7,
    taskTitle: 'New Ad copies for Manamaja',
    time: '2:00h',
    cardType: ETaskTypes.LIGHT_GREEN,
    status: EStatuses.SCHEDULED,
  },
  {
    id: 8,
    taskTitle: 'Check email',
    time: '0:20h',
    cardType: ETaskTypes.ORANGE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    id: 9,
    taskTitle: "Record a video comment about last week's analytics report",
    time: '5:00h',
    cardType: ETaskTypes.PURPLE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    id: 10,
    taskTitle: 'Process all resumes for Content Marketer position',
    time: '1:00h',
    cardType: ETaskTypes.ORANGE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    id: 11,
    taskTitle: 'Check email',
    time: '0:20h',
    cardType: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    id: 12,
    taskTitle: 'Weekly planning session',
    time: '0:45h',
    cardType: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    id: 13,
    taskTitle: 'Create 5+ target audiences in Facebook for Samsung ...',
    time: '2:30h',
    cardType: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    id: 14,
    taskTitle: 'Check FB Banner Design and give feedback',
    time: '0:20h',
    cardType: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    id: 15,
    taskTitle: 'Check email',
    time: '0:20h',
    cardType: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
];

export const tasksGroup: ITaskGroup[] = [
  {
    title: 'New Task',
    count: 4,
    groupStatus: EStatuses.NEW_TASK,
  },
  {
    title: 'Scheduled',
    count: 3,
    groupStatus: EStatuses.SCHEDULED,
  },
  {
    title: 'In progress',
    count: 3,
    groupStatus: EStatuses.IN_PROGRESS,
  },
  {
    title: 'Completed',
    count: 5,
    groupStatus: EStatuses.COMPLETED,
  },
];
