import { getQueueItem } from "../database/events/getQueueItem"
import { EventStatus } from "../Types/EventStatus";

export interface CurrentState {
  status: EventStatus;
  id: string;
  url: string;
  timestamp: number;
}

const baseState: CurrentState = {
  status: "QUEUED",
  id: "",
  url: "",
  timestamp: 0
}

export const getWebsiteDetails = async (id: string) => {

  const events = await getQueueItem(id)

  if (events.length === 0) {
    throw new Error("Not found");
  }

  const state: CurrentState = events
    .sort((a, b) => a.timestamp - b.timestamp)
    .reduce((currentState, event) => {

      const state: any = event;
      delete state._id;

      return { ...currentState, ...state }
    }, baseState)

  return {
    ...state,
    events,
  }
}