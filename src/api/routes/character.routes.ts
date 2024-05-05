import { FastifyInstance } from "fastify";
import { ICharacterController } from "../interfaces/i.character.controller";
import { simpleGetSchemaParams } from "./schemas/generic.schema";
import { createCharacterSchema, updateCharacterSchema } from "./schemas/character.schema";
import { authenticate } from "../middlewares/auth.middleware";
import { verifyIsAdmin } from "../middlewares/admin.middleware";

export function configureCharacterRoutes(app: FastifyInstance, characterController: ICharacterController) {
    app.register((app, options, done) => {
        app.get('/character/:id', { schema: { params: simpleGetSchemaParams, tags: ['character'] } }, characterController.getById);
        app.get('/character', { schema: { tags: ['character'] } }, characterController.getAll);
        app.post('/character', { preHandler: [authenticate, verifyIsAdmin], schema: createCharacterSchema }, characterController.create);
        app.put('/character', { preHandler: [authenticate, verifyIsAdmin], schema: updateCharacterSchema }, characterController.update);
        app.delete('/character', { preHandler: [authenticate, verifyIsAdmin], schema: { tags: ['character'] } }, characterController.delete);
        done();
    })
}