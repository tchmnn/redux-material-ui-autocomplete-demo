import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { loadCategories, selectCategories } from './categoryPickerSlice';
import { useDispatch, useSelector } from 'react-redux';

function CategoryPicker() {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const subcategories = selectedCategory 
    ? selectedCategory.categories
    : [];


  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  const handleCategoryChange = (_, value) => {
    setSelectedCategory(value)
    if (selectedSubcategory?.name !== value?.name) {
      setSelectedSubcategory(null)
    }
  }

  const handleSubcategoryChange = (_, value) => {
    setSelectedSubcategory(value)
  }

  return (
    <>
      <Autocomplete
        id="category"
        style={{ marginBottom: 8 }}
        options={categories}
        getOptionLabel={category => category.name}
        getOptionSelected={(option, value) => option.name === value.name}
        onChange={handleCategoryChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Category"
            variant="outlined"
          />
        )}
      />
      <Autocomplete
        id="subcategory"
        options={subcategories}
        getOptionLabel={subcategory => subcategory.name}
        getOptionSelected={(option, value) => option.name === value.name}
        value={selectedSubcategory}
        onChange={handleSubcategoryChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Subcategory"
            variant="outlined"
          />
        )}
      />
    </>
  )
}

export default CategoryPicker;
