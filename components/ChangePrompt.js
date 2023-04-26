import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getCookie } from 'cookies-next';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display:"flex",
  justifyContent:"center",
  flexDirection:"column"
};

export default function ChangePrompt(props) {
  const [open, setOpen] = React.useState(false);
  const [newPrompt, setNewPrompt] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitPrompt = () => {
    fetch('https://intense-brook-83972.herokuapp.com/update-prompt', {
        method: 'post', 
        headers: {
            'Authorization': getCookie('token'),
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:getCookie("username"), appleID:props.appleID, newPrompt: newPrompt})
        //  body: JSON.stringify({username: data.get('email'), pw:data.get('password')})
      }).then(res=>res.json())
        .then(res => {props.changeUser();})
        .catch(err => {console.log(err);handleClose()})  
  }
  return (
    <div>
      <Button onClick={handleOpen}>Change Prompt</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Change User's Prompt</h2>
          <TextField
          id="filled-multiline-static"
          label="Prompt"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          onChange={(e) => setNewPrompt(e.target.value)}
        />
        <br></br>
        <Button onClick={() => {submitPrompt();handleClose();}} variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}