import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';
import dotenv from 'dotenv';
import schema from './config.schema.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const loadAndValidateConfig = () => {
  const envFile = `.env.example`;
  const envPath = path.join(__dirname, '../..', envFile);

  if (!fs.existsSync(envPath))
    throw new Error(`Environment variables file not found: ${envPath}`);

  dotenv.config({ path: envPath });

  if (!schema)
    throw new Error(`Schema file not found`);

  const config = {};
  for (const key in schema.describe().keys)
    if (Object.hasOwn(process.env, key))
      config[key] = process.env[key];

  const { error, value: validatedConfig } = schema.validate(config);

  if (error) {
    const missingProperties = error.details.map((detail) => detail.path[0]);
    throw new Error(`Config validation error: missing properties ${missingProperties}`);
  }

  return validatedConfig;
}

let configInstance;

const getConfig = () => {
  if (!configInstance) 
    configInstance = loadAndValidateConfig();

  return configInstance;
};

export default getConfig();
