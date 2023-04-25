import './App.css';
import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState ({
      fname: "",
      lname: "",
      email: "",
      phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setFullName((preVal) => {
      console.log(preVal);
      return {
          ...preVal,
          [name] : value, 
      };
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("from submitted");
  };
  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <input
              type="text"
              placeholder='Enter your first name'
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder='Enter your last name'
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder='Enter your email'
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <input
              type="number"
              placeholder='Enter your contact'
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <button type='submit'> Submit Me  </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
