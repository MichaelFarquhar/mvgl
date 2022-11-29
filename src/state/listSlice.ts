import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
  id: number;
  title: string;
  score: number;
  date_added: Date;
}

const initialState: ListItem[] = [
  {
    id: 1,
    title: "God of War",
    score: 10,
    date_added: new Date(),
  },
  {
    id: 2,
    title: "League of Legends",
    score: 7,
    date_added: new Date(),
  },
  {
    id: 3,
    title: "Minecraft",
    score: 9,
    date_added: new Date(),
  },
];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<ListItem>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList } = listSlice.actions;

export default listSlice.reducer;
