import axios from 'axios';
import React, { useState } from 'react';
import { APIURL } from 'src/consts/APIURL';

export default function LoginForm() {
  const [loginState, setLogin] = useState('');
  const [passwordState, setPassword] = useState('');
  const { loggin } = APIURL;

  const loginChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };
  const passwordChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const loginHandler = () => {
    axios({ method: 'POST', url: loggin, params: { login: loginState, password: passwordState } })
      .then((result) => {
        console.log(result);
      })
      .catch((result) => console.log(result));
  };
  return (
    <div>
      <input type="text" name="" id="" value={loginState} onChange={loginChangeHandler} />
      <input type="password" name="" id="" value={passwordState} onChange={passwordChangeHandler} />
      <button onClick={loginHandler}></button>
    </div>
  );
}
