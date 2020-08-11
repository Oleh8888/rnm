/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = ({ allCharacters, setSearchChosen }) => (
  <TextField
    id="outlined-basic"
    label="search..."
    variant="outlined"
    style={{
      marginTop: '10px',
      position: 'fixed',
      background: 'white',
      alignSelf: 'center',
      width: '30%',
      left: '35%',
      zIndex: '1',
      borderRadius: '40px',
    }}
    onChange={(e) => setSearchChosen(e.target.value)}
  />
);

export default SearchBar;
