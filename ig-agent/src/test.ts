import { IgApiClient } from "instagram-private-api";

const ig = new IgApiClient();
ig.state.generateDevice("testujeapi");

(async () => {
  //   await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(
    "testujeapi",
    "testernest"
    /* process.env.IG_USERNAME as string,
  process.env.IG_PASSWORD as string */
  );
  process.nextTick(async () => await ig.simulate.postLoginFlow());
})().catch(console.log);
