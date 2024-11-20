import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Create an async thunk for fetching country data
export const fetchCountryData = createAsyncThunk(
  'counter/fetchCountryData',
  async () => {
    const response = await axios.post(`https://1ee7-197-59-112-133.ngrok-free.app/api-server/${process.env.NEXT_PUBLIC_API_KEY_REVEALINGTHENAMEOFTHECOUNTRY}`);
    return response.data;
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    nameLocal: "https://1ee7-197-59-112-133.ngrok-free.app/api-server",
    name_Local_FrontEnd: "https://wjghtk-next-git-main-ahmedpahr9gmailcoms-projects.vercel.app",
    value: 0,
    CountryData: null, // Initialize as null

  },
  reducers: {


    changenameLocal: (state, action) => {
      state.nameLocal = action.payload;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountryData.fulfilled, (state, action) => {
      state.CountryData = action.payload; // Update the state with fetched data
    });
  },




});

export const {
  increment,
  decrement,
  incrementByAmount,
  changeStateToken
} = counterSlice.actions;

export default counterSlice.reducer;
