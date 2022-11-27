import { Calendar, Folder, Notes, RoadMap, Tasks } from 'app/images';

interface Tool {
  imageSource: string;
  title: string;
  isActive: boolean;
}

export const ToolsItems: Tool[] = [
  {
    imageSource: RoadMap,
    title: 'Roadmap',
    isActive: false,
  },
  {
    imageSource: Calendar,
    title: 'Schedule',
    isActive: true,
  },
  {
    imageSource: Tasks,
    title: 'Tasks',
    isActive: false,
  },
  {
    imageSource: Notes,
    title: 'Notes',
    isActive: false,
  },
  {
    imageSource: Folder,
    title: 'Files',
    isActive: false,
  },
];
