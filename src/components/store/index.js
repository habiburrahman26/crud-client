import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  records: [],
};

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    addRecord(state, action) {
      state.records = state.records.push(action.payload);
    },
    deleteRecord(state, action) {},
    updateRecord(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    record: recordSlice.reducer,
  },
});

export const {addRecord,deleteRecord,updateRecord} = recordSlice.actions;

export default store;
