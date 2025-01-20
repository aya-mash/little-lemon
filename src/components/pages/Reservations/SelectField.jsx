const SelectField = ({ id, value, onChange, options, required }) => {
    return (
      <select id={id} name={id} value={value} required={required} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  
  export default SelectField;
  