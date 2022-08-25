import axios from 'axios';
import React, { useEffect } from 'react';
import Header from 'src/components/Header/Header';
import { APIURL } from 'src/consts/APIURL';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { setUserData, writeUserToLocalStorage } from 'src/redux/reducers/userReducer';
import { getCurrentUser, logout } from 'src/services/auth.service';

interface PropTypes {
  children?: React.ReactNode | React.ReactNode[];
}

export default function MineTemplate({ children }: PropTypes) {
  const { getUsedUser } = APIURL;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isLogin = getCurrentUser();
    if (isLogin) {
      axios
        .post(getUsedUser, { username: isLogin }) //simulation
        .then((result) => {
          const { username } = result.data;
          dispatch(setUserData({ ...result.data }));
          dispatch(writeUserToLocalStorage(username));
          console.log(result);
        })
        .catch((result) => {
          console.log(result);
          logout();
        });
    }
  }, []);

  return (
    <>
      <Header></Header>
      {children}
      <p>Footer</p>
    </>
  );
}
