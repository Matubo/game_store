import React, { useState } from 'react';
import { CreateUserQueryParams } from 'src/types/queries/CreateUserQuery';
import { LoginQueryParams } from 'src/types/queries/LoginQuery';

interface IProps {
  loginQuery: ({ username, password }: LoginQueryParams) => void;
  signupQuery: ({ username, password }: CreateUserQueryParams) => void;
}

export default function LoginForm({ loginQuery, signupQuery }: IProps) {
  const [loginState, setLogin] = useState('');
  const [passwordState, setPassword] = useState('');

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.code == 'Enter') {
      loginClickHandler();
    }
  };

  const loginChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };
  const passwordChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const loginClickHandler = () => {
    loginQuery({ username: loginState, password: passwordState });
  };

  const signupClickHandler = () => {
    signupQuery({ username: loginState, password: passwordState });
  };

  //сделай вход тутаже здесяже вэтоммесяще
  return (
    <div className="login-form" onKeyUp={keyHandler}>
      <p>LogIn</p>
      <input type="text" className="login-form__login" value={loginState} onChange={loginChangeHandler} />
      <input type="password" className="login-form__password" value={passwordState} onChange={passwordChangeHandler} />
      <button className="login-form__button" onClick={loginClickHandler}>
        login
      </button>
      <button onClick={signupClickHandler}>signup</button>
    </div>
  );
}
