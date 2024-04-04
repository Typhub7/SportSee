import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { UserData } from './UserContext';
import { z } from 'zod'; // Importer Zod pour les validations de schéma
import { RetrieveUserActivity, RetrieveUserAverageSessions, RetrieveUserData, RetrieveUserPerformance } from './Api';

interface UserProviderProps {
  userId: number;
  children: ReactNode;
}

const UserContext = createContext<UserData | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ userId, children }) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
 
  useEffect(() => {
    const RetrieveDataForUser = async () => {
      try {
        // Effectuer les quatre fetches de données
        const [userMainData, userActivity, userAverageSessions, userPerformance] = await Promise.all([
          RetrieveUserData(userId),
          RetrieveUserActivity(userId),
          RetrieveUserAverageSessions(userId),
          RetrieveUserPerformance(userId)
        ]);
        console.log("userMainData dans userprovider",userMainData)
        console.log("userActivity dans userprovider", userActivity)

        // Valider les données avec les schémas Zod
        const userMainDataSchema = z.object({
          id: z.number(),
          userInfos: z.object({
            firstName: z.string(),
            lastName: z.string(),
            age: z.number(),
          }),
          todayScore: z.number(),
          keyData: z.object({
            calorieCount: z.number(),
            proteinCount: z.number(),
            carbohydrateCount: z.number(),
            lipidCount: z.number(),
          }),
        });
        console.log("userMainDataSchema dans userprovider",userMainDataSchema)

        const userActivitySchema = z.object({
          userId: z.number(),
          sessions: z.array(
            z.object({
              day: z.string(),
              kilogram: z.number(),
              calories: z.number(),
            })
          ),
        });
        console.log("userActivitySchema dans userprovider",userActivitySchema)

        const userAverageSessionsSchema = z.object({
          userId: z.number(),
          sessions: z.array(
            z.object({
              day: z.number(),
              sessionLength: z.number(),
            })
          ),
        });

        const userPerformanceSchema = z.object({
          userId: z.number(),
          kind: z.record(z.string()),
          data: z.array(
            z.object({
              value: z.number(),
              kind: z.number(),
            })
          ),
        });

        // Vérifier si les données sont conformes aux schémas Zod
        userMainDataSchema.parse(userMainData);
        userActivitySchema.parse(userActivity);
        userAverageSessionsSchema.parse(userAverageSessions);
        userPerformanceSchema.parse(userPerformance);

        setUserData({
          userMainData,
          userActivity,
          userAverageSessions,
          userPerformance
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    RetrieveDataForUser();
  }, [userId]);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };