import { z } from 'zod';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface UserProviderProps {
    userId: number; // Ajoutez une prop pour l'ID de l'utilisateur
    children: ReactNode;
  }

// Définir les schémas de validation avec Zod
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

// Utiliser les interfaces pour le typage
type UserMainDataSchema = z.infer<typeof userMainDataSchema>;
type UserActivitySchema = z.infer<typeof userActivitySchema>;
type UserAverageSessionsSchema = z.infer<typeof userAverageSessionsSchema>;
type UserPerformanceSchema = z.infer<typeof userPerformanceSchema>;

// Utiliser les schémas de Zod pour la validation et le typage des données
type UserData = {
  userMainData: UserMainDataSchema;
  userActivity: UserActivitySchema[];
  userAverageSessions: UserAverageSessionsSchema[];
  userPerformance: UserPerformanceSchema[];
};

// Créer le contexte
const UserContext = createContext<UserData | undefined>(undefined);

// Créer le fournisseur de contexte
const UserProvider: React.FC<UserProviderProps> = ({ userId, children }) => {
    const [userData, setUserData] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    const fetchUserData  = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        
        // Vérification que les données correspondent au schéma userMainDataSchema
        if (userMainDataSchema.safeParse(data.userMainData).success) {
          setUserData(data);
        } else {
          throw new Error('Les données ne correspondent pas au schéma attendu');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchUserData ();
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Utiliser un hook personnalisé pour accéder au contexte
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };