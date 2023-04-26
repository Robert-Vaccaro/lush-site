import {useState} from 'react';
import {Paper, InputBase, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material';

export default function CustomizedInputBase({updatedListProp}) {
    let [newVal, setNewVal] = useState([]);
    const changeVal = (val) => {
      if (val === ""){
        updatedListProp(val)
      } 
      setNewVal(val)
    }
    const submitForm = (e) => {
      e.preventDefault();
      updatedListProp(newVal)
    }
  return (
    <Paper
      component="form"
      onSubmit={(e) => submitForm(e)}
      sx={{ display: 'flex', width: "50%", marginTop:"75px"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, mt: '6px' }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => changeVal(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={(e) => {submitForm(e)}}>
        <Search />
      </IconButton>
    </Paper>
  );
}