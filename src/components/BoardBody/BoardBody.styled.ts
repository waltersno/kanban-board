import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 2px 4px var(--white5);
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const Notification = styled.div`
  position: relative;

  ::before {
    right: -15px;
    top: -11px;
    border-radius: 4px;
    content: attr(data-count);
    font-size: 10px;
    position: absolute;
    padding: 4px;
    background-color: var(--red40);
    color: var(--white);
  }
`;

const TasksGroupWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 300px) 1fr;
  height: calc(100vh - 139px);
`;

const CreateStatusButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;
  background-color: transparent;
  border: none;
  gap: 4px;
  color: var(--gray40);
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid var(--gray5);
  border-left: 1px solid var(--gray5);
`;

export const StyledHeader = {
  Header,
  HeaderLeftSide,
  HeaderRightSide,
  Notification,
  TasksGroupWrapper,
  CreateStatusButton,
};
