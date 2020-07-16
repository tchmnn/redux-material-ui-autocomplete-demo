import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CategoryPicker from './features/category-picker/CategoryPicker';
import './App.css';

function App() {
  return (
    <div className="app">
      <Box className="category-picker" padding={2} boxShadow={20} borderRadius={4}>
        <Box mb={2} align="center">
          <Typography variant="h6">
            Pick some categories
          </Typography>
        </Box>
        <Box mb={2}>
          <CategoryPicker />
        </Box>
        <hr/>
        <Box mb={2} align="center">
          <Typography variant="caption">
            powered by <a href="https://redux-toolkit.js.org">redux-toolkit</a> and <a href="https://material-ui.com">material-ui</a>
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default App;
