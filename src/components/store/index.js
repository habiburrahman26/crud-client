import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  records: [],
};

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    getAllRecord(state, action) {
      state.records = action.payload;
    },
    addRecord(state, action) {
      console.log(action.payload);
      state.records = [...state.records, action.payload];
    },
    deleteRecord(state, action) {
      const id = action.payload;
      const filterRecord = state.records.filter((record) => record._id !== id);
      state.records = filterRecord;
    },
    updateRecord(state, action) {},
  },
});

export const fetchRecord = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/record').then(({ data }) => {
      dispatch(recordSlice.actions.getAllRecord(data));
    });
  };
};

const store = configureStore({
  reducer: {
    record: recordSlice.reducer,
  },
});

export const { addRecord, deleteRecord, updateRecord } = recordSlice.actions;

export default store;
