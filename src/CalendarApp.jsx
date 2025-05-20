import { BrowserRouter } from "react-router";
import { AppRouter } from "./router";
import { store } from "./store";
import { Provider } from "react-redux";

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default CalendarApp;
