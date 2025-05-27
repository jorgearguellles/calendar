import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../store";
import { calendarAPI } from "../api";
import {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
} from "../store/auth/authSlice";

const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarAPI.post("/auth", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.userId }));
    } catch (error) {
      console.log(error);
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    console.log({ name, email, password });
    dispatch(authSlice.actions.startRegister({ name, email, password }));
  };

  return {
    // Properties
    status,
    user,
    errorMessage,

    // Methods
    startLogin,
    startRegister,
  };
};

export default useAuthStore;
