import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.post('/', async function (request, reply) {
    return { hello: 'post' }
  })
}

export default root;
