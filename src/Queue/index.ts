import { getOldestItem } from "../database/events/getOldestItem";

let running = false
let isNextItem = false

export const start = async () => {
  if (running) {
    console.log("queue already running")
    isNextItem = true
    return;
  }

  running = true
  console.log("running queue now")

  const website = await getOldestItem();

  if (!website) {
    console.log("no website found")
    running = false
    return;
  }

  running = false

  if (isNextItem) {
    console.log("is next item");
    isNextItem = false
    start()
    return;
  }

  console.log("queue done for now :)");
}


