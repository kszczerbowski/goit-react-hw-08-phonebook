export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsPasswordOk = state => state.auth.register.isPasswordOk;

export const selectIsPasswordConfirmationOk = state => state.auth.register.isPasswordConfirmationOk;
