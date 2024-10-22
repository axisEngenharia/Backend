import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({logger: true});

const start = async () => {
    await app.register(cors);
    await app.register(routes);
    
    try {
        await app.listen({port: 4000, host: '0.0.0.0'});
    } catch (err) {
        process.exit(1);
    }
};

start()
