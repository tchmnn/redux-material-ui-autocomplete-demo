import { createSlice } from '@reduxjs/toolkit';

export const categoryPickerSlice = createSlice({
  name: 'categoryPicker',
  initialState: {
    categories: [],
    loading: false,
    error: false,
  },
  reducers: {
    loadCategoriesRequest: state => {
      state.loading = true;
    },
    loadCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    loadCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadCategoriesRequest,
  loadCategoriesSuccess,
  loadCategoriesFailure,
} = categoryPickerSlice.actions;

export const loadCategories = () => async dispatch => {
  dispatch(loadCategoriesRequest());
  try {
    const response = await fetch(`/data/categories.json`);
    const categories = await response.json();
    dispatch(loadCategoriesSuccess(categories));
  } catch (error) {
    dispatch(loadCategoriesFailure(error.message))
  }
}

export const selectCategories = state => state.categoryPicker.categories;
export const selectLoading = state => state.categoryPicker.loading;
export const selectError = state => state.categoryPicker.error;

export default categoryPickerSlice.reducer;
