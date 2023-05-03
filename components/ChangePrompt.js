import {useState, useRef, useEffect} from 'react';
import {Box, Modal, Button, TextField} from '@mui/material'
import { getCookie } from 'cookies-next';

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

export default function ChangePrompt({ appleID, changeUser, previousPrompt }) {
	const selectionRef = useRef();
	const [open, setOpen] = useState(false);
	const [newPrompt, setNewPrompt] = useState("");

	const handleOpen = () => {
		setOpen(true)
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
			body: JSON.stringify({ username: getCookie("username"), appleID: appleID, newPrompt: newPrompt })
		}).then(res => res.json())
			.then(() => { changeUser() })
			.catch(err => { console.log(err); handleClose() })
	}

	useEffect(() => {
		if(open){
			setTimeout(() => {
				selectionRef.current.select()
				const scrollDelay = setTimeout(() => {
					selectionRef.current.scrollTop = 0;
				}, 250);
				return () => clearTimeout(scrollDelay);
			}, 1);
		}
	}, [open])

	return (
		<div>
			<Button onClick={handleOpen}>Change Prompt</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
				<Box sx={{ ...style }}>
					<h2 id="parent-modal-title">Change User's Prompt</h2>
					<TextField
						id="filled-multiline-static"
						label="Prompt"
						autoFocus
						multiline
						rows={4}
						inputRef={selectionRef}
						defaultValue={previousPrompt}
						variant="filled"
						onChange={(e) => setNewPrompt(e.target.value)}
					/>
					<Button onClick={() => { 
						if(newPrompt !== previousPrompt){
							submitPrompt();
						}
						handleClose(); 
					}} variant="contained">Submit</Button>
				</Box>
			</Modal>
		</div>
	);
}