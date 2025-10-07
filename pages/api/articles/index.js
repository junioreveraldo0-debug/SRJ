import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const articles = (await redis.lrange("articles", 0, -1)).map(JSON.parse);
    return res.status(200).json(articles);
  }

  if (req.method === "POST") {
    try {
      const article = req.body;
      await redis.rpush("articles", JSON.stringify(article));
      return res.status(201).json({ message: "Artigo salvo com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao salvar artigo" });
    }
  }

  return res.status(405).json({ message: "Método não permitido" });
}
