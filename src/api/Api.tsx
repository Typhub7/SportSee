import { RetrieveData } from "./RetrieveData";
import { UserMainDataSchema } from "../model/UserMainDataModel"
import { UserActivitySchema } from "../model/UserActivityModel"
import { UserAverageSessionsSchema } from "../model/UserAverageSessionsModel"
import { UserPerformanceSchema } from "../model/UserPerformanceModel"
import { USER_MAIN_DATA , USER_ACTIVITY , USER_AVERAGE_SESSIONS , USER_PERFORMANCE} from "../mock/mockeddata.js"

// Use "true" to fetch data from server or "false" to get them from mocked data
const dataFromServer = false

/** Retrieves user data based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserData = async (userId: number) => {
    let  data : unknown 
    // Depending on the choice made, displays data from the server or mocked data
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}`)
    } else {
        data = USER_MAIN_DATA.find(user => user.id === userId)
    }

    // If no matching user found, return null
    if (!data) {
        return null; 
    }
    
    // If there is no data corresponding to the ID, return null
    try {
        const userData = UserMainDataSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; // In case of parsing error, return null
    }
};

/** Retrieves user activity based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */

export const RetrieveUserActivity = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/activity`)
    } else {
        data = USER_ACTIVITY.find(user => user.userId === userId)
    }

    if (!data) {
        return null;
    }
    
    try {
        const userData = UserActivitySchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; 
    }
};

/** Retrieves user average sessions data based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserAverageSessions = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`)
    } else {
         data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
    }

    if (!data) {
        return null;
    }
    
    try {
        const userData = UserAverageSessionsSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null; 
    }
}

/** Retrieves user performance based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserPerformance = async (userId: number) => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    } else {
        data = USER_PERFORMANCE.find(user => user.userId === userId);
    }

    if (!data) {
        return null;
    }
    
    try {
        const userData = UserPerformanceSchema.parse(data);
        return userData;
    } catch (error) {
        console.error("Erreur lors de l'analyse des données d'activité utilisateur:", error);
        return null;
    }
};