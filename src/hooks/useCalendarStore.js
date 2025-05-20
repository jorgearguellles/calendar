import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent } from "../store";
import { addHours } from "date-fns";

const myPropsEvent = [
  {
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprar pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    borderColor: "#009dff",
    user: {
      id: 1,
      name: "Jorge Arias",
    },
  },
];

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const startSavingEvent = (event) => {
    dispatch(onAddNewEvent(event));
  };

  return {
    activeEvent,
    events,
    startSavingEvent,
  };
};
