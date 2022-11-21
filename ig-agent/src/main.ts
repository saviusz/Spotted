import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { IgApiClient } from "instagram-private-api";
import ipc from "node-ipc";

ipc.config.id = "ig-spotted-agent";
ipc.config.retry = 1500;

const ig = new IgApiClient();
ig.state.generateDevice(process.env.IG_USERNAME as string);

(async () => {
  // await ig.simulate.preLoginFlow();
  try {
    const loggedInUser = await ig.account.login(
      "testujeapi",
      "testernest"
      /* process.env.IG_USERNAME as string,
    process.env.IG_PASSWORD as string */
    );
  } catch (err) {
    console.log(err);
  }

  process.nextTick(async () => await ig.simulate.postLoginFlow());

  ipc.serve(function () {
    let server = ipc.server;

    server.on("postImage", async ({ file, caption }) => {
      console.log("Odebrano żadanie posta");
      const result = await ig.publish.photo({
        file: Buffer.from(file, "base64"),
        caption: caption,
      });
      return result.media.id;
    });
  });

  ipc.server.start();
})().catch(console.error);
