import { RetrieveData } from "./RetrieveData";
import { UserMainDataSchema } from "../model/UserMainDataModel"
import { UserActivitySchema } from "../model/UserActivityModel"
import { UserAverageSessionsSchema } from "../model/UserAverageSessionsModel"
import { UserPerformanceSchema } from "../model/UserPerformanceModel"
import { USER_MAIN_DATA , USER_ACTIVITY , USER_AVERAGE_SESSIONS , USER_PERFORMANCE} from "../mock/mockeddata.js"

// Use "true" to fetch data from server or "false" to get them from mocked data

const dataFromServer = true

export const RetrieveUserData = async (userId: number) => {
    let  data : unknown 
    // Si 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}`)
    } else {
        data = USER_MAIN_DATA.find(user => user.id === userId)
    }

    // Aucun utilisateur correspondant trouvé, retourner null
    if (!data) {
        return null; 
    }
    
    // Si il n'y a aucune donnée correspondant à l'id, retourner null
    try {
        const userData = UserMainDataSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; // En cas d'erreur d'analyse, retourner null
    }
};

export const RetrieveUserActivity = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/activity`)
    } else {
        data = USER_ACTIVITY.find(user => user.userId === userId)
    }

    if (!data) {
        return null; // Aucun utilisateur correspondant trouvé, retourner null
    }
    
    try {
        const userData = UserActivitySchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; // En cas d'erreur d'analyse, retourner null
    }
};

export const RetrieveUserAverageSessions = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`)
    } else {
         data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
    }

    if (!data) {
        return null; // Aucun utilisateur correspondant trouvé, retourner null
    }
    
    try {
        const userData = UserAverageSessionsSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; // En cas d'erreur d'analyse, retourner null
    }
}

export const RetrieveUserPerformance = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    } else {
        data = USER_PERFORMANCE.find(user => user.userId === userId);
    }

    if (!data) {
        return null; // Aucun utilisateur correspondant trouvé, retourner null
    }
    
    try {
        const userData = UserPerformanceSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; // En cas d'erreur d'analyse, retourner null
    }
};