import axios from 'axios';
import React, { useEffect } from 'react';
import Footer from 'src/components/Footer/Footer';
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
      return () => {
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
      };
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'flex-start' }}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
