import "source-map-support/register";
import "dotenv/config";

import { app } from "./app";
import { client } from "./database/client";
import * as queue from "./Queue"

const port = process.env.PORT || 3000;

// Run the server!
const start = async () => {
  try {
    await client.connect();
    await app.listen(port)
    queue.start();
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()