import { z } from 'zod';

export const UserPerformanceSchema = z.object({
    userId: z.number(),
    kind: z.record(z.string()),
    data: z.array(
      z.object({
        value: z.number(),
        kind: z.number(),
      })
    ),
  });

  export type UserPerformanceData = z.infer <typeof UserPerformanceSchema>;

