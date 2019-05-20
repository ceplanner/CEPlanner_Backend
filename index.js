const server = require("./server");
require("dotenv").config();

const port = process.env.port || 5000;
// if (process.env.NODE_ENV !== "test") {
server.listen(port, () => {
  console.log("server running...");
});
// }
