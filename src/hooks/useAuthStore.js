import { useDispatch, useSelector } from "react-redux";
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
      dispatch(onLogout(error.response.data?.message || "Error en el login"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarAPI.post("/auth/new", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.userId }));
    } catch (error) {
      console.log(error);
      dispatch(
        onLogout(error.response.data?.message || "Error en el registro")
      );
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
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
