import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {submitBan} from "../server/UserRoutes"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display:"flex",
  justifyContent:"center",
  flexDirection:"column"
};

export default function BanUser(props) {
  const [newResStr, setResStr] = React.useState("");
  const [open, setOpen] = React.useState(false);
//   console.log(props.currentBanStatus)
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchSubmitBan = async (banStatus) => {
		const res = await submitBan(props.appleID, banStatus);
		props.changeUser()
	};

  return (
    <div>
      <Button onClick={handleOpen}>Update Ban Status</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Update Ban Status</h2>
          <p>Current Ban Status: {props.currentBanStatus.toString()}</p>
            <br></br>
            <Button sx={{marginBottom: '5px'}} onClick={() => {fetchSubmitBan(true);handleClose();}} variant="contained">Ban</Button>
            <br></br>
            <Button onClick={() => {fetchSubmitBan(false);handleClose();}} variant="contained">Unban</Button>
        </Box>
      </Modal>
    </div>
  );
}
