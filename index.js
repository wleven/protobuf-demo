const express = require("express");
const protoRoot = require("./proto/proto");

const app = express();

function getUser() {
  const User = protoRoot.lookupType("user.User");

  const data = {
    name: "jack",
    age: 1,
    admin: false,
  };

  const msg = User.create(data);

  return User.encode(msg).finish();
}

app.get("/", (req, res) => {
  res.send(getUser());
});

app.listen(3000, () => {
  console.log("start");
});
