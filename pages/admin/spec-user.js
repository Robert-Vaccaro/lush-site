import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material'
import moment from "moment";
import ChangePrompt from "../../components/ChangePrompt";
import ChangeResStr from "../../components/ChangeResStr";
import BanUser from "../../components/BanUser";
import {getSpecUser, getSpecUserMessages} from "../../server/UserRoutes"

export default function SpecUser() {
  const router = useRouter();

  let [user, setUser] = useState([]);
  let [messages, setMessages] = useState([]);
  let [updatePage, setUpdatePage] = useState(true);

  const getSpecificUser = async (appleID) => {
    const res = await getSpecUser(appleID)
    setUser(res);
  };
  const getUserMessages = async (appleID) => {
    const res = await getSpecUserMessages(appleID)
    console.log(res)
    setMessages(res);
  };

  useEffect(() => {
    if (router.isReady) {
      getSpecificUser(router.query.user);
      getUserMessages(router.query.user);
    }
  }, [router.isReady, updatePage]);
  return (
    <div>
      {user.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Button size="small" onClick={() => router.push("dashboard")}>
            Back
          </Button>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">
                <u>User Information</u>
              </Typography>
              <Typography>Username: {user.username}</Typography>
              <Typography>AppleID: {user.appleID}</Typography>
              <Typography>Email Address: {user.email_address}</Typography>
              <Typography>First name: {user.firstName}</Typography>
              <Typography>Last name: {user.lastName}</Typography>
              <Typography>
                Created:{" "}
                {moment
                  .unix(user.createdAt)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>
                Last Login:{' '}
                {moment
                  .unix(user.lastLogin)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>
                Updated:{" "}
                {moment
                  .unix(user.updatedAt)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>Database ID: {user._id}</Typography>
              <Typography>
                Paid: {user.paid === undefined ? "" : user.paid.toString()}
              </Typography>
              <Typography>
                Banned:{" "}
                {user.banned === undefined ? "" : user.banned.toString()}
              </Typography>
              <Typography>
                Is AI On: {user.isAI === undefined ? "" : user.isAI.toString()}
              </Typography>
              <Typography>Messages: {user.messageCount}</Typography>
              <Typography>Prompt: {user.prompt}</Typography>
              <Typography>Response String: {user.responseStr}</Typography>
            </CardContent>
            <CardActions>
              <ChangePrompt
                appleID={router.query.user}
                changeUser={() =>  setUpdatePage(!updatePage)}
				        previousPrompt={user.prompt}
              />
              <ChangeResStr
                appleID={router.query.user}
                changeUser={() =>  setUpdatePage(!updatePage)}
                previousResponseStr={user.responseStr}
              />
              <BanUser
                appleID={router.query.user}
                currentBanStatus={user.banned}
                changeUser={() =>  setUpdatePage(!updatePage)}
              />
            </CardActions>
          </Card>
          <br></br>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Messages</Typography>
              <br></br>
              {messages.length === 0
                ? <div></div>
                : 
                messages.map((message, i) => (
                    <div key={i}>
                      <u>
                        <b>{message.sentFrom} @ {moment
                  .unix(message.timeSent)
                  .format(" h:mm:ss A, dddd, MMMM Do, YYYY")}</b>
                      </u>
                      :{message.message === ""?<div><img src={message.downloadURL} width={75}/></div>:<Typography>{message.message}</Typography>}
                      <br></br>
                    </div>
                  ))
              }
              
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
