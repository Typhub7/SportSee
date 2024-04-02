import { useContext } from "react";
import { UserContext } from "./UserProvider";

// Définition des interfaces pour les schémas de données utilisateur
interface UserMainDataSchema {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

interface UserActivitySchema {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

interface UserAverageSessionsSchema {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
}

interface UserPerformanceSchema {
  userId: number;
  kind: Record<string, string>;
  data: {
    value: number;
    kind: number;
  }[];
}

// Définition d'un type regroupant toutes les données utilisateur
type UserData = {
  userMainData: UserMainDataSchema;
  userActivity: UserActivitySchema[];
  userAverageSessions: UserAverageSessionsSchema[];
  userPerformance: UserPerformanceSchema[];
};

// Hook pour utiliser le contexte des données utilisateur
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export type { UserMainDataSchema, UserActivitySchema, UserAverageSessionsSchema, UserPerformanceSchema, UserData };
export { useUserContext };