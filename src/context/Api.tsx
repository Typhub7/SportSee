import { RetrieveData } from "./RetrieveData";

export const RetrieveUserData = async (userId: number) => {
    return RetrieveData(`http://localhost:3000/user/${userId}`);
};

export const RetrieveUserActivity = async (userId: number) => {
    return RetrieveData(`http://localhost:3000/user/${userId}/activity`);
};

export const RetrieveUserAverageSessions = async (userId: number) => {
    return RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`);
};

export const RetrieveUserPerformance = async (userId: number) => {
    return RetrieveData(`http://localhost:3000/user/${userId}/performance`);
};