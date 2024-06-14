import Joi from 'joi';

const schema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().min(1000).default(3000),
  PROJECT_NAMESPACE: Joi.string().required(),
  DB_NAME: Joi.string().default('buzzlist'),
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().min(1000).default(5432),
  DB_USERNAME: Joi.string().default('postgres'),
  DB_PASSWORD: Joi.number().default(2192),
});

export default schema;
