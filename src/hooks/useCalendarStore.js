import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = (event) => {
    dispatch(onAddNewEvent(event));
  };

  const startDeletingEvent = (event) => {
    dispatch(onDeleteEvent(event));
  };

  return {
    activeEvent,
    events,
    startSavingEvent,
    startDeletingEvent,
    setActiveEvent,
  };
};
