import styled from "styled-components";

import Button from "./Button"

const ctaList = [
    { message: "Learn more", href: "/about", background: "salmon", color: "navy" },
    { message: "Start a trial", href: "/trial", background: "pink", color: "navy", width: "75%" },
    { message: "Talk to us", href: "/contact", background: "red", color: "blue" }

]

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  padding: 2rem 3rem;
  align-items: center;


  
  &:hover {
    background: pink
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    > button {
        margin: .5rem auto
      }

    &:hover {
      background: yellow;
    }
  }
`;

const ButtonSet = (props) => {
    console.log(props)


    return (
        <FlexWrapper>
            {ctaList.map((item) => (
                <Button key={item.href} background={item.background} href={item.href} color={item.color} width={item.width}>{item.message}</Button>
            ))}

        </FlexWrapper>
    )
}

export default ButtonSet