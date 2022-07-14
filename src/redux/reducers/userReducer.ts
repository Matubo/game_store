import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserActions } from 'src/types/redux/actions/userActions';
import { IUser } from 'src/types/redux/user';
import { login, logout } from '../../services/auth.service';

const user = 'user;';

const initialState = {
  user: false
};

const writeUserToLocalStorage = createAsyncThunk(
  UserActions.WRITE_USER_TO_LOCAL_STORAGE,
  ({ name }: { name: string }) => {
    login(name);
  }
);

const deleteUserFromLocalStorage = createAsyncThunk(UserActions.DELETE_USER_FROM_LOCAL_STORAGE, () => {
  logout();
});

const userReducer = createSlice({
  initialState: initialState,
  name: user,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(writeUserToLocalStorage.fulfilled, (state: IUser) => {
      state.user = true;
    }),
      builder.addCase(deleteUserFromLocalStorage.fulfilled, (state: IUser) => {
        state.user = false;
      });
  }
});

export default userReducer;
export { writeUserToLocalStorage, deleteUserFromLocalStorage };
