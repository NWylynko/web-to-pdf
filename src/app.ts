import Fastify from 'fastify';

import { submitWebsite } from './endpoints/submitWebsite';
import { getDetails } from './endpoints/getDetails';

// Require the framework and instantiate it
export const app = Fastify({ logger: true })

app.post("/", submitWebsite)
app.get("/:id/details", getDetails)