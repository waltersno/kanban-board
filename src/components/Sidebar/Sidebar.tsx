import { ArrowDown, Avatar, LogoWhite } from 'app/images';
import { Button } from 'shared/components/Button/Button';
import { SearchInput } from 'shared/components/SearchInput/SearchInput';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: var(--blue50);
`;

const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 26px 16px 16px 16px;
  gap: 26px;
`;

const SidebarImage = styled.img`
  /* width: 131px;
  height: 32px; */
`;

const WorkspaceButton = styled.button`
  color: var(--white);
  border: none;
  width: 100%;
  display: flex;
  background-color: var(--blue30);
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
`;

const AvatarImg = styled.img``;

const Paragraph = styled.p`
  font-size: 14px;
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <SidebarImage width={131} height={32} src={LogoWhite} />
        <SearchInput />
      </SidebarHeader>
      <WorkspaceButton>
        <AvatarImg width={22} height={22} src={Avatar} alt='avatar' />
        <Paragraph>My workspace</Paragraph>
      </WorkspaceButton>
      <Button imgSource={ArrowDown} transparentBg>
        Favorites
      </Button>
    </SidebarWrapper>
  );
};
