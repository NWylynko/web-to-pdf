import { FastifyRequest } from "fastify"
import { addWebsiteToQueue } from "../functions/addWebsiteToQueue";

interface Body {
  url: string;
}

// Declare a route
export const submitWebsite = async (request: FastifyRequest) => {

  const { body } = request;
  const { url } = body as Body;

  return addWebsiteToQueue(url)
}