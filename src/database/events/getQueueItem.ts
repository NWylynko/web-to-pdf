import { EventStatus } from './../../Types/EventStatus';
import { events } from "../client"

export interface QueueItem {
  _id: string;
  status: EventStatus;
  id: string;
  url: string;
  timestamp: number;
}

export const getQueueItem = async (id: string) => {

  return events.find<QueueItem>({ id }).toArray()

}