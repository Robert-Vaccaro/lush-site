import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography, CardMedia, ImageList, ImageListItem} from '@mui/material'
import moment from "moment";
import {getSpecGirl} from "../server/UserRoutes"
import ChangeLastMessage from '../components/ChangeLastMessage'
import ChangeSubscribeMessage from '../components/ChangeSubscribeMessage'

export default function SpecGirl() {
  const router = useRouter();

  let [girl, setGirl] = useState(undefined);
	let [updatePage, setUpdatePage] = useState(false);

  const getSpecificGirl = async (girlHandle) => {
    const res = await getSpecGirl(girlHandle)
    setGirl(res);
  };

  useEffect(() => {
    if (router.isReady) {
      getSpecificGirl(router.query.girl);
    }
  }, [router.isReady, updatePage]);
  return (
    <div>
      {girl === undefined ? (
        <div></div>
      ) : (
        <div>
          <Button size="small" onClick={() => router.push("/girls")}>
            Back
          </Button>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
						<Typography variant="h5"><u>Girl Information</u></Typography>
            <CardMedia component='img' src={girl.profilePic} sx={{ width: '150px', height: 'auto' }}/>
              <Typography>Database ID: {girl._id}</Typography>
              <Typography>Girl Name: {girl.girlName}</Typography>
              <Typography>Girl Handle: {girl.girlHandle}</Typography>
              <Typography>Last Message: {girl.lastMessage}</Typography>
              <Typography>
                Created:{" "}
                {moment
                  .unix(girl.createdAt)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>User Count: {girl.userCount}</Typography>
              <Typography>Messages Count: {girl.messageCount}</Typography>
              <Typography>Subscribe Message: {girl.subscribeMessage}</Typography>
            </CardContent>
            <CardActions>
							<ChangeLastMessage
								girlHandle={girl.girlHandle}
								previousLastMessage={girl.lastMessage}
								changeGirl={() => setUpdatePage(!updatePage)}
							/>
							<ChangeSubscribeMessage
								girlHandle={girl.girlHandle}
								changeGirl={() => setUpdatePage(!updatePage)}
								previousSubscribeMessage={girl.subscribeMessage}
							/>
            </CardActions>
          </Card>
          <br></br>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
						<Typography variant="h5">Images</Typography>
						<ImageList sx={{ width: "100%", height: "100vh" }} cols={3} rowHeight={150}>
							{
								girl.images.length === 0 ? <div>hi</div> :
								girl.images.map((item, index) => (
									<ImageListItem key={index}>
													<CardMedia
														component="img"
														height="auto"
														weidth="auto"
														src={`${item}`}
														alt="Paella dish"
													/>
										{/* <CardMedia
											
											srcSet={`${item}`}
											alt={"item"}
											loading="lazy"
											sx={{ width: 150, height: 150 }}
										/> */}
									</ImageListItem>
								))
								// .map((image, index) => {
								// 	<ImageListItem key={index}>
								// 		<img component='img' src={image}/>
								// 	 </ImageListItem> 
								// })
							}
						</ImageList>
						</CardContent>
					</Card>
          <br></br>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Start Messages</Typography>
              <br></br>
              {girl.startMessages.length === 0 ? ""
                : girl.startMessages.map((message, index) => (
                    <Typography key={index}>
                      <u>
                        <b>{message.type}</b>
                      </u>
                      : {message.type === "image" ? 
												<CardMedia component='img' src={message.content} sx={{ width: '150px', height: 'auto' }}/> :
												message.content}
                    </Typography>
                  ))}
            </CardContent>
          </Card>
        </div>
      )
    }
    </div>
  );
}
