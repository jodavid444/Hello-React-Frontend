import { createAsyncThunk } from '@reduxjs/toolkit';

const getText = createAsyncThunk('greeting', async () => {
  try {
    const text = await fetch('http://127.0.0.1:3000/api/greetings');
    const data = await text.json();
    if (data.text) {
      return {
        success: true,
        data: data.text,
      };
    }
    return {
      success: false,
      err: 'Data not found',
    };
  } catch (err) {
    return { success: false, err: err.response.data.text };
  }
});

export default getText;
