import { ArrowDown, Avatar, LogoWhite } from 'app/images';
import { Button } from 'shared/components/Button/Button';
import { SearchInput } from 'shared/components/SearchInput/SearchInput';
import { favoritesItems, myProjectsItems } from './Sidebar.data';
import { StyledSidebarItems as SC } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SC.SidebarWrapper>
      <SC.SidebarHeader>
        <img width={131} height={32} src={LogoWhite} alt='' />
        <SearchInput primary />
      </SC.SidebarHeader>
      <SC.WorkspaceButton>
        <SC.AvatarImg width={22} height={22} src={Avatar} alt='avatar' />
        <SC.Paragraph>My workspace</SC.Paragraph>
      </SC.WorkspaceButton>
      <SC.DropdownButtonWrapper>
        <Button imgSource={ArrowDown} transparentBg>
          Favorites
        </Button>
      </SC.DropdownButtonWrapper>
      <SC.Ul>
        {favoritesItems.map((favoriteTitle) => (
          <SC.Li key={favoriteTitle}>{favoriteTitle}</SC.Li>
        ))}
      </SC.Ul>
      <SC.DropdownButtonWrapper>
        <Button imgSource={ArrowDown} transparentBg>
          My Projects
        </Button>
      </SC.DropdownButtonWrapper>
      <SC.Ul>
        {myProjectsItems.map((myProjectTitle) => (
          <SC.Li key={myProjectTitle}>{myProjectTitle}</SC.Li>
        ))}
      </SC.Ul>
    </SC.SidebarWrapper>
  );
};
