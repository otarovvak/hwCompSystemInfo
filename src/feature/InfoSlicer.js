import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIP = createAsyncThunk("info/fetchIP", async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
});

export const InfoSlice = createSlice({
  name: "info",
  initialState: {
    IPaddress: "",
    computerName: "",
    isPoweredOn: false,
  },
  reducers: {
    setComputerName: (state, action) => {
      state.computerName = action.payload;
    },
    togglePower: (state) => {
      state.isPoweredOn = !state.isPoweredOn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIP.fulfilled, (state, action) => {
      state.IPaddress = action.payload;
    });
  },
});

export const { setComputerName, togglePower } = InfoSlice.actions;

export default InfoSlice.reducer;
