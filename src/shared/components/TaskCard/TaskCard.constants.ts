import { ETaskTypes } from 'shared/types/tasks-types';

type TTaskColorInfo = {
  [key in ETaskTypes]: {
    bgColor: string;
    timeColor: string;
  };
};

export const TaskColorInfo: TTaskColorInfo = {
  [ETaskTypes.GREEN]: {
    bgColor: '#ABE9CE',
    timeColor: '#435E52',
  },
  [ETaskTypes.BLUE]: {
    bgColor: '#D8DCFF',
    timeColor: '#404784',
  },
  [ETaskTypes.ORANGE]: {
    bgColor: '#FFDFBA',
    timeColor: '#662E1E',
  },
  [ETaskTypes.RED]: {
    bgColor: '#FEC6B7',
    timeColor: '#662E1E',
  },
  [ETaskTypes.LIGHT_GREEN]: {
    bgColor: '#D9E6A2',
    timeColor: '#4A4D3A',
  },
  [ETaskTypes.PURPLE]: {
    bgColor: '#F2BAE1',
    timeColor: '#8E4778',
  },
  [ETaskTypes.UNKNOWN]: {
    bgColor: '#7a6dff',
    timeColor: '#451fdd',
  },
  [ETaskTypes.DISABLED]: {
    bgColor: '#F0F0F0',
    timeColor: '#A5A5A5',
  },
};
