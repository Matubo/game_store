const userKey = 'user';

const login = (username: string) => localStorage.setItem(userKey, username);

const logout = () => localStorage.removeItem(userKey);

const getCurrentUser = () => localStorage.getItem(userKey);

export { login, logout, getCurrentUser };
