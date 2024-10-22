import { FastifyRequest, FastifyReply } from "fastify";
import { createCustomersService } from "../services/createCustomer.service"

class createCustomer {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const {name, email, tel, message} = request.body as {name: string, email: string, tel: string, message: string};
      
        
        const customersService = new createCustomersService();

        const customer = await customersService.execute({name, email, tel, message});

        reply.send(customer);
    }
}

export {createCustomer}