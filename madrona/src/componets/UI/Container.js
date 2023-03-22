import styled from "styled-components";

const Container = (props) => {

  return <Div theme={props.theme}>{props.children}</Div>
}

export default Container;

const Div = styled.div`
  display: ${props => props.theme.flex ? props.theme.flex : 'flex'};
  flex-direction: ${props => props.theme.flexDirection ? props.theme.flexDirection : 'row'};
  width: ${props => props.theme.width ? props.theme.width : '100vw'};
  height: ${props => props.theme.height ? props.theme.height : '100vh'};
  justify-content: ${props => props.theme.justify ? props.theme.justify : 'center'};
  align-items: ${props => props.theme.align ? props.theme.align : 'center'};
  background-color: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'transparent'};
`