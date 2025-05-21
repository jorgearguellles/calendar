import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";
import { useCalendarStore } from "./useCalendarStore";

export const useUIStore = () => {
  const { setActiveEvent } = useCalendarStore();
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
    setActiveEvent(null);
  };
  const toggleDateModal = () => {
    isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return {
    isDateModalOpen,
    toggleDateModal,
  };
};
