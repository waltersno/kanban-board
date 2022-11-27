import { ArrowDownBlack } from 'app/images';
import { FC, useEffect, useState } from 'react';
import { BLACK20_HEX_COLOR } from 'shared/constants/styles';
import { useClickOutside } from 'shared/hooks/use-click-outside';
import { Button } from '../Button/Button';
import { StyledDropdown as SC } from './Dropdown.styled';

interface IDropdown {
  initialValue: string;
  dropdownItems: string[];
}

export const Dropdown: FC<IDropdown> = ({ initialValue, dropdownItems }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(initialValue);
  }, [initialValue]);

  const { ref } = useClickOutside(setIsOpenDropdown);

  const secondaryButtonProps = {
    padding: '12px 20px',
    textColor: BLACK20_HEX_COLOR,
    imgPosition: 'after',
    imgSource: ArrowDownBlack,
  } as const;

  const toggleDropdown = () => {
    setIsOpenDropdown((prev) => !prev);
  };

  const handleClickDropdownItem = (title: string) => () => {
    setActiveItem(title);
    setIsOpenDropdown(false);
  };

  return (
    <SC.DropdownWrapper ref={ref}>
      <Button
        {...secondaryButtonProps}
        onClick={toggleDropdown}
        flipImage={isOpenDropdown}
        isActive={isOpenDropdown}
      >
        {activeItem}
      </Button>
      {isOpenDropdown && (
        <SC.DropdownMenu>
          {dropdownItems.map((title) => (
            <li key={title}>
              <SC.DropdownButton
                onClick={handleClickDropdownItem(title)}
                isActive={title === activeItem}
              >
                {title}
              </SC.DropdownButton>
            </li>
          ))}
        </SC.DropdownMenu>
      )}
    </SC.DropdownWrapper>
  );
};
