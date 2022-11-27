import styled from 'styled-components';
import { BoardBody } from 'components/BoardBody/BoardBody';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Tools } from 'components/Tools/Tools';

const BoardWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 219px 154px 1fr;
`;

export const App = () => (
  <BoardWrapper>
    <Sidebar />
    <Tools />
    <BoardBody />
  </BoardWrapper>
);

export default App;
