import { z } from 'zod';

export const UserAverageSessionsSchema = z.object({
    userId: z.number(),
    sessions: z.array(
      z.object({
        day: z.number(),
        sessionLength: z.number(),
      })
    ),
  });

export type UserAverageSessionsData = z.infer <typeof UserAverageSessionsSchema>;