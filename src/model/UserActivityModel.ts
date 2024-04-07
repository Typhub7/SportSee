import { z } from 'zod';

export const UserActivitySchema = z.object({
    userId: z.number(),
    sessions: z.array(
      z.object({
        day: z.string(),
        kilogram: z.number(),
        calories: z.number(),
      })
    ),
  });

export type UserActivityData = z.infer <typeof UserActivitySchema>;