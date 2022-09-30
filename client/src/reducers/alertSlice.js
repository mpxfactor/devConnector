// import { createSlice } from "@reduxjs/toolkit";
// import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

// const initialState = [];

// const alertSlice = createSlice({
//   name: "alert",
//   initialState,
//   reducers: {
//     alertReducer: (state, action) => {
//       // const payload = action.payload;
//       // const type = action.payload.type;
//       // return (
//       //   [...state, payload],
//       //   setTimeout(() => {
//       //     state.filter((alert) => alert.id !== payload);
//       //   }, 5000)
//       // );
//       const { type, payload } = action.payload;
//       switch (type) {
//         case SET_ALERT:
//           const newState = [...state, payload];
//           state = newState;
//           setTimeout(() => {
//             state.filter((alert) => alert.id !== payload);
//           }, 3000);
//           return state;

//         case REMOVE_ALERT:
//           return state.filter((alert) => alert.id !== payload);
//         default:
//           return state;
//       }
//     },
//     // prepare(id, msg, alertType, setType) {
//     //   const payload = {
//     //     payload: { id: id, msg, alertType, type: setType },
//     //   };

//     //   return payload;
//     // },
//   },
//   //{
//   //   // reducer(state, action) {
//   //   //   // const payload = action.payload;
//   //   //   // return state.filter((alert) => alert.id !== payload);
//   //   // },
//   //   // prepare(id, msg, alertType, setType) {
//   //   //   // const payloadFunc = setTimeout(() => {
//   //   //   //   const payload = {
//   //   //   //     payload: { id: id, msg, alertType, type: setType },
//   //   //   //   };
//   //   //   //   return payload;
//   //   //   // }, 5000);
//   //   //   // return payload;
//   //   // },
//   // },
//   //},
// });

// export const { alertReducer, removeAlertReducer } = alertSlice.actions;

// const selectAll = (state) => state.alert  ;
// console.log(selectAll);

// export default alertSlice.reducer;
