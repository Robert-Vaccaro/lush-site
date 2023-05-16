import {useState, useRef, useEffect} from 'react';
import {Box, Modal, Button, TextField} from '@mui/material'
import {submitLastMessage} from "../server/UserRoutes"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display:"flex",
  justifyContent:"center",
  flexDirection:"column"
};

export default function ChangeLastMessage({girlHandle, previousLastMessage, changeGirl}) {
	const selectionRef = useRef();
	const [open, setOpen] = useState(false);
	const [newLastMessage, setNewLastMessage] = useState("");

	const handleOpen = () => {
		setOpen(true)
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchSubmitLastMessage = async () => {
		const res = await submitLastMessage(girlHandle, newLastMessage);
		changeGirl()
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
			<Button onClick={handleOpen}>Change Last Message</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
				<Box sx={{ ...style }}>
					<h2 id="parent-modal-title">Change Last Message</h2>
					<TextField
						id="filled-multiline-static"
						label="Prompt"
						autoFocus
						multiline
						rows={4}
						inputRef={selectionRef}
						defaultValue={previousLastMessage}
						variant="filled"
						onChange={(e) => setNewLastMessage(e.target.value)}
					/>
					<Button onClick={() => { 
						if(newLastMessage !== previousLastMessage){
							fetchSubmitLastMessage();
						}
						handleClose(); 
					}} variant="contained">Submit</Button>
				</Box>
			</Modal>
		</div>
	);
}
