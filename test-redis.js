import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

async function test() {
  try {
    await redis.set("teste", "funcionando");
    const value = await redis.get("teste");
    console.log("✅ Redis está funcionando:", value);
  } catch (error) {
    console.error("❌ Erro ao conectar com o Redis:", error);
  }
}

test();
