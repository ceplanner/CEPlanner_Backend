require("dotenv").config();
const server = require("./server");

const port = process.env.port || 5000;
// if (process.env.NODE_ENV !== "test") {
server.listen(port, () => {
  console.log("server running...");
});
// }
