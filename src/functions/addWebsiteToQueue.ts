import { queueWebsite } from "../database/events/queueWebsite";
import { v4 as uuid } from "uuid";
import * as queue from "../Queue"

export const addWebsiteToQueue = async (url: string) => {

  const id = uuid();
  const details_url = `/${id}/details`;

  const { status, timestamp } = await queueWebsite({ url, id });

  const eta = 1000;

  queue.start();

  return { id, url, eta, details_url, status, timestamp }
}