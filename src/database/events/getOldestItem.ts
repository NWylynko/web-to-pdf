import { EventStatus } from './../../Types/EventStatus';
import { events } from "../client"

export interface QueueItem {
  _id: string;
  status: EventStatus;
  id: string;
  url: string;
  timestamp: number;
}

export const getOldestItem = async () => {

  return events.findOne<QueueItem>({ status: "QUEUED" }, { sort: { timestamp: 1 } })

}