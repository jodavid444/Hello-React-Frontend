import { createSlice } from '@reduxjs/toolkit';
import getText from './getText';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    data: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getText.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default textSlice.reducer;
