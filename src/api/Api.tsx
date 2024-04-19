import { RetrieveData } from "./RetrieveData";
import { UserMainData, UserMainDataSchema } from "../model/UserMainDataModel"
import { UserActivityData, UserActivitySchema } from "../model/UserActivityModel"
import { UserAverageSessionsData, UserAverageSessionsSchema } from "../model/UserAverageSessionsModel"
import { UserPerformanceData, UserPerformanceSchema } from "../model/UserPerformanceModel"
import { USER_MAIN_DATA , USER_ACTIVITY , USER_AVERAGE_SESSIONS , USER_PERFORMANCE} from "../mock/mockeddata.js"
import { UserError } from "../model/UserError.js";

// Use "true" to fetch data from server or "false" to get them from mocked data
const dataFromServer = false

/** Retrieves user data based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserData = async (userId: number):Promise<[UserError | null , UserMainData | null] > => {
    let  data : unknown 
    // Depending on the choice made, displays data from the server or mocked data
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}`)
    } else {
        data = USER_MAIN_DATA.find(user => user.id === userId)
    }

    // If there are no data from the server, return a message
    if (!data) {
        return [{message: "Erreur de collecte des données du serveur"} , null]
    }
    
    // If there is a problem with the data, return another message
    const userData = UserMainDataSchema.safeParse(data);
    if (userData.success) {
        return [ null, userData.data]
    }
    else {
        return [{message : "Les données globales sont corrompues" } , null]
    }
};

/** Retrieves user activity based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */

export const RetrieveUserActivity = async (userId: number):Promise<[UserError | null , UserActivityData | null] > => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/activity`)
    } else {
        data = USER_ACTIVITY.find(user => user.userId === userId)
    }

    if (!data) {
        return [{message: "Erreur de collecte des données du serveur"} , null];
    }
    
    const userData = UserActivitySchema.safeParse(data);
    if (userData.success) {
        return [ null, userData.data]
    }
    else {
        return [{message : "Les données d'activité sont corrompues" } , null]
    }
};

/** Retrieves user average sessions data based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserAverageSessions = async (userId: number):Promise<[UserError | null , UserAverageSessionsData | null] > => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`)
    } else {
         data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
    }

    if (!data) {
        return [{message: "Erreur de collecte des données du serveur"} , null]
    }
    
    const userData = UserAverageSessionsSchema.safeParse(data);
    if (userData.success) {
        return [ null, userData.data]
    }
    else {
        return [{message : "Les données de sessions moyennes sont corrompues" } , null]
    }
}

/** Retrieves user performance based on the provided user ID.
 * 
 * @param userId The ID of the user whose data is to be retrieved.
 * @returns User data object if found, otherwise returns null.
 */
export const RetrieveUserPerformance = async (userId: number):Promise<[UserError | null , UserPerformanceData | null] >  => {
    let  data : unknown 
    if (dataFromServer) {
        data = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    } else {
        data = USER_PERFORMANCE.find(user => user.userId === userId);
    }

    if (!data) {
        return [{message: "Erreur de collecte des données du serveur"} , null]
    }
    
    
    const userData = UserPerformanceSchema.safeParse(data);
    if (userData.success) {
        return [ null, userData.data]
    }
    else {
        return [{message : "Les données globales sont corrompues" } , null]
    }
};