import {useState} from 'react';
import {Box, Modal, Button, CardMedia} from '@mui/material'
import {submitProfilePicture} from "../server/UserRoutes"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
};

export default function ChangeProfilePicture({ girlHandle, changeGirl, previousProfilePicture }) {
	const [open, setOpen] = useState(false);
	const [profilePicture, setProfilePicture] = useState("");

	const handleOpen = () => {
		setOpen(true)
		setProfilePicture(previousProfilePicture)
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchSubmitProfilePicture = async () => {
		const res = await submitProfilePicture(girlHandle, newProfilePicture);
		changeGirl()
	};

	const handleUploadImage = (event) => {
		setProfilePicture(URL.createObjectURL(event.target.files[0]))
	}

	return (
		<div>
			<Button onClick={handleOpen}>Change Profile Picture</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
				<Box sx={{...style}}>
					<h2 id="parent-modal-title">Change Profile Picture</h2>
					<CardMedia component='img' src={profilePicture} sx={{ width: '150px', height: '150px', borderRadius: '50%', display: 'grid', alignSelf: 'center', paddingBottom: '10px' }}/>
					<Button sx={{marginBottom: '5px'}} variant="contained" component='label'>
						Upload Image
						<input hidden accept="image/*" type="file" onChange={handleUploadImage} />
					</Button>
					<Button onClick={() => { 
						if(newProfilePicture !== previousProfilePicture){
							fetchSubmitProfilePicture();
						}
						handleClose(); 
					}} variant="contained">Submit</Button>
				</Box>
			</Modal>
		</div>
	);
}
