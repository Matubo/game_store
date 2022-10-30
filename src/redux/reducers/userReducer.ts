import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserActions } from 'src/types/redux/actions/UserActions';
import { IUser } from 'src/types/redux/user';
import { login, logout } from '../../services/auth.service';

const user = 'user';

const initialState = {
  login: false,
  username: '',
  avatar: '',
  description: '',
  name: ''
};

const writeUserToLocalStorage = createAsyncThunk(
  UserActions.WRITE_USER_TO_LOCAL_STORAGE,
  ({ username }: { username: string }) => {
    login(username);
  }
);

const deleteUserFromLocalStorage = createAsyncThunk(UserActions.DELETE_USER_FROM_LOCAL_STORAGE, () => {
  logout();
});

const userReducer = createSlice({
  initialState: initialState,
  name: user,
  reducers: {
    setUserData: (
      state: IUser,
      action: PayloadAction<{ name: string; username: string; avatar: string; description: string }>
    ) => {
      console.log(action.payload);
      const { name, username, avatar, description } = action.payload;
      [state.name, state.username, state.avatar, state.description] = [name, username, avatar, description];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(writeUserToLocalStorage.fulfilled, (state: IUser) => {
      state.login = true;
    }),
      builder.addCase(deleteUserFromLocalStorage.fulfilled, (state: IUser) => {
        state.login = false;
      });
  }
});

export default userReducer;
export { writeUserToLocalStorage, deleteUserFromLocalStorage };
export const { setUserData } = userReducer.actions;
