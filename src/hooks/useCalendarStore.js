import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: backend answer start

    // TODO: backend answer end
    console.log({ calendarEvent: calendarEvent._id });
    if (calendarEvent._id) {
      // TODO: update
    } else {
      dispatch(onAddNewEvent(calendarEvent));
      console.log({ calendarEvent, events });
    }
  };

  return {
    // Propiedades
    activeEvent,
    events,
    // Métodos
    setActiveEvent,
    startSavingEvent,
  };
};
