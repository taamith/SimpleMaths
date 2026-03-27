import Config from 'react-native-config';
import {z} from 'zod';

const envSchema = z.object({
  APP_NAME: z.string().min(1),
  API_BASE_URL: z.string().url(),
  APP_ENV: z.enum(['development', 'staging', 'production']),
  ENABLE_ANALYTICS: z.enum(['true', 'false'])
});

export const env = envSchema.parse({
  APP_NAME: Config.APP_NAME,
  API_BASE_URL: Config.API_BASE_URL,
  APP_ENV: Config.APP_ENV,
  ENABLE_ANALYTICS: Config.ENABLE_ANALYTICS
});
