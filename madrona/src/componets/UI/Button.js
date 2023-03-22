import styled from "styled-components";

const Buttons = (props) => {

  return <Button>{props.children}</Button>
}

export default Buttons;

const Button = styled.button`
  font-size: 1rem;
  height: 2.5rem;
  width: 15.5rem;
  text-align: center;
  border-radius: 1rem;
`