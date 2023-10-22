import { configureStore, createSlice } from "@reduxjs/toolkit";

let movie = createSlice({
  name: "movie",
  initialState: {
    defaultUrl: "https://image.tmdb.org/t/p/w500",
  },
});

export default configureStore({
  reducer : {
    movie : movie.reducer
  }
})