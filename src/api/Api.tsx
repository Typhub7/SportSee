import { RetrieveData } from "./RetrieveData";
import { UserMainDataSchema } from "../model/UserMainDataModel"
import { UserActivitySchema } from "../model/UserActivityModel"
import { UserAverageSessionsSchema } from "../model/UserAverageSessionsModel"
import { UserPerformanceSchema } from "../model/UserPerformanceModel"

export const RetrieveUserData = async (userId: number) => {
    const data = await RetrieveData(`http://localhost:3000/user/${userId}`);
    const userData = UserMainDataSchema.parse(data);
    return userData;
};

export const RetrieveUserActivity = async (userId: number) => {
    const data = await RetrieveData(`http://localhost:3000/user/${userId}/activity`);
    const userData = UserActivitySchema.parse(data);
    return userData;
};

export const RetrieveUserAverageSessions = async (userId: number) => {
    const data = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`);
    const userData = UserAverageSessionsSchema.parse(data);
    return userData;
};

export const RetrieveUserPerformance = async (userId: number) => {
    const data = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    const userData = UserPerformanceSchema.parse(data);
    return userData;
};