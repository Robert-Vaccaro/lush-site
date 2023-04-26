import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography, CardMedia} from '@mui/material'
import moment from "moment";
import ChangePrompt from "../components/ChangePrompt";
import ChangeResStr from "../components/ChangeResStr";
import BanUser from "../components/BanUser";
import { getCookie } from "cookies-next";

export default function SpecUser() {
  const router = useRouter();

  let [girl, setGirl] = useState([]);
  let [startMessages, setStartMessages] = useState([]);
  let [updatePage, setUpdatePage] = useState(true);
  const updateUsersPage = () => {
    console.log("should reload");
    setUpdatePage(true);
  };

  const getSpecificUser = (appleID) => {
    fetch("https://intense-brook-83972.herokuapp.com/get-user", {
      method: "post",
      headers: {
        Authorization: getCookie("token"),
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getCookie("username"),
        appleID: appleID,
      }),
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  };
  const getUserMessages = (appleID) => {
    fetch("https://intense-brook-83972.herokuapp.com/admin-get-messages", {
      method: "post",
      headers: {
        'Authorization': getCookie('token'), 
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username:getCookie("username"), appleID: appleID }),
    })
      .then((res) => res.json())
      .then((res) => setMessages(res))
      .catch((err) => console.log(err));
    setUpdatePage(false);
  };
  useEffect(() => {
    if (router.isReady && updatePage) {
      getSpecificGirl(router.query.girl);
      getGirlStartMessages(router.query.girl);
    }
  }, [router.isReady, updatePage]);
  return (
    <div>
      {user.length === 0 ? (
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
              <Typography>Profile Pic:
				<CardMedia component='img' src={girl.profilePic} sx={{ width: '50px', height: 'auto' }}/>
			  </Typography>
              <Typography>Girl Name: {girl.girlName}</Typography>
              <Typography>Girl Handle: {girl.girlHandle}</Typography>
              <Typography>User Count: {girl.userCount}</Typography>
              <Typography>
                Created:{" "}
                {moment
                  .unix(girl.createdAt)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>Database ID: {girl._id}</Typography>
              <Typography>Messages: {girl.messageCount}</Typography>
              <Typography>Last Message: {girl.lastMessage}</Typography>
              <Typography>Subscribe Message: {girl.subscribeMessage}</Typography>
            </CardContent>
            <CardActions>
              <ChangePrompt
                appleID={router.query.user}
                changeUser={updateUsersPage}
              />
              <ChangeResStr
                appleID={router.query.user}
                changeUser={updateUsersPage}
              />
              <BanUser
                appleID={router.query.user}
                currentBanStatus={user.banned}
                changeUser={updateUsersPage}
              />
            </CardActions>
          </Card>
          <br></br>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Messages</Typography>
              <br></br>
              {messages.length === 0
                ? ""
                : messages.map((message, i) => (
                    <Typography key={i}>
                      <u>
                        <b>{message.sentFrom}</b>
                      </u>
                      : {message.message}
                    </Typography>
                  ))}
            </CardContent>
            <CardActions>
              <Button size="small">Delete Chat</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
