import styled from "styled-components"
import ButtonSet from "./components/ButtonSet";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  `;
const Title = styled.h1`
  font-size: 1.25 rem;
  color: indigo;
  text-align: center
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello Styled-Components</Title>
        <ButtonSet >yo</ButtonSet>
    </Wrapper>
  );
}

export default App;
