import {useState, useRef, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {submitResStr} from "../server/UserRoutes"

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

export default function ChangeResStr(props) {
  const selectionRef = useRef();
  const [newResStr, setResStr] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const fetchSubmitResStr = async () => {
    const res = await submitResStr(props.appleID, newResStr);
    props.changeUser()
  };
  useEffect(() => {
		if(open){
			setTimeout(() => {
				selectionRef.current.select()
				const scrollDelay = setTimeout(() => {
				}, 250);
				return () => clearTimeout(scrollDelay);
			}, 1);
		}
	}, [open])
  return (
    <div>
      <Button onClick={handleOpen}>Change Response String</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Change Reponse String</h2>
          <TextField
          id="filled-multiline-static"
          label="Response String"
          multiline
          rows={4}
          inputRef={selectionRef}
          defaultValue={props.previousResponseStr}
          variant="filled"
          onChange={(e) => setResStr(e.target.value)}
        />
        <br></br>
            <Button onClick={() => {fetchSubmitResStr();handleClose();}} variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}