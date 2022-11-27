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

const DropdownButtonWrapper = styled.div`
  padding: 13px;
`;

const Ul = styled.ul`
  display: flex;
  padding-left: 16px;
  list-style: none;
  flex-direction: column;
  gap: 18px;
  font-size: 14px;
`;

const Li = styled.li`
  color: var(--gray40);
`;

export const StyledSidebarItems = {
  SidebarWrapper,
  SidebarHeader,
  WorkspaceButton,
  AvatarImg,
  Paragraph,
  DropdownButtonWrapper,
  Ul,
  Li,
};
