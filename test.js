const protoRoot = require("./proto/proto");
const axios = require("axios").default;

const User = protoRoot.lookupType("user.User");

axios
  .get("http://localhost:3000", {
    responseType: "arraybuffer",
  })
  .then((res) => {
    console.log(res.data);
    console.log(User.decode(res.data));
  });
