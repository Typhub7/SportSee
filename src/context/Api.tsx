import { RetrieveData } from "./RetrieveData";

export const RetrieveUserData = async (userId: number) => {
    //return RetrieveData(`http://localhost:3000/user/${userId}`);
    const userData = await RetrieveData(`http://localhost:3000/user/${userId}`);
    console.log('UserData dans fetch:', userData);
    return userData.data;
};

export const RetrieveUserActivity = async (userId: number) => {
    //return RetrieveData(`http://localhost:3000/user/${userId}/activity`);
    const userActivityData = await RetrieveData(`http://localhost:3000/user/${userId}/activity`);
    console.log('userActivity: dans fetch', userActivityData);
    console.log('userActivity.data: dans fetch', userActivityData.data);
    return userActivityData.data;
};

export const RetrieveUserAverageSessions = async (userId: number) => {
    //return RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`);
    const userAverageData = await RetrieveData(`http://localhost:3000/user/${userId}/average-sessions`);
    console.log('userAverageData: dans fetch', userAverageData);
    return userAverageData.data;
};

export const RetrieveUserPerformance = async (userId: number) => {
    //return RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    const userPerformanceData = await RetrieveData(`http://localhost:3000/user/${userId}/performance`);
    console.log('userPerformanceData: dans fetch', userPerformanceData);
    return userPerformanceData.data;
};