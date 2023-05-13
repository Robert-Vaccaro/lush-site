import { getCookie } from "cookies-next";
//update this value with either local host or deploy server url
const API_KEY = "http://localhost:3001"

export async function getSpecGirl(specGirl) {
    const result = await fetch(`${API_KEY}/get-girl`, {
        method: "post",
        headers: {
          Authorization: getCookie("token"),
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: getCookie("username"),
          girlHandle: specGirl,
        }),
      })
    let response = await result.json();
    return response
}

export async function loginAdmin(username,pw) {
    const result = await fetch(`${API_KEY}/login`, {
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },        
          body: JSON.stringify({
            username: username,
            pw: pw,
          }),
           method: "post", credentials: 'same-origin'
    });
    let response = await result.json();
    return response
}

export async function getSpecUser(appleID) {
    const result = await fetch(`${API_KEY}/get-user`, {
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
    let response = await result.json();
    return response
}
  
export async function getSpecUserMessages(appleID) {
    const result = await fetch(`${API_KEY}/admin-get-messages`, {
        method: "post",
        headers: {
          'Authorization': getCookie('token'), 
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: getCookie("username"),
            appleID: appleID,
          }),
      })
    let response = await result.json();
    return response
}

export async function getUsers(searchTerm,page,perPage) {
    const result = await     fetch(`${API_KEY}/get-users`, {
        method: 'post', 
        headers: {
          'Authorization': getCookie('token'), 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:getCookie("username"), userSearch: searchTerm, page:page,limit:perPage})
      })
    let response = await result.json();
    return response
}

export async function getGirls() {
    const result = await fetch(`${API_KEY}/get-all-girls`, {
        method: 'post', 
        headers: {
          'Authorization': getCookie('token'), 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
    let response = await result.json();
    return response
}

export async function submitResStr(appleID, newResStr) {
    const result = await fetch(`${API_KEY}/update-response-str`, {
        method: 'post', 
        headers: {
          'Authorization': getCookie('token'),
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:getCookie("username"), appleID: appleID, newResStr: newResStr})
      })
    let response = await result.json();
    return response
}
export async function submitPrompt(appleID, newPrompt) {
    const result = await fetch(`${API_KEY}/update-prompt`, {
        method: 'post',
        headers: {
            'Authorization': getCookie('token'),
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: getCookie("username"), appleID: appleID, newPrompt: newPrompt })
    })
    let response = await result.json();
    return response
}

export async function submitBan(appleID, banStatus) {
    const result = await fetch(`${API_KEY}/update-ban-status`, {
        method: 'post', 
        headers: {
            'Authorization': getCookie('token'),
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:getCookie("username"), appleID:appleID, banned:banStatus})
      })
    let response = await result.json();
    return response
}
