import { FastifyRequest } from "fastify"
import { getWebsiteDetails } from "../functions/getWebsiteDetails";

interface Query {
  id: string;
}

// Declare a route
export const getDetails = async (request: FastifyRequest) => {

  const { params } = request;
  const { id } = params as Query;

  return getWebsiteDetails(id)
}