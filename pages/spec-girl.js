import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography, CardMedia} from '@mui/material'
import moment from "moment";
import {getSpecGirl} from "../server/UserRoutes"
import ChangeLastMessage from '../components/ChangeLastMessage'
import ChangeSubscribeMessage from '../components/ChangeSubscribeMessage'
import ChangeProfilePicture from "../components/ChangeProfilePicture";
import ChangeImage from "../components/ChangeImage"

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
      getSpecificGirl(router.query.girl)
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
						<div style={{position: 'relative', paddingBottom: '10px'}}>
							<CardMedia component='img' src={girl.profilePic} sx={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
							<ChangeProfilePicture 
								girlHandle={girl.girlHandle}
								changeGirl={() => setUpdatePage(!updatePage)}
								previousProfilePicture={girl.profilePic}
							/>
						</div>
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
          <Card sx={{ minWidth: 275}}>
						<CardContent>
						<Typography variant="h5">Images</Typography>
						<div style={{ width: "100%", display: 'grid', gridAutoFlow: 'column', gridAutoColumns: 'calc(100% / 3)', overflowX: 'scroll', gridGap: '10px' }}>
							{
								girl.images.length === 0 ? <div></div> :
								girl.images.map((item, index) => (
									<div style={{position:'relative'}}>
										<CardMedia
											key={index}
											component="img"
											height="auto"
											width="300px"
											src={`${item}`}
											alt="Paella dish"
											sx={{borderTopRightRadius: '22px'}}
										/>
									<ChangeImage
										girlHandle={girl.girlHandle}
										imageIndex={index}
										changeGirl={() => setUpdatePage(!updatePage)}
										previousImage={item}
									/>
									</div>
								))}
						</div>
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
