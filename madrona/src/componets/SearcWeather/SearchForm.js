import styled from "styled-components";
import Buttons from "../UI/Button";
import InputField from "../UI/Inputs";

const SearchForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <InputField lable="Check Weather" placeholder="Search Location by Town/City" onChange={props.onChange}/>
      <Buttons>Search</Buttons>
    </Form>
  )
}

export default SearchForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin: 1rem;
`