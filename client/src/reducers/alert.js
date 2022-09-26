import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const alertSlice = createSlice({
  name: "alert",
  initialState: { value: initialStateValue },
  reducers: {
    alert: (state, action) => {
      const thisAction = action.payload;
      const type = thisAction.type;
      const payload = thisAction.payload;
      switch (type) {
        case SET_ALERT: {
          const newState = payload;
          const oldState = state.value;
          state.value = [...oldState, newState];
        }

        //console.log(state.value)
        //return [...state, payload];

        case REMOVE_ALERT:
          const newState = state.value.filter((alert) => alert.id !== payload);
          state.value = [...newState];
          console.log(state.value);-
        //return state.filter((alert) => alert.id !== payload);
        default:
          return state;
      }
    },
  },
});

export const { alert } = alertSlice.actions;

export default alertSlice.reducer;
