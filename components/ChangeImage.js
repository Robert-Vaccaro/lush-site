import {useState} from 'react';
import {Box, Modal, Button, CardMedia, IconButton} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {submitImage} from "../server/UserRoutes"

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

export default function ChangeImage({ girlHandle, imageIndex, changeGirl, previousImage }) {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const handleOpen = () => {
		setOpen(true)
		setImage(previousImage)
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchSubmitImage = async () => {
		const res = await submitImage(girlHandle, imageIndex, newProfilePicture);
		changeGirl()
	};

	const handleUploadImage = (event) => {
		setImage(URL.createObjectURL(event.target.files[0]))
	}

	return (
		<div>
			<IconButton onClick={handleOpen} type="button" sx={{position: 'absolute', top: '0px', right:'0px', background: 'white', boxShadow: '3', '&:hover':{background:'#ffffffea'} }}>
				<Edit color="primary" />
			</IconButton>
			<Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
				<Box sx={{...style}}>
					<h2 id="parent-modal-title">Change Image: {imageIndex}</h2>
					<CardMedia component='img' src={image} sx={{ width: '300px', height: 'auto', display: 'grid', alignSelf: 'center', paddingBottom: '10px' }}/>
					<Button sx={{marginBottom: '5px'}} variant="contained" component='label'>
						Upload Image
						<input hidden accept="image/*" type="file" onChange={handleUploadImage} />
					</Button>
					<Button sx={{marginBottom: '5px'}} onclick={() => { 
						if(image !== previousImage){
							fetchSubmitImage();
						}
						handleClose(); 
					}} variant="contained">submit</Button>
					<Button onclick={() => { 
					}} variant="contained" sx={{backgroundColor: '#d21919'}}>Delete</Button>
				</Box>
			</Modal>
		</div>
	);
}
