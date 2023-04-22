import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase(props) {
    let [newVal, setNewVal] = React.useState([]);
    const changeVal = (val) => {
      if (val === ""){
        props.updatedListProp(val)
      } else {
        setNewVal(val)
      }
    }
    const sumbitForm = (e) => {
      e.preventDefault();
      props.updatedListProp(newVal)
    }
  return (
    <Paper
      component="form"
      onSubmit={(e) => sumbitForm(e)}
      sx={{ display: 'flex', alignItems: 'center', width: "50%",marginTop:"75px"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search User Database"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => changeVal(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={(e) => {e.preventDefault();props.updatedListProp(newVal)}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}