export const generateReactKey = (index: string | number) => {
  return `${index}_${new Date().getTime()}`;
};
