const { app } = require("./app");
const { connect } = require("./config/database");

async function main() {
  await connect();

  await app.listen(4002);
}

main();
