export interface IButton {
  primary?: boolean;
  imgSource?: string;
  transparentBg?: boolean;
  imgPosition?: 'before' | 'after';
  textColor?: string;
  padding?: string;
  flipImage?: boolean;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
