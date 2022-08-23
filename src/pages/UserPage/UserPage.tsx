import UserInformation from 'src/components/UserInformation/userInformation';
import LoginForm from 'src/components/LoginForm/LoginForm';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setUserData, writeUserToLocalStorage, deleteUserFromLocalStorage } from 'src/redux/reducers/userReducer';
import axios from 'axios';
import { APIURL } from 'src/consts/APIURL';
import { ILoginQuery } from 'src/types/queries/ILoginQuery';
import { IChangeUserDataQuery } from 'src/types/queries/ChangeUserDataQuery';

export default function UserPage() {
  const dispatch = useAppDispatch();
  const user = useTypedSelector((state) => state.user);
  const { loggin } = APIURL;

  const loginQuery = ({ username, password }: ILoginQuery) => {
    axios
      .post(loggin, { username, password })
      .then((result) => {
        dispatch(setUserData({ ...result.data }));
        dispatch(writeUserToLocalStorage({ name: username }));
      })
      .catch((result) => alert(result.response.data.message));
  };

  const changeUserDataHandler = (data: IChangeUserDataQuery) => {};

  const logoutHandler = () => {
    dispatch(deleteUserFromLocalStorage());
  };

  return user.login ? (
    <>
      <UserInformation changeUserData={changeUserDataHandler} userData={user}></UserInformation>
      <button onClick={logoutHandler}>logout</button>
    </>
  ) : (
    <LoginForm loginQuery={loginQuery}></LoginForm>
  );
}
