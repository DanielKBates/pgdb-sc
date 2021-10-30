import styled from "styled-components";

const StyledButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
width: ${props => props.width ? props.width : "100%"};
font-size: 3.5 rem;
margin: auto;
padding: 0.25rem 1rem;
border: 2px solid blue;
border-radius: 3px;

`;
const Button = (props) => {
    console.log(props)


    return (
        <StyledButton primary={props.primary} width={props.width}>{props.children}</StyledButton>
    )
}

export default Button