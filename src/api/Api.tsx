import { RetrieveData } from "./RetrieveData";
import { UserMainDataSchema } from "../model/UserMainDataModel"
import { UserActivitySchema } from "../model/UserActivityModel"
import { UserAverageSessionsSchema } from "../model/UserAverageSessionsModel"
import { UserPerformanceSchema } from "../model/UserPerformanceModel"
import { USER_MAIN_DATA , USER_ACTIVITY , USER_AVERAGE_SESSIONS , USER_PERFORMANCE} from "../mock/mockeddata.js"

// Use "true" to fetch data from server or "false" to get them from mocked data

const dataFromServer = false;

export const RetrieveUserData = async (userId: number) => {
    let  data : unknown ;
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}`);
    } else {
        const userFromMainData = USER_MAIN_DATA.find(user => user.id === userId);
        // Vérifie si l'utilisateur existe dans USER_MAIN_DATA
        if (userFromMainData) {
            data = userFromMainData;
        } else {
            // Gère le cas où aucun utilisateur n'est trouvé
            throw new Error(`Aucune donnée disponible pour l'utilisateur ${userId} `);
        }
    }
    const userData = UserMainDataSchema.parse(data);
    return userData;
};

export const RetrieveUserActivity = async (userId: number) => {
    let  data : unknown ;
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/activity`);
    } else {
        const userFromActivity = USER_ACTIVITY.find(user => user.userId === userId);
        // Vérifie si l'utilisateur existe dans USER_ACTIVITY
        if (userFromActivity) {
            data = userFromActivity;
        } else {
            // Gère le cas où aucun utilisateur n'est trouvé
            throw new Error(`User with ID ${userId} not found in USER_MAIN_DATA`);
        }
    }
    const userData = UserActivitySchema.parse(data);
    return userData;
};

export const RetrieveUserAverageSessions = async (userId: number) => {
    let  data : unknown ;
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`);
    } else {
        const userFromAverageSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
        // Vérifie si l'utilisateur existe dans USER_AVERAGE_SESSIONS
        if (userFromAverageSessions) {
            data = userFromAverageSessions;
        } else {
            // Gère le cas où aucun utilisateur n'est trouvé
            throw new Error(`User with ID ${userId} not found in USER_MAIN_DATA`);
        }
    }
    const userData = UserAverageSessionsSchema.parse(data);
    return userData;
};

export const RetrieveUserPerformance = async (userId: number) => {
    let  data : unknown ;
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    } else {
        const userFromPerformance = USER_PERFORMANCE.find(user => user.userId === userId);
        // Vérifie si l'utilisateur existe dans USER_PERFORMANCE
        if (userFromPerformance) {
            data = userFromPerformance;
        } else {
            // Gère le cas où aucun utilisateur n'est trouvé
            throw new Error(`User with ID ${userId} not found in USER_MAIN_DATA`);
        }
    }
    const userData = UserPerformanceSchema.parse(data);
    return userData;
};