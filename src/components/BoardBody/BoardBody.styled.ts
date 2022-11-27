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

export const StyledHeader = {
  Header,
  HeaderLeftSide,
  HeaderRightSide,
  Notification,
};
