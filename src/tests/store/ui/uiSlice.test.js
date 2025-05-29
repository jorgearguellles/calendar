import { describe, expect, test } from "vitest";
import {
  uiSlice,
  onOpenDateModal,
  onCloseDateModal,
} from "../../../store/ui/uiSlice";

describe("uiSlice", () => {
  test("Should return default state", () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
  });

  test("Should open and close date modal", () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
