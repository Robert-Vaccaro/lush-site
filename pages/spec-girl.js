import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography, CardMedia, ImageList, ImageListItem} from '@mui/material'
import moment from "moment";
import { getCookie } from "cookies-next";

export default function SpecGirl() {
  const router = useRouter();

  let [girl, setGirl] = useState([]);

  const getSpecificGirl = (girlHandle) => {
    fetch("https://intense-brook-83972.herokuapp.com/get-girl", {
      method: "post",
      headers: {
        Authorization: getCookie("token"),
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getCookie("username"),
        girlHandle: girlHandle,
      }),
    })
      .then((res) => res.json())
      .then((res) => setGirl(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (router.isReady) {
      getSpecificGirl(router.query.girl);
    }
  }, [router.isReady]);
  return (
    <div>
      {girl.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Button size="small" onClick={() => router.push("/girls")}>
            Back
          </Button>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">
                <u>Girl Information</u>
              </Typography>
              <Typography>Database ID: {girl._id}</Typography>
              <Typography>Girl Name: {girl.girlName}</Typography>
              <Typography>Girl Handle: {girl.girlHandle}</Typography>
              <Typography>Last Message: {girl.lastMessage}</Typography>
              <Typography>Profile Pic:
                <CardMedia component='img' src={girl.profilePic} sx={{ width: '50px', height: 'auto' }}/>
              </Typography>
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
          </Card>
          <br></br>
			<Typography>
				<ImageList cols={girl.images.length} rowHeight={150}>
					{girl.images === 0 ? "" :
						girl.images.map((image, index) => {
							<ImageListItem key={index}>
								<CardMedia component='img' src={image} sx={{ width: 'auto', height: '145' }}/>
							</ImageListItem>
						})
					}
				</ImageList>
			</Typography>
          <br></br>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Start Messages</Typography>
              <br></br>
              {girl.startMessages.length === 0 ? ""
                : girl.startMessages.map((message, index) => (
                    <Typography key={index}>
                      <u>
                        <b>{index}</b>
                      </u>
                      : {message}
                    </Typography>
                  ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
