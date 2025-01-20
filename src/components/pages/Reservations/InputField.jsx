const InputField = ({ id, type, value, onChange, min, max, required }) => {
    return (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        min={min}
        max={max}
        required={required}
        onChange={onChange}
      />
    );
  };
  
  export default InputField;
  