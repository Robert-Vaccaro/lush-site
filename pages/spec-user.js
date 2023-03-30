import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import ChangePrompt from "../components/ChangePrompt";
import ChangeResStr from "../components/ChangeResStr";
import BanUser from "../components/BanUser";
import { getCookie } from "cookies-next";

export default function SpecUser() {
  const router = useRouter();

  let [user, setUser] = useState([]);
  let [messages, setMessages] = useState([]);
  let [updatePage, setUpdatePage] = useState(true);
  const updateUsersPage = () => {
    console.log("should reload");
    setUpdatePage(true);
  };
  // http://localhost:3001/
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
          <Button size="small" onClick={() => router.push("/dashboard")}>
            Back
          </Button>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">
                <u>User Information</u>
              </Typography>
              <Typography>Username: {user.username}</Typography>
              <Typography>AppleID: {user.appleID}</Typography>
              <Typography>Email_address: {user.email_address}</Typography>
              <Typography>First name: {user.firstName}</Typography>
              <Typography>Last name: {user.lastName}</Typography>
              <Typography>
                Created:{" "}
                {moment
                  .unix(user.createdAt)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </Typography>
              <Typography>
                Last Login
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
              <Typography>DB ID: {user._id}</Typography>
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