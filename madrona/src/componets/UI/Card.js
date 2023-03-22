import styled from "styled-components";

const Card = ({children, theme}) => {
  return (
    <Container theme={theme}>
      {children}
    </Container>
  )
}

export default Card;

const Container = styled.div`
  width: ${props => props.theme.width ? props.theme.width : '50vw'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: solid 1px black;
  margin: 1rem;
  /* padding: 1rem */
`