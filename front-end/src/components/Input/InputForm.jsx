import { InputContainer } from "./styled";

const InputForm = ({ onChange, value, name, type, label }) => {
  return (
    <InputContainer>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        required
      />
      <label>{label}</label>
    </InputContainer>
  );
};
export default InputForm;
