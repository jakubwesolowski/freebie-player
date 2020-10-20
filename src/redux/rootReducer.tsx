import { combineReducers, createSlice } from "@reduxjs/toolkit";

const emptySlice = createSlice({
  name: "empty",
  initialState: { account: {} },
  reducers: {},
});

const rootReducer = combineReducers({ empty: emptySlice.reducer });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
