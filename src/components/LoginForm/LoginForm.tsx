import React, { useState } from 'react';
import { CreateUserQueryParams } from 'src/types/queries/CreateUserQuery';
import { LoginQueryParams } from 'src/types/queries/LoginQuery';
import './LoginForm.scss';

interface IProps {
  loginQuery: ({ username, password }: LoginQueryParams) => void;
  signupQuery: ({ username, password }: CreateUserQueryParams) => void;
}

export default function LoginForm({ loginQuery, signupQuery }: IProps) {
  const [loginState, setLogin] = useState('');
  const [passwordState, setPassword] = useState('');
  const [singup, setSingup] = useState(false);

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
    singup
      ? signupQuery({ username: loginState, password: passwordState })
      : loginQuery({ username: loginState, password: passwordState });
  };

  return (
    <div className="login-page">
      <div className="login-page__login-form login-form" onKeyUp={keyHandler}>
        <div className="login-form__login-type">
          <h1
            style={singup ? { color: 'black' } : { color: 'white' }}
            onClick={() => setSingup(false)}
            className="login-type__login"
          >
            {'<SIGNIN'}
          </h1>{' '}
          <h1
            style={singup ? { color: 'white' } : { color: 'black' }}
            onClick={() => setSingup(true)}
            className="login-type__signup"
          >
            {'SIGNUP>'}
          </h1>
        </div>
        <p className="login-form__input-header">LogIn</p>
        <input type="text" className="login-form__login" value={loginState} onChange={loginChangeHandler} />
        <p className="login-form__input-header">password</p>
        <input
          type="password"
          className="login-form__password"
          value={passwordState}
          onChange={passwordChangeHandler}
        />
        <button className="login-form__button" onClick={loginClickHandler}>
          confirm
        </button>
      </div>
    </div>
  );
}
