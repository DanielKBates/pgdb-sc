import styled from "styled-components"
import Button from "./components/Button";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 2rem;
`;
const Title = styled.h1`
  font-size: 1.25 rem;
  color: indigo;
  text-align: center
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 33%;
  margin: 0 auto;
  padding: 2rem 3rem;
  align-items: center
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello Styled-Components</Title>
      <FlexColumn>
        <Button >yo</Button>
        <Button width="50%" primary>YTHO</Button>
      </FlexColumn>
    </Wrapper>
  );
}

export default App;
