import styled from "styled-components"

const InputField = (props) => {  
  return (
    <>
      <Lable>{props.lable}</Lable>
      <Input placeholder={props.placeholder} onChange={props.onChange} />
    </>
  )

}

export default InputField

const Input = styled.input`
  font-size: 1rem;
  height: 2rem;
  width: 15rem;
  text-align: center;
  border-radius: 0.5;
`

const Lable = styled.label`
  font-family: Arial;
  font-size: 1.5rem;
`