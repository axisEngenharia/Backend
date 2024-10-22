import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createCustomer } from "../src/controllers/createCustomer.controller";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        
        return new createCustomer().handle(request, reply)
    })
}