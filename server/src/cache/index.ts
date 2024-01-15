import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || '';
const client = new Redis(redisUrl);

export const setCache = async (key: string, value: string) => {
  await client.set(key, value);
};

export const getCache = async (key: string) => {
  return await client.get(key);
};
