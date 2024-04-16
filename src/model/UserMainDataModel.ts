import { z } from 'zod';

export const UserMainDataSchema = z.object({
    id: z.number(),
    userInfos: z.object({
      firstName: z.string(),
      lastName: z.string(),
      age: z.number(),
    }),
    todayScore: z.optional(z.number()),
    score: z.optional(z.number()),
    keyData: z.object({
      calorieCount: z.number(),
      proteinCount: z.number(),
      carbohydrateCount: z.number(),
      lipidCount: z.number(),
    }),
  });

  export type UserMainData = z.infer <typeof UserMainDataSchema>;
