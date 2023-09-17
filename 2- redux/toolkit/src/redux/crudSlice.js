import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
    {
      title: 'Navbar anmiasyonu',
      author: 'Ahmet',
      assigned_to: 'Mehmet',
      end_date: '2023-08-21',
      id: 'f1805a23-d050-4f52-8f47-f1ac9f68339b',
    },

    {
      title: 'Kartlarda düzen',
      author: 'Ali',
      assigned_to: 'Selim',
      end_date: '2023-08-31',
      id: '72e783df-1b73-428d-9018-d91f25209e6a',
    },
  ],
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addTask: (state, action) => {
      //  id ekleme
      // prettier-ignore
      action.payload.id = v4(),
      // state'a aktarma
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      // kaldırmak istediğimiz elemanın sırasını bulma
      const i = state.tasks.findIndex(
        (i) => i.id === action.payload.id
      );

      // elemanı diziden kaldırma
      state.tasks.splice(i, 1);
    },

    editTask: (state, action) => {
      // düzenlenicek elemanın sırasını bul
      const i = state.tasks.findIndex(
        (i) => i.id == action.payload.id
      );

      // task'ı düzenle
      state.tasks[i] = action.payload;
    },
  },
});

export default crudSlice.reducer;

export const { addTask, removeTask, editTask } = crudSlice.actions;
