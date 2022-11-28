import { ETaskTypes } from 'shared/types/tasks-types';

const enum EStatuses {
  NEW_TASK = 'newTask',
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}
interface ITask {
  taskTitle: string;
  time: string;
  type: ETaskTypes;
  status: EStatuses;
}

interface ITaskGroup {
  title: string;
  count: number;
  groupStatus: EStatuses;
}

export const tasksList: ITask[] = [
  {
    taskTitle: 'Check email',
    time: '0:20h',
    type: ETaskTypes.GREEN,
    status: EStatuses.NEW_TASK,
  },
  {
    taskTitle: 'Compare PPC agencies and make a report for Steven',
    time: '3:00h',
    type: ETaskTypes.BLUE,
    status: EStatuses.NEW_TASK,
  },
  {
    taskTitle: 'Meeting with Amanda (PR department)',
    time: '0:30h',
    type: ETaskTypes.GREEN,
    status: EStatuses.NEW_TASK,
  },
  {
    taskTitle: "Get Patrick's approval for homepage new design",
    time: '0:20h',
    type: ETaskTypes.BLUE,
    status: EStatuses.NEW_TASK,
  },
  {
    taskTitle: 'Check email',
    time: '0:20h',
    type: ETaskTypes.ORANGE,
    status: EStatuses.SCHEDULED,
  },
  {
    taskTitle: 'Write a blogpost "7 best strategies for SEO in 2020"',
    time: '5:00h',
    type: ETaskTypes.RED,
    status: EStatuses.SCHEDULED,
  },
  {
    taskTitle: 'New Ad copies for Manamaja',
    time: '2:00h',
    type: ETaskTypes.LIGHT_GREEN,
    status: EStatuses.SCHEDULED,
  },
  {
    taskTitle: 'Check email',
    time: '0:20h',
    type: ETaskTypes.ORANGE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    taskTitle: "Record a video comment about last week's analytics report",
    time: '5:00h',
    type: ETaskTypes.PURPLE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    taskTitle: 'Process all resumes for Content Marketer position',
    time: '1:00h',
    type: ETaskTypes.ORANGE,
    status: EStatuses.IN_PROGRESS,
  },
  {
    taskTitle: 'Check email',
    time: '0:20h',
    type: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    taskTitle: 'Weekly planning session',
    time: '0:45h',
    type: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    taskTitle: 'Create 5+ target audiences in Facebook for Samsung ...',
    time: '2:30h',
    type: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    taskTitle: 'Check FB Banner Design and give feedback',
    time: '0:20h',
    type: ETaskTypes.DISABLED,
    status: EStatuses.COMPLETED,
  },
  {
    taskTitle: 'Check email',
    time: '0:20h',
    type: ETaskTypes.DISABLED,
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
