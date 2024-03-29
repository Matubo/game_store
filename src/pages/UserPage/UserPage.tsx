import UserInformation from 'src/components/UserInformation/UserInformation';
import LoginForm from 'src/components/LoginForm/LoginForm';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setUserData, writeUserToLocalStorage, deleteUserFromLocalStorage } from 'src/redux/reducers/userReducer';
import axios from 'axios';
import { APIURL } from 'src/consts/APIURL';
import { LoginQueryParams } from 'src/types/queries/LoginQuery';
import { ChangeUserDataQueryParams } from 'src/types/queries/ChangeUserDataQuery';
import { useDebounce } from 'src/hooks/useDebounce';
import { CreateUserQueryParams } from 'src/types/queries/CreateUserQuery';
import OrdersList from 'src/components/OrdersList/OrdersList';

export default function UserPage() {
  const dispatch = useAppDispatch();
  const { username, avatar, description, name, login } = useTypedSelector((state) => state.user);
  const { loggin, changeUserData, createUser } = APIURL;

  const loginWithDebounce = useDebounce(({ username, password }: LoginQueryParams) => {
    axios
      .post(loggin, { username, password })
      .then((result) => {
        dispatch(setUserData({ ...result.data }));
        dispatch(writeUserToLocalStorage({ username: result.data.username }));
      })
      .catch((result) => alert(result.response.data.message));
  }, 700);

  const changeUserDataWithDebounce = useDebounce((data: ChangeUserDataQueryParams) => {
    axios
      .post(changeUserData, { username, ...data })
      .then((result) => {
        dispatch(setUserData({ ...result.data }));
        alert('Данные обновлены');
      })
      .catch((result) => {
        alert(result.response.data.message);
      });
  }, 700);

  const signupWithDebounce = useDebounce((data: CreateUserQueryParams) => {
    axios
      .post(createUser, { ...data })
      .then((result) => {
        dispatch(setUserData({ ...result.data }));
        dispatch(writeUserToLocalStorage({ username: result.data.username }));
      })
      .catch((result) => {
        alert(result.response.data.message);
      });
  }, 700);

  const logoutHandler = () => {
    dispatch(deleteUserFromLocalStorage());
  };
  return (
    <div className="user-page">
      {login ? (
        <>
          <UserInformation
            changeUserData={changeUserDataWithDebounce}
            logout={logoutHandler}
            userData={{ username, avatar, description, name }}
          ></UserInformation>
          <OrdersList username={username} login={login}></OrdersList>
        </>
      ) : (
        <LoginForm loginQuery={loginWithDebounce} signupQuery={signupWithDebounce}></LoginForm>
      )}
    </div>
  );
}
