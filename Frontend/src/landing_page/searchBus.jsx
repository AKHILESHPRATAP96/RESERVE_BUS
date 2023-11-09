import { useState } from "react";

const Input = ({ name, type, placeholder, handleChange }) => (
  <div className="col-sm-3 mb-3">
    <div className="form-floating">
      <input
        onChange={handleChange}
        name={name}
        type={type}
        className="form-control"
        id={`floatingInput${name}`}
        placeholder={placeholder}
      />
      <label htmlFor={`floatingInput${name}`}>{placeholder}</label>
    </div>
  </div>
);

export default function SearchPanel() {
  const [value, setValue] = useState({
    from: '',
    to: '',
    date: ''
  });

  function handleClick() {
    console.log(value);
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div className="container text-center mt-4">
      <div className="row">
        <Input name="from" type="text" placeholder="From" handleChange={handleChange} />
        <Input name="to" type="text" placeholder="To" handleChange={handleChange} />
        <Input name="date" type="Date" placeholder="Date" handleChange={handleChange} />

        <div className="col-sm-3 mb-3">
          <button onClick={handleClick} type="button" className="btn btn-danger btn-lg w-100">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
