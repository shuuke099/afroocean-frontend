import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  city: string | null;
  country: string | null;
}

const initialState: LocationState = {
  city: null,
  country: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
