import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = ({ setSearchChosen }) => (
  <TextField
    id="outlined-basic"
    label="search..."
    variant="outlined"
    size="small"
    style={{
      marginTop: '10px',
      position: 'fixed',
      background: 'white',
      alignSelf: 'center',
      width: '50%',
      left: '25%',
      zIndex: '1',
    }}
    onChange={(e) => setSearchChosen(e.target.value)}
  />
);

export default SearchBar;
