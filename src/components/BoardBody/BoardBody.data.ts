import { ETaskTypes } from 'shared/types/tasks-types';

interface ITask {
  taskTitle: string;
  time: string;
  type: ETaskTypes;
}

interface ITaskGroup {
  title: string;
  count: number;
  taskItems: ITask[];
}

export const tasksGroup: ITaskGroup[] = [
  {
    title: 'New Task',
    count: 4,
    taskItems: [
      {
        taskTitle: 'Check email',
        time: '0:20h',
        type: ETaskTypes.GREEN,
      },
      {
        taskTitle: 'Compare PPC agencies and make a report for Steven',
        time: '3:00h',
        type: ETaskTypes.BLUE,
      },
      {
        taskTitle: 'Meeting with Amanda (PR department)',
        time: '0:30h',
        type: ETaskTypes.GREEN,
      },
      {
        taskTitle: "Get Patrick's approval for homepage new design",
        time: '0:20h',
        type: ETaskTypes.BLUE,
      },
    ],
  },
  {
    title: 'Scheduled',
    count: 3,
    taskItems: [
      {
        taskTitle: 'Check email',
        time: '0:20h',
        type: ETaskTypes.ORANGE,
      },
      {
        taskTitle: 'Write a blogpost "7 best strategies for SEO in 2020"',
        time: '5:00h',
        type: ETaskTypes.RED,
      },
      {
        taskTitle: 'New Ad copies for Manamaja',
        time: '2:00h',
        type: ETaskTypes.LIGHT_GREEN,
      },
    ],
  },
  {
    title: 'In progress',
    count: 3,
    taskItems: [
      {
        taskTitle: 'Check email',
        time: '0:20h',
        type: ETaskTypes.ORANGE,
      },
      {
        taskTitle: "Record a video comment about last week's analytics report",
        time: '5:00h',
        type: ETaskTypes.PURPLE,
      },
      {
        taskTitle: 'Process all resumes for Content Marketer position',
        time: '1:00h',
        type: ETaskTypes.ORANGE,
      },
    ],
  },
  {
    title: 'Completed',
    count: 5,
    taskItems: [
      {
        taskTitle: 'Check email',
        time: '0:20h',
        type: ETaskTypes.DISABLED,
      },
      {
        taskTitle: 'Weekly planning session',
        time: '0:45h',
        type: ETaskTypes.DISABLED,
      },
      {
        taskTitle: 'Create 5+ target audiences in Facebook for Samsung ...',
        time: '2:30h',
        type: ETaskTypes.DISABLED,
      },
      {
        taskTitle: 'Check FB Banner Design and give feedback',
        time: '0:20h',
        type: ETaskTypes.DISABLED,
      },
      {
        taskTitle: 'Check email',
        time: '0:20h',
        type: ETaskTypes.DISABLED,
      },
    ],
  },
];
