// const loginAdmin = async () => {
//     fetch("", {
//         method: "post",
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: data.get("username"),
//           pw: data.get("password"),
//         }),
//       })
// };
const loginAdmin = async (username,pw) => {
      const result = await fetch("https://intense-brook-83972.herokuapp.com/login", {
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

export default loginAdmin;
  