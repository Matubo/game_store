import React, { useState } from 'react';
import { ILoginQuery } from 'src/types/queries/ILoginQuery';

interface IProps {
  loginQuery: ({ username, password }: ILoginQuery) => void;
}

export default function LoginForm({ loginQuery }: IProps) {
  const [loginState, setLogin] = useState('');
  const [passwordState, setPassword] = useState('');

  const loginChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };
  const passwordChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const loginClickHandler = () => {
    loginQuery({ username: loginState, password: passwordState });
  };

  return (
    <div className="login-form">
      <input type="text" className="login-form__login" value={loginState} onChange={loginChangeHandler} />
      <input type="password" className="login-form__password" value={passwordState} onChange={passwordChangeHandler} />
      <button className="login-form__button" onClick={loginClickHandler}>
        login
      </button>
    </div>
  );
}
