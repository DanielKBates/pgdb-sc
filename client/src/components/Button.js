import styled from "styled-components";

const StyledButton = styled.button`
background: ${props => props.background ? props.background : "white"};
color: ${props => props.color ? props.color : "palevioletred"};
font-size: 1.25rem;
margin: auto;
padding: 0.25rem 1rem;
border: 2px solid blue;
border-radius: 8px;
`;
// width: ${props => props.width ? props.width : "100%"};

const Button = ({ width, children, background, color }) => {


    return <StyledButton color={color} background={background} width={width}>{children}</StyledButton>
}

export default Button