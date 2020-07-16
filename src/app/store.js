import { configureStore } from '@reduxjs/toolkit';
import categoryPickerReducer from '../features/category-picker/categoryPickerSlice';

export default configureStore({
  reducer: {
    categoryPicker: categoryPickerReducer,
  },
});
