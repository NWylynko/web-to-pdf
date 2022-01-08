import { EventStatus } from "../../Types/EventStatus";
import { events } from "../client"

interface Website {
  url: string;
  id: string;
}

export const queueWebsite = async ({ url, id }: Website) => {

  const status: EventStatus = "QUEUED";
  const timestamp = new Date().getTime();

  const { insertedId: eventId } = await events.insertOne({ url, id, status, timestamp });

  return { eventId, url, status, timestamp };

}