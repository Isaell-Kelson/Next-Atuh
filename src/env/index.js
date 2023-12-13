import { z } from "zod";

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().trim().min(1),
  GOOGLE_CLIENT_SECRET: z.string().trim().min(1),
//   NODE_ENV: z
//     .enum(["development", "production", "test"])
//     .default("development"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables!", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;