import { BrowserRouter } from "react-router";
import { AppRouter } from "./router";

const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default CalendarApp;
