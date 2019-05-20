require("dotenv").config();
const server = require("./server");

const port = process.env.PORT || 5000;
// if (process.env.NODE_ENV !== "test") {
server.listen(port, () => {
  console.log("server running...");
});
// }
